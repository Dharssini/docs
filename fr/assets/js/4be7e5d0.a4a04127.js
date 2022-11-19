"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[44988],{3905:(t,a,e)=>{e.d(a,{Zo:()=>i,kt:()=>k});var r=e(67294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function p(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)e=l[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)e=l[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var d=r.createContext({}),c=function(t){var a=r.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},i=function(t){var a=c(t.components);return r.createElement(d.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,i=p(t,["components","mdxType","originalType","parentName"]),m=c(e),k=n,s=m["".concat(d,".").concat(k)]||m[k]||u[k]||l;return e?r.createElement(s,o(o({ref:a},i),{},{components:e})):r.createElement(s,o({ref:a},i))}));function k(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var l=e.length,o=new Array(l);o[0]=m;var p={};for(var d in a)hasOwnProperty.call(a,d)&&(p[d]=a[d]);p.originalType=t,p.mdxType="string"==typeof t?t:n,o[1]=p;for(var c=2;c<l;c++)o[c]=e[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},98737:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=e(87462),n=(e(67294),e(3905));const l={title:"rapidpro@0.4.7",id:"rapidpro-docs",keywords:["adaptor","rapidpro","addContact","upsertContact","startFlow","sendBroadcast"]},o=void 0,p={unversionedId:"packages/rapidpro-docs",id:"packages/rapidpro-docs",title:"rapidpro@0.4.7",description:"Adaptor",source:"@site/adaptors/packages/rapidpro-docs.md",sourceDirName:"packages",slug:"/packages/rapidpro-docs",permalink:"/fr/adaptors/packages/rapidpro-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"rapidpro@0.4.7",id:"rapidpro-docs",keywords:["adaptor","rapidpro","addContact","upsertContact","startFlow","sendBroadcast"]},sidebar:"library",previous:{title:"progres developer readme",permalink:"/fr/adaptors/packages/progres-readme"},next:{title:"rapidpro changelog",permalink:"/fr/adaptors/packages/rapidpro-changelog"}},d={},c=[{value:"Adaptor",id:"adaptor",level:2},{value:"Adaptor.execute(operations) \u21d2 <code>Operation</code>",id:"adaptorexecuteoperations--operation",level:3},{value:"Adaptor.addContact(params, callback) \u21d2 <code>Operation</code>",id:"adaptoraddcontactparams-callback--operation",level:3},{value:"Adaptor.upsertContact(params, callback) \u21d2 <code>Operation</code>",id:"adaptorupsertcontactparams-callback--operation",level:3},{value:"Adaptor.startFlow(params, callback) \u21d2 <code>Operation</code>",id:"adaptorstartflowparams-callback--operation",level:3},{value:"Adaptor.sendBroadcast(params, callback) \u21d2 <code>Operation</code>",id:"adaptorsendbroadcastparams-callback--operation",level:3}],i={toc:c};function u(t){let{components:a,...e}=t;return(0,n.kt)("wrapper",(0,r.Z)({},i,e,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("a",{name:"module_Adaptor"}),(0,n.kt)("h2",{id:"adaptor"},"Adaptor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor"},"Adaptor"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.execute"},".execute(operations)")," \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.addContact"},".addContact(params, callback)")," \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.upsertContact"},".upsertContact(params, callback)")," \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.startFlow"},".startFlow(params, callback)")," \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.sendBroadcast"},".sendBroadcast(params, callback)")," \u21d2 ",(0,n.kt)("code",null,"Operation"))))),(0,n.kt)("a",{name:"module_Adaptor.execute"}),(0,n.kt)("h3",{id:"adaptorexecuteoperations--operation"},"Adaptor.execute(operations) \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,n.kt)("inlineCode",{parentName:"p"},"language-common/execute"),", and prepends initial state."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),"  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operations"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Operations")),(0,n.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,n.kt)("a",{name:"module_Adaptor.addContact"}),(0,n.kt)("h3",{id:"adaptoraddcontactparams-callback--operation"},"Adaptor.addContact(params, callback) \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("p",null,"Adds a new contact to RapidPro"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"data to create the new resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'addContact({\n  name: "Mamadou",\n  language: "ENG",\n  urns: ["tel:+250788123123"]\n});\n')),(0,n.kt)("a",{name:"module_Adaptor.upsertContact"}),(0,n.kt)("h3",{id:"adaptorupsertcontactparams-callback--operation"},"Adaptor.upsertContact(params, callback) \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("p",null,"Upserts a contact to RapidPro by URN"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"data to upsert a contact")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'upsertContact({\n  name: "Mamadou",\n  language: "ENG",\n  urns: ["tel:+250788123123"]\n});\n')),(0,n.kt)("a",{name:"module_Adaptor.startFlow"}),(0,n.kt)("h3",{id:"adaptorstartflowparams-callback--operation"},"Adaptor.startFlow(params, callback) \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("p",null,"Start a RapidPro flow for a number of contacts"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"data to create the new resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'startFlow({\n  flow: "f5901b62-ba76-4003-9c62-72fdacc1b7b7",\n  restart_participants: false,\n  contacts: ["a052b00c-15b3-48e6-9771-edbaa277a353"]\n});\n')),(0,n.kt)("a",{name:"module_Adaptor.sendBroadcast"}),(0,n.kt)("h3",{id:"adaptorsendbroadcastparams-callback--operation"},"Adaptor.sendBroadcast(params, callback) \u21d2 ",(0,n.kt)("code",null,"Operation")),(0,n.kt)("p",null,"Sends a message to a list of contacts and/or URNs"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"data to create the new resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"callback"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"function")),(0,n.kt)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'sendBroadcast({\n  text: "Hello world",\n  urns: ["twitter:sirmixalot"],\n  contacts: ["a052b00c-15b3-48e6-9771-edbaa277a353"]\n});\n')))}u.isMDXComponent=!0}}]);