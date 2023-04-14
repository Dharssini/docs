"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[56147],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),c=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),s=c(a),d=n,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return a?r.createElement(f,l(l({ref:e},u),{},{components:a})):r.createElement(f,l({ref:e},u))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,l=new Array(o);l[0]=d;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[s]="string"==typeof t?t:n,l[1]=p;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2765:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"magpi@1.0.4",id:"magpi-docs",keywords:["adaptor","magpi","fetchSurveyData","submitRecord"]},l=void 0,p={unversionedId:"packages/magpi-docs",id:"packages/magpi-docs",title:"magpi@1.0.4",description:"Functions",source:"@site/adaptors/packages/magpi-docs.md",sourceDirName:"packages",slug:"/packages/magpi-docs",permalink:"/fr/adaptors/packages/magpi-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"magpi@1.0.4",id:"magpi-docs",keywords:["adaptor","magpi","fetchSurveyData","submitRecord"]},sidebar:"adaptors",previous:{title:"Magpi",permalink:"/fr/adaptors/magpi"},next:{title:"Config for magpi",permalink:"/fr/adaptors/packages/magpi-configuration-schema"}},i={},c=[{value:"Functions",id:"functions",level:2},{value:"fetchSurveyData",id:"fetchsurveydata",level:2},{value:"submitRecord",id:"submitrecord",level:2}],u={toc:c},s="wrapper";function m(t){let{components:e,...a}=t;return(0,n.kt)(s,(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("dl",null,(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#fetchSurveyData"},"fetchSurveyData(params)")),(0,n.kt)("dt",null,(0,n.kt)("a",{href:"#submitRecord"},"submitRecord(jsonData)"))),(0,n.kt)("h2",{id:"fetchsurveydata"},"fetchSurveyData"),(0,n.kt)("p",null,"fetchSurveyData(params) \u21d2 ",(0,n.kt)("code",null,"Operation"),"\nMake a POST request to fetch Magpi data and POST it somewhere else"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"data to make the fetch")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'fetchSurveyData({\n "surveyId": "37479",\n "afterDate": "2017-09-27",\n "postUrl": "https://www.openfn.org/inbox/your-inbox-url"\n})\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"submitrecord"},"submitRecord"),(0,n.kt)("p",null,"submitRecord(jsonData) \u21d2 ",(0,n.kt)("code",null,"Operation"),"\nSubmit a record for a form/survey which already exists in a Magpi user account"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"jsonData"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"object")),(0,n.kt)("td",{parentName:"tr",align:null},"Payload data for the record")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"submitRecord(jsonData)\n")),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);