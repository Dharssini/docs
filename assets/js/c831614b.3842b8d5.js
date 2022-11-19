"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[68175],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(a),k=n,c=m["".concat(s,".").concat(k)]||m[k]||i[k]||l;return a?r.createElement(c,p(p({ref:t},d),{},{components:a})):r.createElement(c,p({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var u=2;u<l;u++)p[u]=a[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68092:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>i,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={title:"mysql@1.2.0",id:"mysql-docs",keywords:["adaptor","mysql","upsertMany"]},p=void 0,o={unversionedId:"packages/mysql-docs",id:"packages/mysql-docs",title:"mysql@1.2.0",description:"Adaptor",source:"@site/adaptors/packages/mysql-docs.md",sourceDirName:"packages",slug:"/packages/mysql-docs",permalink:"/adaptors/packages/mysql-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"mysql@1.2.0",id:"mysql-docs",keywords:["adaptor","mysql","upsertMany"]},sidebar:"library",previous:{title:"mssql developer readme",permalink:"/adaptors/packages/mssql-readme"},next:{title:"mysql changelog",permalink:"/adaptors/packages/mysql-changelog"}},s={},u=[{value:"Adaptor",id:"adaptor",level:2},{value:"Adaptor.execute",id:"adaptorexecute",level:3},{value:"new exports.execute(operations)",id:"new-exportsexecuteoperations",level:4},{value:"Adaptor.insert",id:"adaptorinsert",level:3},{value:"new exports.insert(table, fields)",id:"new-exportsinserttable-fields",level:4},{value:"Adaptor.upsert",id:"adaptorupsert",level:3},{value:"new exports.upsert(table, fields)",id:"new-exportsupserttable-fields",level:4},{value:"Adaptor.upsertMany",id:"adaptorupsertmany",level:3},{value:"new exports.upsertMany(table, data)",id:"new-exportsupsertmanytable-data",level:4},{value:"Adaptor.query",id:"adaptorquery",level:3},{value:"new exports.query(options)",id:"new-exportsqueryoptions",level:4},{value:"Adaptor.sqlString",id:"adaptorsqlstring",level:3},{value:"new exports.sqlString(queryString)",id:"new-exportssqlstringquerystring",level:4}],d={toc:u};function i(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{name:"module_Adaptor"}),(0,n.kt)("h2",{id:"adaptor"},"Adaptor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor"},"Adaptor"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.execute"},".execute"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#new_module_Adaptor.execute_new"},"new exports.execute(operations)")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.insert"},".insert"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#new_module_Adaptor.insert_new"},"new exports.insert(table, fields)")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.upsert"},".upsert"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#new_module_Adaptor.upsert_new"},"new exports.upsert(table, fields)")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.upsertMany"},".upsertMany"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#new_module_Adaptor.upsertMany_new"},"new exports.upsertMany(table, data)")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.query"},".query"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#new_module_Adaptor.query_new"},"new exports.query(options)")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.sqlString"},".sqlString"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#new_module_Adaptor.sqlString_new"},"new exports.sqlString(queryString)"))))))),(0,n.kt)("a",{name:"module_Adaptor.execute"}),(0,n.kt)("h3",{id:"adaptorexecute"},"Adaptor.execute"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),"  "),(0,n.kt)("a",{name:"new_module_Adaptor.execute_new"}),(0,n.kt)("h4",{id:"new-exportsexecuteoperations"},"new exports.execute(operations)"),(0,n.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,n.kt)("inlineCode",{parentName:"p"},"language-common/execute"),", and prepends initial state for mysql."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operations"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Operations")),(0,n.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,n.kt)("a",{name:"module_Adaptor.insert"}),(0,n.kt)("h3",{id:"adaptorinsert"},"Adaptor.insert"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),"  "),(0,n.kt)("a",{name:"new_module_Adaptor.insert_new"}),(0,n.kt)("h4",{id:"new-exportsinserttable-fields"},"new exports.insert(table, fields)"),(0,n.kt)("p",null,"Insert a record"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"table"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"The target table")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fields"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"A fields object")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  insert('table', fields(\n     field('name', dataValue('name'))\n  ))\n)(state)\n")),(0,n.kt)("a",{name:"module_Adaptor.upsert"}),(0,n.kt)("h3",{id:"adaptorupsert"},"Adaptor.upsert"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),"  "),(0,n.kt)("a",{name:"new_module_Adaptor.upsert_new"}),(0,n.kt)("h4",{id:"new-exportsupserttable-fields"},"new exports.upsert(table, fields)"),(0,n.kt)("p",null,"Insert or Update a record if matched"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"table"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"The target table")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fields"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"A fields object")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  upsert('table', fields(\n     field('name', dataValue('name'))\n  ))\n)(state)\n")),(0,n.kt)("a",{name:"module_Adaptor.upsertMany"}),(0,n.kt)("h3",{id:"adaptorupsertmany"},"Adaptor.upsertMany"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,n.kt)("a",{name:"new_module_Adaptor.upsertMany_new"}),(0,n.kt)("h4",{id:"new-exportsupsertmanytable-data"},"new exports.upsertMany(table, data)"),(0,n.kt)("p",null,"Insert or update multiple records using ON DUPLICATE KEY"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"table"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"The target table")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"array")),(0,n.kt)("td",{parentName:"tr",align:null},"An array of objects or a function that returns an array")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"upsertMany(\n  'users', // the DB table\n  [\n    { name: 'one', email: 'one@openfn.org' },\n    { name: 'two', email: 'two@openfn.org' },\n  ]\n)\n")),(0,n.kt)("a",{name:"module_Adaptor.query"}),(0,n.kt)("h3",{id:"adaptorquery"},"Adaptor.query"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),"  "),(0,n.kt)("a",{name:"new_module_Adaptor.query_new"}),(0,n.kt)("h4",{id:"new-exportsqueryoptions"},"new exports.query(options)"),(0,n.kt)("p",null,"Execute a SQL statement"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"Payload data for the message")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  query({ sql: 'select * from users;' })\n)(state)\n")),(0,n.kt)("a",{name:"module_Adaptor.sqlString"}),(0,n.kt)("h3",{id:"adaptorsqlstring"},"Adaptor.sqlString"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),"  "),(0,n.kt)("a",{name:"new_module_Adaptor.sqlString_new"}),(0,n.kt)("h4",{id:"new-exportssqlstringquerystring"},"new exports.sqlString(queryString)"),(0,n.kt)("p",null,"Execute a SQL statement"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"queryString"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"String")),(0,n.kt)("td",{parentName:"tr",align:null},"A query string (or function which takes state and returns a string)")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'execute(\n  sqlString(state => "select * from items;")\n)(state)\n')))}i.isMDXComponent=!0}}]);