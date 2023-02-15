"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[19014],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>d});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||a;return n?t.createElement(d,i(i({ref:r},l),{},{components:n})):t.createElement(d,i({ref:r},l))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39919:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=n(87462),o=(n(67294),n(3905));const a={title:"Config for primero",id:"primero-configuration-schema",keywords:["adaptor","configuration-schema","primero"]},i=void 0,s={unversionedId:"packages/primero-configuration-schema",id:"packages/primero-configuration-schema",title:"Config for primero",description:"Jobs that use the primero adaptor may require authentication. A",source:"@site/adaptors/packages/primero-configuration-schema.md",sourceDirName:"packages",slug:"/packages/primero-configuration-schema",permalink:"/adaptors/packages/primero-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for primero",id:"primero-configuration-schema",keywords:["adaptor","configuration-schema","primero"]},sidebar:"adaptors",previous:{title:"primero@2.10.4",permalink:"/adaptors/packages/primero-docs"},next:{title:"Get cases from Primero",permalink:"/adaptors/library/jobs/auto/Get-cases-from-Primero-2021-09-23"}},p={},c=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],l={toc:c},u="wrapper";function m(e){let{components:r,...n}=e;return(0,o.kt)(u,(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Jobs that use the ",(0,o.kt)("inlineCode",{parentName:"p"},"primero"),' adaptor may require authentication. A\n"credential" for the ',(0,o.kt)("inlineCode",{parentName:"p"},"primero")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,o.kt)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,o.kt)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,o.kt)("p",null,"  Paste this into the ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,o.kt)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "url": "https://primero.org/some-org",\n  "user": "admin",\n  "password": "@super(!)Superpass",\n  "basicAuth": "true"\n}\n')),(0,o.kt)("h2",{id:"full-schema"},"Full Schema"),(0,o.kt)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "url": {\n          "title": "URL",\n          "type": "string",\n          "description": "The Primero host url",\n          "format": "uri",\n          "minLength": 1,\n          "examples": [\n              "https://primero.org/some-org"\n          ]\n      },\n      "user": {\n          "title": "User",\n          "type": "string",\n          "description": "The username",\n          "minLength": 1,\n          "examples": [\n              "admin"\n          ]\n      },\n      "password": {\n          "title": "Password",\n          "type": "string",\n          "description": "Password",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "@super(!)Superpass"\n          ]\n      },\n      "basicAuth": {\n          "title": "Use Basic Auth",\n          "type": "boolean",\n          "examples": [\n              true\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "url"\n  ]\n}\n')))}m.isMDXComponent=!0}}]);