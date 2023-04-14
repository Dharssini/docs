"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[79559],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},31316:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"ocl@0.2.6",id:"ocl-docs",keywords:["adaptor","ocl","map"]},o=void 0,p={unversionedId:"packages/ocl-docs",id:"packages/ocl-docs",title:"ocl@0.2.6",description:"Functions",source:"@site/adaptors/packages/ocl-docs.md",sourceDirName:"packages",slug:"/packages/ocl-docs",permalink:"/fr/adaptors/packages/ocl-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"ocl@0.2.6",id:"ocl-docs",keywords:["adaptor","ocl","map"]},sidebar:"adaptors",previous:{title:"nexmo developer readme",permalink:"/fr/adaptors/packages/nexmo-readme"},next:{title:"Config for ocl",permalink:"/fr/adaptors/packages/ocl-configuration-schema"}},i={},c=[{value:"Functions",id:"functions",level:2},{value:"auth",id:"auth",level:2},{value:"map",id:"map",level:2},{value:"map~retrievedMapping",id:"mapretrievedmapping",level:3},{value:"params",id:"params",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#map"},"map(state, [params])"))),(0,r.kt)("h2",{id:"auth"},"auth"),(0,r.kt)("p",null,"auth\nDo we have a mechanism to retrieve those from configuration"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global variable  "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"map"},"map"),(0,r.kt)("p",null,"map(state, ","[params]",") \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nReplaces source keys(data elements) to destination keys(data elements) with out changing state.data structure"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Object")),(0,r.kt)("td",{parentName:"tr",align:null},"Json object containing keys and data values;")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[params]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Object")),(0,r.kt)("td",{parentName:"tr",align:null},'E.g. `{users:"haftamuk", sources: "eCHIS-CODES", concepts: "fp_new_at_10_to_14" }')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"mapp(state, state)\n")),(0,r.kt)("hr",null),(0,r.kt)("a",{name:"map..retrievedMapping"}),(0,r.kt)("h3",{id:"mapretrievedmapping"},"map~retrievedMapping"),(0,r.kt)("p",null,"In order to minimize web trafic, already accessed mapping\ninformation is put into this variable to\nreuse values for the consucutive keys."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": inner constant of ",(0,r.kt)("a",{parentName:"p",href:"#map"},(0,r.kt)("code",null,"map")),"  "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"params"},"params"),(0,r.kt)("p",null,"params\nSpecify query parameters that may include OCL Data Source, MappingType, includion and exclusion values"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global variable  "),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);