"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[91552],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),p=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=n,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return t?a.createElement(m,i(i({ref:r},c),{},{components:t})):a.createElement(m,i({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11126:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const o={title:"Upsert User in Salesforce",sidebar_label:"Upsert User in Salesforce",id:"Upsert-User-in-Salesforce-2021-04-16",keywords:["library","job","expression","salesforce","dataPath","dataValue","each","field","fields","upsert"]},i=void 0,s={unversionedId:"library/jobs/auto/Upsert-User-in-Salesforce-2021-04-16",id:"library/jobs/auto/Upsert-User-in-Salesforce-2021-04-16",title:"Upsert User in Salesforce",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Upsert-User-in-Salesforce-2021-04-16.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Upsert-User-in-Salesforce-2021-04-16",permalink:"/fr/adaptors/library/jobs/auto/Upsert-User-in-Salesforce-2021-04-16",draft:!1,tags:[],version:"current",frontMatter:{title:"Upsert User in Salesforce",sidebar_label:"Upsert User in Salesforce",id:"Upsert-User-in-Salesforce-2021-04-16",keywords:["library","job","expression","salesforce","dataPath","dataValue","each","field","fields","upsert"]},sidebar:"adaptors",previous:{title:"Register Participant - V2 Skillz",permalink:"/fr/adaptors/library/jobs/auto/Register-Participant-V2-Skillz-2021-06-02"},next:{title:"Create Person in SF",permalink:"/fr/adaptors/library/jobs/auto/Create-Person-in-SF-2019-02-25"}},l={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],c={toc:p};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,n.kt)("h2",{id:"metadata"},"Metadata"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Name: Upsert User in Salesforce"),(0,n.kt)("li",{parentName:"ul"},"Adaptor: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,n.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,n.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,n.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v1.3.2"},(0,n.kt)("inlineCode",{parentName:"a"},"v1.3.2"))),(0,n.kt)("li",{parentName:"ul"},"Created over 1 year ago"),(0,n.kt)("li",{parentName:"ul"},"Updated over 1 year ago"),(0,n.kt)("li",{parentName:"ul"},"Score: ",(0,n.kt)("b",null,"3")," (an ",(0,n.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,n.kt)("h2",{id:"key-functions"},"Key Functions"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"dataPath"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"each"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"upsert")),(0,n.kt)("h2",{id:"expression"},"Expression"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"//Example job to upsert Users in Salesforce\neach('$.users[*]',\n  dataPath('state.data.users'),\n  upsert('User', 'Email', fields(\n   field('Email', dataValue('email')),\n   field('FirstName', dataValue('firstName')),\n   field('LastName', dataValue('surname')),\n   field('Active', 'true')\n ))\n);\n\n")))}u.isMDXComponent=!0}}]);