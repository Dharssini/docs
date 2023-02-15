"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[47077],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(m,p(p({ref:n},s),{},{components:t})):r.createElement(m,p({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},38796:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={title:"openfn developer readme",id:"openfn-readme",keywords:["adaptor","readme","openfn"]},p="Developer README for the openfn adaptor",i={unversionedId:"packages/openfn-readme",id:"packages/openfn-readme",title:"openfn developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/openfn",source:"@site/adaptors/packages/openfn-readme.md",sourceDirName:"packages",slug:"/packages/openfn-readme",permalink:"/adaptors/packages/openfn-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"openfn developer readme",id:"openfn-readme",keywords:["adaptor","readme","openfn"]},sidebar:"adaptors",previous:{title:"openfn changelog",permalink:"/adaptors/packages/openfn-changelog"},next:{title:"openfn Config",permalink:"/adaptors/packages/openfn-configuration-schema"}},l={},c=[{value:"Documentation",id:"documentation",level:2},{value:"request",id:"request",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Development",id:"development",level:2}],s={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"developer-readme-for-the-openfn-adaptor"},"Developer README for the openfn adaptor"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/openfn"},"https://github.com/OpenFn/adaptors/tree/main/packages/openfn")),(0,o.kt)("h1",{id:"language-openfn"},"Language OpenFn"),(0,o.kt)("p",null,"Adaptor for building expressions and operations to interact with the OpenFn v1\nAPI."),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("h2",{id:"request"},"request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"request({\n  method: 'get',\n  path: 'jobs',\n  params: {\n    project_id: 490,\n  },\n});\nrequest(\n  {\n    method: 'post',\n    path: 'jobs',\n    data: {\n      trigger_id: 1,\n      expression: 'steps()',\n    },\n  },\n  state => {\n    console.log('cool callback!');\n    return state;\n  }\n);\n")),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"View all the required and optional properties for ",(0,o.kt)("inlineCode",{parentName:"p"},"state.configuration")," in the\nofficial\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/openfn-configuration-schema/"},"configuration-schema"),"\ndefinition."),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,"Clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,o.kt)("p",null,"Run tests using ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,o.kt)("p",null,"Build the project using ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,o.kt)("p",null,"To just build the docs run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}d.isMDXComponent=!0}}]);