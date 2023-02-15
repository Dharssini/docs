"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[96218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return n?a.createElement(m,l(l({ref:t},g),{},{components:n})):a.createElement(m,l({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"mogli changelog",id:"mogli-changelog",keywords:["adaptor","changelog","mogli"]},l="Changelog for the mogli adaptor",i={unversionedId:"packages/mogli-changelog",id:"packages/mogli-changelog",title:"mogli changelog",description:"v0.1.6",source:"@site/adaptors/packages/mogli-changelog.md",sourceDirName:"packages",slug:"/packages/mogli-changelog",permalink:"/fr/adaptors/packages/mogli-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"mogli changelog",id:"mogli-changelog",keywords:["adaptor","changelog","mogli"]},sidebar:"adaptors",previous:{title:"mogli@0.3.3",permalink:"/fr/adaptors/packages/mogli-docs"},next:{title:"mogli developer readme",permalink:"/fr/adaptors/packages/mogli-readme"}},c={},p=[{value:"0.3.3",id:"033",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"0.3.2",id:"032",level:2},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"0.3.1",id:"031",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"0.3.0",id:"030",level:2},{value:"Minor Changes",id:"minor-changes",level:3}],g={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog-for-the-mogli-adaptor"},"Changelog for the mogli adaptor"),(0,r.kt)("p",null,"v0.1.6"),(0,r.kt)("h2",{id:"033"},"0.3.3"),(0,r.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"f7ebd3c: remove sample configuration")),(0,r.kt)("h2",{id:"032"},"0.3.2"),(0,r.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"f2aed32: add examples")),(0,r.kt)("h2",{id:"031"},"0.3.1"),(0,r.kt)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"6d8de03: change @constructor to @function and remove /","*",(0,r.kt)("em",{parentName:"li"}," @module Adaptor "),"/")),(0,r.kt)("h2",{id:"030"},"0.3.0"),(0,r.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h1",{parentName:"li",id:"c6056e8-migrate-mogli"},"c6056e8: migrate mogli"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"State gets cleaned up after the operations are finished. This means that the\nfinal state is serializable."),(0,r.kt)("p",{parentName:"li"},"The JSForce connection object is provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"createConnection"),", and in turn\n",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," ensures it is run before the user's operations."),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cleanupState")," reducer simply deletes the connection key from state."))),(0,r.kt)("h1",{id:"v013"},"v0.1.3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bumped language-common dependency to v0.0.4.")))}u.isMDXComponent=!0}}]);