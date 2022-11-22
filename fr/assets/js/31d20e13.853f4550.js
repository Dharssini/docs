"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[45112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"beyonic developer readme",id:"beyonic-readme",keywords:["adaptor","readme","beyonic"]},i="Developer README for the beyonic adaptor",c={unversionedId:"packages/beyonic-readme",id:"packages/beyonic-readme",title:"beyonic developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/beyonic",source:"@site/adaptors/packages/beyonic-readme.md",sourceDirName:"packages",slug:"/packages/beyonic-readme",permalink:"/fr/adaptors/packages/beyonic-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"beyonic developer readme",id:"beyonic-readme",keywords:["adaptor","readme","beyonic"]},sidebar:"adaptors",previous:{title:"beyonic changelog",permalink:"/fr/adaptors/packages/beyonic-changelog"},next:{title:"bigquery@1.1.0",permalink:"/fr/adaptors/packages/bigquery-docs"}},l={},p=[{value:"Documentation",id:"documentation",level:2},{value:"Sample configuration",id:"sample-configuration",level:2},{value:"Payments API",id:"payments-api",level:2},{value:"<code>createPayment(...)</code>",id:"createpayment",level:4},{value:"Collection Requests API",id:"collection-requests-api",level:2},{value:"<code>createCollectionRequest(...)</code>",id:"createcollectionrequest",level:4},{value:"Contacts API",id:"contacts-api",level:2},{value:"<code>createContact(...)</code>",id:"createcontact",level:4},{value:"Development",id:"development",level:2}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-readme-for-the-beyonic-adaptor"},"Developer README for the beyonic adaptor"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/beyonic"},"https://github.com/OpenFn/adaptors/tree/main/packages/beyonic")),(0,r.kt)("h1",{id:"language-beyonic"},"Language Beyonic"),(0,r.kt)("p",null,"Language Pack for building expressions and operations for working with\nthe ",(0,r.kt)("a",{parentName:"p",href:"http://apidocs.beyonic.com/"},"beyonic API"),"."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("h2",{id:"sample-configuration"},"Sample configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "apiUrl": "https://beyonic.com/api",\n  "apiToken": "cdjhiooiSIUJHDYSYUIHASIOHKAANOAJJjsiujhaka"\n}\n')),(0,r.kt)("h2",{id:"payments-api"},"Payments API"),(0,r.kt)("h4",{id:"createpayment"},(0,r.kt)("inlineCode",{parentName:"h4"},"createPayment(...)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'createPayment(fields(\n  field("phonenumber", "+256773712831"),\n  field("first_name", "Gideon"),\n  field("last_name", "Zelalem"),\n  field("amount", 100.2),\n  field("currency", "USD"),\n  field("account", 1),\n  field("description", "Long-term contract for Arseal"),\n  field("payment_type", "money"),\n  field("callback_url", "https://my.website/payments/callback")\n))\n')),(0,r.kt)("h2",{id:"collection-requests-api"},"Collection Requests API"),(0,r.kt)("h4",{id:"createcollectionrequest"},(0,r.kt)("inlineCode",{parentName:"h4"},"createCollectionRequest(...)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'createCollectionRequest(fields(\n  field("instructions", "Send me some money, please!"),\n  field("phonenumber", "+256773712831"),\n  field("amount", 5.0),\n  field("currency", "USD")\n))\n')),(0,r.kt)("h2",{id:"contacts-api"},"Contacts API"),(0,r.kt)("h4",{id:"createcontact"},(0,r.kt)("inlineCode",{parentName:"h4"},"createContact(...)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'createContact(fields(\n  field("first_name", "Granit"),\n  field("last_name", "Xhaka"),\n  field("phone_number", "+256773712831"),\n  field("email", "granit@arsenal.com")\n))\n')),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the ",(0,r.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.kt)("p",null,"Build the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.kt)("p",null,"To just build the docs run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}s.isMDXComponent=!0}}]);