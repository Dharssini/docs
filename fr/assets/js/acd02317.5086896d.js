"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[69104],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,u=m["".concat(l,".").concat(h)]||m[h]||c[h]||i;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},o="DHIS2",s={unversionedId:"dhis2",id:"dhis2",title:"DHIS2",description:"App Overview",source:"@site/adaptors/dhis2.md",sourceDirName:".",slug:"/dhis2",permalink:"/fr/adaptors/dhis2",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"adaptors",previous:{title:"common developer readme",permalink:"/fr/adaptors/packages/common-readme"},next:{title:"dhis2@3.2.3",permalink:"/fr/adaptors/packages/dhis2-docs"}},l={},p=[{value:"App Overview",id:"app-overview",level:2},{value:"Data Model",id:"data-model",level:3},{value:"Integration Use Cases",id:"integration-use-cases",level:2},{value:"Example user stories",id:"example-user-stories",level:4},{value:"Further Reading:",id:"further-reading",level:3},{value:"Integration Options",id:"integration-options",level:2},{value:"OpenFn Adaptor",id:"openfn-adaptor",level:2},{value:"Integration Examples",id:"integration-examples",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dhis2"},"DHIS2"),(0,r.kt)("h2",{id:"app-overview"},"App Overview"),(0,r.kt)("p",null,"The District Health Information Software 2\n(",(0,r.kt)("a",{parentName:"p",href:"https://www.dhis2.org/about"},"DHIS2"),")] is an open source, web-based health\nmanagement information system (",(0,r.kt)("a",{parentName:"p",href:"https:/some.useful.info"},"HMIS"),") platform."),(0,r.kt)("p",null,"Today, DHIS2 is the world's largest HMIS platform, in use by 73 low and\nmiddle-income countries. Approximately 2.4 billion people live in countries\nwhere DHIS2 is used. Including NGO-based programs, DHIS2 is in use in more than\n100 countries."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://some.useful.info"},"core DHIS2")," software development is managed by\nthe Health Information Systems Program (",(0,r.kt)("a",{parentName:"p",href:"https://some.useful.info"},"HISP"),") at the\nUniversity of Oslo (",(0,r.kt)("a",{parentName:"p",href:"https://some.useful.info"},"UiO"),")."),(0,r.kt)("p",null,"HISP is a global network comprised of 13 in-country and regional organizations,\nproviding day-in, day-out direct support to government ministries and local\nimplementers of DHIS2."),(0,r.kt)("p",null,"DHIS2 exposes its data and service method integration pipeline through a\n",(0,r.kt)("a",{parentName:"p",href:"https://some.useful.info"},"RESTful")," Web Application Programing\nIneterface(",(0,r.kt)("a",{parentName:"p",href:"https://some.useful.info"},"API"),"). The\n",(0,r.kt)("a",{parentName:"p",href:"https://some.useful.info"},"DHIS2 Web API")," is a component which makes it possible\nfor external systems to access and manipulate data stored in an instance of\nDHIS 2. More precisely, it provides a programmatic interface to a wide range of\nexposed data and service methods for applications such as third-party software\nclients, web portals and internal DHIS 2 modules."),(0,r.kt)("h3",{id:"data-model"},"Data Model"),(0,r.kt)("p",null,"See DHIS2 documentation for more about the data model and specific entities: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.dhis2.org/archive/en/2.30/developer/html/techarch_data_model.html"},"https://docs.dhis2.org/archive/en/2.30/developer/html/techarch_data_model.html")),(0,r.kt)("h2",{id:"integration-use-cases"},"Integration Use Cases"),(0,r.kt)("p",null,"DHIS2 has been expanding its reach into many health systems. Starting from its\nfamiliar grounds of aggregate data sets for routine data it has included patient\nrelated data and then data in the areas of HR, finance, logistics and laboratory\nmanagement."),(0,r.kt)("p",null,"For several years now, DHIS2 has grown its data management activities\norganically, allowing the actual usage to lead to sometimes unforeseen\nsolutions. However, there are also limits to where leveraging DHIS2 seems\nuseful. In the following sections, special systems will be described."),(0,r.kt)("h4",{id:"example-user-stories"},"Example user stories"),(0,r.kt)("p",null,"1 Logistics Management(LMIS)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LMIS is an area where a multitude of parallel, overlapping or competing\nsoftware solutions can be found in a single country"),(0,r.kt)("li",{parentName:"ul"},"Although a basic LMIS configuration based on aggregate data can take you very\nfar, in some cases a transactional LMIS is necessary if you need to track such\ndetailed operations as returns, transfer between facilities, barcode reading,\nbatch and expiry managemen"),(0,r.kt)("li",{parentName:"ul"},"In such a situation...")),(0,r.kt)("p",null,"2 Data Sharing for Health and Nutrition, Water Sanitation and Hygiene Projects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Case management sytsems such as CommCare are widely preffered in collecting\ncase data(or patient level data) due to its dominance in the sector and easy\nof adoption. In such scenarios, ...")),(0,r.kt)("p",null,"3 DHIS2 Instance Synchronization"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Different DHIS2 instances in a given organisation or government ministry may\nbe deployed on separate servers which places the need for synchronization in\nboth metadata and data values. DHIS2 provides API endpoints to enable which\nenable organisations to automate the synchronization process of data/metadata\nacross a cluster of DHIS2 servers.")),(0,r.kt)("h3",{id:"further-reading"},"Further Reading:"),(0,r.kt)("p",null,"1 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-235/web-api.html"},"DHIS2 Web API")),(0,r.kt)("p",null,"2\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.dhis2.org/2.28/en/implementer/html/integration.html#:~:text=DHIS2%20is%20often%20used%20as,on%20stocks%20and%20human%20resources."},"DHIS2 Integration Concepts")),(0,r.kt)("p",null,"3\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.dhis2.org/master/en/implementer/html/different-dhis2-integration-scenarios.html"},"DHIS2 Integration Scenarios")),(0,r.kt)("p",null,"4\n",(0,r.kt)("a",{parentName:"p",href:"https://www.childhealthtaskforce.org/sites/default/files/2019-01/Interoperable%20DHIS2-LMIS%20in%20Senegal%2C%20Tanzania%2C%20and%20Ghana%20%28HISP%20Team%20at%20UIO-2017%29.pdf"},"Interoperable DHIS2-LMIS in Senegal, Tanzania and Ghana")),(0,r.kt)("p",null,"5\n",(0,r.kt)("a",{parentName:"p",href:"https://crvsgateway.info/file/17042/3010https://crvsgateway.info/file/17042/3010"},"CRVS Fellowship report SmartVA and DHIS2 integration in Sri Lanka")),(0,r.kt)("h2",{id:"integration-options"},"Integration Options"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Data integration via DHIS2 Web API: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-235/web-api.html"},"https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-235/web-api.html"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Metadata integration via DHIS2 Web API. OpenFn implementations can leverage the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-dhis2"},(0,r.kt)("inlineCode",{parentName:"a"},"DHIS2"))," adaptor. "))),(0,r.kt)("h2",{id:"openfn-adaptor"},"OpenFn Adaptor"),(0,r.kt)("p",null,"To connect with the DHIS2 Web API, OpenFn implementations can leverage the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-dhis2"},(0,r.kt)("inlineCode",{parentName:"a"},"dhis2"))," adaptor. "),(0,r.kt)("h2",{id:"integration-examples"},"Integration Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"DHIS2 Demo Implementations: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/dhis2-demo"},"https://github.com/OpenFn/dhis2-demo")),(0,r.kt)("li",{parentName:"ol"},"Lesotho Integration connecting two DHIS2 instances: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/lesotho-dhis2"},"https://github.com/OpenFn/lesotho-dhis2"))))}c.isMDXComponent=!0}}]);