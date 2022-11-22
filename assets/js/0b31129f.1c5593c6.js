"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[63870],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"Create encounter in OpenHIM",sidebar_label:"\ud83d\udcdc Create encounter in OpenHIM",id:"CommCare-FHIR",keywords:["library","job","expression","openhim","dataValue","field","fields"]},i=void 0,l={unversionedId:"library/jobs/auto/CommCare-FHIR",id:"library/jobs/auto/CommCare-FHIR",title:"Create encounter in OpenHIM",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/adaptors/library/jobs/auto/CommCare-FHIR.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/CommCare-FHIR",permalink:"/adaptors/library/jobs/auto/CommCare-FHIR",draft:!1,tags:[],version:"current",frontMatter:{title:"Create encounter in OpenHIM",sidebar_label:"\ud83d\udcdc Create encounter in OpenHIM",id:"CommCare-FHIR",keywords:["library","job","expression","openhim","dataValue","field","fields"]}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud83d\udcdc ",(0,a.kt)("em",null,"This job is an official example from OpenFn.")),(0,a.kt)("h2",{id:"metadata"},"Metadata"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: Create encounter in OpenHIM"),(0,a.kt)("li",{parentName:"ul"},"Adaptor: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-openhim"},(0,a.kt)("inlineCode",{parentName:"a"},"@openfn/language-openhim"))),(0,a.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-openhim"},(0,a.kt)("inlineCode",{parentName:"a"},"latest"))),(0,a.kt)("li",{parentName:"ul"},"Created date unknown"),(0,a.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,a.kt)("li",{parentName:"ul"},"Score: ",(0,a.kt)("b",null,"100")," (an ",(0,a.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.kt)("h2",{id:"key-functions"},"Key Functions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fields")),(0,a.kt)("h2",{id:"expression"},"Expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// CommCare form submission mapped to the FHIR patient encounter standard,\n// submitted by Simon Kelly @ Dimagi.\nencounter(\n  fields(\n    field('resourceType', 'Encounter'),\n    field('status', 'finished'),\n    field('type', function (state) {\n      return [\n        {\n          coding: [\n            {\n              system: 'momconnect:type',\n              code: '8',\n            },\n          ],\n        },\n      ];\n    }),\n    field('contained', function (state) {\n      return [\n        {\n          resourceType: 'Patient',\n          id: 'patient',\n          identifier: [\n            {\n              use: 'official',\n              system: 'momconnect:sanid',\n              value: dataValue('properties.id_number')(state),\n            },\n          ],\n          name: [\n            {\n              use: 'official',\n              family: [dataValue('properties.family_name')(state)],\n              given: [dataValue('properties.given_name')(state)],\n              text: dataValue('properties.given_name')(state).concat(\n                ' ',\n                dataValue('properties.family_name')(state)\n              ),\n            },\n          ],\n          gender: 'female',\n          birthDate: dataValue('properties.dob')(state),\n          telecom: [\n            {\n              system: 'phone',\n              value: dataValue('properties.msisdn')(state),\n            },\n          ],\n          communication: [\n            {\n              language: {\n                coding: [\n                  {\n                    system: 'urn:ietf:bcp:47',\n                    code: dataValue('properties.language_code')(state),\n                  },\n                ],\n              },\n              preferred: true,\n            },\n          ],\n        },\n        {\n          resourceType: 'Observation',\n          id: 'edd',\n          code: {\n            coding: [\n              {\n                system: 'http://loinc.org',\n                code: '11778-8',\n                display: 'Delivery date Estimated',\n              },\n            ],\n          },\n          valueDateTime: dataValue('properties.edd')(state),\n          status: 'preliminary',\n        },\n      ];\n    }),\n    field('patient', function (state) {\n      return {\n        reference: '#patient',\n      };\n    }),\n    field('period', function (state) {\n      return {\n        start: dataValue('properties.visit_date')(state),\n      };\n    }),\n    field('extension', function (state) {\n      return [\n        {\n          url: 'momconnect:mha',\n          valueInteger: 2,\n        },\n        {\n          url: 'momconnect:swt',\n          valueInteger: 3,\n        },\n        {\n          url: 'momconnect:dmsisdn',\n          valueString: '+27831111111',\n        },\n      ];\n    })\n  )\n);\n\n")))}c.isMDXComponent=!0}}]);