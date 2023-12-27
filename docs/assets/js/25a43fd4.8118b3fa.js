"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[7739],{3797:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var t=n(5893),a=n(1151);const o={title:"SharedWorker RxStorage \ud83d\udc51",slug:"rx-storage-shared-worker.html"},s="SharedWorker RxStorage",i={id:"rx-storage-shared-worker",title:"SharedWorker RxStorage \ud83d\udc51",description:"The SharedWorker RxStorage uses the SharedWorker API to run the storage inside of a separate JavaScript process in browsers. Compared to a normal WebWorker, the SharedWorker is created exactly once, even when there are multiple browser tabs opened. Because of having exactly one worker, multiple performance optimizations can be done because the storage itself does not have to handle multiple opened database connections.",source:"@site/docs/rx-storage-shared-worker.md",sourceDirName:".",slug:"/rx-storage-shared-worker.html",permalink:"/rx-storage-shared-worker.html",draft:!1,unlisted:!1,editUrl:"https://github.com/pubkey/rxdb/tree/master/docs-src/docs/rx-storage-shared-worker.md",tags:[],version:"current",frontMatter:{title:"SharedWorker RxStorage \ud83d\udc51",slug:"rx-storage-shared-worker.html"},sidebar:"tutorialSidebar",previous:{title:"Worker RxStorage \ud83d\udc51",permalink:"/rx-storage-worker.html"},next:{title:"Memory Synced RxStorage \ud83d\udc51",permalink:"/rx-storage-memory-synced.html"}},d={},h=[{value:"Usage",id:"usage",level:2},{value:"On the SharedWorker process",id:"on-the-sharedworker-process",level:3},{value:"On the main process",id:"on-the-main-process",level:3},{value:"Pre-build workers",id:"pre-build-workers",level:2},{value:"Replication with SharedWorker",id:"replication-with-sharedworker",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"sharedworker-rxstorage",children:"SharedWorker RxStorage"}),"\n",(0,t.jsxs)(r.p,{children:["The SharedWorker ",(0,t.jsx)(r.a,{href:"/rx-storage.html",children:"RxStorage"})," uses the ",(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker",children:"SharedWorker API"})," to run the storage inside of a separate JavaScript process ",(0,t.jsx)(r.strong,{children:"in browsers"}),". Compared to a normal ",(0,t.jsx)(r.a,{href:"/rx-storage-worker.html",children:"WebWorker"}),", the SharedWorker is created exactly once, even when there are multiple browser tabs opened. Because of having exactly one worker, multiple performance optimizations can be done because the storage itself does not have to handle multiple opened database connections."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"NOTICE:"})," This plugin is part of ",(0,t.jsx)(r.a,{href:"/premium",children:"\ud83d\udc51 RxDB premium"}),". It is not part of the default RxDB module."]}),"\n",(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r.h3,{id:"on-the-sharedworker-process",children:"On the SharedWorker process"}),"\n",(0,t.jsxs)(r.p,{children:["In the worker process JavaScript file, you have wrap the original RxStorage with ",(0,t.jsx)(r.code,{children:"getRxStorageIndexedDB()"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"// shared-worker.ts\n\nimport { exposeWorkerRxStorage } from 'rxdb-premium/plugins/storage-worker';\nimport { \n    getRxStorageIndexedDB\n} from 'rxdb-premium/plugins/indexeddb';\n\nexposeWorkerRxStorage({\n    /**\n     * You can wrap any implementation of the RxStorage interface\n     * into a worker.\n     * Here we use the IndexedDB RxStorage.\n     */\n    storage: getRxStorageIndexedDB()\n});\n"})}),"\n",(0,t.jsx)(r.h3,{id:"on-the-main-process",children:"On the main process"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import {\n    createRxDatabase\n} from 'rxdb';\nimport { getRxStorageSharedWorker } from 'rxdb-premium/plugins/storage-worker';\nimport { getRxStorageIndexedDB } from 'rxdb/plugins/storage-indexeddb';\n\n\nconst database = await createRxDatabase({\n    name: 'mydatabase',\n    storage: getRxStorageSharedWorker(\n        {\n            /**\n             * Contains any value that can be used as parameter\n             * to the SharedWorker constructor of thread.js\n             * Most likely you want to put the path to the shared-worker.js file in here.\n             * \n             * @link https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker?retiredLocale=de\n             */\n            workerInput: 'path/to/shared-worker.js',\n            /**\n             * (Optional) options\n             * for the worker.\n             */\n            workerOptions: {\n                type: 'module',\n                credentials: 'omit'\n            }\n        }\n    )\n});\n"})}),"\n",(0,t.jsx)(r.h2,{id:"pre-build-workers",children:"Pre-build workers"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"shared-worker.js"})," must be a self containing JavaScript file that contains all dependencies in a bundle.\nTo make it easier for you, RxDB ships with pre-bundles worker files that are ready to use.\nYou can find them in the folder ",(0,t.jsx)(r.code,{children:"node_modules/rxdb-premium/dist/workers"})," after you have installed the ",(0,t.jsx)(r.a,{href:"/premium",children:"\ud83d\udc51 RxDB Premium Plugin"}),". From there you can copy them to a location where it can be served from the webserver and then use their path to create the ",(0,t.jsx)(r.code,{children:"RxDatabase"})]}),"\n",(0,t.jsxs)(r.p,{children:["Any valid ",(0,t.jsx)(r.code,{children:"worker.js"})," JavaScript file can be used both, for normal Workers and SharedWorkers."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import {\n    createRxDatabase\n} from 'rxdb';\nimport { getRxStorageSharedWorker } from 'rxdb-premium/plugins/storage-worker';\nconst database = await createRxDatabase({\n    name: 'mydatabase',\n    storage: getRxStorageSharedWorker(\n        {\n            /**\n             * Path to where the copied file from node_modules/rxdb-premium/dist/workers\n             * is reachable from the webserver.\n             */\n            workerInput: '/indexeddb.shared-worker.js'\n        }\n    )\n});\n"})}),"\n",(0,t.jsx)(r.h2,{id:"replication-with-sharedworker",children:"Replication with SharedWorker"}),"\n",(0,t.jsxs)(r.p,{children:["When a SharedWorker RxStorage is used, it is recommended to run the replication ",(0,t.jsx)(r.strong,{children:"inside"})," of the worker. You can do that by opening another ",(0,t.jsx)(r.a,{href:"/rx-database.html",children:"RxDatabase"})," inside of it and starting the replication there."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"// shared-worker.ts\n\nimport { exposeSharedWorkerRxStorage } from 'rxdb-premium/plugins/storage-worker';\nimport { \n    getRxStorageIndexedDB\n} from 'rxdb-premium/plugins/storage-indexeddb';\nimport {\n    createRxDatabase,\n    addRxPlugin\n} from 'rxdb';\nimport {\n    RxDBReplicationGraphQLPlugin\n} from 'rxdb/plugins/replication-graphql';\naddRxPlugin(RxDBReplicationGraphQLPlugin);\n\nconst baseStorage = getRxStorageIndexedDB();\n\n// first expose the RxStorage to the outside\nexposeSharedWorkerRxStorage({\n    storage: baseStorage\n});\n\n/**\n * Then create a normal RxDatabase and RxCollections\n * and start the replication.\n */\nconst database = await createRxDatabase({\n    name: 'mydatabase',\n    /**\n     * Important: INSIDE of your SharedWorker, you can\n     * be sure that there is exactly one instance running.\n     * Therefore you MUST set multiInstance=false for better performance.\n     */\n    multiInstance: false,\n    storage: baseStorage\n});\nawait db.addCollections({\n    humans: {/* ... */}\n});\nconst replicationState = db.humans.syncGraphQL({/* ... */});\n"})})]})}function c(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>s});var t=n(7294);const a={},o=t.createContext(a);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);