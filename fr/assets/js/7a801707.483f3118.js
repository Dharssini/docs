"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[18967],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,d=u["".concat(i,".").concat(m)]||u[m]||k[m]||l;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22046:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"primero@2.10.4",id:"primero-docs",keywords:["adaptor","primero","getCases","createCase","updateCase","upsertCase","getReferrals","createReferrals","updateReferral","getForms","getLookups","getLocations"]},o=void 0,p={unversionedId:"packages/primero-docs",id:"packages/primero-docs",title:"primero@2.10.4",description:"Functions",source:"@site/adaptors/packages/primero-docs.md",sourceDirName:"packages",slug:"/packages/primero-docs",permalink:"/fr/adaptors/packages/primero-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"primero@2.10.4",id:"primero-docs",keywords:["adaptor","primero","getCases","createCase","updateCase","upsertCase","getReferrals","createReferrals","updateReferral","getForms","getLookups","getLocations"]},sidebar:"adaptors",previous:{title:"Primero",permalink:"/fr/adaptors/primero"},next:{title:"Config for primero",permalink:"/fr/adaptors/packages/primero-configuration-schema"}},i={},s=[{value:"Functions",id:"functions",level:2},{value:"execute(operations) \u21d2 <code>Operation</code>",id:"executeoperations--operation",level:2},{value:"generateAuthString(state) \u21d2 <code>string</code>",id:"generateauthstringstate--string",level:2},{value:"queryHandler(state, params, callback) \u21d2 <code>State</code>",id:"queryhandlerstate-params-callback--state",level:2},{value:"login(state) \u21d2 <code>State</code>",id:"loginstate--state",level:2},{value:"cleanupState(state) \u21d2 <code>State</code>",id:"cleanupstatestate--state",level:2},{value:"getCases(query, options, callback) \u21d2 <code>Operation</code>",id:"getcasesquery-options-callback--operation",level:2},{value:"createCase(params, callback) \u21d2 <code>Operation</code>",id:"createcaseparams-callback--operation",level:2},{value:"updateCase(id, params, callback) \u21d2 <code>Operation</code>",id:"updatecaseid-params-callback--operation",level:2},{value:"upsertCase(params, callback) \u21d2 <code>Operation</code>",id:"upsertcaseparams-callback--operation",level:2},{value:"getReferrals(params, callback) \u21d2 <code>Operation</code>",id:"getreferralsparams-callback--operation",level:2},{value:"createReferrals(params, callback) \u21d2 <code>Operation</code>",id:"createreferralsparams-callback--operation",level:2},{value:"updateReferral(params, callback) \u21d2 <code>Operation</code>",id:"updatereferralparams-callback--operation",level:2},{value:"getForms(query, callback) \u21d2 <code>Operation</code>",id:"getformsquery-callback--operation",level:2},{value:"getLookups(query, callback) \u21d2 <code>Operation</code>",id:"getlookupsquery-callback--operation",level:2},{value:"getLocations(query, callback) \u21d2 <code>Operation</code>",id:"getlocationsquery-callback--operation",level:2}],c={toc:s},u="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#execute"},"execute(operations)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Execute a sequence of operations. Wraps ",(0,r.kt)("code",null,"language-common/execute"),", and prepends initial state for http.")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#generateAuthString"},"generateAuthString(state)")," \u21d2 ",(0,r.kt)("code",null,"string")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Generate an auth string to support multiple types of auth credentials.")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#queryHandler"},"queryHandler(state, params, callback)")," \u21d2 ",(0,r.kt)("code",null,"State")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Execute custom query")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#login"},"login(state)")," \u21d2 ",(0,r.kt)("code",null,"State")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Logs in to Primero.")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#cleanupState"},"cleanupState(state)")," \u21d2 ",(0,r.kt)("code",null,"State")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Removes unserializable keys from the state.")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#getCases"},"getCases(query, options, callback)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Get cases from Primero"),(0,r.kt)("p",null,"Use this function to get cases from Primero based on a set of query parameters. Note that in many implementations, the ",(0,r.kt)("code",null,"remote")," attribute should be set to ",(0,r.kt)("code",null,"true")," to ensure that only cases marked for remote access will be retrieved. You can specify a ",(0,r.kt)("code",null,"case_id")," value to fetch a unique case and a query string to filter result.")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#createCase"},"createCase(params, callback)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Create a new case in Primero"),(0,r.kt)("p",null,"Use this function to create a new case in Primero based on a set of Data.")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#updateCase"},"updateCase(id, params, callback)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Update an existing case in Primero"),(0,r.kt)("p",null,"Use this function to update an existing case from Primero. In this implementation, the function uses a case ID to check for the case to update, Then merge the values submitted in this call into an existing case. Fields not specified in this request will not be modified. For nested subform fields, the subform arrays will be recursively merged, keeping both the existing values and appending the new")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#upsertCase"},"upsertCase(params, callback)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Upsert case to Primero"),(0,r.kt)("p",null,"Use this function to update an existing case from Primero or to create it otherwise. In this implementation, we first fetch the list of cases, then we check if the case exist before choosing the right operation to do.")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#getReferrals"},"getReferrals(params, callback)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Get referrals for a specific case in Primero"),(0,r.kt)("p",null,"Use this function to get the list of referrals of one case from Primero. The search can be done using either ",(0,r.kt)("code",null,"record id")," or ",(0,r.kt)("code",null,"case id"),".")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#createReferrals"},"createReferrals(params, callback)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Create referrals in Primero"),(0,r.kt)("p",null,"Use this function to bulk refer to one or multiple cases from Primero to a single user")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#updateReferral"},"updateReferral(params, callback)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Update a single referral for a specific case in Primero")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#getForms"},"getForms(query, callback)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Get forms from Primero"),(0,r.kt)("p",null,"Use this function to get forms from Primero that are accessible to this user based on a set of query parameters. The user can filter the form list by record type and module.")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#getLookups"},"getLookups(query, callback)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Get lookups from Primero"),(0,r.kt)("p",null,"Use this function to get a paginated list of all lookups that are accessible to this user from Primero. Note: You can specify a ",(0,r.kt)("code",null,"per")," value to fetch records per page(Defaults to 20). Also you can specify ",(0,r.kt)("code",null,"page")," value to fetch pagination (Defaults to 1)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#getLocations"},"getLocations(query, callback)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Get locations from Primero"),(0,r.kt)("p",null,"Use this function to get a paginated list of all locations that are accessible to this user from Primero. Note: You can specify a ",(0,r.kt)("code",null,"per")," value to fetch records per page(Defaults to 20). Also you can specify ",(0,r.kt)("code",null,"page")," value to fetch pagination (Defaults to 1). Another parameter is ",(0,r.kt)("code",null,"hierarchy: true")," (Defaults to false)"))),(0,r.kt)("a",{name:"execute"}),(0,r.kt)("h2",{id:"executeoperations--operation"},"execute(operations) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,r.kt)("inlineCode",{parentName:"p"},"language-common/execute"),", and prepends initial state for http."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operations"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Operations")),(0,r.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,r.kt)("a",{name:"generateAuthString"}),(0,r.kt)("h2",{id:"generateauthstringstate--string"},"generateAuthString(state) \u21d2 ",(0,r.kt)("code",null,"string")),(0,r.kt)("p",null,"Generate an auth string to support multiple types of auth credentials."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"State"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"generateAuthString(state)\n")),(0,r.kt)("a",{name:"queryHandler"}),(0,r.kt)("h2",{id:"queryhandlerstate-params-callback--state"},"queryHandler(state, params, callback) \u21d2 ",(0,r.kt)("code",null,"State")),(0,r.kt)("p",null,"Execute custom query"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"State"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function"))))),(0,r.kt)("a",{name:"login"}),(0,r.kt)("h2",{id:"loginstate--state"},"login(state) \u21d2 ",(0,r.kt)("code",null,"State")),(0,r.kt)("p",null,"Logs in to Primero."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"State")),(0,r.kt)("td",{parentName:"tr",align:null},"Runtime state.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"login(state)\n")),(0,r.kt)("a",{name:"cleanupState"}),(0,r.kt)("h2",{id:"cleanupstatestate--state"},"cleanupState(state) \u21d2 ",(0,r.kt)("code",null,"State")),(0,r.kt)("p",null,"Removes unserializable keys from the state."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"State"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"cleanupState(state)\n")),(0,r.kt)("a",{name:"getCases"}),(0,r.kt)("h2",{id:"getcasesquery-options-callback--operation"},"getCases(query, options, callback) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Get cases from Primero"),(0,r.kt)("p",null,"Use this function to get cases from Primero based on a set of query parameters.\nNote that in many implementations, the ",(0,r.kt)("inlineCode",{parentName:"p"},"remote")," attribute should be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to ensure that only cases marked for remote access will be retrieved.\nYou can specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"case_id")," value to fetch a unique case and a query string to filter result."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"an object with a query param at minimum, option to getReferrals")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) an object with a getReferrals key to fetch referrals")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"( Get cases from Primero with query parameters)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'getCases({\n  remote: true,\n  query: "sex=male",\n});\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Get case from Primero for a specific case id)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'getCases({\n  remote: true,\n  case_id: "6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz",\n});\n')),(0,r.kt)("a",{name:"createCase"}),(0,r.kt)("h2",{id:"createcaseparams-callback--operation"},"createCase(params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Create a new case in Primero"),(0,r.kt)("p",null,"Use this function to create a new case in Primero based on a set of Data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"an object with some case data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Create a new case in Primero based on a set of Data)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'createCase({\n  data: {\n    age: 16,\n    sex: "female",\n    name: "Edwine Edgemont",\n  },\n});\n')),(0,r.kt)("a",{name:"updateCase"}),(0,r.kt)("h2",{id:"updatecaseid-params-callback--operation"},"updateCase(id, params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Update an existing case in Primero"),(0,r.kt)("p",null,"Use this function to update an existing case from Primero.\nIn this implementation, the function uses a case ID to check for the case to update,\nThen merge the values submitted in this call into an existing case.\nFields not specified in this request will not be modified.\nFor nested subform fields, the subform arrays will be recursively merged,\nkeeping both the existing values and appending the new"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"A case ID to use for the update.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"an object with some case data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Update case for a specific case id)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'updateCase("6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz", {\n  data: {\n    age: 16,\n    sex: "female",\n    name: "Fiona Edgemont",\n  },\n});\n')),(0,r.kt)("a",{name:"upsertCase"}),(0,r.kt)("h2",{id:"upsertcaseparams-callback--operation"},"upsertCase(params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Upsert case to Primero"),(0,r.kt)("p",null,"Use this function to update an existing case from Primero or to create it otherwise.\nIn this implementation, we first fetch the list of cases,\nthen we check if the case exist before choosing the right operation to do."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"an object with an externalIds and some case data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Upsert case for a specific case id)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'upsertCase({\n  externalIds: ["case_id"],\n  data: state => ({\n    age: 20,\n    sex: "male",\n    name: "Alex",\n    status: "open",\n    case_id: "6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz",\n  }),\n});\n')),(0,r.kt)("a",{name:"getReferrals"}),(0,r.kt)("h2",{id:"getreferralsparams-callback--operation"},"getReferrals(params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Get referrals for a specific case in Primero"),(0,r.kt)("p",null,"Use this function to get the list of referrals of one case from Primero.\nThe search can be done using either ",(0,r.kt)("inlineCode",{parentName:"p"},"record id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"case id"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"an object with an externalId field to select the attribute to use for matching on case and an externalId value for that case.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Get referrals for a case in Primero by record id)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'getReferrals({\n  externalId: "record_id",\n  id: "6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz",\n});\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Get referrals for a case in Primero by case id)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},' getReferrals({\n  id: "6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz",\n});\n')),(0,r.kt)("a",{name:"createReferrals"}),(0,r.kt)("h2",{id:"createreferralsparams-callback--operation"},"createReferrals(params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Create referrals in Primero"),(0,r.kt)("p",null,"Use this function to bulk refer to one or multiple cases from Primero to a single user"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"an object with referral data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Create referrals for multiple cases in Primero)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'createReferrals({\n  data: {\n    ids: [\n      "749e9c6e-60db-45ec-8f5a-69da7c223a79",\n      "dcea6052-07d9-4cfa-9abf-9a36987cdd25",\n    ],\n    transitioned_to: "primero_cp",\n    notes: "This is a bulk referral",\n  },\n});\n')),(0,r.kt)("a",{name:"updateReferral"}),(0,r.kt)("h2",{id:"updatereferralparams-callback--operation"},"updateReferral(params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Update a single referral for a specific case in Primero"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"an object with an caseExternalId value to use, the id and the referral id to update.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Update referral by record id)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'updateReferral({\n  caseExternalId: "record_id",\n  id: "749e9c6e-60db-45ec-8f5a-69da7c223a79",\n  caseId: "dcea6052-07d9-4cfa-9abf-9a36987cdd25",\n  data: (state) => state.data,\n});\n')),(0,r.kt)("a",{name:"getForms"}),(0,r.kt)("h2",{id:"getformsquery-callback--operation"},"getForms(query, callback) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Get forms from Primero"),(0,r.kt)("p",null,"Use this function to get forms from Primero that are accessible to this user based on a set of query parameters.\nThe user can filter the form list by record type and module."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"an object with a query param at minimum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Get the list of all forms)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getForms();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Get the list of all forms for a specific module)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'getForms({\n  module_id: "6aeaa66a-5a92-4ff5-bf7a-e59cde07eaaz",\n});\n')),(0,r.kt)("a",{name:"getLookups"}),(0,r.kt)("h2",{id:"getlookupsquery-callback--operation"},"getLookups(query, callback) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Get lookups from Primero"),(0,r.kt)("p",null,"Use this function to get a paginated list of all lookups that are accessible to this user from Primero.\nNote: You can specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"per")," value to fetch records per page(Defaults to 20).\nAlso you can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," value to fetch pagination (Defaults to 1)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"an object with a query param at minimum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Get lookups from Primero with query parameters)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getLookups({\n  per: 10000,\n  page: 5\n});\n")),(0,r.kt)("a",{name:"getLocations"}),(0,r.kt)("h2",{id:"getlocationsquery-callback--operation"},"getLocations(query, callback) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Get locations from Primero"),(0,r.kt)("p",null,"Use this function to get a paginated list of all locations that are accessible to this user from Primero.\nNote: You can specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"per")," value to fetch records per page(Defaults to 20).\nAlso you can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," value to fetch pagination (Defaults to 1).\nAnother parameter is ",(0,r.kt)("inlineCode",{parentName:"p"},"hierarchy: true")," (Defaults to false)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"an object with a query param at minimum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")," ",(0,r.kt)("em",{parentName:"p"},"(Get loocations from Primero with query parameters)"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getLocations({\n  page: 1,\n  per: 20\n})\n")))}k.isMDXComponent=!0}}]);