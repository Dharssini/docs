"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[11483],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),u=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},k="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=u(a),s=r,d=k["".concat(i,".").concat(s)]||k[s]||c[s]||l;return a?n.createElement(d,p(p({ref:e},m),{},{components:a})):n.createElement(d,p({ref:e},m))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=s;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[k]="string"==typeof t?t:r,p[1]=o;for(var u=2;u<l;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},37681:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={title:"openmrs@0.10.5",id:"openmrs-docs",keywords:["adaptor","openmrs"]},p=void 0,o={unversionedId:"packages/openmrs-docs",id:"packages/openmrs-docs",title:"openmrs@0.10.5",description:"Functions",source:"@site/adaptors/packages/openmrs-docs.md",sourceDirName:"packages",slug:"/packages/openmrs-docs",permalink:"/fr/adaptors/packages/openmrs-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"openmrs@0.10.5",id:"openmrs-docs",keywords:["adaptor","openmrs"]},sidebar:"adaptors",previous:{title:"openhim developer readme",permalink:"/fr/adaptors/packages/openhim-readme"},next:{title:"Config for openmrs",permalink:"/fr/adaptors/packages/openmrs-configuration-schema"}},i={},u=[{value:"Functions",id:"functions",level:2},{value:"createEncounter",id:"createencounter",level:2},{value:"createPatient",id:"createpatient",level:2},{value:"get",id:"get",level:2},{value:"getEncounter",id:"getencounter",level:2},{value:"getEncounters",id:"getencounters",level:2},{value:"getPatient",id:"getpatient",level:2},{value:"post",id:"post",level:2},{value:"searchPatient",id:"searchpatient",level:2},{value:"searchPerson",id:"searchperson",level:2}],m={toc:u},k="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#createEncounter"},"createEncounter(params)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#createPatient"},"createPatient(params)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#get"},"get(path, params)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#getEncounter"},"getEncounter(uuid)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#getEncounters"},"getEncounters(params)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#getPatient"},"getPatient(params)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#post"},"post(path, params)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#searchPatient"},"searchPatient(params)")),(0,r.kt)("dt",null,(0,r.kt)("a",{href:"#searchPerson"},"searchPerson(params)"))),(0,r.kt)("h2",{id:"createencounter"},"createEncounter"),(0,r.kt)("p",null,"createEncounter(params) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nCreates an encounter"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"parameters of the encounter")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"createEncounter({\n  encounterDatetime: '2023-05-25T06:08:25.000+0000',\n  patient: '1fdaa696-e759-4a7d-a066-f1ae557c151b',\n  encounterType: 'dd528487-82a5-4082-9c72-ed246bd49591',\n  location: 'ba685651-ed3b-4e63-9b35-78893060758a',\n  encounterProviders: [],\n  visit: {\n    patient: '1fdaa696-e759-4a7d-a066-f1ae557c151b',\n    visitType: '7b0f5697-27e3-40c4-8bae-f4049abfb4ed',\n    startDatetime: '2023-05-25T06:08:25.000+0000',\n    stopDatetime: '2023-05-25T06:09:25.000+0000',\n  },\n})\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"createpatient"},"createPatient"),(0,r.kt)("p",null,"createPatient(params) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nCreates a new patient"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"parameters of the patient")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"createPatient({\n  identifiers: [\n    {\n      identifier: '4023287',\n      identifierType: '05a29f94-c0ed-11e2-94be-8c13b969e334',\n      preferred: true,\n    },\n  ],\n  person: {\n    gender: 'M',\n    age: 42,\n    birthdate: '1970-01-01T00:00:00.000+0100',\n    birthdateEstimated: false,\n    names: [\n      {\n        givenName: 'Doe',\n        familyName: 'John',\n      },\n    ],\n  },\n})\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"get"},"get"),(0,r.kt)("p",null,"get(path, params) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nMake a get request to any OpenMRS endpoint"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"parameters for the request")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'get("encounterType", {\n  v: "default",\n  limit: 1,\n});\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"getencounter"},"getEncounter"),(0,r.kt)("p",null,"getEncounter(uuid) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nGets encounter matching a uuid"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uuid"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"object with uuid for the encounter")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'getEncounter("123")\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"getencounters"},"getEncounters"),(0,r.kt)("p",null,"getEncounters(params) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nGets encounters matching params"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Criteria object for the patient")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'getEncounters({patient: "123", fromdate: "2023-05-18"})\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"getpatient"},"getPatient"),(0,r.kt)("p",null,"getPatient(params) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nGets patient matching a uuid"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"object with uuid for the patient")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'getPatient("123")\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"post"},"post"),(0,r.kt)("p",null,"post(path, params) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nMake a post request to any OpenMRS endpoint"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"parameters for the request")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'post("encounterType", {\n  v: "default",\n  limit: 1,\n});\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"searchpatient"},"searchPatient"),(0,r.kt)("p",null,"searchPatient(params) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nFetch all non-retired patients that match any specified parameters"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"object with query for the patient")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"searchPatient({ q: Sarah })\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"searchperson"},"searchPerson"),(0,r.kt)("p",null,"searchPerson(params) \u21d2 ",(0,r.kt)("code",null,"Operation"),"\nFetch all non-retired persons that match any specified parameters"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global function  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"object")),(0,r.kt)("td",{parentName:"tr",align:null},"object with query for the person")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"searchPerson({ q: Sarah })\n")),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);