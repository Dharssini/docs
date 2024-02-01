"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[94474],{95788:(e,n,t)=>{t.d(n,{Iu:()=>l,yg:()=>m});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),g=o,m=u["".concat(s,".").concat(g)]||u[g]||f[g]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},86100:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=t(45072),o=(t(11504),t(95788));const a={title:"Config for openfn",id:"openfn-configuration-schema",keywords:["adaptor","configuration-schema","openfn"]},i=void 0,p={unversionedId:"packages/openfn-configuration-schema",id:"packages/openfn-configuration-schema",title:"Config for openfn",description:"Jobs that use the openfn adaptor may require authentication. A",source:"@site/adaptors/packages/openfn-configuration-schema.md",sourceDirName:"packages",slug:"/packages/openfn-configuration-schema",permalink:"/adaptors/packages/openfn-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for openfn",id:"openfn-configuration-schema",keywords:["adaptor","configuration-schema","openfn"]},sidebar:"adaptors",previous:{title:"openfn@1.3.8",permalink:"/adaptors/packages/openfn-docs"},next:{title:"openfn changelog",permalink:"/adaptors/packages/openfn-changelog"}},s={},c=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],l={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.c)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Jobs that use the ",(0,o.yg)("inlineCode",{parentName:"p"},"openfn"),' adaptor may require authentication. A\n"credential" for the ',(0,o.yg)("inlineCode",{parentName:"p"},"openfn")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,o.yg)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,o.yg)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,o.yg)("p",null,"  Paste this into the ",(0,o.yg)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,o.yg)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "host": "https://www.openfn.org",\n  "projectId": "some-id",\n  "username": "test@openfn.org",\n  "password": "@super(!)Secretpass"\n}\n')),(0,o.yg)("h2",{id:"full-schema"},"Full Schema"),(0,o.yg)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "host": {\n          "title": "Host",\n          "type": "string",\n          "description": "The OpenFn host url",\n          "format": "uri",\n          "default": "https://www.openfn.org",\n          "minLength": 1,\n          "examples": [\n              "https://www.openfn.org"\n          ]\n      },\n      "projectId": {\n          "title": "Project ID",\n          "type": "string",\n          "description": "Your OpenFn project ID",\n          "minLength": 1,\n          "examples": [\n              "some-id"\n          ]\n      },\n      "username": {\n          "title": "Username",\n          "type": "string",\n          "description": "The username to log in to OpenFn",\n          "minLength": 1,\n          "examples": [\n              "test@openfn.org"\n          ]\n      },\n      "password": {\n          "title": "Password",\n          "type": "string",\n          "description": "The password to log in to OpenFn",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "@super(!)Secretpass"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "host",\n      "username",\n      "password"\n  ]\n}\n')))}f.isMDXComponent=!0}}]);