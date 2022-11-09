"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4880],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(g,c(c({ref:n},s),{},{components:t})):r.createElement(g,c({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},87145:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"common changelog",id:"common-changelog",keywords:["adaptor","changelog","common"]},c="Changelog for the common adaptor",i={unversionedId:"packages/common-changelog",id:"packages/common-changelog",title:"common changelog",description:"v0.4.0",source:"@site/adaptors/packages/common-changelog.md",sourceDirName:"packages",slug:"/packages/common-changelog",permalink:"/fr/adaptors/packages/common-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"common changelog",id:"common-changelog",keywords:["adaptor","changelog","common"]},sidebar:"library",previous:{title:"common",permalink:"/fr/adaptors/packages/common-docs"},next:{title:"common developer readme",permalink:"/fr/adaptors/packages/common-readme"}},l={},p=[{value:"1.7.4",id:"174",level:2},{value:"Patch Changes",id:"patch-changes",level:3}],s={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog-for-the-common-adaptor"},"Changelog for the common adaptor"),(0,a.kt)("p",null,"v0.4.0"),(0,a.kt)("h2",{id:"174"},"1.7.4"),(0,a.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"8566b26: Fix typings"),(0,a.kt)("li",{parentName:"ul"},"b3d45ff: Fix CJS export of npm package."),(0,a.kt)("li",{parentName:"ul"},"b5eb665: Adjusted docs for common and built to markdown"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h1",{parentName:"li",id:"ecf5d30-remove-sinon-since-it-was-not-being-used"},"ecf5d30: remove sinon since it was not being used"))),(0,a.kt)("p",null,"Bumped all package versions to their latest."),(0,a.kt)("h1",{id:"v004"},"v0.0.4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"arrayToString")," helper.",(0,a.kt)("br",{parentName:"li"}),"Allowing you to join an array of string'able primitives (strings and integers)\ninto a string."),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"toArray")," helper.",(0,a.kt)("br",{parentName:"li"}),"This can be used to coerce certain types of data into an array, this can be\nuseful when the source data has an ambiguous format. For example a given key\nin the data may have an object as it's value (when there is only one item),\nand an array of objects when there is more than one. ",(0,a.kt)("inlineCode",{parentName:"li"},"toArray")," can be used to\nreconcile this inconsistency.")))}m.isMDXComponent=!0}}]);