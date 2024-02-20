"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[11133],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>d});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),g=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=g(e.components);return t.createElement(p.Provider,{value:a},e.children)},h="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=g(n),u=r,d=h["".concat(p,".").concat(u)]||h[u]||s[u]||l;return n?t.createElement(d,o(o({ref:a},c),{},{components:n})):t.createElement(d,o({ref:a},c))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[h]="string"==typeof e?e:r,o[1]=i;for(var g=2;g<l;g++)o[g]=n[g];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65224:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var t=n(58168),r=(n(96540),n(15680));const l={title:"openhim changelog",id:"openhim-changelog",keywords:["adaptor","changelog","openhim"]},o="Changelog for the openhim adaptor",i={unversionedId:"packages/openhim-changelog",id:"packages/openhim-changelog",title:"openhim changelog",description:"0.2.1",source:"@site/adaptors/packages/openhim-changelog.md",sourceDirName:"packages",slug:"/packages/openhim-changelog",permalink:"/adaptors/packages/openhim-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"openhim changelog",id:"openhim-changelog",keywords:["adaptor","changelog","openhim"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc Create encounter in OpenHIM",permalink:"/adaptors/library/jobs/auto/CommCare-FHIR"},next:{title:"openhim developer readme",permalink:"/adaptors/packages/openhim-readme"}},p={},g=[{value:"0.2.1",id:"021",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"0.2.0",id:"020",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"0.1.4",id:"014",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"0.1.3",id:"013",level:2},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"0.1.2",id:"012",level:2},{value:"Patch Changes",id:"patch-changes-4",level:3},{value:"0.1.1",id:"011",level:2},{value:"Patch Changes",id:"patch-changes-5",level:3},{value:"0.1.0",id:"010",level:2},{value:"Minor Changes",id:"minor-changes-1",level:3},{value:"Patch Changes",id:"patch-changes-6",level:3}],c={toc:g},h="wrapper";function s(e){let{components:a,...n}=e;return(0,r.yg)(h,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"changelog-for-the-openhim-adaptor"},"Changelog for the openhim adaptor"),(0,r.yg)("h1",{id:"openfnlanguage-openhim"},"@openfn/language-openhim"),(0,r.yg)("h2",{id:"021"},"0.2.1"),(0,r.yg)("h3",{id:"patch-changes"},"Patch Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Update lock files"),(0,r.yg)("li",{parentName:"ul"},"Updated dependencies",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"@openfn/",(0,r.yg)("a",{parentName:"li",href:"mailto:language-common@1.8.1"},"language-common@1.8.1"))))),(0,r.yg)("h2",{id:"020"},"0.2.0"),(0,r.yg)("h3",{id:"minor-changes"},"Minor Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"2c1d603: Remove parameter reassignment to ensure proper functioning inside an\n",(0,r.yg)("inlineCode",{parentName:"p"},"each")," block; add eslint"),(0,r.yg)("p",{parentName:"li"},"The packages receiving a major bump here exposed functions that didn't work as\nexpected inside ",(0,r.yg)("inlineCode",{parentName:"p"},"each")," blocks. Users were previously wrapping these functions\ninside their own custom ",(0,r.yg)("inlineCode",{parentName:"p"},"fn")," blocks, and this change will ensure that they can\nbe used inside a standard each."),(0,r.yg)("p",{parentName:"li"},"See ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/issues/275"},"https://github.com/OpenFn/adaptors/issues/275")," for more details."))),(0,r.yg)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Updated dependencies ","[2c1d603]",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"@openfn/",(0,r.yg)("a",{parentName:"li",href:"mailto:language-common@1.8.0"},"language-common@1.8.0"))))),(0,r.yg)("h2",{id:"014"},"0.1.4"),(0,r.yg)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"14f481e: mark execute as private"),(0,r.yg)("li",{parentName:"ul"},"Updated dependencies ","[2b4c61a]",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"@openfn/",(0,r.yg)("a",{parentName:"li",href:"mailto:language-common@1.7.6"},"language-common@1.7.6"))))),(0,r.yg)("h2",{id:"013"},"0.1.3"),(0,r.yg)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"f7ebd3c: remove sample configuration")),(0,r.yg)("h2",{id:"012"},"0.1.2"),(0,r.yg)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"f2aed32: add examples")),(0,r.yg)("h2",{id:"011"},"0.1.1"),(0,r.yg)("h3",{id:"patch-changes-5"},"Patch Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"6d8de03: change @constructor to @function and remove /","*",(0,r.yg)("em",{parentName:"li"}," @module Adaptor "),"/")),(0,r.yg)("h2",{id:"010"},"0.1.0"),(0,r.yg)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"1fd9b3b: Migrate OpenHIM")),(0,r.yg)("h3",{id:"patch-changes-6"},"Patch Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"e4ebcb6: Fix Large gzip Denial of Service in superagent"),(0,r.yg)("li",{parentName:"ul"},"e81561f: Updated ast and package.json")))}s.isMDXComponent=!0}}]);