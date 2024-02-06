"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[75896],{95788:(e,a,n)=>{n.d(a,{Iu:()=>g,yg:()=>d});var t=n(11504);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),c=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},g=function(e){var a=c(e.components);return t.createElement(i.Provider,{value:a},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||l;return n?t.createElement(d,p(p({ref:a},g),{},{components:n})):t.createElement(d,p({ref:a},g))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=m;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[s]="string"==typeof e?e:r,p[1]=o;for(var c=2;c<l;c++)p[c]=n[c];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29904:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=n(45072),r=(n(11504),n(95788));const l={title:"smpp changelog",id:"smpp-changelog",keywords:["adaptor","changelog","smpp"]},p="Changelog for the smpp adaptor",o={unversionedId:"packages/smpp-changelog",id:"packages/smpp-changelog",title:"smpp changelog",description:"1.3.1",source:"@site/adaptors/packages/smpp-changelog.md",sourceDirName:"packages",slug:"/packages/smpp-changelog",permalink:"/adaptors/packages/smpp-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"smpp changelog",id:"smpp-changelog",keywords:["adaptor","changelog","smpp"]},sidebar:"adaptors",previous:{title:"Config for smpp",permalink:"/adaptors/packages/smpp-configuration-schema"},next:{title:"smpp developer readme",permalink:"/adaptors/packages/smpp-readme"}},i={},c=[{value:"1.3.1",id:"131",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"1.3.0",id:"130",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"1.2.3",id:"123",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"1.2.2",id:"122",level:2},{value:"Patch Changes",id:"patch-changes-3",level:3},{value:"1.2.1",id:"121",level:2},{value:"Patch Changes",id:"patch-changes-4",level:3},{value:"1.2.0",id:"120",level:2},{value:"Minor Changes",id:"minor-changes-1",level:3}],g={toc:c},s="wrapper";function u(e){let{components:a,...n}=e;return(0,r.yg)(s,(0,t.c)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"changelog-for-the-smpp-adaptor"},"Changelog for the smpp adaptor"),(0,r.yg)("h1",{id:"openfnlanguage-smpp"},"@openfn/language-smpp"),(0,r.yg)("h2",{id:"131"},"1.3.1"),(0,r.yg)("h3",{id:"patch-changes"},"Patch Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Update lock files"),(0,r.yg)("li",{parentName:"ul"},"Updated dependencies",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"@openfn/",(0,r.yg)("a",{parentName:"li",href:"mailto:language-common@1.8.1"},"language-common@1.8.1"))))),(0,r.yg)("h2",{id:"130"},"1.3.0"),(0,r.yg)("h3",{id:"minor-changes"},"Minor Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"2c1d603: Remove parameter reassignment to ensure proper functioning inside an\n",(0,r.yg)("inlineCode",{parentName:"p"},"each")," block; add eslint"),(0,r.yg)("p",{parentName:"li"},"The packages receiving a major bump here exposed functions that didn't work as\nexpected inside ",(0,r.yg)("inlineCode",{parentName:"p"},"each")," blocks. Users were previously wrapping these functions\ninside their own custom ",(0,r.yg)("inlineCode",{parentName:"p"},"fn")," blocks, and this change will ensure that they can\nbe used inside a standard each."),(0,r.yg)("p",{parentName:"li"},"See ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/issues/275"},"https://github.com/OpenFn/adaptors/issues/275")," for more details."))),(0,r.yg)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Updated dependencies ","[2c1d603]",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"@openfn/",(0,r.yg)("a",{parentName:"li",href:"mailto:language-common@1.8.0"},"language-common@1.8.0"))))),(0,r.yg)("h2",{id:"123"},"1.2.3"),(0,r.yg)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"14f481e: mark execute as private"),(0,r.yg)("li",{parentName:"ul"},"Updated dependencies ","[2b4c61a]",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"@openfn/",(0,r.yg)("a",{parentName:"li",href:"mailto:language-common@1.7.6"},"language-common@1.7.6"))))),(0,r.yg)("h2",{id:"122"},"1.2.2"),(0,r.yg)("h3",{id:"patch-changes-3"},"Patch Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"f7ebd3c: remove sample configuration")),(0,r.yg)("h2",{id:"121"},"1.2.1"),(0,r.yg)("h3",{id:"patch-changes-4"},"Patch Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"f2aed32: add examples")),(0,r.yg)("h2",{id:"120"},"1.2.0"),(0,r.yg)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"3aedd05: migrate smpp")))}u.isMDXComponent=!0}}]);