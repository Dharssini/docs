"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[33731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,p(p({ref:t},s),{},{components:n})):a.createElement(f,p({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"ocl developer readme",id:"ocl-readme",keywords:["adaptor","readme","ocl"]},p="Developer README for the ocl adaptor",i={unversionedId:"packages/ocl-readme",id:"packages/ocl-readme",title:"ocl developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/ocl",source:"@site/adaptors/packages/ocl-readme.md",sourceDirName:"packages",slug:"/packages/ocl-readme",permalink:"/fr/adaptors/packages/ocl-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"ocl developer readme",id:"ocl-readme",keywords:["adaptor","readme","ocl"]},sidebar:"adaptors",previous:{title:"ocl changelog",permalink:"/fr/adaptors/packages/ocl-changelog"},next:{title:"Open Data Kit (ODK)",permalink:"/fr/adaptors/odk"}},c={},l=[{value:"Sample configuration",id:"sample-configuration",level:2},{value:"Mapping source concepts to destination API",id:"mapping-source-concepts-to-destination-api",level:2},{value:"Recieve form data from source application and convert data element keys to destination application.",id:"recieve-form-data-from-source-application-and-convert-data-element-keys-to-destination-application",level:4},{value:"Development",id:"development",level:2}],s={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-readme-for-the-ocl-adaptor"},"Developer README for the ocl adaptor"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/ocl"},"https://github.com/OpenFn/adaptors/tree/main/packages/ocl")),(0,r.kt)("h1",{id:"language-ocl"},"Language OCL"),(0,r.kt)("p",null,"Language Pack for building expressions and operations for working with the\n",(0,r.kt)("a",{parentName:"p",href:"http://ocl.github.io/ocl-docs/master/en/developer/html/ocl_developer_manual.html"},"OCL API"),"."),(0,r.kt)("h2",{id:"sample-configuration"},"Sample configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "username",\n  "password": "supersecretpassword",\n  "hostUrl": "https://api.openconceptlab.org/"\n}\n')),(0,r.kt)("h2",{id:"mapping-source-concepts-to-destination-api"},"Mapping source concepts to destination API"),(0,r.kt)("h4",{id:"recieve-form-data-from-source-application-and-convert-data-element-keys-to-destination-application"},"Recieve form data from source application and convert data element keys to destination application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'map(  "data": {\n    "a": 1,\n    "b": 2},\n  {users:"haftamuk", sources: "eCHIS-CODES", concepts: "fp_new_at_10_to_14" }\n  );\n')),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.kt)("p",null,"Build the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.kt)("p",null,"To just build the docs run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}d.isMDXComponent=!0}}]);