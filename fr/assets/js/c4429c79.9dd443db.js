"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[33926],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,p(p({ref:t},l),{},{components:r})):n.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96722:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"resourcemap developer readme",id:"resourcemap-readme",keywords:["adaptor","readme","resourcemap"]},p="resourcemap Adaptor developer README.md",i={unversionedId:"packages/resourcemap-readme",id:"packages/resourcemap-readme",title:"resourcemap developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/resourcemap",source:"@site/adaptors/packages/resourcemap-readme.md",sourceDirName:"packages",slug:"/packages/resourcemap-readme",permalink:"/fr/adaptors/packages/resourcemap-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"resourcemap developer readme",id:"resourcemap-readme",keywords:["adaptor","readme","resourcemap"]},sidebar:"adaptors",previous:{title:"resourcemap changelog",permalink:"/fr/adaptors/packages/resourcemap-changelog"},next:{title:"Salesforce",permalink:"/fr/adaptors/salesforce"}},s={},c=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Expressions",id:"expressions",level:2},{value:"<code>submitSite(collectionId, fields)</code>",id:"submitsitecollectionid-fields",level:2},{value:"Development",id:"development",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resourcemap-adaptor-developer-readmemd"},"resourcemap Adaptor developer README.md"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/resourcemap"},"https://github.com/OpenFn/adaptors/tree/main/packages/resourcemap")),(0,a.kt)("h1",{id:"language-resourcemap"},"Language ResourceMap"),(0,a.kt)("p",null,"Language Pack for building expressions and operations for working with the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/instedd/resourcemap/wiki/REST_API"},"resourcemap API"),"."),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("p",null,"We are working towards this to start:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/instedd/resourcemap/wiki/REST_API#create-site"},"https://github.com/instedd/resourcemap/wiki/REST_API#create-site")),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"View all the required and optional properties for ",(0,a.kt)("inlineCode",{parentName:"p"},"state.configuration")," in the\nofficial\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/resourcemap-configuration-schema/"},"configuration-schema"),"\ndefinition."),(0,a.kt)("h2",{id:"expressions"},"Expressions"),(0,a.kt)("h2",{id:"submitsitecollectionid-fields"},(0,a.kt)("inlineCode",{parentName:"h2"},"submitSite(collectionId, fields)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"submitSite(\n  303,\n  fields(\n    field('name', dataValue('sampleText')),\n    field('lat', 48.86),\n    field('lon', 2.35),\n    field('properties', function (state) {\n      return {\n        Comment: state.data.sampleText,\n        phone: '85512345678',\n      };\n    })\n  )\n);\n")),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"Clone the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,a.kt)("p",null,"Run tests using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,a.kt)("p",null,"Build the project using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.kt)("p",null,"To just build the docs run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}d.isMDXComponent=!0}}]);