"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[3401],{4371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(5893),i=n(1151);const a={title:"SQLite RxStorage \ud83d\udc51",slug:"rx-storage-sqlite.html"},r="SQLite RxStorage",o={id:"rx-storage-sqlite",title:"SQLite RxStorage \ud83d\udc51",description:"This RxStorage is based on SQLite and is made to work with Node.js, Electron, React Native and Capacitor.",source:"@site/docs/rx-storage-sqlite.md",sourceDirName:".",slug:"/rx-storage-sqlite.html",permalink:"/rx-storage-sqlite.html",draft:!1,unlisted:!1,editUrl:"https://github.com/pubkey/rxdb/tree/master/docs-src/docs/rx-storage-sqlite.md",tags:[],version:"current",frontMatter:{title:"SQLite RxStorage \ud83d\udc51",slug:"rx-storage-sqlite.html"},sidebar:"tutorialSidebar",previous:{title:"OPFS RxStorage \ud83d\udc51",permalink:"/rx-storage-opfs.html"},next:{title:"Node.js Filesystem RxStorage \ud83d\udc51",permalink:"/rx-storage-filesystem-node.html"}},c={},l=[{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Usage with <strong>Node.js SQLite</strong>",id:"usage-with-nodejs-sqlite",level:2},{value:"Usage with <strong>React Native</strong>",id:"usage-with-react-native",level:2},{value:"Usage with <strong>SQLite Capacitor</strong>",id:"usage-with-sqlite-capacitor",level:2},{value:"Database Connection",id:"database-connection",level:2},{value:"Known Problems",id:"known-problems",level:2},{value:"Related",id:"related",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"sqlite-rxstorage",children:"SQLite RxStorage"}),"\n",(0,s.jsxs)(t.p,{children:["This ",(0,s.jsx)(t.a,{href:"/rx-storage.html",children:"RxStorage"})," is based on ",(0,s.jsx)(t.a,{href:"https://www.sqlite.org/index.html",children:"SQLite"})," and is made to work with ",(0,s.jsx)(t.strong,{children:"Node.js"}),", ",(0,s.jsx)(t.strong,{children:"Electron"}),", ",(0,s.jsx)(t.strong,{children:"React Native"})," and ",(0,s.jsx)(t.strong,{children:"Capacitor"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"pros",children:"Pros"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Fast"}),"\n",(0,s.jsx)(t.li,{children:"Small build size"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"cons",children:"Cons"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["It is part of ",(0,s.jsx)(t.a,{href:"/premium",children:"\ud83d\udc51 RxDB Premium"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(t.p,{children:["The SQlite RxStorage works on SQLite libraries that use SQLite in version ",(0,s.jsx)(t.code,{children:"3.38.0"})," or higher, because it uses the ",(0,s.jsx)(t.a,{href:"https://www.sqlite.org/json1.html",children:"SQLite JSON"})," methods like ",(0,s.jsx)(t.code,{children:"JSON_EXTRACT"}),". If you get an error like ",(0,s.jsx)(t.code,{children:"[Error: no such function: JSON_EXTRACT (code 1 SQLITE_ERROR[1])"}),", you might have a too old version of SQLite."]}),"\n",(0,s.jsxs)(t.h2,{id:"usage-with-nodejs-sqlite",children:["Usage with ",(0,s.jsx)(t.strong,{children:"Node.js SQLite"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import {\n    createRxDatabase\n} from 'rxdb';\nimport {\n    getRxStorageSQLite,\n    getSQLiteBasicsNode\n} from 'rxdb-premium/plugins/storage-sqlite';\n\n/**\n * In Node.js, we get use the SQLite database\n * from the 'sqlite' npm module.\n * @link https://www.npmjs.com/package/sqlite3\n */\nimport sqlite3 from 'sqlite3';\n\nconst myRxDatabase = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageSQLite({\n        /**\n         * Different runtimes have different interfaces to SQLite.\n         * For example in node.js we have a callback API,\n         * while in capacitor sqlite we have Promises.\n         * So we need a helper object that is capable of doing the basic\n         * sqlite operations.\n         */\n        sqliteBasics: getSQLiteBasicsNode(sqlite3)\n    })\n});\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"usage-with-react-native",children:["Usage with ",(0,s.jsx)(t.strong,{children:"React Native"})]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Install the ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/react-native-quick-sqlite",children:"react-native-quick-sqlite npm module"})]}),"\n",(0,s.jsxs)(t.li,{children:["Import ",(0,s.jsx)(t.code,{children:"getSQLiteBasicsQuickSQLite"})," from the SQLite plugin and use it to create a ",(0,s.jsx)(t.a,{href:"/rx-database.html",children:"RxDatabase"}),":"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import {\n    createRxDatabase\n} from 'rxdb';\nimport {\n    getRxStorageSQLite,\n    getSQLiteBasicsQuickSQLite\n} from 'rxdb-premium/plugins/storage-sqlite';\nimport { open } from 'react-native-quick-sqlite';\n\n// create database\nconst myRxDatabase = await createRxDatabase({\n    name: 'exampledb',\n    multiInstance: false, // <- Set multiInstance to false when using RxDB in React Native\n    storage: getRxStorageSQLite({\n        sqliteBasics: getSQLiteBasicsQuickSQLite(open)\n    })\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If ",(0,s.jsx)(t.code,{children:"react-native-quick-sqlite"})," does not work for you, as alternative you can use the ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/react-native-sqlite-2",children:"react-native-sqlite-2"})," library instead:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import {\n    getRxStorageSQLite,\n    getSQLiteBasicsWebSQL\n} from 'rxdb-premium/plugins/storage-sqlite';\nimport SQLite from 'react-native-sqlite-2';\nconst storage = getRxStorageSQLite({\n  sqliteBasics: getSQLiteBasicsWebSQL(SQLite.openDatabase)\n});\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"usage-with-sqlite-capacitor",children:["Usage with ",(0,s.jsx)(t.strong,{children:"SQLite Capacitor"})]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Install the ",(0,s.jsx)(t.a,{href:"https://github.com/capacitor-community/sqlite",children:"sqlite capacitor npm module"})]}),"\n",(0,s.jsx)(t.li,{children:"Add the iOS database location to your capacitor config"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "plugins": {\n        "CapacitorSQLite": {\n            "iosDatabaseLocation": "Library/CapacitorDatabase"\n        }\n    }\n}\n'})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["Use the function ",(0,s.jsx)(t.code,{children:"getSQLiteBasicsCapacitor"})," to get the capacitor sqlite wrapper."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import {\n    createRxDatabase\n} from 'rxdb';\nimport {\n    getRxStorageSQLite,\n    getSQLiteBasicsCapacitor\n} from 'rxdb-premium/plugins/storage-sqlite';\n\n/**\n * Import SQLite from the capacitor plugin.\n */\nimport {\n    CapacitorSQLite,\n    SQLiteConnection\n} from '@capacitor-community/sqlite';\nimport { Capacitor } from '@capacitor/core';\n\nconst sqlite = new SQLiteConnection(CapacitorSQLite);\n\nconst myRxDatabase = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageSQLite({\n        /**\n         * Different runtimes have different interfaces to SQLite.\n         * For example in node.js we have a callback API,\n         * while in capacitor sqlite we have Promises.\n         * So we need a helper object that is capable of doing the basic\n         * sqlite operations.\n         */\n        sqliteBasics: getSQLiteBasicsCapacitor(sqlite, Capacitor)\n    })\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"database-connection",children:"Database Connection"}),"\n",(0,s.jsxs)(t.p,{children:["If you need to access the database connection for any reason you can use ",(0,s.jsx)(t.code,{children:"getDatabaseConnection"})," to do so:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { getDatabaseConnection } from 'rxdb-premium/plugins/storage-sqlite'\n"})}),"\n",(0,s.jsx)(t.p,{children:"It has the following signiture:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"getDatabaseConnection(\n    sqliteBasics: SQLiteBasics<any>,\n    databaseName: string\n): Promise<SQLiteDatabaseClass>;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"known-problems",children:"Known Problems"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Some JavaScript runtimes do not contain a ",(0,s.jsx)(t.code,{children:"Buffer"})," API which is used by SQLite to store binary attachments data as ",(0,s.jsx)(t.code,{children:"BLOB"}),". You can set ",(0,s.jsx)(t.code,{children:"storeAttachmentsAsBase64String: true"})," if you want to store the attachments data as base64 string instead. This increases the database size but makes it work even without having a ",(0,s.jsx)(t.code,{children:"Buffer"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/expo-sqlite",children:"expo-sqlite"})," cannot be used on android (but it works on iOS) because it uses an ",(0,s.jsx)(t.a,{href:"https://expo.canny.io/feature-requests/p/expo-sqlite-ship-newer-sqlite3-version-on-android",children:"outdated SQLite version"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["To debug all SQL operations, you can pass a log function to ",(0,s.jsx)(t.code,{children:"getRxStorageSQLite()"})," like this:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const storage = getRxStorageSQLite({\n    sqliteBasics: getSQLiteBasicsCapacitor(sqlite, Capacitor),\n    // pass log function\n    log: console.log.bind(console)\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related",children:"Related"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/react-native-database.html",children:"React Native Databases"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(7294);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);