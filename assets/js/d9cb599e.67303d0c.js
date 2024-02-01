"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[23040],{95788:(e,r,t)=>{t.d(r,{Iu:()=>g,yg:()=>u});var n=t(11504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},g=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),l=c(t),d=a,u=l["".concat(s,".").concat(d)]||l[d]||m[d]||o;return t?n.createElement(u,p(p({ref:r},g),{},{components:t})):n.createElement(u,p({ref:r},g))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[l]="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62868:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(45072),a=(t(11504),t(95788));const o={title:"msgraph developer readme",id:"msgraph-readme",keywords:["adaptor","readme","msgraph"]},p="msgraph Adaptor developer README.md",i={unversionedId:"packages/msgraph-readme",id:"packages/msgraph-readme",title:"msgraph developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/msgraph",source:"@site/adaptors/packages/msgraph-readme.md",sourceDirName:"packages",slug:"/packages/msgraph-readme",permalink:"/adaptors/packages/msgraph-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"msgraph developer readme",id:"msgraph-readme",keywords:["adaptor","readme","msgraph"]},sidebar:"adaptors",previous:{title:"msgraph changelog",permalink:"/adaptors/packages/msgraph-changelog"},next:{title:"mssql@4.1.8",permalink:"/adaptors/packages/mssql-docs"}},s={},c=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Development",id:"development",level:2}],g={toc:c},l="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(l,(0,n.c)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"msgraph-adaptor-developer-readmemd"},"msgraph Adaptor developer README.md"),(0,a.yg)("p",null,"Source: ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/msgraph"},"https://github.com/OpenFn/adaptors/tree/main/packages/msgraph")),(0,a.yg)("h1",{id:"language-msgraph-"},"language-msgraph ",(0,a.yg)("img",{src:"assets/sq-256x256.png",width:"30",height:"30"})),(0,a.yg)("p",null,"An OpenFn ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"adaptor"))," for building integration jobs for use with the\n",(0,a.yg)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/graph/use-the-api"},"Microsoft Graph API"),"."),(0,a.yg)("h2",{id:"documentation"},"Documentation"),(0,a.yg)("p",null,"View the ",(0,a.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/msgraph-docs"},"docs site")," for\nfull technical documentation."),(0,a.yg)("h3",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"View the\n",(0,a.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/msgraph-configuration-schema/"},"configuration-schema"),"\nfor required and optional ",(0,a.yg)("inlineCode",{parentName:"p"},"configuration")," properties."),(0,a.yg)("h2",{id:"development"},"Development"),(0,a.yg)("p",null,"Clone the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),'. Follow the\n"Getting Started" guide inside to get set up.'),(0,a.yg)("p",null,"Run tests using ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,a.yg)("p",null,"Build the project using ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,a.yg)("p",null,"To build ",(0,a.yg)("em",{parentName:"p"},"only")," the docs run ",(0,a.yg)("inlineCode",{parentName:"p"},"pnpm build docs"),"."))}m.isMDXComponent=!0}}]);