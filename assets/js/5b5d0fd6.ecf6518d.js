"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[40953],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>m});var n=t(96540);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),y=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):g(g({},a),e)),t},u=function(e){var a=y(e.components);return n.createElement(o.Provider,{value:a},e.children)},d="mdxType",i={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=y(t),c=l,m=d["".concat(o,".").concat(c)]||d[c]||i[c]||r;return t?n.createElement(m,g(g({ref:a},u),{},{components:t})):n.createElement(m,g({ref:a},u))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,g=new Array(r);g[0]=c;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[d]="string"==typeof e?e:l,g[1]=p;for(var y=2;y<r;y++)g[y]=t[y];return n.createElement.apply(null,g)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85689:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>g,default:()=>i,frontMatter:()=>r,metadata:()=>p,toc:()=>y});var n=t(58168),l=(t(96540),t(15680));const r={title:"openmrs@3.0.4",id:"openmrs-docs",keywords:["adaptor","openmrs","create","update","upsert"]},g=void 0,p={unversionedId:"packages/openmrs-docs",id:"packages/openmrs-docs",title:"openmrs@3.0.4",description:"Functions",source:"@site/adaptors/packages/openmrs-docs.md",sourceDirName:"packages",slug:"/packages/openmrs-docs",permalink:"/adaptors/packages/openmrs-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"openmrs@3.0.4",id:"openmrs-docs",keywords:["adaptor","openmrs","create","update","upsert"]},sidebar:"adaptors",previous:{title:"openimis developer readme",permalink:"/adaptors/packages/openimis-readme"},next:{title:"Config for openmrs",permalink:"/adaptors/packages/openmrs-configuration-schema"}},o={},y=[{value:"Functions",id:"functions",level:2},{value:"create",id:"create",level:2},{value:"createEncounter",id:"createencounter",level:2},{value:"createPatient",id:"createpatient",level:2},{value:"get",id:"get",level:2},{value:"getEncounter",id:"getencounter",level:2},{value:"getEncounters",id:"getencounters",level:2},{value:"getPatient",id:"getpatient",level:2},{value:"post",id:"post",level:2},{value:"searchPatient",id:"searchpatient",level:2},{value:"searchPerson",id:"searchperson",level:2},{value:"update",id:"update",level:2},{value:"upsert",id:"upsert",level:2}],u={toc:y},d="wrapper";function i(e){let{components:a,...t}=e;return(0,l.yg)(d,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"functions"},"Functions"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#create"},"create(resourceType, data, [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#createencounter"},"createEncounter(data, [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#createpatient"},"createPatient(data, [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#get"},"get(path, query, [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getencounter"},"getEncounter(uuid, [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getencounters"},"getEncounters(query, [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#getpatient"},"getPatient(uuid, [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#post"},"post(path, data, [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#searchpatient"},"searchPatient(query, [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#searchperson"},"searchPerson(query, [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#update"},"update(resourceType, path, data, [callback])")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"#upsert"},"upsert(resourceType, query, data, [callback])"))),(0,l.yg)("p",null,"The following functions are exported from the common adaptor:"),(0,l.yg)("dl",null,(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#alterstate"},"alterState()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#arraytostring"},"arrayToString()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datapath"},"dataPath()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#datavalue"},"dataValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#each"},"each()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#field"},"field()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fields"},"fields()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#fn"},"fn()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#lastreferencevalue"},"lastReferenceValue()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#merge"},"merge()")),(0,l.yg)("dt",null,(0,l.yg)("a",{href:"/adaptors/packages/common-docs#sourcevalue"},"sourceValue()"))),(0,l.yg)("h2",{id:"create"},"create"),(0,l.yg)("p",null,"create(resourceType, data, ","[callback]",") \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Create a record"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"resourceType"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Type of resource to create. E.g. ",(0,l.yg)("inlineCode",{parentName:"td"},"person"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"patient"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"encounter"),", ...")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"OpenMRSData")),(0,l.yg)("td",{parentName:"tr",align:null},"Object which defines data that will be used to create a given instance of resource. To create a single instance of a resource, ",(0,l.yg)("inlineCode",{parentName:"td"},"data")," must be a javascript object, and to create multiple instances of a resources, ",(0,l.yg)("inlineCode",{parentName:"td"},"data")," must be an array of javascript objects.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(Create a person)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'create("person", {\n  names: [\n    {\n      givenName: "Mohit",\n      familyName: "Kumar",\n    },\n  ],\n  gender: "M",\n  birthdate: "1997-09-02",\n  addresses: [\n    {\n      address1: "30, Vivekananda Layout, Munnekolal,Marathahalli",\n      cityVillage: "Bengaluru",\n      country: "India",\n      postalCode: "560037",\n    },\n  ],\n});\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"createencounter"},"createEncounter"),(0,l.yg)("p",null,"createEncounter(data, ","[callback]",") \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Creates an encounter"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Data parameters of the encounter")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(Create an encounter)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"createEncounter({\n  encounterDatetime: '2023-05-25T06:08:25.000+0000',\n  patient: '1fdaa696-e759-4a7d-a066-f1ae557c151b',\n  encounterType: 'dd528487-82a5-4082-9c72-ed246bd49591',\n  location: 'ba685651-ed3b-4e63-9b35-78893060758a',\n  encounterProviders: [],\n  visit: {\n    patient: '1fdaa696-e759-4a7d-a066-f1ae557c151b',\n    visitType: '7b0f5697-27e3-40c4-8bae-f4049abfb4ed',\n    startDatetime: '2023-05-25T06:08:25.000+0000',\n    stopDatetime: '2023-05-25T06:09:25.000+0000',\n  },\n})\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"createpatient"},"createPatient"),(0,l.yg)("p",null,"createPatient(data, ","[callback]",") \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Creates a new patient"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Object parameters of the patient")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"createPatient({\n  identifiers: [\n    {\n      identifier: '4023287',\n      identifierType: '05a29f94-c0ed-11e2-94be-8c13b969e334',\n      preferred: true,\n    },\n  ],\n  person: {\n    gender: 'M',\n    age: 42,\n    birthdate: '1970-01-01T00:00:00.000+0100',\n    birthdateEstimated: false,\n    names: [\n      {\n        givenName: 'Doe',\n        familyName: 'John',\n      },\n    ],\n  },\n})\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"get"},"get"),(0,l.yg)("p",null,"get(path, query, ","[callback]",") \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Make a get request to any OpenMRS endpoint"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"parameters for the request")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'get("patient", {\n  q: "Patient",\n  limit: 1,\n});\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"getencounter"},"getEncounter"),(0,l.yg)("p",null,"getEncounter(uuid, ","[callback]",") \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Gets encounter matching a uuid"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"uuid"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"A uuid for the encounter")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getEncounter("123")\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"getencounters"},"getEncounters"),(0,l.yg)("p",null,"getEncounters(query, ","[callback]",") \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Gets encounters matching params"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Object for the patient")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getEncounters({ patient: "123", fromdate: "2023-05-18" })\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"getpatient"},"getPatient"),(0,l.yg)("p",null,"getPatient(uuid, ","[callback]",") \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Gets patient matching a uuid"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"uuid"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"A uuid for the patient")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'getPatient("123")\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(Get a patient by uuid)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"getPatient('681f8785-c9ca-4dc8-a091-7b869316ff93')\n")),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"post"},"post"),(0,l.yg)("p",null,"post(path, data, ","[callback]",") \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Make a post request to any OpenMRS endpoint"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"Path to resource")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Object which defines data that will be used to create a given instance of resource")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'post(\n  "idgen/identifiersource/8549f706-7e85-4c1d-9424-217d50a2988b/identifier",\n  {}\n);\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"searchpatient"},"searchPatient"),(0,l.yg)("p",null,"searchPatient(query, ","[callback]",") \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Fetch all non-retired patients that match any specified parameters"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"Object with query for the patient.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'searchPatient({ q: "Sarah"})\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"searchperson"},"searchPerson"),(0,l.yg)("p",null,"searchPerson(query, ","[callback]",") \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Fetch all non-retired persons that match any specified parameters"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"object")),(0,l.yg)("td",{parentName:"tr",align:null},"object with query for the person")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'searchPerson({ q: "Sarah" })\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"update"},"update"),(0,l.yg)("p",null,"update(resourceType, path, data, ","[callback]",") \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Update data. A generic helper function to update a resource object of any type.\nUpdating an object requires to send ",(0,l.yg)("inlineCode",{parentName:"p"},"all required fields")," or the ",(0,l.yg)("inlineCode",{parentName:"p"},"full body")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"resourceType"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The type of resource to be updated. E.g. ",(0,l.yg)("inlineCode",{parentName:"td"},"person"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"patient"),", etc.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The ",(0,l.yg)("inlineCode",{parentName:"td"},"id")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"path")," to the ",(0,l.yg)("inlineCode",{parentName:"td"},"object")," to be updated. E.g. ",(0,l.yg)("inlineCode",{parentName:"td"},"e739808f-f166-42ae-aaf3-8b3e8fa13fda")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"e739808f-f166-42ae-aaf3-8b3e8fa13fda/{collection-name}/{object-id}"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"Data to update. It requires to send ",(0,l.yg)("inlineCode",{parentName:"td"},"all required fields")," or the ",(0,l.yg)("inlineCode",{parentName:"td"},"full body"),". If you want ",(0,l.yg)("inlineCode",{parentName:"td"},"partial updates"),", use ",(0,l.yg)("inlineCode",{parentName:"td"},"patch")," operation.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(a person)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'update("person", \'3cad37ad-984d-4c65-a019-3eb120c9c373\',{"gender":"M","birthdate":"1997-01-13"})\n')),(0,l.yg)("hr",null),(0,l.yg)("h2",{id:"upsert"},"upsert"),(0,l.yg)("p",null,"upsert(resourceType, query, data, ","[callback]",") \u21d2 ",(0,l.yg)("code",null,"Operation")),(0,l.yg)("p",null,"Upsert a record. A generic helper function used to atomically either insert a row, or on the basis of the row already existing, UPDATE that existing row instead."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Throws"),":"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("code",null,"RangeError")," - Throws range error")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Param"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"resourceType"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"string")),(0,l.yg)("td",{parentName:"tr",align:null},"The type of a resource to ",(0,l.yg)("inlineCode",{parentName:"td"},"upsert"),". E.g. ",(0,l.yg)("inlineCode",{parentName:"td"},"trackedEntityInstances"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"A query object that allows to uniquely identify the resource to update. If no matches found, then the resource will be created.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"Object")),(0,l.yg)("td",{parentName:"tr",align:null},"The data to use for update or create depending on the result of the query.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"[callback]"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("code",null,"function")),(0,l.yg)("td",{parentName:"tr",align:null},"Optional callback to handle the response")))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(For an existing patient using upsert)"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},"upsert('patient', { q: '10007JJ' }, { person: { age: 50 } });\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example")," ",(0,l.yg)("em",{parentName:"p"},"(For non existing patient creating a patient record using upsert )"),"  "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-js"},'upsert(\n  "patient",\n  { q: "1000EHE" },\n  {\n    identifiers: [\n      {\n        identifier: "1000EHE",\n        identifierType: "05a29f94-c0ed-11e2-94be-8c13b969e334",\n        location: "44c3efb0-2583-4c80-a79e-1f756a03c0a1",\n        preferred: true,\n      },\n    ],\n    person: {\n      gender: "M",\n      age: 42,\n    },\n  }\n);\n')),(0,l.yg)("hr",null))}i.isMDXComponent=!0}}]);