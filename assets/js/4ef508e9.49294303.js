"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[43528],{95788:(e,n,t)=>{t.d(n,{Iu:()=>l,yg:()=>g});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),h=a,g=u["".concat(c,".").concat(h)]||u[h]||f[h]||o;return t?r.createElement(g,i(i({ref:n},l),{},{components:t})):r.createElement(g,i({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},20465:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(45072),a=(t(11504),t(95788));const o={title:"Config for fhir",id:"fhir-configuration-schema",keywords:["adaptor","configuration-schema","fhir"]},i=void 0,s={unversionedId:"packages/fhir-configuration-schema",id:"packages/fhir-configuration-schema",title:"Config for fhir",description:"Jobs that use the fhir adaptor may require authentication. A",source:"@site/adaptors/packages/fhir-configuration-schema.md",sourceDirName:"packages",slug:"/packages/fhir-configuration-schema",permalink:"/adaptors/packages/fhir-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for fhir",id:"fhir-configuration-schema",keywords:["adaptor","configuration-schema","fhir"]},sidebar:"adaptors",previous:{title:"fhir@3.1.0",permalink:"/adaptors/packages/fhir-docs"},next:{title:"fhir changelog",permalink:"/adaptors/packages/fhir-changelog"}},c={},p=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],l={toc:p},u="wrapper";function f(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.c)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Jobs that use the ",(0,a.yg)("inlineCode",{parentName:"p"},"fhir"),' adaptor may require authentication. A\n"credential" for the ',(0,a.yg)("inlineCode",{parentName:"p"},"fhir")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,a.yg)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,a.yg)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,a.yg)("p",null,"  Paste this into the ",(0,a.yg)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,a.yg)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "baseUrl": "https://hapi.fhir.org/baseR4",\n  "apiPath": "baseR4",\n  "authType": "Basic",\n  "token": "@super!scretetoken"\n}\n')),(0,a.yg)("h2",{id:"full-schema"},"Full Schema"),(0,a.yg)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "type": "object",\n  "properties": {\n      "baseUrl": {\n          "title": "Base Url",\n          "type": "string",\n          "description": "The baseUrl",\n          "examples": [\n              "https://hapi.fhir.org/baseR4"\n          ]\n      },\n      "apiPath": {\n          "title": "API Path",\n          "anyOf": [\n              {\n                  "type": "string"\n              },\n              {\n                  "type": "null"\n              }\n          ],\n          "placeholder": "R4",\n          "description": "FHIR api path",\n          "minLength": 1,\n          "examples": [\n              "baseR4",\n              "R3",\n              "R4"\n          ]\n      },\n      "authType": {\n          "title": "Auth Type",\n          "type": "string",\n          "description": "The type of authentication used to authenticate into the destination system",\n          "examples": [\n              "Basic"\n          ]\n      },\n      "token": {\n          "title": "Token",\n          "type": "string",\n          "description": "The token  used to authenticate into the destination system",\n          "examples": [\n              "@super!scretetoken"\n          ]\n      }\n  },\n  "required": [\n      "resource",\n      "authType",\n      "token"\n  ]\n}\n')))}f.isMDXComponent=!0}}]);