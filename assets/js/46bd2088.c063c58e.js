"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[51592],{95788:(e,n,a)=>{a.d(n,{Iu:()=>p,yg:()=>d});var t=a(11504);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),l=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(a),y=r,d=m["".concat(s,".").concat(y)]||m[y]||u[y]||o;return a?t.createElement(d,i(i({ref:n},p),{},{components:a})):t.createElement(d,i({ref:n},p))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=y;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[m]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},11204:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=a(45072),r=(a(11504),a(95788));const o={title:"Config for khanacademy",id:"khanacademy-configuration-schema",keywords:["adaptor","configuration-schema","khanacademy"]},i=void 0,c={unversionedId:"packages/khanacademy-configuration-schema",id:"packages/khanacademy-configuration-schema",title:"Config for khanacademy",description:"Jobs that use the khanacademy adaptor may require authentication. A",source:"@site/adaptors/packages/khanacademy-configuration-schema.md",sourceDirName:"packages",slug:"/packages/khanacademy-configuration-schema",permalink:"/adaptors/packages/khanacademy-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for khanacademy",id:"khanacademy-configuration-schema",keywords:["adaptor","configuration-schema","khanacademy"]},sidebar:"adaptors",previous:{title:"khanacademy@0.4.1",permalink:"/adaptors/packages/khanacademy-docs"},next:{title:"khanacademy changelog",permalink:"/adaptors/packages/khanacademy-changelog"}},s={},l=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],p={toc:l},m="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(m,(0,t.c)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Jobs that use the ",(0,r.yg)("inlineCode",{parentName:"p"},"khanacademy"),' adaptor may require authentication. A\n"credential" for the ',(0,r.yg)("inlineCode",{parentName:"p"},"khanacademy")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,r.yg)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,r.yg)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,r.yg)("p",null,"  Paste this into the ",(0,r.yg)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,r.yg)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "email": "test@openfn.org",\n  "password": "@some(!)Strongpassword",\n  "consumerKey": "somEThINGkeyish",\n  "secretKey": "otherThiNGfSECret"\n}\n')),(0,r.yg)("h2",{id:"full-schema"},"Full Schema"),(0,r.yg)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "email": {\n          "title": "Email",\n          "type": "string",\n          "description": "Your Khanacademy login email",\n          "format": "email",\n          "minLength": 1,\n          "examples": [\n              "test@openfn.org"\n          ]\n      },\n      "password": {\n          "title": "Password",\n          "type": "string",\n          "description": "Your Khanacademy login password",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "@some(!)Strongpassword"\n          ]\n      },\n      "consumerKey": {\n          "title": "Consumer Key",\n          "type": "string",\n          "description": "Your Khanacademy consumer key",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "somEThINGkeyish"\n          ]\n      },\n      "secretKey": {\n          "title": "Secret Key",\n          "type": "string",\n          "description": "Your Khanacademy secret key",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "otherThiNGfSECret"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "email",\n      "password",\n      "secretKey",\n      "consumerKey"\n  ]\n}\n')))}u.isMDXComponent=!0}}]);