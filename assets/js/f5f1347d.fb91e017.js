"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[10099],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>d});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),p=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(c.Provider,{value:a},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(t),u=r,d=s["".concat(c,".").concat(u)]||s[u]||h[u]||l;return t?n.createElement(d,i(i({ref:a},m),{},{components:t})):n.createElement(d,i({ref:a},m))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},74268:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const l={title:"maximo changelog",id:"maximo-changelog",keywords:["adaptor","changelog","maximo"]},i="Changelog for the maximo adaptor",o={unversionedId:"packages/maximo-changelog",id:"packages/maximo-changelog",title:"maximo changelog",description:"0.4.1",source:"@site/adaptors/packages/maximo-changelog.md",sourceDirName:"packages",slug:"/packages/maximo-changelog",permalink:"/adaptors/packages/maximo-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"maximo changelog",id:"maximo-changelog",keywords:["adaptor","changelog","maximo"]},sidebar:"adaptors",previous:{title:"Config for maximo",permalink:"/adaptors/packages/maximo-configuration-schema"},next:{title:"maximo developer readme",permalink:"/adaptors/packages/maximo-readme"}},c={},p=[{value:"0.4.1",id:"041",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"0.4.0",id:"040",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"0.3.5",id:"035",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"0.3.4",id:"034",level:2},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"0.3.3",id:"033",level:2},{value:"Patch Changes",id:"patch-changes-4",level:3},{value:"0.3.2",id:"032",level:2},{value:"Patch Changes",id:"patch-changes-5",level:3},{value:"0.3.1",id:"031",level:2},{value:"Patch Changes",id:"patch-changes-6",level:3},{value:"0.3.0",id:"030",level:2},{value:"Minor Changes",id:"minor-changes-1",level:3}],m={toc:p},s="wrapper";function h(e){let{components:a,...t}=e;return(0,r.kt)(s,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog-for-the-maximo-adaptor"},"Changelog for the maximo adaptor"),(0,r.kt)("h1",{id:"openfnlanguage-maximo"},"@openfn/language-maximo"),(0,r.kt)("h2",{id:"041"},"0.4.1"),(0,r.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update lock files"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@openfn/",(0,r.kt)("a",{parentName:"li",href:"mailto:language-common@1.8.1"},"language-common@1.8.1"))))),(0,r.kt)("h2",{id:"040"},"0.4.0"),(0,r.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"2c1d603: Remove parameter reassignment to ensure proper functioning inside an\n",(0,r.kt)("inlineCode",{parentName:"p"},"each")," block; add eslint"),(0,r.kt)("p",{parentName:"li"},"The packages receiving a major bump here exposed functions that didn't work as\nexpected inside ",(0,r.kt)("inlineCode",{parentName:"p"},"each")," blocks. Users were previously wrapping these functions\ninside their own custom ",(0,r.kt)("inlineCode",{parentName:"p"},"fn")," blocks, and this change will ensure that they can\nbe used inside a standard each."),(0,r.kt)("p",{parentName:"li"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/issues/275"},"https://github.com/OpenFn/adaptors/issues/275")," for more details."))),(0,r.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[2c1d603]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@openfn/",(0,r.kt)("a",{parentName:"li",href:"mailto:language-common@1.8.0"},"language-common@1.8.0"))))),(0,r.kt)("h2",{id:"035"},"0.3.5"),(0,r.kt)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"14f481e: mark execute as private"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[2b4c61a]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@openfn/",(0,r.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.6"},"language-common@1.7.6"))))),(0,r.kt)("h2",{id:"034"},"0.3.4"),(0,r.kt)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"aed7e0b: fix required field in configuration schema")),(0,r.kt)("h2",{id:"033"},"0.3.3"),(0,r.kt)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"f7ebd3c: remove sample configuration")),(0,r.kt)("h2",{id:"032"},"0.3.2"),(0,r.kt)("h3",{id:"patch-changes-5"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"f2aed32: add examples")),(0,r.kt)("h2",{id:"031"},"0.3.1"),(0,r.kt)("h3",{id:"patch-changes-6"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"6d8de03: change @constructor to @function and remove /","*",(0,r.kt)("em",{parentName:"li"}," @module Adaptor "),"/")),(0,r.kt)("h2",{id:"030"},"0.3.0"),(0,r.kt)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"4d4be56: migrate maximo")))}h.isMDXComponent=!0}}]);