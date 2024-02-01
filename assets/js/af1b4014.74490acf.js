"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[92400],{95788:(e,t,a)=>{a.d(t,{Iu:()=>o,yg:()=>s});var n=a(11504);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var y=n.createContext({}),p=function(e){var t=n.useContext(y),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(y.Provider,{value:t},e.children)},i="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,y=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),i=p(a),d=l,s=i["".concat(y,".").concat(d)]||i[d]||c[d]||r;return a?n.createElement(s,g(g({ref:t},o),{},{components:a})):n.createElement(s,g({ref:t},o))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,g=new Array(r);g[0]=d;var u={};for(var y in t)hasOwnProperty.call(t,y)&&(u[y]=t[y]);u.originalType=e,u[i]="string"==typeof e?e:l,g[1]=u;for(var p=2;p<r;p++)g[p]=a[p];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1356:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>c,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var n=a(45072),l=(a(11504),a(95788));const r={title:"godata@3.4.0",id:"godata-docs",keywords:["adaptor","godata","getCase","getContact","getLocation","getOutbreak","getReferenceData","listCases","listContacts","listLocations","listOutbreaks","listReferenceData","upsertCase","upsertContact","upsertLocation","upsertOutbreak","upsertReferenceData"]},g=void 0,u={unversionedId:"packages/godata-docs",id:"packages/godata-docs",title:"godata@3.4.0",description:"Functions",source:"@site/adaptors/packages/godata-docs.md",sourceDirName:"packages",slug:"/packages/godata-docs",permalink:"/adaptors/packages/godata-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"godata@3.4.0",id:"godata-docs",keywords:["adaptor","godata","getCase","getContact","getLocation","getOutbreak","getReferenceData","listCases","listContacts","listLocations","listOutbreaks","listReferenceData","upsertCase","upsertContact","upsertLocation","upsertOutbreak","upsertReferenceData"]},sidebar:"adaptors",previous:{title:"Go.Data",permalink:"/adaptors/godata"},next:{title:"Config for godata",permalink:"/adaptors/packages/godata-configuration-schema"}},y={},p=[{value:"Functions",id:"functions",level:2},{value:"getCase",id:"getcase",level:2},{value:"getContact",id:"getcontact",level:2},{value:"getLocation",id:"getlocation",level:2},{value:"getOutbreak",id:"getoutbreak",level:2},{value:"getReferenceData",id:"getreferencedata",level:2},{value:"listCases",id:"listcases",level:2},{value:"listContacts",id:"listcontacts",level:2},{value:"listLocations",id:"listlocations",level:2},{value:"listOutbreaks",id:"listoutbreaks",level:2},{value:"listReferenceData",id:"listreferencedata",level:2},{value:"upsertCase",id:"upsertcase",level:2},{value:"upsertContact",id:"upsertcontact",level:2},{value:"upsertLocation",id:"upsertlocation",level:2},{value:"upsertOutbreak",id:"upsertoutbreak",level:2},{value:"upsertReferenceData",id:"upsertreferencedata",level:2}],o={toc:p},i="wrapper";function c(e){let{components:t,...a}=e;return(0,l.yg)(i,(0,n.c)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"functions"},"Functions"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getcase"},"getCase(id, query, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getcontact"},"getContact(id, query, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getlocation"},"getLocation(query, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getoutbreak"},"getOutbreak(query, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getreferencedata"},"getReferenceData(query, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#listcases"},"listCases(id, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#listcontacts"},"listContacts(id, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#listlocations"},"listLocations(callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#listoutbreaks"},"listOutbreaks(callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#listreferencedata"},"listReferenceData(callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsertcase"},"upsertCase(id, externalId, goDataCase, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsertcontact"},"upsertContact(id, externalId, goDataContact, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsertlocation"},"upsertLocation(externalId, goDataLocation, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsertoutbreak"},"upsertOutbreak(outbreak, callback)")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsertreferencedata"},"upsertReferenceData(externalId, goDataReferenceData, callback)"))),(0,l.yg)("h2",{id:"getcase"},"getCase"),(0,l.yg)("p",null,"getCase(id, query, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Get one or multiple cases within an outbreak from a query filter"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"id"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Outbreak id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"An object with a query filter parameter")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"getCase(\n   '3b55-cdf4',\n   { 'where.relationship': { active: true }, where: { firstName: 'Luca'} },\n   state => {\n     console.log(state);\n     return state;\n   }\n);\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"getcontact"},"getContact"),(0,l.yg)("p",null,"getContact(id, query, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Get one or multiple contacts within an outbreak from a query filter"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"id"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Outbreak id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"An object with a query filter parameter")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getContact("343d-dc3e", {"where":{"firstName": "Luca"}}, state => {\n   console.log(state.data);\n   return state;\n });\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"getlocation"},"getLocation"),(0,l.yg)("p",null,"getLocation(query, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Get one or multiple locations from a query filter"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"An object with a query filter parameter")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getLocation({"where":{"name": "30 DE OCTUBRE"}}, state => {\n   console.log(state.data);\n   return state;\n });\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"getoutbreak"},"getOutbreak"),(0,l.yg)("p",null,"getOutbreak(query, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Get one or multiple outbreaks from a query filter"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"An object with a query filter parameter")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getOutbreak({"where":{"name": "Outbreak demo"}}, state => {\n   console.log(state.data);\n   return state;\n });\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"getreferencedata"},"getReferenceData"),(0,l.yg)("p",null,"getReferenceData(query, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Get one or multiple reference data from a query filter"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"An object with a query filter parameter")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getReferenceData({"where":{"categoryId": "LNG_REFERENCE_DATA_CATEGORY_CENTRE_NAME"}}, state => {\n   console.log(state.data);\n   return state;\n });\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"listcases"},"listCases"),(0,l.yg)("p",null,"listCases(id, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Fetch the list of cases within a particular outbreak using its ID."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"id"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Outbreak id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'listCases("343d-dc3e", state => {\n   console.log(state);\n   return state;\n });\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"listcontacts"},"listContacts"),(0,l.yg)("p",null,"listContacts(id, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Fetch the list of contacts within a particular outbreak using its ID."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"id"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Outbreak id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'listContacts("343d-dc3e", // Outbreak Id\n   state => {\n      console.log(state);\n   return state;\n });\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"listlocations"},"listLocations"),(0,l.yg)("p",null,"listLocations(callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Fetch the list of locations"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"listLocations(state => {\n   console.log(state.data);\n   return state;\n });\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"listoutbreaks"},"listOutbreaks"),(0,l.yg)("p",null,"listOutbreaks(callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Fetch the list of outbreaks"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"listOutbreaks(state => {\n   console.log(state.data);\n   return state;\n });\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"listreferencedata"},"listReferenceData"),(0,l.yg)("p",null,"listReferenceData(callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Fetch the list of reference data"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"listReferenceData(state => {\n   console.log(state.data);\n   return state;\n });\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"upsertcase"},"upsertCase"),(0,l.yg)("p",null,"upsertCase(id, externalId, goDataCase, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Upsert case to godata using an external id to mach a specific record"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"id"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Outbreak id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"externalId"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"External Id to match")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"goDataCase"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with some case data.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"upsertCase(\"4dce-3eedce3-rd33\", 'visualId',\n   data: state => {\n     const patient = state.data.body;\n      return {\n        firstName: patient.Patient_name.split(' ')[0],\n        lastName: patient.Patient_name.split(' ')[1],\n        visualId: patient.Case_ID,\n        'age:years': patient.Age_in_year,\n        gender: patient.Sex,\n      };\n })\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"upsertcontact"},"upsertContact"),(0,l.yg)("p",null,"upsertContact(id, externalId, goDataContact, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Upsert contact to godata using an external id to match a specific record."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"id"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Outbreak id")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"externalId"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"External Id to match")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"goDataContact"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with some case data.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"upsertContact(\"4dce-3eedce3-rd33\", 'visualId',\n   {\n     firstName: 'Luca',\n     gender: 'male',\n     'age:years': '20'\n     ...\n   }\n )\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"upsertlocation"},"upsertLocation"),(0,l.yg)("p",null,"upsertLocation(externalId, goDataLocation, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Upsert location to godata"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"externalId"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"External Id to match")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"goDataLocation"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with some location data.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"upsertLocation('name', {...})\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"upsertoutbreak"},"upsertOutbreak"),(0,l.yg)("p",null,"upsertOutbreak(outbreak, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Upsert outbreak to godata"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"outbreak"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with an externalId and some outbreak data.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'upsertOutbreak({externalId: "3dec33-ede3", data: {...}})\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"upsertreferencedata"},"upsertReferenceData"),(0,l.yg)("p",null,"upsertReferenceData(externalId, goDataReferenceData, callback) \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Upsert reference data to godata"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"externalId"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"External Id to match")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"goDataReferenceData"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"an object with some reference data.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"callback"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"upsertReferenceData('id', {...})\n")),(0,l.yg)("hr",null))}c.isMDXComponent=!0}}]);