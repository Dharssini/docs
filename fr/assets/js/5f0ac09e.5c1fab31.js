"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[7253],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,b=d["".concat(l,".").concat(f)]||d[f]||c[f]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11871:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],s={title:"Load / Upsert Data into PostgreSQL",sidebar_label:"Load / Upsert Data into PostgreSQL",id:"Load-Upsert-Data-into-PostgreSQL-2022-03-22",keywords:["library","job","expression","postgresql"]},l=void 0,p={unversionedId:"jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22",id:"jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22",title:"Load / Upsert Data into PostgreSQL",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22",permalink:"/fr/library/jobs/auto/Load-Upsert-Data-into-PostgreSQL-2022-03-22",draft:!1,tags:[],version:"current",frontMatter:{title:"Load / Upsert Data into PostgreSQL",sidebar_label:"Load / Upsert Data into PostgreSQL",id:"Load-Upsert-Data-into-PostgreSQL-2022-03-22",keywords:["library","job","expression","postgresql"]},sidebar:"library",previous:{title:"Create Person in OpenMRS",permalink:"/fr/library/jobs/auto/Create-Person-in-OpenMRS-2016-02-12"},next:{title:"Load to DB",permalink:"/fr/library/jobs/auto/Load-to-DB-2022-05-16"}},u={},c=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],d={toc:c};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,a.kt)("h2",{id:"metadata"},"Metadata"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: Load / Upsert Data into PostgreSQL"),(0,a.kt)("li",{parentName:"ul"},"Adaptor: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-postgresql"},(0,a.kt)("inlineCode",{parentName:"a"},"@openfn/language-postgresql"))),(0,a.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-postgresql/releases/tag/v3.3.3"},(0,a.kt)("inlineCode",{parentName:"a"},"v3.3.3"))),(0,a.kt)("li",{parentName:"ul"},"Created 4 months ago"),(0,a.kt)("li",{parentName:"ul"},"Updated 4 months ago"),(0,a.kt)("li",{parentName:"ul"},"Score: ",(0,a.kt)("b",null,"0")," (an ",(0,a.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.kt)("h2",{id:"key-functions"},"Key Functions"),(0,a.kt)("h2",{id:"expression"},"Expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Your job goes here.\n")))}f.isMDXComponent=!0}}]);