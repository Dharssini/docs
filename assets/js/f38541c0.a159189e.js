"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[90023],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var a=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,g=c["".concat(l,".").concat(d)]||c[d]||y[d]||n;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41261:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=r(58168),o=(r(96540),r(15680));const n={title:"Load / Upsert Data into PostgreSQL",sidebar_label:"Load / Upsert Data into PostgreSQL",id:"Load-Upsert-Data-into-PostgreSQL-2022-03-22",keywords:["library","job","expression","postgresql"]},i=void 0,s={unversionedId:"library/jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22",id:"library/jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22",title:"Load / Upsert Data into PostgreSQL",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22",permalink:"/adaptors/library/jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22",draft:!1,tags:[],version:"current",frontMatter:{title:"Load / Upsert Data into PostgreSQL",sidebar_label:"Load / Upsert Data into PostgreSQL",id:"Load-Upsert-Data-into-PostgreSQL-2022-03-22",keywords:["library","job","expression","postgresql"]},sidebar:"adaptors",previous:{title:"Load to DB",permalink:"/adaptors/library/jobs/auto/Load-to-DB-2022-05-16"},next:{title:"Upsert to mBrana",permalink:"/adaptors/library/jobs/auto/Upsert-to-mBrana-2021-05-11"}},l={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p},c="wrapper";function y(e){let{components:t,...r}=e;return(0,o.yg)(c,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,o.yg)("h2",{id:"metadata"},"Metadata"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Name: Load / Upsert Data into PostgreSQL"),(0,o.yg)("li",{parentName:"ul"},"Adaptor: ",(0,o.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-postgresql"},(0,o.yg)("inlineCode",{parentName:"a"},"@openfn/language-postgresql"))),(0,o.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-postgresql/releases/tag/v3.3.3"},(0,o.yg)("inlineCode",{parentName:"a"},"v3.3.3"))),(0,o.yg)("li",{parentName:"ul"},"Created about 2 years ago"),(0,o.yg)("li",{parentName:"ul"},"Updated about 2 years ago"),(0,o.yg)("li",{parentName:"ul"},"Score: ",(0,o.yg)("b",null,"0")," (an ",(0,o.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.yg)("h2",{id:"key-functions"},"Key Functions"),(0,o.yg)("h2",{id:"expression"},"Expression"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"// Your job goes here.\n")))}y.isMDXComponent=!0}}]);