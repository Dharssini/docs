"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[52943],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20305:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"fhir developer readme",id:"fhir-readme",keywords:["adaptor","readme","fhir"]},i="Developer README for the fhir adaptor",p={unversionedId:"packages/fhir-readme",id:"packages/fhir-readme",title:"fhir developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/fhir",source:"@site/adaptors/packages/fhir-readme.md",sourceDirName:"packages",slug:"/packages/fhir-readme",permalink:"/adaptors/packages/fhir-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"fhir developer readme",id:"fhir-readme",keywords:["adaptor","readme","fhir"]},sidebar:"adaptors",previous:{title:"fhir changelog",permalink:"/adaptors/packages/fhir-changelog"},next:{title:"fhir Config",permalink:"/adaptors/packages/fhir-configuration-schema"}},s={},l=[{value:"FHIR Documentation",id:"fhir-documentation",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Creates a resource in a destination system using a POST request",id:"creates-a-resource-in-a-destination-system-using-a-post-request",level:4},{value:"Creates a transactionBundle for HAPI FHIR",id:"creates-a-transactionbundle-for-hapi-fhir",level:4},{value:"Development",id:"development",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"developer-readme-for-the-fhir-adaptor"},"Developer README for the fhir adaptor"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/fhir"},"https://github.com/OpenFn/adaptors/tree/main/packages/fhir")),(0,a.kt)("h1",{id:"language-fhir"},"language-fhir"),(0,a.kt)("p",null,"An OpenFn ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"adaptor"))," for building integration jobs for use with the HAPI FHIR\nAPI."),(0,a.kt)("h2",{id:"fhir-documentation"},"FHIR Documentation"),(0,a.kt)("p",null,"The Restfull API can be seen here: ",(0,a.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/http.html"},"https://www.hl7.org/fhir/http.html")),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"View all the required and optional properties for ",(0,a.kt)("inlineCode",{parentName:"p"},"state.configuration")," in the\nofficial\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/fhir-configuration-schema/"},"configuration-schema"),"\ndefinition."),(0,a.kt)("h4",{id:"creates-a-resource-in-a-destination-system-using-a-post-request"},"Creates a resource in a destination system using a POST request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"create('/endpoint', { foo: 'bar' });\n")),(0,a.kt)("h4",{id:"creates-a-transactionbundle-for-hapi-fhir"},"Creates a transactionBundle for HAPI FHIR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"createTransactionBundle({\n  entry: [transactionBundle],\n});\n")),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"Clone the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,a.kt)("p",null,"Run tests using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,a.kt)("p",null,"Build the project using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.kt)("p",null,"To just build the docs run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}d.isMDXComponent=!0}}]);