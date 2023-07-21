"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[43086],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),g=a,h=d["".concat(i,".").concat(g)]||d[g]||u[g]||o;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},66146:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"googlehealthcare@0.1.0",id:"googlehealthcare-docs",keywords:["adaptor","googlehealthcare","createFhirResource"]},l=void 0,c={unversionedId:"packages/googlehealthcare-docs",id:"packages/googlehealthcare-docs",title:"googlehealthcare@0.1.0",description:"createFhirResource",source:"@site/adaptors/packages/googlehealthcare-docs.md",sourceDirName:"packages",slug:"/packages/googlehealthcare-docs",permalink:"/adaptors/packages/googlehealthcare-docs",draft:!1,tags:[],version:"current",frontMatter:{title:"googlehealthcare@0.1.0",id:"googlehealthcare-docs",keywords:["adaptor","googlehealthcare","createFhirResource"]},sidebar:"adaptors",previous:{title:"godata developer readme",permalink:"/adaptors/packages/godata-readme"},next:{title:"Config for googlehealthcare",permalink:"/adaptors/packages/googlehealthcare-configuration-schema"}},i={},s=[{value:"createFhirResource",id:"createfhirresource",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"createfhirresource"},"createFhirResource"),(0,a.kt)("p",null,"createFhirResource(","[fhirStore]",", resource, callback) \u21d2 ",(0,a.kt)("code",null,"Operation"),"\nCreate some resource in Google Cloud Healthcare"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global function",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Access"),": public  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"[fhirStore]"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Object")),(0,a.kt)("td",{parentName:"tr",align:null},"The FHIR store information.    - ",(0,a.kt)("inlineCode",{parentName:"td"},"cloudRegion")," (string): The cloud region where the FHIR store is located.    - ",(0,a.kt)("inlineCode",{parentName:"td"},"projectId")," (string): The ID of the project that contains the FHIR store.    - ",(0,a.kt)("inlineCode",{parentName:"td"},"datasetId")," (string): The ID of the dataset that contains the FHIR store.    - ",(0,a.kt)("inlineCode",{parentName:"td"},"fhirStoreId")," (string): The ID of the FHIR store.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resource"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"object")),(0,a.kt)("td",{parentName:"tr",align:null},"The FHIR resource data to be created")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"callback"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"function")),(0,a.kt)("td",{parentName:"tr",align:null},"An optional callback function")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'createFhirResource(\n  {\n    cloudRegion: "us-central1",\n    projectId: "adjective-noun-123",\n    datasetId: "my-dataset",\n    fhirStoreId: "my-fhir-store",\n  },\n  {\n    resourceType: "Patient",\n    name: [{ use: "official", family: "Smith", given: ["Darcy"] }],\n    gender: "female",\n    birthDate: "1970-01-01",\n  }\n);\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'createFhirResource(\n  {\n    cloudRegion: "us-central1",\n    projectId: "adjective-noun-123",\n    datasetId: "my-dataset",\n    fhirStoreId: "my-fhir-store",\n  },\n  (state) => ({\n    resourceType: "Encounter",\n    status: "finished",\n    class: {\n      system: "http://hl7.org/fhir/v3/ActCode",\n      code: "IMP",\n      display: "inpatient encounter",\n    },\n    reasonCode: [\n      {\n        text: "The patient had an abnormal heart rate. She was concerned about this.",\n      },\n    ],\n    subject: {\n      reference: `Patient/${state.data.id}`,\n    },\n  })\n);\n')),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);