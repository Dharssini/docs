"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[48944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||g[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Config for azure-storage",id:"azure-storage-configuration-schema",keywords:["adaptor","configuration-schema","azure-storage"]},i=void 0,c={unversionedId:"packages/azure-storage-configuration-schema",id:"packages/azure-storage-configuration-schema",title:"Config for azure-storage",description:"Jobs that use the azure-storage adaptor may require authentication. A",source:"@site/adaptors/packages/azure-storage-configuration-schema.md",sourceDirName:"packages",slug:"/packages/azure-storage-configuration-schema",permalink:"/adaptors/packages/azure-storage-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for azure-storage",id:"azure-storage-configuration-schema",keywords:["adaptor","configuration-schema","azure-storage"]},sidebar:"adaptors",previous:{title:"azure-storage@1.0.1",permalink:"/adaptors/packages/azure-storage-docs"},next:{title:"azure-storage changelog",permalink:"/adaptors/packages/azure-storage-changelog"}},s={},u=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],l={toc:u},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Jobs that use the ",(0,a.kt)("inlineCode",{parentName:"p"},"azure-storage"),' adaptor may require authentication. A\n"credential" for the ',(0,a.kt)("inlineCode",{parentName:"p"},"azure-storage")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,a.kt)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,a.kt)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,a.kt)("p",null,"  Paste this into the ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,a.kt)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accountName": "examplestorageaccount01",\n  "accountKey": "zzUx5rA4BZkjPet8ztLTEll7azF65Sez7WxGKsJv5B+rp/dby8ARgYpEVe93xFCQDqGBi3FUlxjP+ASt4uepZg==",\n  "containerName": "mycontainername"\n}\n')),(0,a.kt)("h2",{id:"full-schema"},"Full Schema"),(0,a.kt)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "accountName": {\n          "title": "Account Name",\n          "type": "string",\n          "description": "Azure Storage Account Name",\n          "examples": [\n              "examplestorageaccount01"\n          ]\n      },\n      "accountKey": {\n          "title": "Account Key",\n          "type": "string",\n          "description": "Azure Account Key",\n          "writeOnly": true,\n          "examples": [\n              "zzUx5rA4BZkjPet8ztLTEll7azF65Sez7WxGKsJv5B+rp/dby8ARgYpEVe93xFCQDqGBi3FUlxjP+ASt4uepZg=="\n          ]\n      },\n      "containerName": {\n          "title": "Container Name",\n          "type": "string",\n          "description": "Name of Azure Blob Storage Container",\n          "writeOnly": true,\n          "examples": [\n              "mycontainername"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "accountName",\n      "accountKey"\n  ]\n}\n')))}g.isMDXComponent=!0}}]);