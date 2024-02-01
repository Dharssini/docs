"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[69798],{95788:(e,t,n)=>{n.d(t,{Iu:()=>i,yg:()=>d});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),c=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(g.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=c(n),y=r,d=s["".concat(g,".").concat(y)]||s[y]||u[y]||l;return n?a.createElement(d,o(o({ref:t},i),{},{components:n})):a.createElement(d,o({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=y;var p={};for(var g in t)hasOwnProperty.call(t,g)&&(p[g]=t[g]);p.originalType=e,p[s]="string"==typeof e?e:r,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},28512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(45072),r=(n(11504),n(95788));const l={title:"ocl@1.1.7",id:"ocl-docs",keywords:["adaptor","ocl","get","getMappings"]},o=void 0,p={unversionedId:"packages/ocl-docs",id:"packages/ocl-docs",title:"ocl@1.1.7",description:"Functions",source:"@site/adaptors/packages/ocl-docs.md",sourceDirName:"packages",slug:"/packages/ocl-docs",permalink:"/adaptors/packages/ocl-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"ocl@1.1.7",id:"ocl-docs",keywords:["adaptor","ocl","get","getMappings"]},sidebar:"adaptors",previous:{title:"nexmo developer readme",permalink:"/adaptors/packages/nexmo-readme"},next:{title:"Config for ocl",permalink:"/adaptors/packages/ocl-configuration-schema"}},g={},c=[{value:"Functions",id:"functions",level:2},{value:"get",id:"get",level:2},{value:"getMappings",id:"getmappings",level:2}],i={toc:c},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,a.c)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"functions"},"Functions"),(0,r.yg)("dl",null,(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#get"},"get(path, query, callback)")),(0,r.yg)("dt",null,(0,r.yg)("a",{href:"#getmappings"},"getMappings(ownerId, repositoryId, [options], callback)"))),(0,r.yg)("h2",{id:"get"},"get"),(0,r.yg)("p",null,"get(path, query, callback) \u21d2 ",(0,r.yg)("code",null,"Operation")),(0,r.yg)("p",null,"Get a resource in OCL"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"object")),(0,r.yg)("td",{parentName:"tr",align:null},"A query object that will limit what resources are retrieved when converted into request params.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'get(\n  "orgs/MSFOCG/collections/lime-demo/HEAD/mappings",\n  {\n    page: 1,\n    exact_match: "off",\n    limit: 200,\n    verbose: false,\n    sortDesc: "_score",\n  },\n  (state) => {\n    // Add state oclMappings\n    const oclMappings = state.data;\n    return { ...state, data: {}, references: [], response: {}, oclMappings };\n  }\n);\n')),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"getmappings"},"getMappings"),(0,r.yg)("p",null,"getMappings(ownerId, repositoryId, ","[options]",", callback) \u21d2 ",(0,r.yg)("code",null,"Operation")),(0,r.yg)("p",null,"Get a source repository in OCL"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ownerId"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"An OCL user or organization")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"repositoryId"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"An OCL collection id or source id")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[options]"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"Object")),(0,r.yg)("td",{parentName:"tr",align:null},"Optional. ",(0,r.yg)("inlineCode",{parentName:"td"},"options"),"  which can be passed to  See more ",(0,r.yg)("a",{parentName:"td",href:"https://api.openconceptlab.org/swagger/"},"on OCL swagger docs"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"callback"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"function")),(0,r.yg)("td",{parentName:"tr",align:null},"(Optional) callback function")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example"),"  "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},'getMappings(\n  "MSFOCG",\n  "lime-demo",\n  { page: 1, exact_match: "off", verbose: false },\n  (state) => {\n    // Add state oclMappings\n    const oclMappings = state.data;\n    return { ...state, data: {}, references: [], response: {}, oclMappings };\n  }\n);\n')),(0,r.yg)("hr",null))}u.isMDXComponent=!0}}]);