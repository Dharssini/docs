"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[11483],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(a),s=r,c=u["".concat(i,".").concat(s)]||u[s]||k[s]||l;return a?n.createElement(c,p(p({ref:t},m),{},{components:a})):n.createElement(c,p({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:r,p[1]=o;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},37681:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"openmrs@0.10.0",id:"openmrs-docs",keywords:["adaptor","openmrs"]},p=void 0,o={unversionedId:"packages/openmrs-docs",id:"packages/openmrs-docs",title:"openmrs@0.10.0",description:"Adaptor",source:"@site/adaptors/packages/openmrs-docs.md",sourceDirName:"packages",slug:"/packages/openmrs-docs",permalink:"/fr/adaptors/packages/openmrs-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"openmrs@0.10.0",id:"openmrs-docs",keywords:["adaptor","openmrs"]},sidebar:"adaptors",previous:{title:"openfn developer readme",permalink:"/fr/adaptors/packages/openfn-readme"},next:{title:"Create Person in OpenMRS",permalink:"/fr/adaptors/library/jobs/auto/Create-Person-in-OpenMRS-2016-02-12"}},i={},d=[{value:"Adaptor",id:"adaptor",level:2},{value:"Adaptor.getPatient",id:"adaptorgetpatient",level:3},{value:"new exports.getPatient(params)",id:"new-exportsgetpatientparams",level:4},{value:"Adaptor.getPeople",id:"adaptorgetpeople",level:3},{value:"new exports.getPeople(criteria, options)",id:"new-exportsgetpeoplecriteria-options",level:4},{value:"Adaptor.createEncounter",id:"adaptorcreateencounter",level:3},{value:"new exports.createEncounter(params)",id:"new-exportscreateencounterparams",level:4},{value:"Adaptor.req",id:"adaptorreq",level:3},{value:"new exports.req(params, callback)",id:"new-exportsreqparams-callback",level:4},{value:"Adaptor.execute(operations) \u21d2 <code>Operation</code>",id:"adaptorexecuteoperations--operation",level:3},{value:"Adaptor.getPatients(criteria, options) \u21d2 <code>Operation</code>",id:"adaptorgetpatientscriteria-options--operation",level:3},{value:"Adaptor~login(state) \u21d2 <code>State</code>",id:"adaptorloginstate--state",level:3},{value:"Adaptor~cleanupState(state) \u21d2 <code>State</code>",id:"adaptorcleanupstatestate--state",level:3}],m={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"module_Adaptor"}),(0,r.kt)("h2",{id:"adaptor"},"Adaptor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor"},"Adaptor"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"static"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor.getPatient"},".getPatient"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_module_Adaptor.getPatient_new"},"new exports.getPatient(params)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor.getPeople"},".getPeople"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_module_Adaptor.getPeople_new"},"new exports.getPeople(criteria, options)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor.createEncounter"},".createEncounter"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_module_Adaptor.createEncounter_new"},"new exports.createEncounter(params)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor.req"},".req"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_module_Adaptor.req_new"},"new exports.req(params, callback)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor.execute"},".execute(operations)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor.getPatients"},".getPatients(criteria, options)")," \u21d2 ",(0,r.kt)("code",null,"Operation")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"inner"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor..login"},"~login(state)")," \u21d2 ",(0,r.kt)("code",null,"State")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#module_Adaptor..cleanupState"},"~cleanupState(state)")," \u21d2 ",(0,r.kt)("code",null,"State"))))))),(0,r.kt)("a",{name:"module_Adaptor.getPatient"}),(0,r.kt)("h3",{id:"adaptorgetpatient"},"Adaptor.getPatient"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,r.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,r.kt)("code",null,"Adaptor")),"  "),(0,r.kt)("a",{name:"new_module_Adaptor.getPatient_new"}),(0,r.kt)("h4",{id:"new-exportsgetpatientparams"},"new exports.getPatient(params)"),(0,r.kt)("p",null,"Gets patient matching a uuid"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"object with uuid for the patient")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  getPatient({ uuid: 123 })\n)(state)\n")),(0,r.kt)("a",{name:"module_Adaptor.getPeople"}),(0,r.kt)("h3",{id:"adaptorgetpeople"},"Adaptor.getPeople"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,r.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,r.kt)("code",null,"Adaptor")),"  "),(0,r.kt)("a",{name:"new_module_Adaptor.getPeople_new"}),(0,r.kt)("h4",{id:"new-exportsgetpeoplecriteria-options"},"new exports.getPeople(criteria, options)"),(0,r.kt)("p",null,"Gets people matching criteria"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"criteria"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Criteria object for the people")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Options object for the handling of responses")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  getPeople(\n  { identifier: '007' },\n  { exactlyOne: true }\n)(state)\n")),(0,r.kt)("a",{name:"module_Adaptor.createEncounter"}),(0,r.kt)("h3",{id:"adaptorcreateencounter"},"Adaptor.createEncounter"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,r.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,r.kt)("code",null,"Adaptor")),"  "),(0,r.kt)("a",{name:"new_module_Adaptor.createEncounter_new"}),(0,r.kt)("h4",{id:"new-exportscreateencounterparams"},"new exports.createEncounter(params)"),(0,r.kt)("p",null,"Creates an encounter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"parameters of the encounter")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  createEncounter(params)(state)\n")),(0,r.kt)("a",{name:"module_Adaptor.req"}),(0,r.kt)("h3",{id:"adaptorreq"},"Adaptor.req"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,r.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,r.kt)("code",null,"Adaptor")),"  "),(0,r.kt)("a",{name:"new_module_Adaptor.req_new"}),(0,r.kt)("h4",{id:"new-exportsreqparams-callback"},"new exports.req(params, callback)"),(0,r.kt)("p",null,"Make a request to any OpenMRS endpoint and execute a callback"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"parameters for the request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"a callback to execute on the next state")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"req({\n  method: 'GET'\n  url: 'encounterType'\n})(state)\n")),(0,r.kt)("a",{name:"module_Adaptor.execute"}),(0,r.kt)("h3",{id:"adaptorexecuteoperations--operation"},"Adaptor.execute(operations) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,r.kt)("inlineCode",{parentName:"p"},"language-common/execute"),", and prepends initial state for OpenMRS."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,r.kt)("code",null,"Adaptor")),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operations"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Array")),(0,r.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,r.kt)("a",{name:"module_Adaptor.getPatients"}),(0,r.kt)("h3",{id:"adaptorgetpatientscriteria-options--operation"},"Adaptor.getPatients(criteria, options) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Gets patients matching criteria"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,r.kt)("code",null,"Adaptor")),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"criteria"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Criteria object for the patient")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Options")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  getPatients(criteria)\n)(state)\n")),(0,r.kt)("a",{name:"module_Adaptor..login"}),(0,r.kt)("h3",{id:"adaptorloginstate--state"},"Adaptor~login(state) \u21d2 ",(0,r.kt)("code",null,"State")),(0,r.kt)("p",null,"Logs in to OpenMRS, gets a session token."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": inner method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,r.kt)("code",null,"Adaptor")),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"State")),(0,r.kt)("td",{parentName:"tr",align:null},"Runtime state.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"login(state)\n")),(0,r.kt)("a",{name:"module_Adaptor..cleanupState"}),(0,r.kt)("h3",{id:"adaptorcleanupstatestate--state"},"Adaptor~cleanupState(state) \u21d2 ",(0,r.kt)("code",null,"State")),(0,r.kt)("p",null,"Removes unserializable or confidential keys from the state."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": inner method of ",(0,r.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,r.kt)("code",null,"Adaptor")),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"State"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"cleanupState(state)\n")))}u.isMDXComponent=!0}}]);