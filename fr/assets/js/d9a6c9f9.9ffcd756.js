"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[26090],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),s=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(i.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),u=s(a),k=r,m=u["".concat(i,".").concat(k)]||u[k]||d[k]||l;return a?n.createElement(m,o(o({ref:e},c),{},{components:a})):n.createElement(m,o({ref:e},c))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=k;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[u]="string"==typeof t?t:r,o[1]=p;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},58799:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"sftp@0.6.7",id:"sftp-docs",keywords:["adaptor","sftp","list","getCSV","putCSV","getJSON","normalizeCSVarray"]},o=void 0,p={unversionedId:"packages/sftp-docs",id:"packages/sftp-docs",title:"sftp@0.6.7",description:"Functions",source:"@site/adaptors/packages/sftp-docs.md",sourceDirName:"packages",slug:"/packages/sftp-docs",permalink:"/fr/adaptors/packages/sftp-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"sftp@0.6.7",id:"sftp-docs",keywords:["adaptor","sftp","list","getCSV","putCSV","getJSON","normalizeCSVarray"]},sidebar:"adaptors",previous:{title:"salesforce developer readme",permalink:"/fr/adaptors/packages/salesforce-readme"},next:{title:"Config for sftp",permalink:"/fr/adaptors/packages/sftp-configuration-schema"}},i={},s=[{value:"Functions",id:"functions",level:2},{value:"execute(operations) \u21d2 <code>Operation</code>",id:"executeoperations--operation",level:2},{value:"list(dirPath) \u21d2 <code>Operation</code>",id:"listdirpath--operation",level:2},{value:"getCSV(filePath) \u21d2 <code>Operation</code>",id:"getcsvfilepath--operation",level:2},{value:"putCSV(localFilePath, remoteFilePath, parsingOptions) \u21d2 <code>Operation</code>",id:"putcsvlocalfilepath-remotefilepath-parsingoptions--operation",level:2},{value:"getJSON(filePath, encoding) \u21d2 <code>Operation</code>",id:"getjsonfilepath-encoding--operation",level:2},{value:"normalizeCSVarray(options, callback) \u21d2 <code>Operation</code>",id:"normalizecsvarrayoptions-callback--operation",level:2}],c={toc:s},u="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#execute"},"execute(operations)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Execute a sequence of operations. Wraps ",(0,r.kt)("code",null,"language-common/execute"),", and prepends initial state for http.")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#list"},"list(dirPath)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"List files present in a directory")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#getCSV"},"getCSV(filePath)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Get a CSV and return a JSON array of strings for each item separated by the delimiter")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#putCSV"},"putCSV(localFilePath, remoteFilePath, parsingOptions)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Convert JSON to CSV and upload to an FTP server")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#getJSON"},"getJSON(filePath, encoding)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Fetch a json file from an FTP server")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#normalizeCSVarray"},"normalizeCSVarray(options, callback)")," \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("dd",null,(0,r.kt)("p",null,"Convert JSON array of strings into a normalized object"))),(0,r.kt)("a",{name:"execute"}),(0,r.kt)("h2",{id:"executeoperations--operation"},"execute(operations) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,r.kt)("inlineCode",{parentName:"p"},"language-common/execute"),", and prepends initial state for http."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operations"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Operations")),(0,r.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,r.kt)("a",{name:"list"}),(0,r.kt)("h2",{id:"listdirpath--operation"},"list(dirPath) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"List files present in a directory"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dirPath"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to resource")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"list('/some/path/')\n")),(0,r.kt)("a",{name:"getCSV"}),(0,r.kt)("h2",{id:"getcsvfilepath--operation"},"getCSV(filePath) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Get a CSV and return a JSON array of strings for each item separated by the delimiter"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filePath"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to resource")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getCSV(\n  '/some/path/to_file.csv'\n);\n")),(0,r.kt)("a",{name:"putCSV"}),(0,r.kt)("h2",{id:"putcsvlocalfilepath-remotefilepath-parsingoptions--operation"},"putCSV(localFilePath, remoteFilePath, parsingOptions) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Convert JSON to CSV and upload to an FTP server"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"localFilePath"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Data source for data to copy to the remote server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"remoteFilePath"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the remote file to be created on the server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parsingOptions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Options which can be passed to adjust the read and write stream used in sending the data to the remote server")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"putCSV(\n  '/some/path/to_local_file.csv',\n  '/some/path/to_remove_file.csv',\n  { delimiter: ';', noheader: true }\n);\n")),(0,r.kt)("a",{name:"getJSON"}),(0,r.kt)("h2",{id:"getjsonfilepath-encoding--operation"},"getJSON(filePath, encoding) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Fetch a json file from an FTP server"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filePath"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"encoding"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Character encoding for the json")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"getJSON(\n  '/path/To/File',\n  'utf8',\n);\n")),(0,r.kt)("a",{name:"normalizeCSVarray"}),(0,r.kt)("h2",{id:"normalizecsvarrayoptions-callback--operation"},"normalizeCSVarray(options, callback) \u21d2 ",(0,r.kt)("code",null,"Operation")),(0,r.kt)("p",null,"Convert JSON array of strings into a normalized object"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"options")),(0,r.kt)("td",{parentName:"tr",align:null},"Options passed to csvtojson parser")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"callback")),(0,r.kt)("td",{parentName:"tr",align:null},"Options passed to csvtojson parser")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"normalizeCSVarray({ delimiter: ';', noheader: true });\n")))}d.isMDXComponent=!0}}]);