"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[72937],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,b=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32862:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"01a/ Create Registrants",sidebar_label:"01a/ Create Registrants",id:"01a-Create-Registrants-2019-11-19",keywords:["library","job","expression","http","alterState","post","JSON"]},i=void 0,s={unversionedId:"library/jobs/auto/01a-Create-Registrants-2019-11-19",id:"library/jobs/auto/01a-Create-Registrants-2019-11-19",title:"01a/ Create Registrants",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/01a-Create-Registrants-2019-11-19.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/01a-Create-Registrants-2019-11-19",permalink:"/adaptors/library/jobs/auto/01a-Create-Registrants-2019-11-19",draft:!1,tags:[],version:"current",frontMatter:{title:"01a/ Create Registrants",sidebar_label:"01a/ Create Registrants",id:"01a-Create-Registrants-2019-11-19",keywords:["library","job","expression","http","alterState","post","JSON"]},sidebar:"adaptors",previous:{title:"01c/ Create person_position record",permalink:"/adaptors/library/jobs/auto/01c-Create-person_position-record-2019-12-13"},next:{title:"05b/Update ODK eval form",permalink:"/adaptors/library/jobs/auto/05b-Update-ODK-eval-form-2019-12-19"}},l={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,a.kt)("h2",{id:"metadata"},"Metadata"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: 01a/ Create Registrants"),(0,a.kt)("li",{parentName:"ul"},"Adaptor: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,a.kt)("inlineCode",{parentName:"a"},"@openfn/language-http"))),(0,a.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-http"},(0,a.kt)("inlineCode",{parentName:"a"},"latest"))),(0,a.kt)("li",{parentName:"ul"},"Created about 3 years ago"),(0,a.kt)("li",{parentName:"ul"},"Updated over 2 years ago"),(0,a.kt)("li",{parentName:"ul"},"Score: ",(0,a.kt)("b",null,"0")," (an ",(0,a.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.kt)("h2",{id:"key-functions"},"Key Functions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"post"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")),(0,a.kt)("h2",{id:"expression"},"Expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// @trigger 'odk submission' either via Aggregate JSON Forwarding or via direct\n//          submission to OpenFn.org/inbox\n// @credential 'ihris'\n// @adaptor 'http'\n// -----------------------------------------------------------------------------\n\n// =============================================================================\n// Pluck out parts of the ODK submission and prepare our 'person' object that we\n// will use in multiple requests to iHRIS. =====================================\nconsole.log(JSON.stringify(state.data))\nalterState(state => {\n  state.person = {\n    'form[person][0][0][fields][id]': 'person|0',\n    'form[person][0][0][fields][surname]': state.data.RegistrationForm.last_name,\n    'form[person][0][0][fields][firstname]': state.data.RegistrationForm.first_name,\n    'form[person][0][0][fields][nationality]': `country|${state.data.RegistrationForm.country}`,\n    'form[person][0][0][fields][residence]': 'district|3',\n  };\n  return state;\n});\n\n// =============================================================================\n// Create records via iHRIS api, with the hostUrl, port, and authentication\n// handled by the credential ===================================================\npost(\n  '/manage/person',\n  {\n    formData: state => {\n      state.person.submit_type = 'confirm';\n      return state.person;\n    },\n  },\n  post('/manage/person', {\n    formData: state => {\n      state.person.submit_type = 'save';\n      return state.person;\n    },\n    options: {\n      successCodes: [302],\n    },\n  })\n);\n\n\n")))}c.isMDXComponent=!0}}]);