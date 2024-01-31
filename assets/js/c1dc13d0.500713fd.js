"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[31800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,f=u["".concat(c,".").concat(h)]||u[h]||g[h]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},12017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Config for googlehealthcare",id:"googlehealthcare-configuration-schema",keywords:["adaptor","configuration-schema","googlehealthcare"]},i=void 0,l={unversionedId:"packages/googlehealthcare-configuration-schema",id:"packages/googlehealthcare-configuration-schema",title:"Config for googlehealthcare",description:"Jobs that use the googlehealthcare adaptor may require authentication. A",source:"@site/adaptors/packages/googlehealthcare-configuration-schema.md",sourceDirName:"packages",slug:"/packages/googlehealthcare-configuration-schema",permalink:"/adaptors/packages/googlehealthcare-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for googlehealthcare",id:"googlehealthcare-configuration-schema",keywords:["adaptor","configuration-schema","googlehealthcare"]},sidebar:"adaptors",previous:{title:"googlehealthcare@1.0.0",permalink:"/adaptors/packages/googlehealthcare-docs"},next:{title:"googlehealthcare changelog",permalink:"/adaptors/packages/googlehealthcare-changelog"}},c={},s=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],p={toc:s},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jobs that use the ",(0,r.kt)("inlineCode",{parentName:"p"},"googlehealthcare"),' adaptor may require authentication. A\n"credential" for the ',(0,r.kt)("inlineCode",{parentName:"p"},"googlehealthcare")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,r.kt)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,r.kt)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,r.kt)("p",null,"  Paste this into the ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,r.kt)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsI",\n  "apiVersion": "v1"\n}\n')),(0,r.kt)("h2",{id:"full-schema"},"Full Schema"),(0,r.kt)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "$comment": "OAuth2",\n  "type": "object",\n  "properties": {\n      "access_token": {\n          "title": "Access Token",\n          "type": "string",\n          "description": "Your Google Cloud Healthcare access token",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlGWERwYmZNRlQyU3ZRdVhoODQ2WVR3RUlCdyIsI"\n          ]\n      },\n      "apiVersion": {\n          "title": "API Version",\n          "type": "string",\n          "description": "The API version",\n          "default": "v1",\n          "examples": [\n              "v1",\n              "v1beta1"\n          ]\n      }\n  },\n  "required": [\n      "access_token"\n  ]\n}\n')))}g.isMDXComponent=!0}}]);