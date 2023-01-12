"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[39210],{3905:(e,t,a)=>{a.d(t,{Zo:()=>f,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},f=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),d=c(a),s=r,u=d["".concat(p,".").concat(s)]||d[s]||g[s]||o;return a?n.createElement(u,l(l({ref:t},f),{},{components:a})):n.createElement(u,l({ref:t},f))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},32650:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"fhir changelog",id:"fhir-changelog",keywords:["adaptor","changelog","fhir"]},l="Changelog for the fhir adaptor",i={unversionedId:"packages/fhir-changelog",id:"packages/fhir-changelog",title:"fhir changelog",description:"1.1.1",source:"@site/adaptors/packages/fhir-changelog.md",sourceDirName:"packages",slug:"/packages/fhir-changelog",permalink:"/fr/adaptors/packages/fhir-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"fhir changelog",id:"fhir-changelog",keywords:["adaptor","changelog","fhir"]},sidebar:"adaptors",previous:{title:"fhir@1.1.1",permalink:"/fr/adaptors/packages/fhir-docs"},next:{title:"fhir developer readme",permalink:"/fr/adaptors/packages/fhir-readme"}},p={},c=[{value:"1.1.1",id:"111",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"1.1.0",id:"110",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"Patch Changes",id:"patch-changes-1",level:3}],f={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog-for-the-fhir-adaptor"},"Changelog for the fhir adaptor"),(0,r.kt)("h1",{id:"openfnlanguage-fhir"},"@openfn/language-fhir"),(0,r.kt)("h2",{id:"111"},"1.1.1"),(0,r.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"f2a91a4: Update package exports"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[f2a91a4]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@openfn/",(0,r.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.5"},"language-common@1.7.5"))))),(0,r.kt)("h2",{id:"110"},"1.1.0"),(0,r.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"fee607e: Migrate FHIR, update package export")),(0,r.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cb5d0ed: Updated to @openfn/simple-ast v0.4.1"),(0,r.kt)("li",{parentName:"ul"},"8566b26: Fix typings"),(0,r.kt)("li",{parentName:"ul"},"b3d45ff: Fix CJS export of npm package."),(0,r.kt)("li",{parentName:"ul"},"ecf5d30: remove sinon since it was not being used"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[8566b26]"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[b3d45ff]"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[b5eb665]"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[ecf5d30]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@openfn/",(0,r.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.4"},"language-common@1.7.4"))))))}d.isMDXComponent=!0}}]);