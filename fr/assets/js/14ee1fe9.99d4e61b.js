"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[19873],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,f=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1305:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={title:"maximo developer readme",id:"maximo-readme",keywords:["adaptor","readme","maximo"]},i="maximo Adaptor developer README.md",p={unversionedId:"packages/maximo-readme",id:"packages/maximo-readme",title:"maximo developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/maximo",source:"@site/adaptors/packages/maximo-readme.md",sourceDirName:"packages",slug:"/packages/maximo-readme",permalink:"/fr/adaptors/packages/maximo-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"maximo developer readme",id:"maximo-readme",keywords:["adaptor","readme","maximo"]},sidebar:"adaptors",previous:{title:"maximo changelog",permalink:"/fr/adaptors/packages/maximo-changelog"},next:{title:"medicmobile@0.3.2",permalink:"/fr/adaptors/packages/medicmobile-docs"}},s={},l=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Fetch",id:"fetch",level:3},{value:"sample &#39;fetch&#39; expression",id:"sample-fetch-expression",level:4},{value:"sample &#39;create&#39; expression",id:"sample-create-expression",level:3},{value:"sample &#39;update75&#39; expression",id:"sample-update75-expression",level:3},{value:"Development",id:"development",level:2}],m={toc:l},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"maximo-adaptor-developer-readmemd"},"maximo Adaptor developer README.md"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/maximo"},"https://github.com/OpenFn/adaptors/tree/main/packages/maximo")),(0,r.kt)("h1",{id:"language-maximo"},"Language Maximo"),(0,r.kt)("p",null,"Language Pack for building expressions and operations to access IBM Maximo EAM."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"View all the required and optional properties for ",(0,r.kt)("inlineCode",{parentName:"p"},"state.configuration")," in the\nofficial\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/maximo-configuration-schema/"},"configuration-schema"),"\ndefinition."),(0,r.kt)("h3",{id:"fetch"},"Fetch"),(0,r.kt)("h4",{id:"sample-fetch-expression"},"sample 'fetch' expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fetch({\n  endpoint: 'maxrest/rest/os/mxinventory',\n  query: {\n    ITEMNUM: '01226',\n    _format: 'json',\n  },\n  postUrl: 'https://www.openfn.org/inbox/not-real',\n});\n")),(0,r.kt)("h3",{id:"sample-create-expression"},"sample 'create' expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"create({\n  endpoint: 'maxrest/rest/os/mxinvbal/',\n  body: function (state) {\n    return {\n      ITEMNUM: dataValue('form.ITEMNUM')(state),\n      ITEMSETID: dataValue('form.ITEMSETID')(state),\n      SITEID: dataValue('form.SITEID')(state),\n      LOCATION: dataValue('form.LOCATION')(state),\n      ISSUEUNIT: 'FOO',\n      PHYSCNT: dataValue('PHYSCNT')(state),\n      BINNUM: dataValue('form.BINNUM')(state),\n    };\n  },\n});\n")),(0,r.kt)("h3",{id:"sample-update75-expression"},"sample 'update75' expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"update75({\n  endpoint: state => {\n    return (\n      'maxrest/rest/os/mxinvbal/' +\n      dataValue('form.question1.INVBALANCESID')(state)\n    );\n  },\n  body: state => {\n    return {\n      _action: 'AddChange', //this is required for the old Maximo API!\n      ITEMNUM: dataValue('form.ITEMNUM')(state),\n      ITEMSETID: dataValue('form.ITEMSETID')(state),\n      SITEID: dataValue('form.SITEID')(state),\n      LOCATION: dataValue('form.LOCATION')(state),\n      PHYSCNT: dataValue('form.PHYSCNT')(state),\n      BINNUM: dataValue('form.BINNUM')(state),\n    };\n  },\n});\n")),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.kt)("p",null,"Build the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.kt)("p",null,"To just build the docs run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}c.isMDXComponent=!0}}]);