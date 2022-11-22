"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[18967],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>s});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var k=n.createContext({}),c=function(t){var e=n.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(k.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,k=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=c(a),s=l,m=d["".concat(k,".").concat(s)]||d[s]||i[s]||r;return a?n.createElement(m,p(p({ref:e},u),{},{components:a})):n.createElement(m,p({ref:e},u))}));function s(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,p=new Array(r);p[0]=d;var o={};for(var k in e)hasOwnProperty.call(e,k)&&(o[k]=e[k]);o.originalType=t,o.mdxType="string"==typeof t?t:l,p[1]=o;for(var c=2;c<r;c++)p[c]=a[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},22046:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>p,default:()=>i,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),l=(a(67294),a(3905));const r={title:"primero@2.10.2",id:"primero-docs",keywords:["adaptor","primero","getCases","createCase","updateCase","upsertCase","getReferrals","createReferrals","updateReferral","getForms","getLookups","getLocations"]},p=void 0,o={unversionedId:"packages/primero-docs",id:"packages/primero-docs",title:"primero@2.10.2",description:"Functions",source:"@site/adaptors/packages/primero-docs.md",sourceDirName:"packages",slug:"/packages/primero-docs",permalink:"/adaptors/packages/primero-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"primero@2.10.2",id:"primero-docs",keywords:["adaptor","primero","getCases","createCase","updateCase","upsertCase","getReferrals","createReferrals","updateReferral","getForms","getLookups","getLocations"]},sidebar:"adaptors",previous:{title:"Primero",permalink:"/adaptors/primero"},next:{title:"Get cases from Primero",permalink:"/adaptors/library/jobs/auto/Get-cases-from-Primero-2021-09-23"}},k={},c=[{value:"Functions",id:"functions",level:2},{value:"execute(operations) \u21d2 <code>Operation</code>",id:"executeoperations--operation",level:2},{value:"generateAuthString(state) \u21d2 <code>string</code>",id:"generateauthstringstate--string",level:2},{value:"queryHandler(state, params, callback) \u21d2 <code>State</code>",id:"queryhandlerstate-params-callback--state",level:2},{value:"login(state) \u21d2 <code>State</code>",id:"loginstate--state",level:2},{value:"cleanupState(state) \u21d2 <code>State</code>",id:"cleanupstatestate--state",level:2},{value:"getCases(query, options, callback) \u21d2 <code>Operation</code>",id:"getcasesquery-options-callback--operation",level:2},{value:"createCase(params, callback) \u21d2 <code>Operation</code>",id:"createcaseparams-callback--operation",level:2},{value:"updateCase(id, params, callback) \u21d2 <code>Operation</code>",id:"updatecaseid-params-callback--operation",level:2},{value:"upsertCase(params, callback) \u21d2 <code>Operation</code>",id:"upsertcaseparams-callback--operation",level:2},{value:"getReferrals(params, callback) \u21d2 <code>Operation</code>",id:"getreferralsparams-callback--operation",level:2},{value:"createReferrals(params, callback) \u21d2 <code>Operation</code>",id:"createreferralsparams-callback--operation",level:2},{value:"updateReferral(params, callback) \u21d2 <code>Operation</code>",id:"updatereferralparams-callback--operation",level:2},{value:"getForms(query, callback) \u21d2 <code>Operation</code>",id:"getformsquery-callback--operation",level:2},{value:"getLookups(query, callback) \u21d2 <code>Operation</code>",id:"getlookupsquery-callback--operation",level:2},{value:"getLocations(query, callback) \u21d2 <code>Operation</code>",id:"getlocationsquery-callback--operation",level:2}],u={toc:c};function i(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#execute"},"execute(operations)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Execute a sequence of operations. Wraps ",(0,l.kt)("code",null,"language-common/execute"),", and prepends initial state for http.")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#generateAuthString"},"generateAuthString(state)")," \u21d2 ",(0,l.kt)("code",null,"string")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Generate an auth string to support multiple types of auth credentials.")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#queryHandler"},"queryHandler(state, params, callback)")," \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Execute custom query")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#login"},"login(state)")," \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Logs in to Primero.")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#cleanupState"},"cleanupState(state)")," \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Removes unserializable keys from the state.")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#getCases"},"getCases(query, options, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Get cases from Primero")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#createCase"},"createCase(params, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Create case in Primero")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#updateCase"},"updateCase(id, params, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Update case in Primero")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#upsertCase"},"upsertCase(params, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Upsert case to Primero")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#getReferrals"},"getReferrals(params, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Get referrals for a specific case in Primero")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#createReferrals"},"createReferrals(params, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Create referrals in Primero")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#updateReferral"},"updateReferral(params, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Update a single referral for a specific case in Primero")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#getForms"},"getForms(query, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Get forms from Primero")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#getLookups"},"getLookups(query, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Get lookups from Primero")),(0,l.kt)("dt",null,(0,l.kt)("a",{href:"#getLocations"},"getLocations(query, callback)")," \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("dd",null,(0,l.kt)("p",null,"Get locations from Primero"))),(0,l.kt)("a",{name:"execute"}),(0,l.kt)("h2",{id:"executeoperations--operation"},"execute(operations) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,l.kt)("inlineCode",{parentName:"p"},"language-common/execute"),", and prepends initial state for http."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"operations"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Operations")),(0,l.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,l.kt)("a",{name:"generateAuthString"}),(0,l.kt)("h2",{id:"generateauthstringstate--string"},"generateAuthString(state) \u21d2 ",(0,l.kt)("code",null,"string")),(0,l.kt)("p",null,"Generate an auth string to support multiple types of auth credentials."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"State"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"generateAuthString(state)\n")),(0,l.kt)("a",{name:"queryHandler"}),(0,l.kt)("h2",{id:"queryhandlerstate-params-callback--state"},"queryHandler(state, params, callback) \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("p",null,"Execute custom query"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"State"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"params"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function"))))),(0,l.kt)("a",{name:"login"}),(0,l.kt)("h2",{id:"loginstate--state"},"login(state) \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("p",null,"Logs in to Primero."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"State")),(0,l.kt)("td",{parentName:"tr",align:null},"Runtime state.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"login(state)\n")),(0,l.kt)("a",{name:"cleanupState"}),(0,l.kt)("h2",{id:"cleanupstatestate--state"},"cleanupState(state) \u21d2 ",(0,l.kt)("code",null,"State")),(0,l.kt)("p",null,"Removes unserializable keys from the state."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"State"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"cleanupState(state)\n")),(0,l.kt)("a",{name:"getCases"}),(0,l.kt)("h2",{id:"getcasesquery-options-callback--operation"},"getCases(query, options, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Get cases from Primero"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"an object with a query param at minimum, option to getReferrals")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) an object with a getReferrals key to fetch referrals")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getCases({\n  remote: true,\n  case_id: '6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz'\n  query: 'sex=male' // optional\n}, { withReferrals: true }, callback)\n")),(0,l.kt)("a",{name:"createCase"}),(0,l.kt)("h2",{id:"createcaseparams-callback--operation"},"createCase(params, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Create case in Primero"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"params"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"an object with some case data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'createCase({\n  data: state => data {\n    "enabled": true,\n    "age": 15,\n    "sex": "male",\n    "name": "Alex",\n    "status": "open",\n    "case_id": "6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz",\n    "owned_by": "primero_cp"\n  }}, callback)\n')),(0,l.kt)("a",{name:"updateCase"}),(0,l.kt)("h2",{id:"updatecaseid-params-callback--operation"},"updateCase(id, params, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Update case in Primero"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"an ID to use for the update.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"params"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"an object with some case data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'updateCase("7ed1d49f-14c7-4181-8d83-dc8ed1699f08", {\n  data: state => data {\n    "age": 20,\n    "sex": "male",\n    "name": "Alex",\n    "status": "open",\n    "case_id": "6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz",\n  }}, callback)\n')),(0,l.kt)("a",{name:"upsertCase"}),(0,l.kt)("h2",{id:"upsertcaseparams-callback--operation"},"upsertCase(params, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Upsert case to Primero"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"params"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"an object with an externalId and some case data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'upsertCase({\n  externalIds: [\'case_id\'],\n  data: state => ({\n    "age": 20,\n    "sex": "male",\n    "name": "Alex",\n    "status": "open",\n    "case_id": "6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz",\n  })\n});\n')),(0,l.kt)("a",{name:"getReferrals"}),(0,l.kt)("h2",{id:"getreferralsparams-callback--operation"},"getReferrals(params, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Get referrals for a specific case in Primero"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"params"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"an object with an externalId field to select the attribute to use for matching on case and an externalId value for that case.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'getReferrals({\n  externalId: "record_id",\n  id: "7ed1d49f-14c7-4181-8d83-dc8ed1699f08",\n}, callback)\n')),(0,l.kt)("a",{name:"createReferrals"}),(0,l.kt)("h2",{id:"createreferralsparams-callback--operation"},"createReferrals(params, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Create referrals in Primero"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"params"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"an object with referral data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'createReferrals({\n  data: {\n    "ids": [\'case_id\'],\n     "transitioned_to": "primero_cp",\n     "notes": "Creating a referral"\n  }\n}, callback)\n')),(0,l.kt)("a",{name:"updateReferral"}),(0,l.kt)("h2",{id:"updatereferralparams-callback--operation"},"updateReferral(params, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Update a single referral for a specific case in Primero"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"params"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"an object with an externalId value to use, the id and the referral id to update.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'updateReferral({\n  caseExternalId: "record_id",\n  caseId: "7ed1d49f-14c7-4181-8d83-dc8ed1699f08"\n  id: "37612f65-3bda-48eb-b526-d31383f94166",\n  data: state => state.data\n}, callback)\n')),(0,l.kt)("a",{name:"getForms"}),(0,l.kt)("h2",{id:"getformsquery-callback--operation"},"getForms(query, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Get forms from Primero"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"an object with a query param at minimum")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getForms({\n  record_type: '' // Optional. Filters by the record type of the form,\n  module_id: 'id' //Optional. Filter forms by module,\n}, callback)\n")),(0,l.kt)("a",{name:"getLookups"}),(0,l.kt)("h2",{id:"getlookupsquery-callback--operation"},"getLookups(query, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Get lookups from Primero"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"an object with a query param at minimum")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getLookups({\n  page: 1 // Optional. Pagination. Defaults to 1,\n  per: 20 // Optional. Records per page. Defaults to 20,\n}, callback)\n")),(0,l.kt)("a",{name:"getLocations"}),(0,l.kt)("h2",{id:"getlocationsquery-callback--operation"},"getLocations(query, callback) \u21d2 ",(0,l.kt)("code",null,"Operation")),(0,l.kt)("p",null,"Get locations from Primero"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"object")),(0,l.kt)("td",{parentName:"tr",align:null},"an object with a query param at minimum")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"function")),(0,l.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"getLocations({\n  page: 1 // Optional.\n  per: 20 // Optional. Records per page,\n  hierarchy: // Defaults to false,\n}, callback)\n")))}i.isMDXComponent=!0}}]);