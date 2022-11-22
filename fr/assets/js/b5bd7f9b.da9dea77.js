"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[23872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,p(p({ref:t},l),{},{components:n})):a.createElement(f,p({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,p=new Array(r);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<r;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"facebook developer readme",id:"facebook-readme",keywords:["adaptor","readme","facebook"]},p="Developer README for the facebook adaptor",i={unversionedId:"packages/facebook-readme",id:"packages/facebook-readme",title:"facebook developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/facebook",source:"@site/adaptors/packages/facebook-readme.md",sourceDirName:"packages",slug:"/packages/facebook-readme",permalink:"/fr/adaptors/packages/facebook-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"facebook developer readme",id:"facebook-readme",keywords:["adaptor","readme","facebook"]},sidebar:"adaptors",previous:{title:"facebook changelog",permalink:"/fr/adaptors/packages/facebook-changelog"},next:{title:"fhir@1.1.1",permalink:"/fr/adaptors/packages/fhir-docs"}},c={},s=[{value:"Documentation",id:"documentation",level:2},{value:"sample configuration",id:"sample-configuration",level:2},{value:"postMessage",id:"postmessage",level:2},{value:"sample expression using operation",id:"sample-expression-using-operation",level:4},{value:"Development",id:"development",level:2}],l={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"developer-readme-for-the-facebook-adaptor"},"Developer README for the facebook adaptor"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/facebook"},"https://github.com/OpenFn/adaptors/tree/main/packages/facebook")),(0,o.kt)("h1",{id:"language-facebook"},"Language Facebook"),(0,o.kt)("p",null,"Language Pack for building expressions and operations to interact with the Facebook Messenger API."),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("h2",{id:"sample-configuration"},"sample configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accessToken": "yOuR-aCcEsS-tOkEn"\n}\n')),(0,o.kt)("h2",{id:"postmessage"},"postMessage"),(0,o.kt)("h4",{id:"sample-expression-using-operation"},"sample expression using operation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'postMessage({\n  recipient: {\n    id: "<PSID>",\n  },\n  message: {\n    text: "<YOUR MESSAGE GOES HERE>",\n  },\n});\n')),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,"Clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the ",(0,o.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,o.kt)("p",null,"Run tests using ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,o.kt)("p",null,"Build the project using ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,o.kt)("p",null,"To just build the docs run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}u.isMDXComponent=!0}}]);