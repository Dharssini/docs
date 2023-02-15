"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[33731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,p(p({ref:t},s),{},{components:n})):a.createElement(f,p({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,p=new Array(r);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<r;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={title:"ocl developer readme",id:"ocl-readme",keywords:["adaptor","readme","ocl"]},p="Developer README for the ocl adaptor",i={unversionedId:"packages/ocl-readme",id:"packages/ocl-readme",title:"ocl developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/ocl",source:"@site/adaptors/packages/ocl-readme.md",sourceDirName:"packages",slug:"/packages/ocl-readme",permalink:"/adaptors/packages/ocl-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"ocl developer readme",id:"ocl-readme",keywords:["adaptor","readme","ocl"]},sidebar:"adaptors",previous:{title:"ocl changelog",permalink:"/adaptors/packages/ocl-changelog"},next:{title:"ocl Config",permalink:"/adaptors/packages/ocl-configuration-schema"}},c={},l=[{value:"Configuration",id:"configuration",level:3},{value:"Mapping source concepts to destination API",id:"mapping-source-concepts-to-destination-api",level:2},{value:"Recieve form data from source application and convert data element keys to destination application.",id:"recieve-form-data-from-source-application-and-convert-data-element-keys-to-destination-application",level:4},{value:"Development",id:"development",level:2}],s={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"developer-readme-for-the-ocl-adaptor"},"Developer README for the ocl adaptor"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/ocl"},"https://github.com/OpenFn/adaptors/tree/main/packages/ocl")),(0,o.kt)("h1",{id:"language-ocl"},"Language OCL"),(0,o.kt)("p",null,"Language Pack for building expressions and operations for working with the\n",(0,o.kt)("a",{parentName:"p",href:"http://ocl.github.io/ocl-docs/master/en/developer/html/ocl_developer_manual.html"},"OCL API"),"."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"View all the required and optional properties for ",(0,o.kt)("inlineCode",{parentName:"p"},"state.configuration")," in the\nofficial\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/ocl-configuration-schema/"},"configuration-schema"),"\ndefinition."),(0,o.kt)("h2",{id:"mapping-source-concepts-to-destination-api"},"Mapping source concepts to destination API"),(0,o.kt)("h4",{id:"recieve-form-data-from-source-application-and-convert-data-element-keys-to-destination-application"},"Recieve form data from source application and convert data element keys to destination application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'map(  "data": {\n    "a": 1,\n    "b": 2},\n  {users:"haftamuk", sources: "eCHIS-CODES", concepts: "fp_new_at_10_to_14" }\n  );\n')),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,"Clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,o.kt)("p",null,"Run tests using ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,o.kt)("p",null,"Build the project using ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,o.kt)("p",null,"To just build the docs run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}u.isMDXComponent=!0}}]);