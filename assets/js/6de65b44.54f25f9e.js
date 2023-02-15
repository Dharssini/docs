"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[6367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||r;return n?o.createElement(d,c(c({ref:t},p),{},{components:n})):o.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={title:"Config for facebook",id:"facebook-configuration-schema",keywords:["adaptor","configuration-schema","facebook"]},c=void 0,i={unversionedId:"packages/facebook-configuration-schema",id:"packages/facebook-configuration-schema",title:"Config for facebook",description:"Jobs that use the facebook adaptor may require authentication. A",source:"@site/adaptors/packages/facebook-configuration-schema.md",sourceDirName:"packages",slug:"/packages/facebook-configuration-schema",permalink:"/adaptors/packages/facebook-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for facebook",id:"facebook-configuration-schema",keywords:["adaptor","configuration-schema","facebook"]},sidebar:"adaptors",previous:{title:"facebook@0.2.2",permalink:"/adaptors/packages/facebook-docs"},next:{title:"facebook changelog",permalink:"/adaptors/packages/facebook-changelog"}},s={},l=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],p={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Jobs that use the ",(0,a.kt)("inlineCode",{parentName:"p"},"facebook"),' adaptor may require authentication. A\n"credential" for the ',(0,a.kt)("inlineCode",{parentName:"p"},"facebook")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,a.kt)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,a.kt)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,a.kt)("p",null,"  Paste this into the ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,a.kt)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accessToken": false\n}\n')),(0,a.kt)("h2",{id:"full-schema"},"Full Schema"),(0,a.kt)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "accessToken": {\n          "title": "Access Token",\n          "type": "string",\n          "description": "Your Facebook API access token",\n          "writeOnly": true,\n          "minLength": 1\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "accessToken"\n  ]\n}\n')))}f.isMDXComponent=!0}}]);