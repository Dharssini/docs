"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[6536],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||a;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73527:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={title:"Config for beyonic",id:"beyonic-configuration-schema",keywords:["adaptor","configuration-schema","beyonic"]},i=void 0,c={unversionedId:"packages/beyonic-configuration-schema",id:"packages/beyonic-configuration-schema",title:"Config for beyonic",description:"Jobs that use the beyonic adaptor may require authentication. A",source:"@site/adaptors/packages/beyonic-configuration-schema.md",sourceDirName:"packages",slug:"/packages/beyonic-configuration-schema",permalink:"/adaptors/packages/beyonic-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for beyonic",id:"beyonic-configuration-schema",keywords:["adaptor","configuration-schema","beyonic"]},sidebar:"adaptors",previous:{title:"beyonic@0.1.8",permalink:"/adaptors/packages/beyonic-docs"},next:{title:"Pay CHW",permalink:"/adaptors/library/jobs/auto/Pay-CHW-2021-04-23"}},p={},l=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],s={toc:l},u="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Jobs that use the ",(0,o.kt)("inlineCode",{parentName:"p"},"beyonic"),' adaptor may require authentication. A\n"credential" for the ',(0,o.kt)("inlineCode",{parentName:"p"},"beyonic")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,o.kt)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,o.kt)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,o.kt)("p",null,"  Paste this into the ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,o.kt)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "apiUrl": "https://beyonic.com/api",\n  "apiToken": "cdjhiooiSIUJHDYSYUIHASIOHKAANOAJJjsiujhaka"\n}\n')),(0,o.kt)("h2",{id:"full-schema"},"Full Schema"),(0,o.kt)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "apiUrl": {\n          "title": "API URL",\n          "type": "string",\n          "description": "API URL",\n          "format": "uri",\n          "minLength": 1,\n          "examples": [\n              "https://beyonic.com/api"\n          ]\n      },\n      "apiToken": {\n          "title": "API Token",\n          "type": "string",\n          "description": "API token",\n          "minLength": 1,\n          "examples": [\n              "cdjhiooiSIUJHDYSYUIHASIOHKAANOAJJjsiujhaka"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "apiUrl",\n      "apiToken"\n  ]\n}\n')))}f.isMDXComponent=!0}}]);