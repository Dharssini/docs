"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[977],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>g});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),i=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},m=function(e){var a=i(e.components);return n.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=i(t),g=r,s=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return t?n.createElement(s,c(c({ref:a},m),{},{components:t})):n.createElement(s,c({ref:a},m))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59007:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=t(87462),r=(t(67294),t(3905));const o={title:"commcare changelog",id:"commcare-changelog",keywords:["adaptor","changelog","commcare"]},c="Changelog for the commcare adaptor",l={unversionedId:"packages/commcare-changelog",id:"packages/commcare-changelog",title:"commcare changelog",description:"1.5.1",source:"@site/adaptors/packages/commcare-changelog.md",sourceDirName:"packages",slug:"/packages/commcare-changelog",permalink:"/fr/adaptors/packages/commcare-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"commcare changelog",id:"commcare-changelog",keywords:["adaptor","changelog","commcare"]},sidebar:"adaptors",previous:{title:"\u2728 Q3 2022] Update HH Name in CommCare",permalink:"/fr/adaptors/library/jobs/auto/Q3-2022-Update-HH-Name-in-CommCare-2021-09-27"},next:{title:"commcare developer readme",permalink:"/fr/adaptors/packages/commcare-readme"}},p={},i=[{value:"1.5.1",id:"151",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"1.5.0",id:"150",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"Patch Changes",id:"patch-changes-1",level:3}],m={toc:i};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog-for-the-commcare-adaptor"},"Changelog for the commcare adaptor"),(0,r.kt)("h1",{id:"openfnlanguage-commcare"},"@openfn/language-commcare"),(0,r.kt)("h2",{id:"151"},"1.5.1"),(0,r.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"f2a91a4: Update package exports"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[f2a91a4]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@openfn/",(0,r.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.5"},"language-common@1.7.5")),(0,r.kt)("li",{parentName:"ul"},"@openfn/",(0,r.kt)("a",{parentName:"li",href:"mailto:language-http@4.2.3"},"language-http@4.2.3"))))),(0,r.kt)("h2",{id:"150"},"1.5.0"),(0,r.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"5c050ed: Migrate CommCare")),(0,r.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"8566b26: Fix typings"),(0,r.kt)("li",{parentName:"ul"},"b3d45ff: Fix CJS export of npm package."),(0,r.kt)("li",{parentName:"ul"},"94076b9: update dependency xlsx to ^0.18.0"),(0,r.kt)("li",{parentName:"ul"},"ecf5d30: remove sinon since it was not being used"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[9a2755e]"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[8566b26]"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[b3d45ff]"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[b5eb665]"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[ecf5d30]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@openfn/",(0,r.kt)("a",{parentName:"li",href:"mailto:language-http@4.2.2"},"language-http@4.2.2")),(0,r.kt)("li",{parentName:"ul"},"@openfn/",(0,r.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.4"},"language-common@1.7.4"))))))}u.isMDXComponent=!0}}]);