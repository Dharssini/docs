"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[35304],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(t),d=a,m=l["".concat(c,".").concat(d)]||l[d]||f[d]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[l]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93624:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={title:"rapidpro Config",id:"rapidpro-configuration-schema",keywords:["adaptor","configuration-schema","rapidpro"]},i=void 0,p={unversionedId:"packages/rapidpro-configuration-schema",id:"packages/rapidpro-configuration-schema",title:"rapidpro Config",description:"For use in state.configuration:",source:"@site/adaptors/packages/rapidpro-configuration-schema.md",sourceDirName:"packages",slug:"/packages/rapidpro-configuration-schema",permalink:"/adaptors/packages/rapidpro-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"rapidpro Config",id:"rapidpro-configuration-schema",keywords:["adaptor","configuration-schema","rapidpro"]},sidebar:"adaptors",previous:{title:"rapidpro developer readme",permalink:"/adaptors/packages/rapidpro-readme"},next:{title:"resourcemap@0.2.1",permalink:"/adaptors/packages/resourcemap-docs"}},c={},s=[],u={toc:s},l="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(l,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For use in ",(0,a.kt)("inlineCode",{parentName:"p"},"state.configuration"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "host": "instance host URL",\n  "token": "instance access token",\n  "apiVersion": "API version to use. Leave this empty to use the default v2"\n}\n')))}f.isMDXComponent=!0}}]);