"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[61887],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},16378:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"1. Create Payment in SF",sidebar_label:"1. Create Payment in SF",id:"1-Create-Payment-in-SF-2018-09-03",keywords:["library","job","expression","salesforce","create","dataValue","field","fields","relationship"]},i=void 0,l={unversionedId:"library/jobs/auto/1-Create-Payment-in-SF-2018-09-03",id:"library/jobs/auto/1-Create-Payment-in-SF-2018-09-03",title:"1. Create Payment in SF",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/1-Create-Payment-in-SF-2018-09-03.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/1-Create-Payment-in-SF-2018-09-03",permalink:"/adaptors/library/jobs/auto/1-Create-Payment-in-SF-2018-09-03",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. Create Payment in SF",sidebar_label:"1. Create Payment in SF",id:"1-Create-Payment-in-SF-2018-09-03",keywords:["library","job","expression","salesforce","create","dataValue","field","fields","relationship"]},sidebar:"adaptors",previous:{title:"Create Person in SF",permalink:"/adaptors/library/jobs/auto/Create-Person-in-SF-2019-02-25"},next:{title:"salesforce changelog",permalink:"/adaptors/packages/salesforce-changelog"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,n.kt)("h2",{id:"metadata"},"Metadata"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Name: 1. Create Payment in SF"),(0,n.kt)("li",{parentName:"ul"},"Adaptor: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,n.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,n.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v1.3.2"},(0,n.kt)("inlineCode",{parentName:"a"},"v1.3.2"))),(0,n.kt)("li",{parentName:"ul"},"Created about 4 years ago"),(0,n.kt)("li",{parentName:"ul"},"Updated almost 4 years ago"),(0,n.kt)("li",{parentName:"ul"},"Score: ",(0,n.kt)("b",null,"3")," (an ",(0,n.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.kt)("h2",{id:"key-functions"},"Key Functions"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"relationship")),(0,n.kt)("h2",{id:"expression"},"Expression"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"create('Payment__c', fields(\n  field('Name', dataValue('reference_number')),\n  field('Amount__c', dataValue('amount')),\n  field('Phone_Number__c', dataValue('sender_number')),\n  relationship('Contract__r', 'ContractNumber', dataValue('contract_number'))\n));\n")))}u.isMDXComponent=!0}}]);