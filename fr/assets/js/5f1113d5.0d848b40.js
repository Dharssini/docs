"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[82818],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,f=u["".concat(s,".").concat(b)]||u[b]||c[b]||o;return a?r.createElement(f,i(i({ref:t},d),{},{components:a})):r.createElement(f,i({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},20986:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"0 - Get TEI data",sidebar_label:"0 - Get TEI data",id:"0-Get-TEI-data-2021-06-02",keywords:["library","job","expression","dhis2","alterState","dataValue","getData"]},i=void 0,l={unversionedId:"library/jobs/auto/0-Get-TEI-data-2021-06-02",id:"library/jobs/auto/0-Get-TEI-data-2021-06-02",title:"0 - Get TEI data",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/0-Get-TEI-data-2021-06-02.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/0-Get-TEI-data-2021-06-02",permalink:"/fr/adaptors/library/jobs/auto/0-Get-TEI-data-2021-06-02",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"0 - Get TEI data",sidebar_label:"0 - Get TEI data",id:"0-Get-TEI-data-2021-06-02",keywords:["library","job","expression","dhis2","alterState","dataValue","getData"]},sidebar:"adaptors",previous:{title:"\ud83d\udcdc Add events",permalink:"/fr/adaptors/library/jobs/auto/DHIS2-Events-API"},next:{title:"DHIS2 Events",permalink:"/fr/adaptors/library/jobs/auto/DHIS2-Events-2016-01-27"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,n.kt)("h2",{id:"metadata"},"Metadata"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Name: 0 - Get TEI data"),(0,n.kt)("li",{parentName:"ul"},"Adaptor: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2"},(0,n.kt)("inlineCode",{parentName:"a"},"@openfn/language-dhis2"))),(0,n.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2/releases/tag/v2.0.4"},(0,n.kt)("inlineCode",{parentName:"a"},"v2.0.4"))),(0,n.kt)("li",{parentName:"ul"},"Created over 1 year ago"),(0,n.kt)("li",{parentName:"ul"},"Updated 9 months ago"),(0,n.kt)("li",{parentName:"ul"},"Score: ",(0,n.kt)("b",null,"0")," (an ",(0,n.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.kt)("h2",{id:"key-functions"},"Key Functions"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"getData")),(0,n.kt)("h2",{id:"expression"},"Expression"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// TODO: get all TEIs with vaccination state 'NOT YET REQUESTED' via save filter from Austin.\n\n\n// NOTE: if we can get a webhook with the desired info, let's drop this job!\n\ngetData('trackedEntityInstances', {\n  fields: '*',\n  ou: 'V5XvX1wr1kF', // traningland?\n  program: 'EZkN8vYZwjR', //\n  trackedEntityInstance: dataValue('id'), // the value from the post\n});\n\nalterState(state => {\n  console.log('The response from DHIS2', state.data);\n  console.log('Only pass necessary data to the DIVOC job.');\n  const necessary = state.data.trackedEntityInstances[0];\n  console.log(necessary);\n  return { ...state, data: necessary };\n});\n\n")))}c.isMDXComponent=!0}}]);