"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[76874],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(a),g=r,f=u["".concat(i,".").concat(g)]||u[g]||d[g]||l;return a?n.createElement(f,o(o({ref:t},s),{},{components:a})):n.createElement(f,o({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},92873:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"sftp changelog",id:"sftp-changelog",keywords:["adaptor","changelog","sftp"]},o="Changelog for the sftp adaptor",p={unversionedId:"packages/sftp-changelog",id:"packages/sftp-changelog",title:"sftp changelog",description:"0.6.3",source:"@site/adaptors/packages/sftp-changelog.md",sourceDirName:"packages",slug:"/packages/sftp-changelog",permalink:"/adaptors/packages/sftp-changelog",draft:!1,tags:[],version:"current",frontMatter:{title:"sftp changelog",id:"sftp-changelog",keywords:["adaptor","changelog","sftp"]},sidebar:"library",previous:{title:"sftp@0.6.3",permalink:"/adaptors/packages/sftp-docs"},next:{title:"sftp developer readme",permalink:"/adaptors/packages/sftp-readme"}},i={},c=[{value:"0.6.3",id:"063",level:2},{value:"Patch Changes",id:"patch-changes",level:3},{value:"0.6.2",id:"062",level:2},{value:"Patch Changes",id:"patch-changes-1",level:3},{value:"0.6.1",id:"061",level:2},{value:"Patch Changes",id:"patch-changes-2",level:3},{value:"0.6.0",id:"060",level:2},{value:"Minor Changes",id:"minor-changes",level:3},{value:"0.5.0",id:"050",level:2},{value:"Minor Changes",id:"minor-changes-1",level:3}],s={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog-for-the-sftp-adaptor"},"Changelog for the sftp adaptor"),(0,r.kt)("h1",{id:"openfnlanguage-sftp"},"@openfn/language-sftp"),(0,r.kt)("h2",{id:"063"},"0.6.3"),(0,r.kt)("h3",{id:"patch-changes"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"8566b26: Fix typings"),(0,r.kt)("li",{parentName:"ul"},"b3d45ff: Fix CJS export of npm package."),(0,r.kt)("li",{parentName:"ul"},"4126a62: Fix built bundle"),(0,r.kt)("li",{parentName:"ul"},"ecf5d30: remove sinon since it was not being used"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[8566b26]"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[b3d45ff]"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[b5eb665]"),(0,r.kt)("li",{parentName:"ul"},"Updated dependencies ","[ecf5d30]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"@openfn/",(0,r.kt)("a",{parentName:"li",href:"mailto:language-common@1.7.4"},"language-common@1.7.4"))))),(0,r.kt)("h2",{id:"062"},"0.6.2"),(0,r.kt)("h3",{id:"patch-changes-1"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"e04aa28: Rename credential-schema to configuration-schema, update descriptions")),(0,r.kt)("h2",{id:"061"},"0.6.1"),(0,r.kt)("h3",{id:"patch-changes-2"},"Patch Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"28dfbfa: add todo, fix build pack")),(0,r.kt)("h2",{id:"060"},"0.6.0"),(0,r.kt)("h3",{id:"minor-changes"},"Minor Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"f294a62: Added credential-schema.json for new ui")),(0,r.kt)("h2",{id:"050"},"0.5.0"),(0,r.kt)("h3",{id:"minor-changes-1"},"Minor Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2c04894: added sftp package")))}d.isMDXComponent=!0}}]);