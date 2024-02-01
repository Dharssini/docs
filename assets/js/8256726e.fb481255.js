"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[78216],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>m});var r=t(11504);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),g=p,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var o=t.length,a=new Array(o);a[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:p,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},60076:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(45072),p=(t(11504),t(95788));const o={title:"openspp developer readme",id:"openspp-readme",keywords:["adaptor","readme","openspp"]},a="openspp Adaptor developer README.md",i={unversionedId:"packages/openspp-readme",id:"packages/openspp-readme",title:"openspp developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/openspp",source:"@site/adaptors/packages/openspp-readme.md",sourceDirName:"packages",slug:"/packages/openspp-readme",permalink:"/adaptors/packages/openspp-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"openspp developer readme",id:"openspp-readme",keywords:["adaptor","readme","openspp"]},sidebar:"adaptors",previous:{title:"openspp changelog",permalink:"/adaptors/packages/openspp-changelog"},next:{title:"PostgreSQL",permalink:"/adaptors/postgresql"}},s={},l=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"A example expression using the <code>getServicePoint</code> function",id:"a-example-expression-using-the-getservicepoint-function",level:3},{value:"Development",id:"development",level:2}],c={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,p.yg)(u,(0,r.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,p.yg)("h1",{id:"openspp-adaptor-developer-readmemd"},"openspp Adaptor developer README.md"),(0,p.yg)("p",null,"Source: ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/openspp"},"https://github.com/OpenFn/adaptors/tree/main/packages/openspp")),(0,p.yg)("h1",{id:"language-openspp-"},"language-openspp ",(0,p.yg)("img",{src:"assets/square.png",width:"30",height:"30"})),(0,p.yg)("p",null,"An OpenFn ",(0,p.yg)("strong",{parentName:"p"},(0,p.yg)("em",{parentName:"strong"},"adaptor"))," for building integration jobs for use with OpenSPP\nAPI."),(0,p.yg)("h2",{id:"documentation"},"Documentation"),(0,p.yg)("p",null,"View the ",(0,p.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/openspp-docs"},"docs site"),"\nfor full technical documentation."),(0,p.yg)("h3",{id:"configuration"},"Configuration"),(0,p.yg)("p",null,"View the\n",(0,p.yg)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/openspp-configuration-schema/"},"configuration-schema"),"\nfor required and optional ",(0,p.yg)("inlineCode",{parentName:"p"},"configuration")," properties."),(0,p.yg)("h3",{id:"a-example-expression-using-the-getservicepoint-function"},"A example expression using the ",(0,p.yg)("inlineCode",{parentName:"h3"},"getServicePoint")," function"),(0,p.yg)("pre",null,(0,p.yg)("code",{parentName:"pre",className:"language-js"},'getServicePoint("newagentflour");\n')),(0,p.yg)("h2",{id:"development"},"Development"),(0,p.yg)("p",null,"Clone the ",(0,p.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),'. Follow the\n"Getting Started" guide inside to get set up.'),(0,p.yg)("p",null,"Run tests using ",(0,p.yg)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,p.yg)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,p.yg)("p",null,"Build the project using ",(0,p.yg)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,p.yg)("p",null,"To build ",(0,p.yg)("em",{parentName:"p"},"only")," the docs run ",(0,p.yg)("inlineCode",{parentName:"p"},"pnpm build docs"),"."))}d.isMDXComponent=!0}}]);