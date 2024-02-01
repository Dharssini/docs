"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[86248],{95788:(e,t,n)=>{n.d(t,{Iu:()=>s,yg:()=>g});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(g,p(p({ref:t},s),{},{components:n})):a.createElement(g,p({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,p[1]=i;for(var c=2;c<o;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(45072),r=(n(11504),n(95788));const o={title:"template developer readme",id:"template-readme",keywords:["adaptor","readme","template"]},p="template Adaptor developer README.md",i={unversionedId:"packages/template-readme",id:"packages/template-readme",title:"template developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/template",source:"@site/adaptors/packages/template-readme.md",sourceDirName:"packages",slug:"/packages/template-readme",permalink:"/adaptors/packages/template-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"template developer readme",id:"template-readme",keywords:["adaptor","readme","template"]},sidebar:"adaptors",previous:{title:"template changelog",permalink:"/adaptors/packages/template-changelog"},next:{title:"twilio@0.4.2",permalink:"/adaptors/packages/twilio-docs"}},l={},c=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"A example expression using the <code>create</code> function",id:"a-example-expression-using-the-create-function",level:3},{value:"Development",id:"development",level:2}],s={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.c)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"template-adaptor-developer-readmemd"},"template Adaptor developer README.md"),(0,r.yg)("p",null,"Source: ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/template"},"https://github.com/OpenFn/adaptors/tree/main/packages/template")),(0,r.yg)("h1",{id:"language-template-"},"language-template ",(0,r.yg)("img",{src:"./assets/square.png",width:"30",height:"30"})),(0,r.yg)("p",null,"An OpenFn ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"adaptor"))," for building integration jobs for use with the ","_","_","_","_","\nAPI."),(0,r.yg)("h2",{id:"documentation"},"Documentation"),(0,r.yg)("p",null,"View the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/template-docs"},"docs site"),"\nfor full technical documentation."),(0,r.yg)("h3",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"View the\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/template-configuration-schema/"},"configuration-schema"),"\nfor required and optional ",(0,r.yg)("inlineCode",{parentName:"p"},"configuration")," properties."),(0,r.yg)("h3",{id:"a-example-expression-using-the-create-function"},"A example expression using the ",(0,r.yg)("inlineCode",{parentName:"h3"},"create")," function"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"create('patient', { name: 'Bukayo' });\n")),(0,r.yg)("h2",{id:"development"},"Development"),(0,r.yg)("p",null,"Clone the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),'. Follow the\n"Getting Started" guide inside to get set up.'),(0,r.yg)("p",null,"Run tests using ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.yg)("p",null,"Build the project using ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.yg)("p",null,"To build ",(0,r.yg)("em",{parentName:"p"},"only")," the docs run ",(0,r.yg)("inlineCode",{parentName:"p"},"pnpm build docs"),"."))}d.isMDXComponent=!0}}]);