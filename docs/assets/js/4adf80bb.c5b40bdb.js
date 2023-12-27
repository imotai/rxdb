"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[7532],{6203:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>h,toc:()=>i});var t=n(5893),a=n(1151);const s={title:"PouchDB RxStorage",slug:"rx-storage-pouchdb.html"},r="RxStorage PouchDB",h={id:"rx-storage-pouchdb",title:"PouchDB RxStorage",description:"The PouchDB RxStorage is based on the PouchDB database. It is the most battle proven RxStorage and has a big ecosystem of adapters. PouchDB does a lot of overhead to enable CouchDB replication which makes the PouchDB RxStorage one of the slowest.",source:"@site/docs/rx-storage-pouchdb.md",sourceDirName:".",slug:"/rx-storage-pouchdb.html",permalink:"/rx-storage-pouchdb.html",draft:!1,unlisted:!1,editUrl:"https://github.com/pubkey/rxdb/tree/master/docs-src/docs/rx-storage-pouchdb.md",tags:[],version:"current",frontMatter:{title:"PouchDB RxStorage",slug:"rx-storage-pouchdb.html"}},l={},i=[{value:"IMPORTANT:",id:"important",level:2},{value:"Pros",id:"pros",level:2},{value:"Cons",id:"cons",level:2},{value:"Usage",id:"usage",level:2},{value:"Polyfill the <code>global</code> variable",id:"polyfill-the-global-variable",level:2},{value:"Adapters",id:"adapters",level:2},{value:"Using the internal PouchDB Database",id:"using-the-internal-pouchdb-database",level:2}];function c(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"rxstorage-pouchdb",children:"RxStorage PouchDB"}),"\n",(0,t.jsxs)(o.p,{children:["The PouchDB RxStorage is based on the ",(0,t.jsx)(o.a,{href:"https://github.com/pouchdb/pouchdb",children:"PouchDB"})," database. It is the most battle proven RxStorage and has a big ecosystem of adapters. PouchDB does a lot of overhead to enable CouchDB replication which makes the PouchDB RxStorage one of the slowest."]}),"\n",(0,t.jsx)(o.hr,{}),"\n",(0,t.jsx)(o.h2,{id:"important",children:"IMPORTANT:"}),"\n",(0,t.jsxs)(o.p,{children:["The PouchDB RxStorage ",(0,t.jsx)(o.a,{href:"https://rxdb.info/questions-answers.html#why-is-the-pouchdb-rxstorage-deprecated",children:"is removed from RxDB"})," and can no longer be used in new projects. You should switch to a different ",(0,t.jsx)(o.a,{href:"/rx-storage.html",children:"RxStorage"}),"."]}),"\n",(0,t.jsx)(o.hr,{}),"\n",(0,t.jsx)(o.h2,{id:"pros",children:"Pros"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Most battle proven RxStorage"}),"\n",(0,t.jsx)(o.li,{children:"Supports replication with a CouchDB endpoint"}),"\n",(0,t.jsxs)(o.li,{children:["Support storing ",(0,t.jsx)(o.a,{href:"/rx-attachment.html",children:"attachments"})]}),"\n",(0,t.jsx)(o.li,{children:"Big ecosystem of adapters"}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"cons",children:"Cons"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Big bundle size"}),"\n",(0,t.jsx)(o.li,{children:"Slow performance because of revision handling overhead"}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",children:"import { createRxDatabase } from 'rxdb';\nimport { getRxStoragePouch, addPouchPlugin } from 'rxdb/plugins/pouchdb';\n\naddPouchPlugin(require('pouchdb-adapter-idb'));\n\nconst db = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStoragePouch(\n        'idb',\n        {\n            /**\n             * other pouchdb specific options\n             * @link https://pouchdb.com/api.html#create_database\n             */\n        }\n    )\n});\n"})}),"\n",(0,t.jsxs)(o.h2,{id:"polyfill-the-global-variable",children:["Polyfill the ",(0,t.jsx)(o.code,{children:"global"})," variable"]}),"\n",(0,t.jsxs)(o.p,{children:["When you use RxDB with ",(0,t.jsx)(o.strong,{children:"angular"})," or other ",(0,t.jsx)(o.strong,{children:"webpack"})," based frameworks, you might get the error:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-html",children:'<span style="color: red;">Uncaught ReferenceError: global is not defined</span>\n'})}),"\n",(0,t.jsxs)(o.p,{children:["This is because pouchdb assumes a nodejs-specific ",(0,t.jsx)(o.code,{children:"global"})," variable that is not added to browser runtimes by some bundlers.\nYou have to add them by your own, like we do ",(0,t.jsx)(o.a,{href:"https://github.com/pubkey/rxdb/blob/master/examples/angular/src/polyfills.ts",children:"here"}),"."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",children:"(window as any).global = window;\n(window as any).process = {\n    env: { DEBUG: undefined },\n};\n"})}),"\n",(0,t.jsx)(o.h2,{id:"adapters",children:"Adapters"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/adapters.html",children:"PouchDB has many adapters for all JavaScript runtimes"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"using-the-internal-pouchdb-database",children:"Using the internal PouchDB Database"}),"\n",(0,t.jsx)(o.p,{children:"For custom operations, you can access the internal PouchDB database.\nThis is dangerous because you might do changes that are not compatible with RxDB.\nOnly use this when there is no way to achieve your goals via the RxDB API."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-javascript",children:"import {\n    getPouchDBOfRxCollection\n} from 'rxdb/plugins/pouchdb';\n\nconst pouch = getPouchDBOfRxCollection(myRxCollection);\n"})})]})}function d(e={}){const{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>h,a:()=>r});var t=n(7294);const a={},s=t.createContext(a);function r(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function h(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);