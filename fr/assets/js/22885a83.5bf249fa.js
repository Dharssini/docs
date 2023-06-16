"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[97963],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(a),h=r,d=s["".concat(p,".").concat(h)]||s[h]||m[h]||l;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},92389:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"openmrs changelog",id:"openmrs-changelog",keywords:["adaptor","changelog","openmrs"]},i="Changelog for the openmrs adaptor",o={unversionedId:"packages/openmrs-changelog",id:"packages/openmrs-changelog",title:"openmrs changelog",description:"1.1.1",source:"@site/adaptors/packages/openmrs-changelog.md",sourceDirName:"packages",slug:"/packages/openmrs-changelog",permalink:"/fr/adaptors/packages/openmrs-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"openmrs changelog",id:"openmrs-changelog",keywords:["adaptor","changelog","openmrs"]},sidebar:"adaptors",previous:{title:"Create Patient in OpenMRS",permalink:"/fr/adaptors/library/jobs/auto/Create-Patient-in-OpenMRS-2019-10-24"},next:{title:"openmrs developer readme",permalink:"/fr/adaptors/packages/openmrs-readme"}},p={},c=[{value:"1.1.1",id:"111",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"1.1.0",id:"110",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"1.0.1",id:"101",level:2},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"1.0.0",id:"100",level:2},{value:"Major Changes",id:"major-changes",level:3},{value:"0.10.5",id:"0105",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"0.10.4",id:"0104",level:2},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"0.10.3",id:"0103",level:2},{value:"Patch Changes",id:"patch-changes-4",level:3},{value:"0.10.2",id:"0102",level:2},{value:"Patch Changes",id:"patch-changes-5",level:3},{value:"0.10.1",id:"0101",level:2},{value:"Patch Changes",id:"patch-changes-6",level:3},{value:"0.10.0",id:"0100",level:2},{value:"Minor Changes",id:"minor-changes-1",level:3}],u={toc:c},s="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog-for-the-openmrs-adaptor"},"Changelog for the openmrs adaptor"),(0,r.kt)("h1",{id:"openfnlanguage-openmrs"},"@openfn/language-openmrs"),(0,r.kt)("h2",{id:"111"},"1.1.1"),(0,r.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2390129: - replace throw new Error with console.log",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"improve Log function")))),(0,r.kt)("h2",{id:"110"},"1.1.0"),(0,r.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"d124f67: - Add create, update and upsert function",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add callback support and improve examples for",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"get()"),(0,r.kt)("li",{parentName:"ul"},"post()"),(0,r.kt)("li",{parentName:"ul"},"getPatient()"),(0,r.kt)("li",{parentName:"ul"},"searchPerson()"),(0,r.kt)("li",{parentName:"ul"},"getEncounter()"),(0,r.kt)("li",{parentName:"ul"},"searchPatient()"),(0,r.kt)("li",{parentName:"ul"},"createPatient()"),(0,r.kt)("li",{parentName:"ul"},"getEncounters()"),(0,r.kt)("li",{parentName:"ul"},"createEncounter()")))))),(0,r.kt)("h2",{id:"101"},"1.0.1"),(0,r.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"97cc7ce: - Fix checking for empty response",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Style logs output")))),(0,r.kt)("h2",{id:"100"},"1.0.0"),(0,r.kt)("h3",{id:"major-changes"},"Major Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"b6478c0: - Removed ",(0,r.kt)("inlineCode",{parentName:"li"},"request")," in favour of ",(0,r.kt)("inlineCode",{parentName:"li"},"superagent"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Improve error handling"),(0,r.kt)("li",{parentName:"ul"},"Moved ",(0,r.kt)("inlineCode",{parentName:"li"},"login")," to execute function"),(0,r.kt)("li",{parentName:"ul"},"Added",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createPatient")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"searchPatient")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"searchPerson")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getEncounters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getEncounter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"get")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"post"))))))),(0,r.kt)("h2",{id:"0105"},"0.10.5"),(0,r.kt)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[929bca6]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@openfn/",(0,r.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.7"},"language-common@1.7.7"))))),(0,r.kt)("h2",{id:"0104"},"0.10.4"),(0,r.kt)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"14f481e: mark execute as private"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[2b4c61a]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@openfn/",(0,r.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.6"},"language-common@1.7.6"))))),(0,r.kt)("h2",{id:"0103"},"0.10.3"),(0,r.kt)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"f7ebd3c: remove sample configuration")),(0,r.kt)("h2",{id:"0102"},"0.10.2"),(0,r.kt)("h3",{id:"patch-changes-5"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"f2aed32: add examples")),(0,r.kt)("h2",{id:"0101"},"0.10.1"),(0,r.kt)("h3",{id:"patch-changes-6"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"6d8de03: change @constructor to @function and remove /","*",(0,r.kt)("em",{parentName:"li"}," @module Adaptor "),"/")),(0,r.kt)("h2",{id:"0100"},"0.10.0"),(0,r.kt)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"6786949: Migrate OpenMRS")))}m.isMDXComponent=!0}}]);