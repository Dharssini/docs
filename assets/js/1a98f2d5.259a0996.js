"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[88420],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>f});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},44156:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(45072),a=(t(11504),t(95788));const o={title:"Config for mssql",id:"mssql-configuration-schema",keywords:["adaptor","configuration-schema","mssql"]},s=void 0,i={unversionedId:"packages/mssql-configuration-schema",id:"packages/mssql-configuration-schema",title:"Config for mssql",description:"Jobs that use the mssql adaptor may require authentication. A",source:"@site/adaptors/packages/mssql-configuration-schema.md",sourceDirName:"packages",slug:"/packages/mssql-configuration-schema",permalink:"/adaptors/packages/mssql-configuration-schema",draft:!1,tags:[],version:"current",frontMatter:{title:"Config for mssql",id:"mssql-configuration-schema",keywords:["adaptor","configuration-schema","mssql"]},sidebar:"adaptors",previous:{title:"mssql@4.1.8",permalink:"/adaptors/packages/mssql-docs"},next:{title:"Extract Vitas Data",permalink:"/adaptors/library/jobs/auto/Extract-Vitas-Data-2021-05-11"}},l={},c=[{value:"Sample Configuration",id:"sample-configuration",level:2},{value:"Full Schema",id:"full-schema",level:2}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Jobs that use the ",(0,a.yg)("inlineCode",{parentName:"p"},"mssql"),' adaptor may require authentication. A\n"credential" for the ',(0,a.yg)("inlineCode",{parentName:"p"},"mssql")," adaptor will follow the schema below. When\nusing the CLI, you can set up your own ",(0,a.yg)("inlineCode",{parentName:"p"},"state.configuration")," by using the\nsample below."),(0,a.yg)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,a.yg)("p",null,"  Paste this into the ",(0,a.yg)("inlineCode",{parentName:"p"},"configuration")," key of your ",(0,a.yg)("inlineCode",{parentName:"p"},"state.json")," file and\nmodify the values to run jobs locally."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "server": "something.database.windows.net",\n  "database": "demo-db",\n  "userName": "admin",\n  "password": "@super(!)Password"\n}\n')),(0,a.yg)("h2",{id:"full-schema"},"Full Schema"),(0,a.yg)("p",null,"  The full configuration schema describes each attribute of the credential and\nnotes those that are required."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "properties": {\n      "server": {\n          "title": "Server URL",\n          "type": "string",\n          "description": "The database instance server URL or IP address",\n          "format": "uri",\n          "minLength": 1,\n          "examples": [\n              "something.database.windows.net"\n          ]\n      },\n      "database": {\n          "title": "Database",\n          "type": "string",\n          "description": "The database name",\n          "minLength": 1,\n          "examples": [\n              "demo-db"\n          ]\n      },\n      "userName": {\n          "title": "Username",\n          "type": "string",\n          "description": "Username",\n          "minLength": 1,\n          "examples": [\n              "admin"\n          ]\n      },\n      "password": {\n          "title": "Password",\n          "type": "string",\n          "description": "Password",\n          "writeOnly": true,\n          "minLength": 1,\n          "examples": [\n              "@super(!)Password"\n          ]\n      }\n  },\n  "type": "object",\n  "additionalProperties": true,\n  "required": [\n      "server",\n      "database"\n  ]\n}\n')))}m.isMDXComponent=!0}}]);