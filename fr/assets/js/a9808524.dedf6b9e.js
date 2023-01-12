"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[96218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,d=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return n?r.createElement(d,i(i({ref:t},g),{},{components:n})):r.createElement(d,i({ref:t},g))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"mogli changelog",id:"mogli-changelog",keywords:["adaptor","changelog","mogli"]},i="Changelog for the mogli adaptor",l={unversionedId:"packages/mogli-changelog",id:"packages/mogli-changelog",title:"mogli changelog",description:"v0.1.6",source:"@site/adaptors/packages/mogli-changelog.md",sourceDirName:"packages",slug:"/packages/mogli-changelog",permalink:"/fr/adaptors/packages/mogli-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"mogli changelog",id:"mogli-changelog",keywords:["adaptor","changelog","mogli"]},sidebar:"adaptors",previous:{title:"mogli@0.3.0",permalink:"/fr/adaptors/packages/mogli-docs"},next:{title:"mogli developer readme",permalink:"/fr/adaptors/packages/mogli-readme"}},c={},p=[{value:"0.3.0",id:"030",level:2},{value:"Minor Changes",id:"minor-changes",level:3}],g={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog-for-the-mogli-adaptor"},"Changelog for the mogli adaptor"),(0,a.kt)("p",null,"v0.1.6"),(0,a.kt)("h2",{id:"030"},"0.3.0"),(0,a.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h1",{parentName:"li",id:"c6056e8-migrate-mogli"},"c6056e8: migrate mogli"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"State gets cleaned up after the operations are finished. This means that the\nfinal state is serializable."),(0,a.kt)("p",{parentName:"li"},"The JSForce connection object is provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"createConnection"),", and in turn\n",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," ensures it is run before the user's operations."),(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cleanupState")," reducer simply deletes the connection key from state."))),(0,a.kt)("h1",{id:"v013"},"v0.1.3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bumped language-common dependency to v0.0.4.")))}s.isMDXComponent=!0}}]);