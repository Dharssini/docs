"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[83834],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||g[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},25123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Config for vtiger",id:"vtiger-configuration-schema",keywords:["adaptor","configuration-schema","vtiger"]},i=void 0,c={unversionedId:"packages/vtiger-configuration-schema",id:"packages/vtiger-configuration-schema",title:"Config for vtiger",description:"Jobs that use the vtiger adaptor may require authentication. A",source:"@site/adaptors/packages/vtiger-configuration-schema.md",sourceDirName:"packages",slug:"/packages/vtiger-configuration-schema",permalink:"/fr/adaptors/packages/vtiger-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for vtiger",id:"vtiger-configuration-schema",keywords:["adaptor","configuration-schema","vtiger"]},sidebar:"adaptors",previous:{title:"vtiger@1.1.2",permalink:"/fr/adaptors/packages/vtiger-docs"},next:{title:"vtiger changelog",permalink:"/fr/adaptors/packages/vtiger-changelog"}},s={},l=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],p={toc:l},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Jobs that use the ",(0,a.kt)("inlineCode",{parentName:"p"},"vtiger"),' adaptor may require authentication. A\n"credential" for the ',(0,a.kt)("inlineCode",{parentName:"p"},"vtiger")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,a.kt)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,a.kt)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,a.kt)("p",null,"  Paste this into the ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,a.kt)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hostUrl": "https://openfunction.od2.vtiger.com",\n  "username": "test@openfn.org",\n  "accessToken": "@some()!veryHugeToke"\n}\n')),(0,a.kt)("h2",{id:"full-schema"},"Full Schema"),(0,a.kt)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "hostUrl": {\n          "title": "Host URL",\n          "type": "string",\n          "description": "VTiger instance host URL",\n          "format": "uri",\n          "minLength": 1,\n          "examples": [\n              "https://openfunction.od2.vtiger.com"\n          ]\n      },\n      "username": {\n          "title": "Username",\n          "type": "string",\n          "description": "VTiger instance username",\n          "minLength": 1,\n          "examples": [\n              "test@openfn.org"\n          ]\n      },\n      "accessToken": {\n          "title": "Access Token",\n          "type": "string",\n          "description": "VTiger instance access token",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "@some()!veryHugeToke"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "hostUrl",\n      "username",\n      "accessToken"\n  ]\n}\n')))}g.isMDXComponent=!0}}]);