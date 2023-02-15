"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[90560],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),d=o,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"surveycto developer readme",id:"surveycto-readme",keywords:["adaptor","readme","surveycto"]},i="surveycto Adaptor developer README.md",s={unversionedId:"packages/surveycto-readme",id:"packages/surveycto-readme",title:"surveycto developer readme",description:"Source//github.com/OpenFn/adaptors/tree/main/packages/surveycto",source:"@site/adaptors/packages/surveycto-readme.md",sourceDirName:"packages",slug:"/packages/surveycto-readme",permalink:"/fr/adaptors/packages/surveycto-readme",draft:!1,tags:[],version:"current",frontMatter:{title:"surveycto developer readme",id:"surveycto-readme",keywords:["adaptor","readme","surveycto"]},sidebar:"adaptors",previous:{title:"surveycto changelog",permalink:"/fr/adaptors/packages/surveycto-changelog"},next:{title:"Tableau",permalink:"/fr/adaptors/tableau"}},p={},l=[{value:"Documentation",id:"documentation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"fetchSubmissions",id:"fetchsubmissions",level:2},{value:"sample <code>fetchSubmissions</code> expression",id:"sample-fetchsubmissions-expression",level:3},{value:"Development",id:"development",level:2}],u={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"surveycto-adaptor-developer-readmemd"},"surveycto Adaptor developer README.md"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptors/tree/main/packages/surveycto"},"https://github.com/OpenFn/adaptors/tree/main/packages/surveycto")),(0,o.kt)("h1",{id:"language-surveycto"},"Language SurveyCTO"),(0,o.kt)("p",null,"Language Pack for building expressions and operations to make HTTP calls to\nSurveyCTO."),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"View all the required and optional properties for ",(0,o.kt)("inlineCode",{parentName:"p"},"state.configuration")," in the\nofficial\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.openfn.org/adaptors/packages/surveycto-configuration-schema/"},"configuration-schema"),"\ndefinition."),(0,o.kt)("h2",{id:"fetchsubmissions"},"fetchSubmissions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"fetchSubmissions(1,2,3)")," takes three arguments:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("inlineCode",{parentName:"p"},"formId")," of the form on SurveyCTO")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialAfterDate"),", a date string or UNIX timestamp which instructs the\njob to only fetch submissions after a certain date. After the first run of\nthe job, subsequent runs will only fetch ",(0,o.kt)("em",{parentName:"p"},"NEW")," submissions.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("inlineCode",{parentName:"p"},"postUrl")," is where the wide-format JSON representation of each form\nsubmission should be sent. Note that a ",(0,o.kt)("inlineCode",{parentName:"p"},"formId")," key will be added to each\nform submission for later filtering/routing."))),(0,o.kt)("h3",{id:"sample-fetchsubmissions-expression"},"sample ",(0,o.kt)("inlineCode",{parentName:"h3"},"fetchSubmissions")," expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fetchSubmissions(\n  // formId on SurveyCTO server\n  'household_survey',\n  // initialAfterDate: this will only be accessed if \"lastSubmissionDate\" is empty in your job_state\".\n  // After the initial run of the job, OpenFn will only pull new submissions from SurveyCTO.\n  'Aug 29, 2016 4:44:26 PM',\n  // postUrl is where you want to send the JSON submissions, appended with a new \"formId\" key\n  'https://www.openfn.org/inbox/secret-inbox-uuid'\n);\n")),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,"Clone the repo, run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install"),"."),(0,o.kt)("p",null,"Run tests using ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run test")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run test:watch")),(0,o.kt)("p",null,"Build the project using ",(0,o.kt)("inlineCode",{parentName:"p"},"make"),"."))}m.isMDXComponent=!0}}]);