"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[87746],{3905:(t,e,a)=>{a.d(e,{Zo:()=>i,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),k=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},i=function(t){var e=k(t.components);return n.createElement(u.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),c=k(a),s=r,m=c["".concat(u,".").concat(s)]||c[s]||d[s]||l;return a?n.createElement(m,p(p({ref:e},i),{},{components:a})):n.createElement(m,p({ref:e},i))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[c]="string"==typeof t?t:r,p[1]=o;for(var k=2;k<l;k++)p[k]=a[k];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},33843:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>k});var n=a(87462),r=(a(67294),a(3905));const l={title:"http@4.2.5",id:"http-docs",keywords:["adaptor","http","get","post","put","patch","del","parseXML","parseCSV"]},p=void 0,o={unversionedId:"packages/http-docs",id:"packages/http-docs",title:"http@4.2.5",description:"Functions",source:"@site/adaptors/packages/http-docs.md",sourceDirName:"packages",slug:"/packages/http-docs",permalink:"/fr/adaptors/packages/http-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"http@4.2.5",id:"http-docs",keywords:["adaptor","http","get","post","put","patch","del","parseXML","parseCSV"]},sidebar:"adaptors",previous:{title:"googlesheets Config",permalink:"/fr/adaptors/packages/googlesheets-configuration-schema"},next:{title:"\ud83d\udcdc Extract Kobo data from API to send to OpenFn Inbox",permalink:"/fr/adaptors/library/jobs/auto/getKoboData"}},u={},k=[{value:"Functions",id:"functions",level:2},{value:"execute(operations) \u21d2 <code>Operation</code>",id:"executeoperations--operation",level:2},{value:"get(path, params, callback) \u21d2 <code>Operation</code>",id:"getpath-params-callback--operation",level:2},{value:"post(path, params, callback) \u21d2 <code>operation</code>",id:"postpath-params-callback--operation",level:2},{value:"put(path, params, callback) \u21d2 <code>Operation</code>",id:"putpath-params-callback--operation",level:2},{value:"patch(path, params, callback) \u21d2 <code>Operation</code>",id:"patchpath-params-callback--operation",level:2},{value:"del(path, params, callback) \u21d2 <code>Operation</code>",id:"delpath-params-callback--operation",level:2},{value:"parseXML(body, script) \u21d2 <code>Operation</code>",id:"parsexmlbody-script--operation",level:2},{value:"parseCSV(target, config) \u21d2 <code>Operation</code>",id:"parsecsvtarget-config--operation",level:2},{value:"request(params) \u21d2 <code>Operation</code>",id:"requestparams--operation",level:2}],i={toc:k},c="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#execute"},"execute(operations)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Execute a sequence of operations. Wraps ",(0,r.kt)("code",null,"language-common/execute"),", and prepends initial state for http.")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#get"},"get(path, params, callback)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Make a GET request")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#post"},"post(path, params, callback)")," \u21d2 ",(0,r.kt)("code",null,"operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Make a POST request")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#put"},"put(path, params, callback)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Make a PUT request")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#patch"},"patch(path, params, callback)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Make a PATCH request")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#del"},"del(path, params, callback)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Make a DELETE request")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#parseXML"},"parseXML(body, script)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Parse XML with the Cheerio parser")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#parseCSV"},"parseCSV(target, config)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"CSV-Parse for CSV conversion to JSON")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#request"},"request(params)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Make a request using the 'request' node module. This module is deprecated."))),(0,r.kt)("a",{name:"execute"}),(0,r.kt)("h2",{id:"executeoperations--operation"},"execute(operations) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,r.kt)("inlineCode",{parentName:"p"},"language-common/execute"),", and prepends initial state for http."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operations"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Operations")),(0,r.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,r.kt)("a",{name:"get"}),(0,r.kt)("h2",{id:"getpath-params-callback--operation"},"get(path, params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Make a GET request"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Query, Headers and Authentication parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"get('/myEndpoint', {\n   query: {foo: 'bar', a: 1},\n   headers: {'content-type': 'application/json'},\n   authentication: {username: 'user', password: 'pass'}\n })\n")),(0,r.kt)("a",{name:"post"}),(0,r.kt)("h2",{id:"postpath-params-callback--operation"},"post(path, params, callback) \u21d2 ",(0,r.kt)("code",null,"operation")),(0,r.kt)("p",null,"Make a POST request"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Body, Query, Headers and Authentication parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"post('/myEndpoint', {\n   body: {'foo': 'bar'},\n   headers: {'content-type': 'application/json'},\n   authentication: {username: 'user', password: 'pass'}\n })\n")),(0,r.kt)("a",{name:"put"}),(0,r.kt)("h2",{id:"putpath-params-callback--operation"},"put(path, params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Make a PUT request"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Body, Query, Headers and Auth parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"put('/myEndpoint', {\n   body: {'foo': 'bar'},\n   headers: {'content-type': 'application/json'},\n   authentication: {username: 'user', password: 'pass'}\n })\n")),(0,r.kt)("a",{name:"patch"}),(0,r.kt)("h2",{id:"patchpath-params-callback--operation"},"patch(path, params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Make a PATCH request"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Body, Query, Headers and Auth parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"patch('/myEndpoint', {\n   body: {'foo': 'bar'},\n   headers: {'content-type': 'application/json'},\n   authentication: {username: 'user', password: 'pass'}\n })\n")),(0,r.kt)("a",{name:"del"}),(0,r.kt)("h2",{id:"delpath-params-callback--operation"},"del(path, params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Make a DELETE request"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Body, Query, Headers and Auth parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"del(`/myendpoint/${state => state.data.id}`, {\n   headers: {'content-type': 'application/json'}\n })\n")),(0,r.kt)("a",{name:"parseXML"}),(0,r.kt)("h2",{id:"parsexmlbody-script--operation"},"parseXML(body, script) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Parse XML with the Cheerio parser"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"String")),(0,r.kt)("td",{parentName:"tr",align:null},"data string to be parsed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"script"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"script for extracting data")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'parseXML(body, function($){\n   return $("table[class=your_table]").parsetable(true, true, true);\n })\n')),(0,r.kt)("a",{name:"parseCSV"}),(0,r.kt)("h2",{id:"parsecsvtarget-config--operation"},"parseCSV(target, config) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"CSV-Parse for CSV conversion to JSON"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"String")),(0,r.kt)("td",{parentName:"tr",align:null},"string or local file with CSV data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"csv-parse config object")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'parseCSV("/home/user/someData.csv", {\n      quoteChar: \'"\',\n      header: false,\n    });\n')),(0,r.kt)("a",{name:"request"}),(0,r.kt)("h2",{id:"requestparams--operation"},"request(params) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Make a request using the 'request' node module. This module is deprecated."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Query, Headers and Authentication parameters")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"request(params);\n")))}d.isMDXComponent=!0}}]);