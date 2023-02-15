"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[46989],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,m=u["".concat(p,".").concat(f)]||u[f]||g[f]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26257:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={title:"Config for progres",id:"progres-configuration-schema",keywords:["adaptor","configuration-schema","progres"]},i=void 0,s={unversionedId:"packages/progres-configuration-schema",id:"packages/progres-configuration-schema",title:"Config for progres",description:"Jobs that use the progres adaptor may require authentication. A",source:"@site/adaptors/packages/progres-configuration-schema.md",sourceDirName:"packages",slug:"/packages/progres-configuration-schema",permalink:"/fr/adaptors/packages/progres-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for progres",id:"progres-configuration-schema",keywords:["adaptor","configuration-schema","progres"]},sidebar:"adaptors",previous:{title:"progres@1.2.3",permalink:"/fr/adaptors/packages/progres-docs"},next:{title:"progres changelog",permalink:"/fr/adaptors/packages/progres-changelog"}},p={},c=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],l={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Jobs that use the ",(0,o.kt)("inlineCode",{parentName:"p"},"progres"),' adaptor may require authentication. A\n"credential" for the ',(0,o.kt)("inlineCode",{parentName:"p"},"progres")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,o.kt)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,o.kt)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,o.kt)("p",null,"  Paste this into the ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,o.kt)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "url": "https://endpoint/To/DTP",\n  "key": "-----BEGIN PRIVATE KEY-----SOMETYPEOFPRIVATEVALUE-----END PRIVATE KEY-----",\n  "cert": "-----BEGIN CERTIFICATE-----SOMETYPEOFVALUE-----END CERTIFICATE-----",\n  "token": "[REDACTED]"\n}\n')),(0,o.kt)("h2",{id:"full-schema"},"Full Schema"),(0,o.kt)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "url": {\n          "title": "URL",\n          "type": "string",\n          "description": "The Progres URL",\n          "format": "uri",\n          "minLength": 1,\n          "examples": [\n              "https://endpoint/To/DTP"\n          ]\n      },\n      "key": {\n          "title": "Private Key",\n          "type": "string",\n          "description": "Your Progres private key",\n          "minLength": 1,\n          "examples": [\n              "-----BEGIN PRIVATE KEY-----SOMETYPEOFPRIVATEVALUE-----END PRIVATE KEY-----"\n          ]\n      },\n      "cert": {\n          "title": "Certificate",\n          "type": "string",\n          "description": "Your Progres certificate",\n          "minLength": 1,\n          "examples": [\n              "-----BEGIN CERTIFICATE-----SOMETYPEOFVALUE-----END CERTIFICATE-----"\n          ]\n      },\n      "token": {\n          "title": "Token",\n          "type": "string",\n          "description": "Your Progres token",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "[REDACTED]"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "url",\n      "key",\n      "cert",\n      "token"\n  ]\n}\n')))}g.isMDXComponent=!0}}]);