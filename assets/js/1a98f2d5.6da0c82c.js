"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[78914],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=a,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||o;return t?n.createElement(d,s(s({ref:r},p),{},{components:t})):n.createElement(d,s({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},30307:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={title:"mssql Config",id:"mssql-configuration-schema",keywords:["adaptor","configuration-schema","mssql"]},s=void 0,c={unversionedId:"packages/mssql-configuration-schema",id:"packages/mssql-configuration-schema",title:"mssql Config",description:"For use in state.configuration:",source:"@site/adaptors/packages/mssql-configuration-schema.md",sourceDirName:"packages",slug:"/packages/mssql-configuration-schema",permalink:"/adaptors/packages/mssql-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"mssql Config",id:"mssql-configuration-schema",keywords:["adaptor","configuration-schema","mssql"]},sidebar:"adaptors",previous:{title:"mssql developer readme",permalink:"/adaptors/packages/mssql-readme"},next:{title:"mysql@1.3.2",permalink:"/adaptors/packages/mysql-docs"}},i={},l=[],p={toc:l},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For use in ",(0,a.kt)("inlineCode",{parentName:"p"},"state.configuration"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "server": "The database instance server URL or IP address",\n  "database": "The database name",\n  "userName": "Username",\n  "password": "Password"\n}\n')))}m.isMDXComponent=!0}}]);