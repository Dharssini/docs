"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[48144],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>b});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),y=a,b=m["".concat(l,".").concat(y)]||m[y]||u[y]||o;return r?n.createElement(b,s(s({ref:t},c),{},{components:r})):n.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},42964:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(45072),a=(r(11504),r(95788));const o={title:"Get CommCare Forms (Bulk Extract)",sidebar_label:"Get CommCare Forms (Bulk Extract)",id:"Get-CommCare-Forms-Bulk-Extract-2022-05-16",keywords:["library","job","expression","http","each","get","post"]},s=void 0,i={unversionedId:"library/jobs/auto/Get-CommCare-Forms-Bulk-Extract-2022-05-16",id:"library/jobs/auto/Get-CommCare-Forms-Bulk-Extract-2022-05-16",title:"Get CommCare Forms (Bulk Extract)",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Get-CommCare-Forms-Bulk-Extract-2022-05-16.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Get-CommCare-Forms-Bulk-Extract-2022-05-16",permalink:"/adaptors/library/jobs/auto/Get-CommCare-Forms-Bulk-Extract-2022-05-16",draft:!1,tags:[],version:"current",frontMatter:{title:"Get CommCare Forms (Bulk Extract)",sidebar_label:"Get CommCare Forms (Bulk Extract)",id:"Get-CommCare-Forms-Bulk-Extract-2022-05-16",keywords:["library","job","expression","http","each","get","post"]},sidebar:"adaptors",previous:{title:"Catch Error in HTTP Request",permalink:"/adaptors/library/jobs/auto/Catch-Error-in-HTTP-Request-2016-08-26"},next:{title:"aleksa cron",permalink:"/adaptors/library/jobs/auto/aleksa-cron-2022-04-29"}},l={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.c)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,a.yg)("h2",{id:"metadata"},"Metadata"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Name: Get CommCare Forms (Bulk Extract)"),(0,a.yg)("li",{parentName:"ul"},"Adaptor: ",(0,a.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,a.yg)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,a.yg)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.yg)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http/releases/tag/v3.1.7"},(0,a.yg)("inlineCode",{parentName:"a"},"v3.1.7"))),(0,a.yg)("li",{parentName:"ul"},"Created over 1 year ago"),(0,a.yg)("li",{parentName:"ul"},"Updated over 1 year ago"),(0,a.yg)("li",{parentName:"ul"},"Score: ",(0,a.yg)("b",null,"0")," (an ",(0,a.yg)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.yg)("h2",{id:"key-functions"},"Key Functions"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"each"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"get"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"post")),(0,a.yg)("h2",{id:"expression"},"Expression"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"// Your job goes here.\nget(\n  'https://www.commcarehq.org/a/commcare-demo-2035/api/v0.5/form/',\n  {\n    query: {\n      limit: 1000, //max limit: 1000\n      offset: state.meta && state.meta.next ? state.meta.limit + state.meta.offset : 0,\n      received_on_start: '2022-05-16',\n      received_on_end: '2022-05-18',\n      xmlns: 'http://openrosa.org/formdesigner/C87A7E2A-D98D-4E2C-9F0B-997E0AE635C6',\n    },\n  },\n  state => {\n    const { meta, objects } = state.data;\n    const { openfnInboxUrl } = state.configuration;\n    const xmlnsList = [\n      'http://openrosa.org/formdesigner/C87A7E2A-D98D-4E2C-9F0B-997E0AE635C6'\n\n    ];\n\n    // const forms = objects.filter(obj => xmlnsList.includes(obj.form['@xmlns']));\n    const forms = objects;\n\n    state.configuration = { baseUrl: 'https://www.openfn.org' };\n    console.log('Posting form submissions to OpenFn Inbox...');\n\n    return each(forms, state => {\n      return post(`/inbox/${openfnInboxUrl}`, { body: state.data }, state => ({\n        ...state,\n        data: {},\n        references: [],\n      }))(state);\n    })(state);\n  }\n);\n")))}u.isMDXComponent=!0}}]);