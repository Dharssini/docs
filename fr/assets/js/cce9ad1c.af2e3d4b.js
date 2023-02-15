"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[25920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),i=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},g=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=i(n),u=r,m=c["".concat(l,".").concat(u)]||c[u]||d[u]||a;return n?o.createElement(m,p(p({ref:t},g),{},{components:n})):o.createElement(m,p({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,p[1]=s;for(var i=2;i<a;i++)p[i]=n[i];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var o=n(87462),r=(n(67294),n(3905));const a={title:"googlesheets developer readme",id:"googlesheets-readme",keywords:["adaptor","readme","googlesheets"]},p="Developer README for the googlesheets adaptor",s={unversionedId:"packages/googlesheets-readme",id:"packages/googlesheets-readme",title:"googlesheets developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/googlesheets",source:"@site/adaptors/packages/googlesheets-readme.md",sourceDirName:"packages",slug:"/packages/googlesheets-readme",permalink:"/fr/adaptors/packages/googlesheets-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"googlesheets developer readme",id:"googlesheets-readme",keywords:["adaptor","readme","googlesheets"]},sidebar:"adaptors",previous:{title:"googlesheets changelog",permalink:"/fr/adaptors/packages/googlesheets-changelog"},next:{title:"googlesheets Config",permalink:"/fr/adaptors/packages/googlesheets-configuration-schema"}},l={},i=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"appendValues()",id:"appendvalues",level:3},{value:"Development",id:"development",level:2}],g={toc:i},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-readme-for-the-googlesheets-adaptor"},"Developer README for the googlesheets adaptor"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/googlesheets"},"https://github.com/OpenFn/adaptors/tree/main/packages/googlesheets")),(0,r.kt)("h1",{id:"language-google-sheets"},"Language Google Sheets"),(0,r.kt)("p",null,"Language Pack for building expressions and operations to make Google Sheets API\ncalls."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"View all the required and optional properties for ",(0,r.kt)("inlineCode",{parentName:"p"},"state.configuration")," in the\nofficial\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/googlesheets-configuration-schema/"},"configuration-schema"),"\ndefinition."),(0,r.kt)("h3",{id:"appendvalues"},"appendValues()"),(0,r.kt)("p",null,"Add rows to an existing sheet:\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId/values/Sheet1!A1:E1:append?valueInputOption=USER_ENTERED")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"appendValues({\n  spreadsheetId: '1O-a4_RgPF_p8W3I6b5M9wobA3-CBW8hLClZfUik5sos',\n  range: 'Sheet1!A1:E1',\n  values: [\n    ['From expression', '$15', '2', '3/15/2016'],\n    ['Really now!', '$100', '1', '3/20/2016'],\n  ],\n});\n")),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.kt)("p",null,"Build the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.kt)("p",null,"To just build the docs run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}d.isMDXComponent=!0}}]);