"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[25920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),i=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=i(n),u=r,m=d["".concat(l,".").concat(u)]||d[u]||g[u]||a;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var i=2;i<a;i++)s[i]=n[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var o=n(87462),r=(n(67294),n(3905));const a={title:"googlesheets developer readme",id:"googlesheets-readme",keywords:["adaptor","readme","googlesheets"]},s="Developer README for the googlesheets adaptor",p={unversionedId:"packages/googlesheets-readme",id:"packages/googlesheets-readme",title:"googlesheets developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/googlesheets",source:"@site/adaptors/packages/googlesheets-readme.md",sourceDirName:"packages",slug:"/packages/googlesheets-readme",permalink:"/fr/adaptors/packages/googlesheets-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"googlesheets developer readme",id:"googlesheets-readme",keywords:["adaptor","readme","googlesheets"]},sidebar:"library",previous:{title:"googlesheets changelog",permalink:"/fr/adaptors/packages/googlesheets-changelog"},next:{title:"http@4.2.2",permalink:"/fr/adaptors/packages/http-docs"}},l={},i=[{value:"Documentation",id:"documentation",level:2},{value:"sample configuration",id:"sample-configuration",level:3},{value:"Development",id:"development",level:2}],c={toc:i};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-readme-for-the-googlesheets-adaptor"},"Developer README for the googlesheets adaptor"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/googlesheets"},"https://github.com/OpenFn/adaptors/tree/main/packages/googlesheets")),(0,r.kt)("h1",{id:"language-google-sheets"},"Language Google Sheets"),(0,r.kt)("p",null,"Language Pack for building expressions and operations to make Google Sheets API\ncalls."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("h3",{id:"sample-configuration"},"sample configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{\n  \"accessToken\": \"nu-uh\"\n}\n\n### appendValues()\n\nAdd rows to an existing sheet:\n`https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId/values/Sheet1!A1:E1:append?valueInputOption=USER_ENTERED`\n\n```js\nappendValues({\n  spreadsheetId: '1O-a4_RgPF_p8W3I6b5M9wobA3-CBW8hLClZfUik5sos',\n  range: 'Sheet1!A1:E1',\n  values: [\n    ['From expression', '$15', '2', '3/15/2016'],\n    ['Really now!', '$100', '1', '3/20/2016'],\n  ],\n});\n")),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.kt)("p",null,"Build the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.kt)("p",null,"To just build the docs run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}g.isMDXComponent=!0}}]);