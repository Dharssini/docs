"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[44232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=p,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:p,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),p=(n(67294),n(3905));const o={title:"openspp developer readme",id:"openspp-readme",keywords:["adaptor","readme","openspp"]},a="openspp Adaptor developer README.md",i={unversionedId:"packages/openspp-readme",id:"packages/openspp-readme",title:"openspp developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/openspp",source:"@site/adaptors/packages/openspp-readme.md",sourceDirName:"packages",slug:"/packages/openspp-readme",permalink:"/adaptors/packages/openspp-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"openspp developer readme",id:"openspp-readme",keywords:["adaptor","readme","openspp"]},sidebar:"adaptors",previous:{title:"openspp changelog",permalink:"/adaptors/packages/openspp-changelog"},next:{title:"PostgreSQL",permalink:"/adaptors/postgresql"}},s={},l=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"A example expression using the <code>getServicePoint</code> function",id:"a-example-expression-using-the-getservicepoint-function",level:3},{value:"Development",id:"development",level:2}],c={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,p.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"openspp-adaptor-developer-readmemd"},"openspp Adaptor developer README.md"),(0,p.kt)("p",null,"Source: ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/openspp"},"https://github.com/OpenFn/adaptors/tree/main/packages/openspp")),(0,p.kt)("h1",{id:"language-openspp-"},"language-openspp ",(0,p.kt)("img",{src:"assets/square.png",width:"30",height:"30"})),(0,p.kt)("p",null,"An OpenFn ",(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("em",{parentName:"strong"},"adaptor"))," for building integration jobs for use with OpenSPP\nAPI."),(0,p.kt)("h2",{id:"documentation"},"Documentation"),(0,p.kt)("p",null,"View the ",(0,p.kt)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/openspp-docs"},"docs site"),"\nfor full technical documentation."),(0,p.kt)("h3",{id:"configuration"},"Configuration"),(0,p.kt)("p",null,"View the\n",(0,p.kt)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/openspp-configuration-schema/"},"configuration-schema"),"\nfor required and optional ",(0,p.kt)("inlineCode",{parentName:"p"},"configuration")," properties."),(0,p.kt)("h3",{id:"a-example-expression-using-the-getservicepoint-function"},"A example expression using the ",(0,p.kt)("inlineCode",{parentName:"h3"},"getServicePoint")," function"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},'getServicePoint("newagentflour");\n')),(0,p.kt)("h2",{id:"development"},"Development"),(0,p.kt)("p",null,"Clone the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),'. Follow the\n"Getting Started" guide inside to get set up.'),(0,p.kt)("p",null,"Run tests using ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,p.kt)("p",null,"Build the project using ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,p.kt)("p",null,"To build ",(0,p.kt)("em",{parentName:"p"},"only")," the docs run ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm build docs"),"."))}u.isMDXComponent=!0}}]);