"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[56826],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},36732:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"Failed Payment Notification",sidebar_label:"Failed Payment Notification",id:"Failed-Payment-Notification-2021-04-23",keywords:["library","job","expression","http","alterState"]},i=void 0,l={unversionedId:"jobs/auto/Failed-Payment-Notification-2021-04-23",id:"jobs/auto/Failed-Payment-Notification-2021-04-23",title:"Failed Payment Notification",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/Failed-Payment-Notification-2021-04-23.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/Failed-Payment-Notification-2021-04-23",permalink:"/fr/library/jobs/auto/Failed-Payment-Notification-2021-04-23",draft:!1,tags:[],version:"current",frontMatter:{title:"Failed Payment Notification",sidebar_label:"Failed Payment Notification",id:"Failed-Payment-Notification-2021-04-23",keywords:["library","job","expression","http","alterState"]},sidebar:"library",previous:{title:"\ud83d\udcdc Extract Kobo data from API to send to OpenFn Inbox",permalink:"/fr/library/jobs/auto/getKoboData"},next:{title:"Get CommCare Forms (Bulk Extract)",permalink:"/fr/library/jobs/auto/Get-CommCare-Forms-Bulk-Extract-2022-05-16"}},p={},s=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: Failed Payment Notification"),(0,r.kt)("li",{parentName:"ul"},"Adaptor: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,r.kt)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,r.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,r.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http/releases/tag/v3.1.7"},(0,r.kt)("inlineCode",{parentName:"a"},"v3.1.7"))),(0,r.kt)("li",{parentName:"ul"},"Created over 1 year ago"),(0,r.kt)("li",{parentName:"ul"},"Updated over 1 year ago"),(0,r.kt)("li",{parentName:"ul"},"Score: ",(0,r.kt)("b",null,"0")," (an ",(0,r.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,r.kt)("h2",{id:"key-functions"},"Key Functions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"alterState")),(0,r.kt)("h2",{id:"expression"},"Expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'alterState(state => {\n  console.log("We have notified the administrator to manually initiate payment.");\n  console.log("We have notified the CHW that payment is pending.");\n  return state;\n})\n')))}u.isMDXComponent=!0}}]);