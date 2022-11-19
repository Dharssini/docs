"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[76967],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,g=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},11663:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"magpi developer readme",id:"magpi-readme",keywords:["adaptor","readme","magpi"]},i="Developer README for the magpi adaptor",p={unversionedId:"packages/magpi-readme",id:"packages/magpi-readme",title:"magpi developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/magpi",source:"@site/adaptors/packages/magpi-readme.md",sourceDirName:"packages",slug:"/packages/magpi-readme",permalink:"/fr/adaptors/packages/magpi-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"magpi developer readme",id:"magpi-readme",keywords:["adaptor","readme","magpi"]},sidebar:"library",previous:{title:"magpi changelog",permalink:"/fr/adaptors/packages/magpi-changelog"},next:{title:"mailchimp@0.2.0",permalink:"/fr/adaptors/packages/mailchimp-docs"}},l={},s=[{value:"Documentation",id:"documentation",level:2},{value:"Sample configuration",id:"sample-configuration",level:2},{value:"Fetch data from Magpi",id:"fetch-data-from-magpi",level:2},{value:"Using <code>fetchSurveyData</code>:",id:"using-fetchsurveydata",level:4},{value:"Submit new records",id:"submit-new-records",level:2},{value:"Using <code>submitRecord</code>:",id:"using-submitrecord",level:4},{value:"Magpi Outbound API Parameters:",id:"magpi-outbound-api-parameters",level:4},{value:"Development",id:"development",level:2}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-readme-for-the-magpi-adaptor"},"Developer README for the magpi adaptor"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/magpi"},"https://github.com/OpenFn/adaptors/tree/main/packages/magpi")),(0,r.kt)("h1",{id:"language-magpi"},"Language Magpi"),(0,r.kt)("p",null,"Language Pack for building expressions and operations for working with the\n",(0,r.kt)("a",{parentName:"p",href:"http://support.magpi.com/support/solutions/articles/4839-magpi-inbound-api"},"Magpi inbound API"),"\nand the\n",(0,r.kt)("a",{parentName:"p",href:"http://support.magpi.com/support/solutions/articles/4865-magpi-outbound-api"},"Magpi outbound API"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"N.B.: The Magpi API is under development and this pack may change.")),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("h2",{id:"sample-configuration"},"Sample configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "taylordowns2000",\n  "accessToken": "super-secret"\n}\n')),(0,r.kt)("h2",{id:"fetch-data-from-magpi"},"Fetch data from Magpi"),(0,r.kt)("p",null,"Allows you to fetch data from Magpi and post it elsewhere."),(0,r.kt)("h4",{id:"using-fetchsurveydata"},"Using ",(0,r.kt)("inlineCode",{parentName:"h4"},"fetchSurveyData"),":"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.magpi.com/api/surveydata/v2?username=taylordowns2000&accesstoken=blahblahblah&surveyid=921409679070"},"https://www.magpi.com/api/surveydata/v2?username=taylordowns2000&accesstoken=blahblahblah&surveyid=921409679070")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fetchSurveyData({\n  surveyId: '37479',\n  afterDate: '2016-01-01',\n  beforeDate: '2100-01-01',\n  postUrl: 'https://www.openfn.org/inbox/secret-5c25-inbox-ba2c-url',\n});\n")),(0,r.kt)("h2",{id:"submit-new-records"},"Submit new records"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"wip:")," This will allow you to push data to Magpi to create a new record for a\nform which exists in a user account."),(0,r.kt)("h4",{id:"using-submitrecord"},"Using ",(0,r.kt)("inlineCode",{parentName:"h4"},"submitRecord"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"submitRecord(1, 2);\n")),(0,r.kt)("h4",{id:"magpi-outbound-api-parameters"},"Magpi Outbound API Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"username"),": The account username."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"accesstoken"),": The accesstoken generated on the site. Each accesstoken is\nassociated with the user who generated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"surveyid"),": The surveyid is not the survey's name. The surveyid can be\nobtained from the list of forms generated in 1 above."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"startdate"),": Start date of the data to be returned. Filtering is done based on\nthe DateStamp and is inclusive.(Optional). The date format should be the same\none as the one on the data tab/ The date format should be the same one as the\none on the data tab"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enddate"),": End date of the data to be returned. Filtering is done based on the\nDateStamp and is inclusive.(Optional)")),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors"},"adaptors monorepo"),". Follow the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Getting Started")," guide inside to get set up."),(0,r.kt)("p",null,"Run tests using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run test:watch")),(0,r.kt)("p",null,"Build the project using ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build"),"."),(0,r.kt)("p",null,"To just build the docs run ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build docs")))}u.isMDXComponent=!0}}]);