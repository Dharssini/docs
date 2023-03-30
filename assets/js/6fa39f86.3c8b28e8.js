"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[87746],{3905:(t,a,e)=>{e.d(a,{Zo:()=>i,kt:()=>m});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function p(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var u=n.createContext({}),k=function(t){var a=n.useContext(u),e=a;return t&&(e="function"==typeof t?t(a):p(p({},a),t)),e},i=function(t){var a=k(t.components);return n.createElement(u.Provider,{value:a},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),c=k(e),s=r,m=c["".concat(u,".").concat(s)]||c[s]||d[s]||l;return e?n.createElement(m,p(p({ref:a},i),{},{components:e})):n.createElement(m,p({ref:a},i))}));function m(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,p=new Array(l);p[0]=s;var o={};for(var u in a)hasOwnProperty.call(a,u)&&(o[u]=a[u]);o.originalType=t,o[c]="string"==typeof t?t:r,p[1]=o;for(var k=2;k<l;k++)p[k]=e[k];return n.createElement.apply(null,p)}return n.createElement.apply(null,e)}s.displayName="MDXCreateElement"},33843:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>k});var n=e(87462),r=(e(67294),e(3905));const l={title:"http@4.2.6",id:"http-docs",keywords:["adaptor","http","get","post","put","patch","del","parseXML","parseCSV"]},p=void 0,o={unversionedId:"packages/http-docs",id:"packages/http-docs",title:"http@4.2.6",description:"Functions",source:"@site/adaptors/packages/http-docs.md",sourceDirName:"packages",slug:"/packages/http-docs",permalink:"/adaptors/packages/http-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"http@4.2.6",id:"http-docs",keywords:["adaptor","http","get","post","put","patch","del","parseXML","parseCSV"]},sidebar:"adaptors",previous:{title:"googlesheets developer readme",permalink:"/adaptors/packages/googlesheets-readme"},next:{title:"Config for http",permalink:"/adaptors/packages/http-configuration-schema"}},u={},k=[{value:"Functions",id:"functions",level:2},{value:"get(path, params, callback) \u21d2 <code>Operation</code>",id:"getpath-params-callback--operation",level:2},{value:"post(path, params, callback) \u21d2 <code>operation</code>",id:"postpath-params-callback--operation",level:2},{value:"put(path, params, callback) \u21d2 <code>Operation</code>",id:"putpath-params-callback--operation",level:2},{value:"patch(path, params, callback) \u21d2 <code>Operation</code>",id:"patchpath-params-callback--operation",level:2},{value:"del(path, params, callback) \u21d2 <code>Operation</code>",id:"delpath-params-callback--operation",level:2},{value:"parseXML(body, script) \u21d2 <code>Operation</code>",id:"parsexmlbody-script--operation",level:2},{value:"parseCSV(target, config) \u21d2 <code>Operation</code>",id:"parsecsvtarget-config--operation",level:2},{value:"request(params) \u21d2 <code>Operation</code>",id:"requestparams--operation",level:2}],i={toc:k},c="wrapper";function d(t){let{components:a,...e}=t;return(0,r.kt)(c,(0,n.Z)({},i,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#get"},"get(path, params, callback)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Make a GET request")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#post"},"post(path, params, callback)")," \u21d2 ",(0,r.kt)("code",null,"operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Make a POST request")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#put"},"put(path, params, callback)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Make a PUT request")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#patch"},"patch(path, params, callback)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Make a PATCH request")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#del"},"del(path, params, callback)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Make a DELETE request")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#parseXML"},"parseXML(body, script)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Parse XML with the Cheerio parser")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#parseCSV"},"parseCSV(target, config)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"CSV-Parse for CSV conversion to JSON")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#request"},"request(params)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Make a request using the 'request' node module. This module is deprecated."))),(0,r.kt)("a",{name:"get"}),(0,r.kt)("h2",{id:"getpath-params-callback--operation"},"get(path, params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Make a GET request"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Query, Headers and Authentication parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"get('/myEndpoint', {\n   query: {foo: 'bar', a: 1},\n   headers: {'content-type': 'application/json'},\n   authentication: {username: 'user', password: 'pass'}\n })\n")),(0,r.kt)("a",{name:"post"}),(0,r.kt)("h2",{id:"postpath-params-callback--operation"},"post(path, params, callback) \u21d2 ",(0,r.kt)("code",null,"operation")),(0,r.kt)("p",null,"Make a POST request"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Body, Query, Headers and Authentication parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"post('/myEndpoint', {\n   body: {'foo': 'bar'},\n   headers: {'content-type': 'application/json'},\n   authentication: {username: 'user', password: 'pass'}\n })\n")),(0,r.kt)("a",{name:"put"}),(0,r.kt)("h2",{id:"putpath-params-callback--operation"},"put(path, params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Make a PUT request"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Body, Query, Headers and Auth parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"put('/myEndpoint', {\n   body: {'foo': 'bar'},\n   headers: {'content-type': 'application/json'},\n   authentication: {username: 'user', password: 'pass'}\n })\n")),(0,r.kt)("a",{name:"patch"}),(0,r.kt)("h2",{id:"patchpath-params-callback--operation"},"patch(path, params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Make a PATCH request"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Body, Query, Headers and Auth parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"patch('/myEndpoint', {\n   body: {'foo': 'bar'},\n   headers: {'content-type': 'application/json'},\n   authentication: {username: 'user', password: 'pass'}\n })\n")),(0,r.kt)("a",{name:"del"}),(0,r.kt)("h2",{id:"delpath-params-callback--operation"},"del(path, params, callback) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Make a DELETE request"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Body, Query, Headers and Auth parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional) Callback function")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"del(`/myendpoint/${state => state.data.id}`, {\n   headers: {'content-type': 'application/json'}\n })\n")),(0,r.kt)("a",{name:"parseXML"}),(0,r.kt)("h2",{id:"parsexmlbody-script--operation"},"parseXML(body, script) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Parse XML with the Cheerio parser"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"String")),(0,r.kt)("td",{parentName:"tr",align:null},"data string to be parsed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"script"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"script for extracting data")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'parseXML(body, function($){\n   return $("table[class=your_table]").parsetable(true, true, true);\n })\n')),(0,r.kt)("a",{name:"parseCSV"}),(0,r.kt)("h2",{id:"parsecsvtarget-config--operation"},"parseCSV(target, config) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"CSV-Parse for CSV conversion to JSON"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"String")),(0,r.kt)("td",{parentName:"tr",align:null},"string or local file with CSV data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"csv-parse config object")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'parseCSV("/home/user/someData.csv", {\n      quoteChar: \'"\',\n      header: false,\n    });\n')),(0,r.kt)("a",{name:"request"}),(0,r.kt)("h2",{id:"requestparams--operation"},"request(params) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Make a request using the 'request' node module. This module is deprecated."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Query, Headers and Authentication parameters")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"request(params);\n")))}d.isMDXComponent=!0}}]);