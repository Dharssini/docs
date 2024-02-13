"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[90996],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>u});var a=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,u=d["".concat(p,".").concat(m)]||d[m]||g[m]||o;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(45072),i=(n(11504),n(95788));const o={sidebar_label:"Mapping Specifications",title:"Writing Data Element Mapping Specifications"},r="Mapping data elements to define data integration & automation rules",s={unversionedId:"design/mapping-specs",id:"design/mapping-specs",title:"Writing Data Element Mapping Specifications",description:'This article walks through the data element mapping process used to develop entity- and field-level specifications for how data points should be exchanged, cleaned, and/or transformed in a data integration workflow. In basic terms, data mapping is the process of connecting a data field from one source to a data field in another source (e.g., System A "patient" =  "person" in System B).',source:"@site/docs/design/mapping-specs.md",sourceDirName:"design",slug:"/design/mapping-specs",permalink:"/documentation/design/mapping-specs",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/design/mapping-specs.md",tags:[],version:"current",frontMatter:{sidebar_label:"Mapping Specifications",title:"Writing Data Element Mapping Specifications"},sidebar:"docs",previous:{title:"API Discovery",permalink:"/documentation/design/api-discovery"},next:{title:"Workflow Specifications",permalink:"/documentation/design/workflow-specs"}},p={},l=[{value:"OpenFn Mapping Specification Template",id:"openfn-mapping-specification-template",level:2},{value:"Mapping Considerations",id:"mapping-considerations",level:2},{value:"Maintaining Mapping Specifications",id:"maintaining-mapping-specifications",level:3},{value:"Functional vs. Technical Mapping",id:"functional-vs-technical-mapping",level:3},{value:"Mapping to Individual or Aggregate Entities",id:"mapping-to-individual-or-aggregate-entities",level:3}],c={toc:l},d="wrapper";function g(e){let{components:t,...o}=e;return(0,i.yg)(d,(0,a.c)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"mapping-data-elements-to-define-data-integration--automation-rules"},"Mapping data elements to define data integration & automation rules"),(0,i.yg)("p",null,'This article walks through the data element mapping process used to develop entity- and field-level specifications for how data points should be exchanged, cleaned, and/or transformed in a data integration workflow. In basic terms, data mapping is the process of connecting a data field from one source to a data field in another source (e.g., System A "patient" =  "person" in System B).'),(0,i.yg)("p",null,"A data element mapping specification is a special type of data dictionary that serves as (1) documentation on how you are translating meaning between systems, and (2)  specifications for developers building the workflow automation solution."),(0,i.yg)("p",null,"For each automation step in your workflow, you will document which data elements (or metadata) will be referenced, as well as the \u201crules\u201d for how these data elements should be mapped, reassigned, cleaned, transformed, and/or calculated."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"mapping",src:n(59556).c,width:"944",height:"566"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"To draft a data element mapping specification, you\u2019ll need to\u2026")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Export the metadata or ask for a list of data elements from the target systems,"),(0,i.yg)("li",{parentName:"ol"},"Procure a sample \u201cinput\u201d record from the source system and procure a sample output record from the destination system. At best, this is an example JSON payload or a link to example records. At worst, this is a screenshot or a CSV file with \u201cdummy\u201d data. "),(0,i.yg)("li",{parentName:"ol"},"Start \u201cmapping\u201d the data elements and recording transformation rules! ")),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"center"},(0,i.yg)("img",{alt:"mapping",src:n(32260).c,width:"1334",height:"648"})))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"center"},(0,i.yg)("em",{parentName:"td"},"The data mapping process for data integration solutions."))))),(0,i.yg)("h2",{id:"openfn-mapping-specification-template"},"OpenFn Mapping Specification Template"),(0,i.yg)("p",null,"You can document data elements, mappings, and rules using the OpenFn mapping specification template. This ",(0,i.yg)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/19sPRLP4zeFgFbtOL1wKh-rc7D0KPMu3etmOOG_x5t68/edit#gid=1275153608"},"template")," was created by the OpenFn team as a result of lessons learned from implementing data integrations solutions for NGOs and government partners around the world. It is used on all OpenFn projects and is maintained by the OpenFn team. "),(0,i.yg)("h2",{id:"mapping-considerations"},"Mapping Considerations"),(0,i.yg)("h3",{id:"maintaining-mapping-specifications"},"Maintaining Mapping Specifications"),(0,i.yg)("p",null,"Once your OpenFn project is live, the Mapping Specs document may be the business-friendly way your users interact with your solution. If you make any changes, make sure the Mapping Spec always matches your job code. Also consider versioning your mapping specs so stakeholders have access to historical implementations of the solution. "),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"While the OpenFn XLS-based mapping template is helpful for collaborating with other stakeholders on defining the mapping requirements, once these specifications are set, you might consider capturing these mapping rules in a database table or in an application like ",(0,i.yg)("a",{parentName:"p",href:"https://openconceptlab.org/"},"Open Concept Lab")," (which has a user-friendly web app for recording data dictionaries & mapping rules, and REST API support). This would then allow you to dynamically query these mapping rules using OpenFn, to ensure your integration is utilizing the latest and greatest specifications. ")),(0,i.yg)("h3",{id:"functional-vs-technical-mapping"},"Functional vs. Technical Mapping"),(0,i.yg)("p",null,"After your organization (or \u201cthe business\u201d) determines the functional data element mapping rules for source/target systems, you'll need to consider which other technical data elements are required in order for the integration to work. These may include system-specific fields, IDs, and/or API parameters that are \u201cunder the hood\" and may not be visible to the end user, but are required by the target system to share the data. "),(0,i.yg)("h3",{id:"mapping-to-individual-or-aggregate-entities"},"Mapping to Individual or Aggregate Entities"),(0,i.yg)("p",null,"Consider if your integration requires a 1-to-1 exchange of individual records, or if there is a need for individual records to be summaries or aggregated.\nYour workflow may require you to map individual entities (i.e., 1-to-1 mapping). For example, you can map a patient from KoboToolBox to a patient in DHIS2. You should use the ",(0,i.yg)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/19sPRLP4zeFgFbtOL1wKh-rc7D0KPMu3etmOOG_x5t68/edit#gid=1275153608"},"default OpenFn mapping template")," for such scenarios. "),(0,i.yg)("p",null,"However, if your workflow requires mapping individual entities to an aggregate/summarized entity (i.e., many-to-1 mapping), then you can use OpenFn\u2019s ",(0,i.yg)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1JVcM7FEkCeezHXONRaAaEPFks9lS8xO_q51jql_hUtc/edit"},"aggregate mapping template")," to start.\n. For example, you might collect individual patient records in KoboToolBox, but want to send an aggregated count of patients to DHIS2 for key indicator results reporting (e.g. the number of patients under 18 years old)."))}g.isMDXComponent=!0},59556:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/mapping_example-48cc83e975d54863b108a17ec8562b63.png"},32260:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/mapping_process-fc2963ce6b5b234023f202b9e97f96ae.png"}}]);