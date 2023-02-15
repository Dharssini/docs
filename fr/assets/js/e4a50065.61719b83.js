"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[89007],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>d});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(r),f=o,d=l["".concat(s,".").concat(f)]||l[f]||m[f]||a;return r?t.createElement(d,c(c({ref:n},u),{},{components:r})):t.createElement(d,c({ref:n},u))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[l]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45097:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var t=r(87462),o=(r(67294),r(3905));const a={title:"mongodb Config",id:"mongodb-configuration-schema",keywords:["adaptor","configuration-schema","mongodb"]},c=void 0,i={unversionedId:"packages/mongodb-configuration-schema",id:"packages/mongodb-configuration-schema",title:"mongodb Config",description:"For use in state.configuration:",source:"@site/adaptors/packages/mongodb-configuration-schema.md",sourceDirName:"packages",slug:"/packages/mongodb-configuration-schema",permalink:"/fr/adaptors/packages/mongodb-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"mongodb Config",id:"mongodb-configuration-schema",keywords:["adaptor","configuration-schema","mongodb"]},sidebar:"adaptors",previous:{title:"mongodb developer readme",permalink:"/fr/adaptors/packages/mongodb-readme"},next:{title:"Moodle",permalink:"/fr/adaptors/moodle"}},s={},p=[],u={toc:p},l="wrapper";function m(e){let{components:n,...r}=e;return(0,o.kt)(l,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For use in ",(0,o.kt)("inlineCode",{parentName:"p"},"state.configuration"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clusterUrl": "Your MongoDB cluster / host URL",\n  "username": "Your MongoDB instance username",\n  "password": "Your MongoDB instance password"\n}\n')))}m.isMDXComponent=!0}}]);