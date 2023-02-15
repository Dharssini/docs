"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[30636],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},86039:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"Config for dhis2",id:"dhis2-configuration-schema",keywords:["adaptor","configuration-schema","dhis2"]},i=void 0,s={unversionedId:"packages/dhis2-configuration-schema",id:"packages/dhis2-configuration-schema",title:"Config for dhis2",description:"Jobs that use the dhis2 adaptor may require authentication. A",source:"@site/adaptors/packages/dhis2-configuration-schema.md",sourceDirName:"packages",slug:"/packages/dhis2-configuration-schema",permalink:"/adaptors/packages/dhis2-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for dhis2",id:"dhis2-configuration-schema",keywords:["adaptor","configuration-schema","dhis2"]},sidebar:"adaptors",previous:{title:"dhis2@3.2.5",permalink:"/adaptors/packages/dhis2-docs"},next:{title:"\ud83d\udcdc Add data values",permalink:"/adaptors/library/jobs/auto/DHIS2-DataValues-API"}},l={},p=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Jobs that use the ",(0,a.kt)("inlineCode",{parentName:"p"},"dhis2"),' adaptor may require authentication. A\n"credential" for the ',(0,a.kt)("inlineCode",{parentName:"p"},"dhis2")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,a.kt)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,a.kt)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,a.kt)("p",null,"  Paste this into the ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,a.kt)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "admin",\n  "password": "@some(!)Password",\n  "hostUrl": "https://play.dhis2.org/2.36.6",\n  "apiVersion": "v2"\n}\n')),(0,a.kt)("h2",{id:"full-schema"},"Full Schema"),(0,a.kt)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "username": {\n          "title": "Username",\n          "type": "string",\n          "description": "Username",\n          "minLength": 1,\n          "examples": [\n              "admin"\n          ]\n      },\n      "password": {\n          "title": "Password",\n          "type": "string",\n          "description": "Password",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "@some(!)Password"\n          ]\n      },\n      "hostUrl": {\n          "title": "Host URL",\n          "type": "string",\n          "description": "The base DHIS2 instance URL",\n          "format": "uri",\n          "minLength": 1,\n          "examples": [\n              "https://play.dhis2.org/2.36.6"\n          ]\n      },\n      "apiVersion": {\n          "title": "API Version",\n          "anyOf": [\n              {\n                  "type": "string"\n              },\n              {\n                  "type": "null"\n              }\n          ],\n          "placeholder": "38",\n          "description": "DHIS2 api version",\n          "minLength": 1,\n          "examples": [\n              "v2"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "hostUrl",\n      "password",\n      "username"\n  ]\n}\n')))}d.isMDXComponent=!0}}]);