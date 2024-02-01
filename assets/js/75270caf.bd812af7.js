"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[12782],{95788:(e,a,n)=>{n.d(a,{Iu:()=>c,yg:()=>s});var t=n(11504);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function g(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),p=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(o.Provider,{value:a},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=g(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,s=d["".concat(o,".").concat(u)]||d[u]||h[u]||l;return n?t.createElement(s,i(i({ref:a},c),{},{components:n})):t.createElement(s,i({ref:a},c))}));function s(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var g={};for(var o in a)hasOwnProperty.call(a,o)&&(g[o]=a[o]);g.originalType=e,g[d]="string"==typeof e?e:r,i[1]=g;for(var p=2;p<l;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28536:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var t=n(45072),r=(n(11504),n(95788));const l={title:"fhir changelog",id:"fhir-changelog",keywords:["adaptor","changelog","fhir"]},i="Changelog for the fhir adaptor",g={unversionedId:"packages/fhir-changelog",id:"packages/fhir-changelog",title:"fhir changelog",description:"3.1.0",source:"@site/adaptors/packages/fhir-changelog.md",sourceDirName:"packages",slug:"/packages/fhir-changelog",permalink:"/adaptors/packages/fhir-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"fhir changelog",id:"fhir-changelog",keywords:["adaptor","changelog","fhir"]},sidebar:"adaptors",previous:{title:"Config for fhir",permalink:"/adaptors/packages/fhir-configuration-schema"},next:{title:"fhir developer readme",permalink:"/adaptors/packages/fhir-readme"}},o={},p=[{value:"3.1.0",id:"310",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"3.0.1",id:"301",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"3.0.0",id:"300",level:2},{value:"Major Changes",id:"major-changes",level:3},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"2.0.0",id:"200",level:2},{value:"Major Changes",id:"major-changes-1",level:3},{value:"1.1.5",id:"115",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"1.1.4",id:"114",level:2},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"1.1.3",id:"113",level:2},{value:"Patch Changes",id:"patch-changes-4",level:3},{value:"1.1.2",id:"112",level:2},{value:"Patch Changes",id:"patch-changes-5",level:3},{value:"1.1.1",id:"111",level:2},{value:"Patch Changes",id:"patch-changes-6",level:3},{value:"1.1.0",id:"110",level:2},{value:"Minor Changes",id:"minor-changes-1",level:3},{value:"Patch Changes",id:"patch-changes-7",level:3}],c={toc:p},d="wrapper";function h(e){let{components:a,...n}=e;return(0,r.yg)(d,(0,t.c)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"changelog-for-the-fhir-adaptor"},"Changelog for the fhir adaptor"),(0,r.yg)("h1",{id:"openfnlanguage-fhir"},"@openfn/language-fhir"),(0,r.yg)("h2",{id:"310"},"3.1.0"),(0,r.yg)("h3",{id:"minor-changes"},"Minor Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"d94e9ee: Migrate from axios to using ",(0,r.yg)("inlineCode",{parentName:"li"},"fetch")," from ",(0,r.yg)("inlineCode",{parentName:"li"},"undici")," and add uniti tests")),(0,r.yg)("h2",{id:"301"},"3.0.1"),(0,r.yg)("h3",{id:"patch-changes"},"Patch Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Update lock files"),(0,r.yg)("li",{parentName:"ul"},"Updated dependencies",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"@openfn/",(0,r.yg)("a",{parentName:"li",href:"mailto:language-common@1.8.1"},"language-common@1.8.1"))))),(0,r.yg)("h2",{id:"300"},"3.0.0"),(0,r.yg)("h3",{id:"major-changes"},"Major Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"2c1d603: Remove parameter reassignment to ensure proper functioning inside an\n",(0,r.yg)("inlineCode",{parentName:"p"},"each")," block; add eslint"),(0,r.yg)("p",{parentName:"li"},"The packages receiving a major bump here exposed functions that didn't work as\nexpected inside ",(0,r.yg)("inlineCode",{parentName:"p"},"each")," blocks. Users were previously wrapping these functions\ninside their own custom ",(0,r.yg)("inlineCode",{parentName:"p"},"fn")," blocks, and this change will ensure that they can\nbe used inside a standard each."),(0,r.yg)("p",{parentName:"li"},"See ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/issues/275"},"https://github.com/OpenFn/adaptors/issues/275")," for more details."))),(0,r.yg)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Updated dependencies ","[2c1d603]",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"@openfn/",(0,r.yg)("a",{parentName:"li",href:"mailto:language-common@1.8.0"},"language-common@1.8.0"))))),(0,r.yg)("h2",{id:"200"},"2.0.0"),(0,r.yg)("h3",{id:"major-changes-1"},"Major Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"d4b4094: - Update configuration schema,",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Add ",(0,r.yg)("inlineCode",{parentName:"li"},"get()")," function"),(0,r.yg)("li",{parentName:"ul"},"Fix ",(0,r.yg)("inlineCode",{parentName:"li"},"create()")," axios config"),(0,r.yg)("li",{parentName:"ul"},"Remove unused code"),(0,r.yg)("li",{parentName:"ul"},"Improve error handling"),(0,r.yg)("li",{parentName:"ul"},"Improve response handling")))),(0,r.yg)("h2",{id:"115"},"1.1.5"),(0,r.yg)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"14f481e: mark execute as private"),(0,r.yg)("li",{parentName:"ul"},"Updated dependencies ","[2b4c61a]",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"@openfn/",(0,r.yg)("a",{parentName:"li",href:"mailto:language-common@1.7.6"},"language-common@1.7.6"))))),(0,r.yg)("h2",{id:"114"},"1.1.4"),(0,r.yg)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"f7ebd3c: remove sample configuration")),(0,r.yg)("h2",{id:"113"},"1.1.3"),(0,r.yg)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"f2aed32: add examples")),(0,r.yg)("h2",{id:"112"},"1.1.2"),(0,r.yg)("h3",{id:"patch-changes-5"},"Patch Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"6d8de03: change @constructor to @function and remove /","*",(0,r.yg)("em",{parentName:"li"}," @module Adaptor "),"/")),(0,r.yg)("h2",{id:"111"},"1.1.1"),(0,r.yg)("h3",{id:"patch-changes-6"},"Patch Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"f2a91a4: Update package exports"),(0,r.yg)("li",{parentName:"ul"},"Updated dependencies ","[f2a91a4]",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"@openfn/",(0,r.yg)("a",{parentName:"li",href:"mailto:language-common@1.7.5"},"language-common@1.7.5"))))),(0,r.yg)("h2",{id:"110"},"1.1.0"),(0,r.yg)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"fee607e: Migrate FHIR, update package export")),(0,r.yg)("h3",{id:"patch-changes-7"},"Patch Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"cb5d0ed: Updated to @openfn/simple-ast v0.4.1"),(0,r.yg)("li",{parentName:"ul"},"8566b26: Fix typings"),(0,r.yg)("li",{parentName:"ul"},"b3d45ff: Fix CJS export of npm package."),(0,r.yg)("li",{parentName:"ul"},"ecf5d30: remove sinon since it was not being used"),(0,r.yg)("li",{parentName:"ul"},"Updated dependencies ","[8566b26]"),(0,r.yg)("li",{parentName:"ul"},"Updated dependencies ","[b3d45ff]"),(0,r.yg)("li",{parentName:"ul"},"Updated dependencies ","[b5eb665]"),(0,r.yg)("li",{parentName:"ul"},"Updated dependencies ","[ecf5d30]",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"@openfn/",(0,r.yg)("a",{parentName:"li",href:"mailto:language-common@1.7.4"},"language-common@1.7.4"))))))}h.isMDXComponent=!0}}]);