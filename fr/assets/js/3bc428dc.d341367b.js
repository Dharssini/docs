"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[87070],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,p(p({ref:t},u),{},{components:n})):r.createElement(g,p({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},55775:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"progres developer readme",id:"progres-readme",keywords:["adaptor","readme","progres"]},p="Developer README for the progres adaptor",i={unversionedId:"packages/progres-readme",id:"packages/progres-readme",title:"progres developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/progres",source:"@site/adaptors/packages/progres-readme.md",sourceDirName:"packages",slug:"/packages/progres-readme",permalink:"/fr/adaptors/packages/progres-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"progres developer readme",id:"progres-readme",keywords:["adaptor","readme","progres"]},sidebar:"adaptors",previous:{title:"progres changelog",permalink:"/fr/adaptors/packages/progres-changelog"},next:{title:"rapidpro@0.5.0",permalink:"/fr/adaptors/packages/rapidpro-docs"}},s={},l=[{value:"Design notes",id:"design-notes",level:2},{value:"Documentation",id:"documentation",level:2},{value:"sample configuration",id:"sample-configuration",level:3},{value:"Posting data to an endpoint with SSL cert authentication",id:"posting-data-to-an-endpoint-with-ssl-cert-authentication",level:3},{value:"Development",id:"development",level:2}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"developer-readme-for-the-progres-adaptor"},"Developer README for the progres adaptor"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/progres"},"https://github.com/OpenFn/adaptors/tree/main/packages/progres")),(0,a.kt)("h1",{id:"language-progres"},"language-progres"),(0,a.kt)("p",null,"An OpenFn ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"adaptor"))," for building integration jobs for use with the UNHCR\nProGres v4 API."),(0,a.kt)("h2",{id:"design-notes"},"Design notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Integration must run through UNHCR's DTP, a middleware layer that provides a\npublic API for UNHCR internal software."),(0,a.kt)("li",{parentName:"ul"},"An API token ",(0,a.kt)("em",{parentName:"li"},"and")," a self-signed certificate must be provided for\ncommunication with UNHCR's DTP."),(0,a.kt)("li",{parentName:"ul"},"Two-way sync must be possible between Primero and ProGres"),(0,a.kt)("li",{parentName:"ul"},"Teams still in discussion about whether the most common use-case will be a\ntimed sync or real-time/event-based sync.")),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"View the documentation at ",(0,a.kt)("a",{parentName:"li",href:"https://openfn.github.io/language-progres/"},"https://openfn.github.io/language-progres/")),(0,a.kt)("li",{parentName:"ul"},"To update the documentation site, run:\n",(0,a.kt)("inlineCode",{parentName:"li"},"./node_modules/.bin/jsdoc --readme ./README.md ./lib -d docs"))),(0,a.kt)("h3",{id:"sample-configuration"},"sample configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "url": "https://endpoint/To/DTP",\n  "key": "-----BEGIN PRIVATE KEY-----SOMETYPEOFPRIVATEVALUE-----END PRIVATE KEY-----",\n  "cert": "-----BEGIN CERTIFICATE-----SOMETYPEOFVALUE-----END CERTIFICATE-----",\n  "token": "[REDACTED]"\n}\n')),(0,a.kt)("h3",{id:"posting-data-to-an-endpoint-with-ssl-cert-authentication"},"Posting data to an endpoint with SSL cert authentication"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"postData({\n  url: urlDTP,\n  body: { a: 1 },\n  headers: {\n    'Subscription-Key': configuration['token'],\n  },\n  agentOptions: {\n    key,\n    cert,\n  },\n});\n")),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"Clone the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,a.kt)("p",null,"Run tests using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,a.kt)("p",null,"Build the project using ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.kt)("p",null,"To just build the docs run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}d.isMDXComponent=!0}}]);