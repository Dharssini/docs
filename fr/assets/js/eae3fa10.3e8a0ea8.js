"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[72099],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),b=n,d=m["".concat(s,".").concat(b)]||m[b]||u[b]||o;return r?a.createElement(d,l(l({ref:t},c),{},{components:r})):a.createElement(d,l({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78618:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"aleksa cron",sidebar_label:"aleksa cron",id:"aleksa-cron-2022-04-29",keywords:["library","job","expression","http"]},l=void 0,i={unversionedId:"library/jobs/auto/aleksa-cron-2022-04-29",id:"library/jobs/auto/aleksa-cron-2022-04-29",title:"aleksa cron",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/aleksa-cron-2022-04-29.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/aleksa-cron-2022-04-29",permalink:"/fr/adaptors/library/jobs/auto/aleksa-cron-2022-04-29",draft:!1,tags:[],version:"current",frontMatter:{title:"aleksa cron",sidebar_label:"aleksa cron",id:"aleksa-cron-2022-04-29",keywords:["library","job","expression","http"]},sidebar:"adaptors",previous:{title:"Get CommCare Forms (Bulk Extract)",permalink:"/fr/adaptors/library/jobs/auto/Get-CommCare-Forms-Bulk-Extract-2022-05-16"},next:{title:"1. Get CommCare Forms (Bulk Extract)",permalink:"/fr/adaptors/library/jobs/auto/1-Get-CommCare-Forms-Bulk-Extract-2021-04-08"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,n.kt)("h2",{id:"metadata"},"Metadata"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Name: aleksa cron"),(0,n.kt)("li",{parentName:"ul"},"Adaptor: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,n.kt)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,n.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http/releases/tag/v4.0.0"},(0,n.kt)("inlineCode",{parentName:"a"},"v4.0.0"))),(0,n.kt)("li",{parentName:"ul"},"Created 7 months ago"),(0,n.kt)("li",{parentName:"ul"},"Updated 7 months ago"),(0,n.kt)("li",{parentName:"ul"},"Score: ",(0,n.kt)("b",null,"0")," (an ",(0,n.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.kt)("h2",{id:"key-functions"},"Key Functions"),(0,n.kt)("h2",{id:"expression"},"Expression"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"fn(state => {\n  console.log(state);\n  return state;\n})\n")))}u.isMDXComponent=!0}}]);