"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[1883],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),i=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},s=function(t){var e=i(t.components);return r.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=i(a),c=n,k=d["".concat(m,".").concat(c)]||d[c]||u[c]||l;return a?r.createElement(k,p(p({ref:e},s),{},{components:a})):r.createElement(k,p({ref:e},s))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=d;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:n,p[1]=o;for(var i=2;i<l;i++)p[i]=a[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2452:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const l={title:"commcare",id:"commcare-docs",keywords:["adaptor","commcare","submitXls","submit","fetchReportData"]},p=void 0,o={unversionedId:"packages/commcare-docs",id:"packages/commcare-docs",title:"commcare",description:"Adaptor",source:"@site/adaptors/packages/commcare-docs.md",sourceDirName:"packages",slug:"/packages/commcare-docs",permalink:"/fr/adaptors/packages/commcare-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"commcare",id:"commcare-docs",keywords:["adaptor","commcare","submitXls","submit","fetchReportData"]},sidebar:"library",previous:{title:"bigquery developer readme",permalink:"/fr/adaptors/packages/bigquery-readme"},next:{title:"commcare changelog",permalink:"/fr/adaptors/packages/commcare-changelog"}},m={},i=[{value:"Adaptor",id:"adaptor",level:2},{value:"Adaptor.execute",id:"adaptorexecute",level:3},{value:"new exports.execute(operations)",id:"new-exportsexecuteoperations",level:4},{value:"Adaptor.submitXls",id:"adaptorsubmitxls",level:3},{value:"new exports.submitXls(formData, params)",id:"new-exportssubmitxlsformdata-params",level:4},{value:"Adaptor.submit",id:"adaptorsubmit",level:3},{value:"new exports.submit(formData)",id:"new-exportssubmitformdata",level:4},{value:"Adaptor.fetchReportData",id:"adaptorfetchreportdata",level:3},{value:"new exports.fetchReportData(reportId, params, postUrl)",id:"new-exportsfetchreportdatareportid-params-posturl",level:4},{value:"Adaptor~clientPost",id:"adaptorclientpost",level:3},{value:"new clientPost(formData)",id:"new-clientpostformdata",level:4}],s={toc:i};function u(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("a",{name:"module_Adaptor"}),(0,n.kt)("h2",{id:"adaptor"},"Adaptor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor"},"Adaptor"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"static"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.execute"},".execute"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#new_module_Adaptor.execute_new"},"new exports.execute(operations)")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.submitXls"},".submitXls"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#new_module_Adaptor.submitXls_new"},"new exports.submitXls(formData, params)")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.submit"},".submit"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#new_module_Adaptor.submit_new"},"new exports.submit(formData)")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor.fetchReportData"},".fetchReportData"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#new_module_Adaptor.fetchReportData_new"},"new exports.fetchReportData(reportId, params, postUrl)")))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"inner"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#module_Adaptor..clientPost"},"~clientPost"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#new_module_Adaptor..clientPost_new"},"new clientPost(formData)"))))))))),(0,n.kt)("a",{name:"module_Adaptor.execute"}),(0,n.kt)("h3",{id:"adaptorexecute"},"Adaptor.execute"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),"  "),(0,n.kt)("a",{name:"new_module_Adaptor.execute_new"}),(0,n.kt)("h4",{id:"new-exportsexecuteoperations"},"new exports.execute(operations)"),(0,n.kt)("p",null,"Execute a sequence of operations.\nWraps ",(0,n.kt)("inlineCode",{parentName:"p"},"language-common/execute"),", and prepends initial state for commcare."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operations"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Operations")),(0,n.kt)("td",{parentName:"tr",align:null},"Operations to be performed.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"execute(\n  create('foo'),\n  delete('bar')\n)(state)\n")),(0,n.kt)("a",{name:"module_Adaptor.submitXls"}),(0,n.kt)("h3",{id:"adaptorsubmitxls"},"Adaptor.submitXls"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,n.kt)("a",{name:"new_module_Adaptor.submitXls_new"}),(0,n.kt)("h4",{id:"new-exportssubmitxlsformdata-params"},"new exports.submitXls(formData, params)"),(0,n.kt)("p",null,"Convert form data to xls then submit."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"formData"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Object")),(0,n.kt)("td",{parentName:"tr",align:null},"Object including form data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Object")),(0,n.kt)("td",{parentName:"tr",align:null},"Request params including case type and external id.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"submitXls(\n   [\n     {name: 'Mamadou', phone: '000000'},\n   ],\n   {\n     case_type: 'student',\n     search_field: 'external_id',\n     create_new_cases: 'on',\n   }\n)\n")),(0,n.kt)("a",{name:"module_Adaptor.submit"}),(0,n.kt)("h3",{id:"adaptorsubmit"},"Adaptor.submit"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,n.kt)("a",{name:"new_module_Adaptor.submit_new"}),(0,n.kt)("h4",{id:"new-exportssubmitformdata"},"new exports.submit(formData)"),(0,n.kt)("p",null,"Submit form data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"formData"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Object")),(0,n.kt)("td",{parentName:"tr",align:null},"Object including form data.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'submit(\n   fields(\n     field("@", function(state) {\n       return {\n         "xmlns": "http://openrosa.org/formdesigner/form-id-here"\n       };\n     }),\n     field("question1", dataValue("answer1")),\n     field("question2", "Some answer here.")\n   )\n )\n')),(0,n.kt)("a",{name:"module_Adaptor.fetchReportData"}),(0,n.kt)("h3",{id:"adaptorfetchreportdata"},"Adaptor.fetchReportData"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": static class of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,n.kt)("a",{name:"new_module_Adaptor.fetchReportData_new"}),(0,n.kt)("h4",{id:"new-exportsfetchreportdatareportid-params-posturl"},"new exports.fetchReportData(reportId, params, postUrl)"),(0,n.kt)("p",null,"Make a GET request to CommCare's Reports API\nand POST the response to somewhere else."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reportId"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"String")),(0,n.kt)("td",{parentName:"tr",align:null},"API name of the report.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Object")),(0,n.kt)("td",{parentName:"tr",align:null},"Query params, incl: limit, offset, and custom report filters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"postUrl"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"String")),(0,n.kt)("td",{parentName:"tr",align:null},"Url to which the response object will be posted.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"fetchReportData(reportId, params, postUrl)\n")),(0,n.kt)("a",{name:"module_Adaptor..clientPost"}),(0,n.kt)("h3",{id:"adaptorclientpost"},"Adaptor~clientPost"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Kind"),": inner class of ",(0,n.kt)("a",{parentName:"p",href:"#module_Adaptor"},(0,n.kt)("code",null,"Adaptor")),"  "),(0,n.kt)("a",{name:"new_module_Adaptor..clientPost_new"}),(0,n.kt)("h4",{id:"new-clientpostformdata"},"new clientPost(formData)"),(0,n.kt)("p",null,"Performs a post request"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"formData"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Object")),(0,n.kt)("td",{parentName:"tr",align:null},"Form Data with auth params and body")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example"),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"clientPost(formData)\n")))}u.isMDXComponent=!0}}]);