"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[20396],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),d=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=d(r),g=a,m=u["".concat(p,".").concat(g)]||u[g]||s[g]||l;return r?n.createElement(m,o(o({ref:e},c),{},{components:r})):n.createElement(m,o({ref:e},c))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=g;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},68443:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const l={title:"bigquery@2.0.4",id:"bigquery-docs",keywords:["adaptor","bigquery","load"]},o=void 0,i={unversionedId:"packages/bigquery-docs",id:"packages/bigquery-docs",title:"bigquery@2.0.4",description:"load",source:"@site/adaptors/packages/bigquery-docs.md",sourceDirName:"packages",slug:"/packages/bigquery-docs",permalink:"/adaptors/packages/bigquery-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"bigquery@2.0.4",id:"bigquery-docs",keywords:["adaptor","bigquery","load"]},sidebar:"adaptors",previous:{title:"beyonic developer readme",permalink:"/adaptors/packages/beyonic-readme"},next:{title:"Config for bigquery",permalink:"/adaptors/packages/bigquery-configuration-schema"}},p={},d=[{value:"load",id:"load",level:2}],c={toc:d},u="wrapper";function s(t){let{components:e,...r}=t;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"load"},"load"),(0,a.kt)("p",null,"load(dirPath, projectId, datasetId, tableId, loadOptions, callback) \u21d2 ",(0,a.kt)("code",null,"Operation")),(0,a.kt)("p",null,"Load files to BigQuery"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dirPath"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"the path to your local directory")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"projectId"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"your bigquery project id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"datasetId"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"your bigquery dataset id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tableId"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},"the name of the table you'd like to load")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"loadOptions"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"object")),(0,a.kt)("td",{parentName:"tr",align:null},"options to pass to the bigquery.load() API")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"callback"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"function")),(0,a.kt)("td",{parentName:"tr",align:null},"and optional callback")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"load(\n  './tmp/files',\n  'my-bg-project',\n  'test01',\n  'product-codes',\n  {\n    schema: 'FREQ:STRING,DATATYPE:STRING,PRODUCTCODE:STRING,PARTNER:STRING',\n    writeDisposition: 'WRITE_APPEND',\n    skipLeadingRows: 1,\n    schemaUpdateOptions: ['ALLOW_FIELD_ADDITION'],\n    createDisposition: 'CREATE_IF_NEEDED',\n  }\n)\n")),(0,a.kt)("hr",null))}s.isMDXComponent=!0}}]);