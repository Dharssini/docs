"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[46990],{95788:(e,t,a)=>{a.d(t,{Iu:()=>u,yg:()=>d});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=c(a),y=n,d=g["".concat(i,".").concat(y)]||g[y]||s[y]||o;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[g]="string"==typeof e?e:n,l[1]=p;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},96436:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=a(45072),n=(a(11504),a(95788));const o={title:"magpi@1.1.2",id:"magpi-docs",keywords:["adaptor","magpi","fetchSurveyData","submitRecord"]},l=void 0,p={unversionedId:"packages/magpi-docs",id:"packages/magpi-docs",title:"magpi@1.1.2",description:"Functions",source:"@site/adaptors/packages/magpi-docs.md",sourceDirName:"packages",slug:"/packages/magpi-docs",permalink:"/adaptors/packages/magpi-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"magpi@1.1.2",id:"magpi-docs",keywords:["adaptor","magpi","fetchSurveyData","submitRecord"]},sidebar:"adaptors",previous:{title:"Magpi",permalink:"/adaptors/magpi"},next:{title:"Config for magpi",permalink:"/adaptors/packages/magpi-configuration-schema"}},i={},c=[{value:"Functions",id:"functions",level:2},{value:"fetchSurveyData",id:"fetchsurveydata",level:2},{value:"submitRecord",id:"submitrecord",level:2}],u={toc:c},g="wrapper";function s(e){let{components:t,...a}=e;return(0,n.yg)(g,(0,r.c)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"functions"},"Functions"),(0,n.yg)("dl",null,(0,n.yg)("dt",null,(0,n.yg)("a",{href:"#fetchsurveydata"},"fetchSurveyData(params)")),(0,n.yg)("dt",null,(0,n.yg)("a",{href:"#submitrecord"},"submitRecord(jsonData)"))),(0,n.yg)("h2",{id:"fetchsurveydata"},"fetchSurveyData"),(0,n.yg)("p",null,"fetchSurveyData(params) \u21d2 ",(0,n.yg)("code",null,"Operation")),(0,n.yg)("p",null,"Make a POST request to fetch Magpi data and POST it somewhere else"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"params"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"data to make the fetch")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example"),"  "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},'fetchSurveyData({\n "surveyId": "37479",\n "afterDate": "2017-09-27",\n "postUrl": "https://www.openfn.org/inbox/your-inbox-url"\n})\n')),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"submitrecord"},"submitRecord"),(0,n.yg)("p",null,"submitRecord(jsonData) \u21d2 ",(0,n.yg)("code",null,"Operation")),(0,n.yg)("p",null,"Submit a record for a form/survey which already exists in a Magpi user account"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Param"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"jsonData"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("code",null,"object")),(0,n.yg)("td",{parentName:"tr",align:null},"Payload data for the record")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example"),"  "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"submitRecord(jsonData)\n")),(0,n.yg)("hr",null))}s.isMDXComponent=!0}}]);