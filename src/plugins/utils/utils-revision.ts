import type {
    RxDocumentData
} from '../../types';

export function parseRevision(revision: string): { height: number; hash: string; } {
    const split = revision.split('-');
    return {
        height: parseInt(split[0], 10),
        hash: split[1]
    };
}

export function getHeightOfRevision(revision: string): number {
    return parseRevision(revision).height;
}

/**
 * Creates the next write revision for a given document.
 */
export function createRevision<RxDocType>(
    databaseInstanceToken: string,
    previousDocData?: RxDocumentData<RxDocType>
): string {
    const previousRevision = previousDocData ? previousDocData._rev : null;
    const previousRevisionHeigth = previousRevision ? parseRevision(previousRevision).height : 0;
    const newRevisionHeight = previousRevisionHeigth + 1;
    return newRevisionHeight + '-' + databaseInstanceToken;
}

