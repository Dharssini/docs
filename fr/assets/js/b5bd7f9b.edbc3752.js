"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[23872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||r;return n?o.createElement(m,p(p({ref:t},l),{},{components:n})):o.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<r;s++)p[s]=n[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={title:"facebook developer readme",id:"facebook-readme",keywords:["adaptor","readme","facebook"]},p="Developer README for the facebook adaptor",i={unversionedId:"packages/facebook-readme",id:"packages/facebook-readme",title:"facebook developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/facebook",source:"@site/adaptors/packages/facebook-readme.md",sourceDirName:"packages",slug:"/packages/facebook-readme",permalink:"/fr/adaptors/packages/facebook-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"facebook developer readme",id:"facebook-readme",keywords:["adaptor","readme","facebook"]},sidebar:"adaptors",previous:{title:"facebook changelog",permalink:"/fr/adaptors/packages/facebook-changelog"},next:{title:"facebook Config",permalink:"/fr/adaptors/packages/facebook-configuration-schema"}},c={},s=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"postMessage",id:"postmessage",level:3},{value:"sample expression using operation",id:"sample-expression-using-operation",level:4},{value:"Development",id:"development",level:2}],l={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"developer-readme-for-the-facebook-adaptor"},"Developer README for the facebook adaptor"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/facebook"},"https://github.com/OpenFn/adaptors/tree/main/packages/facebook")),(0,a.kt)("h1",{id:"language-facebook"},"Language Facebook"),(0,a.kt)("p",null,"Language Pack for building expressions and operations to interact with the\nFacebook Messenger API."),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"View all the required and optional properties for ",(0,a.kt)("inlineCode",{parentName:"p"},"state.configuration")," in the\nofficial\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/facebook-configuration-schema/"},"configuration-schema"),"\ndefinition."),(0,a.kt)("h3",{id:"postmessage"},"postMessage"),(0,a.kt)("h4",{id:"sample-expression-using-operation"},"sample expression using operation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"postMessage({\n  recipient: {\n    id: '<PSID>',\n  },\n  message: {\n    text: '<YOUR MESSAGE GOES HERE>',\n  },\n});\n")),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"Clone the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,a.kt)("p",null,"Run tests using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,a.kt)("p",null,"Build the project using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.kt)("p",null,"To just build the docs run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}d.isMDXComponent=!0}}]);