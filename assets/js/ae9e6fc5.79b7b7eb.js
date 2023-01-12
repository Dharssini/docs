"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[16368],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,b=c["".concat(l,".").concat(d)]||c[d]||g[d]||o;return r?n.createElement(b,s(s({ref:t},u),{},{components:r})):n.createElement(b,s({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93336:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Register (gs)",sidebar_label:"\u2728 Register (gs)",id:"Register-gs-2021-03-02",keywords:["library","job","expression","googlesheets","appendValues","JSON"]},s=void 0,i={unversionedId:"library/jobs/auto/Register-gs-2021-03-02",id:"library/jobs/auto/Register-gs-2021-03-02",title:"Register (gs)",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/Register-gs-2021-03-02.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/Register-gs-2021-03-02",permalink:"/adaptors/library/jobs/auto/Register-gs-2021-03-02",draft:!1,tags:[],version:"current",frontMatter:{title:"Register (gs)",sidebar_label:"\u2728 Register (gs)",id:"Register-gs-2021-03-02",keywords:["library","job","expression","googlesheets","appendValues","JSON"]},sidebar:"adaptors",previous:{title:"googlesheets@2.1.2",permalink:"/adaptors/packages/googlesheets-docs"},next:{title:"googlesheets changelog",permalink:"/adaptors/packages/googlesheets-changelog"}},l={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,a.kt)("h2",{id:"metadata"},"Metadata"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: Register (gs)"),(0,a.kt)("li",{parentName:"ul"},"Adaptor: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-googlesheets"},(0,a.kt)("inlineCode",{parentName:"a"},"@openfn/language-googlesheets"))),(0,a.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-googlesheets/releases/tag/v2.0.0"},(0,a.kt)("inlineCode",{parentName:"a"},"v2.0.0"))),(0,a.kt)("li",{parentName:"ul"},"Created almost 2 years ago"),(0,a.kt)("li",{parentName:"ul"},"Updated 9 months ago"),(0,a.kt)("li",{parentName:"ul"},"Score: ",(0,a.kt)("b",null,"93")," (an ",(0,a.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.kt)("h2",{id:"key-functions"},"Key Functions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"appendValues"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")),(0,a.kt)("h2",{id:"expression"},"Expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"appendValues({\n  spreadsheetId: '1EFkY4zD4qqxnJdH-QaeasKd1zXC-1sNKpEg08W-3sT0',\n  range: 'COVID-19 Cases!A2',\n  values: state => {\n    const kobo = state.data.body;\n    \n    console.log('Submission data: ' + JSON.stringify(kobo, null, 2));\n    \n    return [\n      [\n        kobo['National_ID'],\n        kobo['Patient_name'],\n        kobo['Last_Name_of_Patient'],\n        kobo['Sex'],\n        kobo['Age'],\n        kobo['Comments'],\n        Date(),\n      ],\n    ];\n  },\n});\n")))}c.isMDXComponent=!0}}]);