import type {
    RxChangeEvent,
    RxDocument,
    RxDocumentData
} from './types';
import {
    getFromMapOrFill,
    getFromMapOrThrow,
    parseRevision,
    requestIdlePromise
} from './util';
import {
    overwritable
} from './overwritable';
import { getDocumentDataOfRxChangeEvent } from './rx-change-event';
import { Observable } from 'rxjs';

declare type CacheItem<RxDocType, OrmMethods> = {
    /**
     * Store the different document states of time
     * based on their revision height.
     * We store WeakRefs so that we can later clean up
     * document states that are no longer needed.
     */
    documentByRevisionHeight: Map<number, WeakRef<RxDocument<RxDocType, OrmMethods>>>;

    /**
     * Store the latest known document state.
     * As long as any state of the document is in the cache,
     * we observe the changestream and update the latestDoc accordingly.
     * This makes it easier to optimize performance on other parts
     * because for each known document we can always get the current state
     * in the storage.
     * Also it makes it possible to call RxDocument.latest() in a non-async way
     * to retrieve the latest document state or to observe$ some property.
     *
     * To not prevent the whole cacheItem from being garbage collected,
     * we store only the document data here, but not the RxDocument.
     */
    latestDoc: RxDocumentData<RxDocType>;
};


/**
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry
 */
declare type FinalizationRegistryValue = {
    docId: string;
    revisionHeight: number;
};

/**
 * The DocumentCache stores RxDocument objects
 * by their primary key and revision.
 * This is useful on client side applications where
 * it is not known how much memory can be used, so
 * we de-duplicate RxDocument states to save memory.
 * To not fill up the memory with old document states, the DocumentCache
 * only contains weak references to the RxDocuments themself.
 * @link https://caniuse.com/?search=weakref
 */
export class DocumentCache<RxDocType, OrmMethods> {
    public cacheItemByDocId = new Map<string, CacheItem<RxDocType, OrmMethods>>();

    /**
     * Some JavaScript runtimes like QuickJS,
     * so not have a FinalizationRegistry, but they have a WeakRef.
     * Therefore we need a workaround which cleans up the references
     * without using the registry.
     */
    private registry?: FinalizationRegistry<FinalizationRegistryValue> = typeof FinalizationRegistry === 'function' ?
        new FinalizationRegistry<FinalizationRegistryValue>(docMeta => {
            const docId = docMeta.docId;
            const cacheItem = this.cacheItemByDocId.get(docId);
            if (cacheItem) {
                cacheItem.documentByRevisionHeight.delete(docMeta.revisionHeight);
                if (cacheItem.documentByRevisionHeight.size === 0) {
                    /**
                     * No state of the document is cached anymore,
                     * so we can clean up.
                     */
                    this.cacheItemByDocId.delete(docId);
                }
            }
        }) :
        undefined;
    private cleanupQueueAwaiting: boolean = false;

    constructor(
        public readonly primaryPath: string,
        public readonly changes$: Observable<RxChangeEvent<RxDocType>>,
        /**
         * A method that can create a RxDocument by the given document data.
         */
        public documentCreator: (docData: RxDocumentData<RxDocType>) => RxDocument<RxDocType, OrmMethods>
    ) {
        changes$.subscribe(changeEvent => {
            const docId = changeEvent.documentId;
            const cacheItem = this.cacheItemByDocId.get(docId);
            if (cacheItem) {
                const documentData = getDocumentDataOfRxChangeEvent(changeEvent);
                cacheItem.latestDoc = documentData;
            }
        });
    }

    /**
     * Get the RxDocument from the cache
     * and create a new one if not exits before.
     */
    public getCachedRxDocument(docData: RxDocumentData<RxDocType>): RxDocument<RxDocType, OrmMethods> {
        const docId: string = (docData as any)[this.primaryPath];
        const revisionHeight = parseRevision(docData._rev).height;
        const cacheItem = getFromMapOrFill<string, CacheItem<RxDocType, OrmMethods>>(
            this.cacheItemByDocId,
            docId,
            () => getNewCacheItem<RxDocType, OrmMethods>(docData)
        );

        const cachedRxDocumentWeakRef: WeakRef<RxDocument<RxDocType, OrmMethods>> | undefined = cacheItem.documentByRevisionHeight.get(revisionHeight);
        let cachedRxDocument = cachedRxDocumentWeakRef ? cachedRxDocumentWeakRef.deref() : undefined;
        if (!cachedRxDocument) {
            docData = overwritable.deepFreezeWhenDevMode(docData) as any;
            cachedRxDocument = this.documentCreator(docData) as RxDocument<RxDocType, OrmMethods>;
            cacheItem.documentByRevisionHeight.set(revisionHeight, new WeakRef(cachedRxDocument));

            if (this.registry) {
                this.registry.register(cachedRxDocument, {
                    docId,
                    revisionHeight
                });
            } else if (!this.cleanupQueueAwaiting) {
                this.cleanupQueueAwaiting = true;
                requestIdlePromise().then(() => {
                    this.cleanupQueueAwaiting = false;
                    runCleanupWorkaround(this);
                });
            }
        }
        return cachedRxDocument;
    }

    /**
     * Throws if not exists
     */
    public getLatestDocumentData(docId: string): RxDocumentData<RxDocType> {
        const cacheItem = getFromMapOrThrow(this.cacheItemByDocId, docId);
        return cacheItem.latestDoc;
    }

    public getLatestDocumentDataIfExists(docId: string): RxDocumentData<RxDocType> | undefined {
        const cacheItem = this.cacheItemByDocId.get(docId);
        if (cacheItem) {
            return cacheItem.latestDoc;
        }
    }
}


function getNewCacheItem<RxDocType, OrmMethods>(docData: RxDocumentData<RxDocType>): CacheItem<RxDocType, OrmMethods> {
    return {
        documentByRevisionHeight: new Map(),
        latestDoc: docData
    };
}


/**
 * Used when the JavaScript runtime does not
 * support the FinalizationRegistry API.
 */
function runCleanupWorkaround<RxDocType>(docCache: DocumentCache<RxDocType, any>) {
    Array.from(docCache.cacheItemByDocId.entries()).forEach(([docId, cacheItem]) => {
        Array.from(cacheItem.documentByRevisionHeight.entries()).forEach(([revH, docRef]) => {
            if (!docRef.deref()) {
                cacheItem.documentByRevisionHeight.delete(revH);
            }
        });
        if (cacheItem.documentByRevisionHeight.size === 0) {
            docCache.cacheItemByDocId.delete(docId);
        }
    });
}
