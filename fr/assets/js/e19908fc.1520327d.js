"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[6286],{3905:(t,a,e)=>{e.d(a,{Zo:()=>i,kt:()=>m});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function p(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function k(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=n.createContext({}),o=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):p(p({},a),t)),e},i=function(t){var a=o(t.components);return n.createElement(s.Provider,{value:a},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,i=k(t,["components","mdxType","originalType","parentName"]),u=o(e),d=r,m=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return e?n.createElement(m,p(p({ref:a},i),{},{components:e})):n.createElement(m,p({ref:a},i))}));function m(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,p=new Array(l);p[0]=d;var k={};for(var s in a)hasOwnProperty.call(a,s)&&(k[s]=a[s]);k.originalType=t,k[u]="string"==typeof t?t:r,p[1]=k;for(var o=2;o<l;o++)p[o]=e[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,e)}d.displayName="MDXCreateElement"},98857:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>k,toc:()=>o});var n=e(87462),r=(e(67294),e(3905));const l={title:"asana@2.1.6",id:"asana-docs",keywords:["adaptor","asana","createTask","getTask","getTasks","updateTask","upsertTask"]},p=void 0,k={unversionedId:"packages/asana-docs",id:"packages/asana-docs",title:"asana@2.1.6",description:"Functions",source:"@site/adaptors/packages/asana-docs.md",sourceDirName:"packages",slug:"/packages/asana-docs",permalink:"/fr/adaptors/packages/asana-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"asana@2.1.6",id:"asana-docs",keywords:["adaptor","asana","createTask","getTask","getTasks","updateTask","upsertTask"]},sidebar:"adaptors",previous:{title:"Library Examples",permalink:"/fr/adaptors/library"},next:{title:"Config for asana",permalink:"/fr/adaptors/packages/asana-configuration-schema"}},s={},o=[{value:"Functions",id:"functions",level:2},{value:"createTask",id:"createtask",level:2},{value:"getTask",id:"gettask",level:2},{value:"getTasks",id:"gettasks",level:2},{value:"updateTask",id:"updatetask",level:2},{value:"upsertTask",id:"upserttask",level:2}],i={toc:o},u="wrapper";function c(t){let{components:a,...e}=t;return(0,r.kt)(u,(0,n.Z)({},i,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#createTask"},"createTask(params, callback)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#getTask"},"getTask(task_gid, params, callback)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#getTasks"},"getTasks(project_gid, params, callback)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#updateTask"},"updateTask(task_gid, params, callback)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#upsertTask"},"upsertTask(project_gid, params, callback)"))),(0,r.kt)("h2",{id:"createtask"},"createTask"),(0,r.kt)("p",null,"createTask(params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nCreate a task."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Body parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'createTask(\n {\n   name: \'test\', "approval_status": "pending", "assignee": "12345"\n }\n)\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"gettask"},"getTask"),(0,r.kt)("p",null,"getTask(task_gid, params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nGet a single task of a given project."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"task_gid"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Globally unique identifier for the task")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Query params to include.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'getTask("task_gid",\n {\n   opt_fields: "name,notes,assignee"\n })\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"gettasks"},"getTasks"),(0,r.kt)("p",null,"getTasks(project_gid, params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nGet the list of tasks for a given project."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project_gid"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Globally unique identifier for the project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Query params to include.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'getTasks("project_gid",\n {\n   opt_fields: "name,notes,assignee"\n })\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"updatetask"},"updateTask"),(0,r.kt)("p",null,"updateTask(task_gid, params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nUpdate a specific task."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"task_gid"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Globally unique identifier for the task")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Body parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'updateTask("task_gid",\n {\n   name: \'test\', "approval_status": "pending", "assignee": "12345"\n }\n)\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"upserttask"},"upsertTask"),(0,r.kt)("p",null,"upsertTask(project_gid, params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nUpdate or create a task."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project_gid"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Globally unique identifier for the project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"an object with an externalId and some task data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'upsertTask(\n "1201382240880",\n {\n   "externalId": "name",\n   "data": {\n     name: \'test\', "approval_status": "pending", "assignee": "12345"\n   }\n\n }\n)\n')),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);