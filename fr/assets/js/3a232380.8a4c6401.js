"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[16203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,u=d["".concat(l,".").concat(g)]||d[g]||h[g]||r;return n?o.createElement(u,a(a({ref:t},c),{},{components:n})):o.createElement(u,a({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},71048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const r={title:"The Integration Toolkit"},a=void 0,s={unversionedId:"getting-started/integration-toolkit",id:"getting-started/integration-toolkit",title:"The Integration Toolkit",description:"OpenFn's free and open-source Integration Toolkit gives governments and NGOs",source:"@site/docs/getting-started/integration-toolkit.md",sourceDirName:"getting-started",slug:"/getting-started/integration-toolkit",permalink:"/fr/documentation/getting-started/integration-toolkit",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/getting-started/integration-toolkit.md",tags:[],version:"current",frontMatter:{title:"The Integration Toolkit"},sidebar:"docs",previous:{title:"What is OpenFn?",permalink:"/fr/documentation/"},next:{title:"Lightning",permalink:"/fr/documentation/about-lightning"}},l={},p=[{value:"About the Toolkit",id:"about-the-toolkit",level:2},{value:"Why OFG is driving the development of the Integration Toolkit",id:"why-ofg-is-driving-the-development-of-the-integration-toolkit",level:3},{value:"What&#39;s in the Integration Toolkit",id:"whats-in-the-integration-toolkit",level:2},{value:"Lightning, coming soon!",id:"lightning-coming-soon",level:3},{value:"Architecture for implementation",id:"architecture-for-implementation",level:2},{value:"Open Source Steering Committee (OSSC)",id:"open-source-steering-committee-ossc",level:2}],c={toc:p},d="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"OpenFn's free and open-source Integration Toolkit gives governments and NGOs\naround the world more flexibility and freedom to chose how they achieve success\nin integration and interoperability projects. The Toolkit is both a recognized\n",(0,i.kt)("a",{parentName:"p",href:"https://digitalpublicgoods.net/"},"Digital Public Good"),' ("DPG") and a\n',(0,i.kt)("a",{parentName:"p",href:"https://digitalsquare.org/digital-health-global-goods"},"Digital Square Global Good"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"DPG",src:n(96458).Z,width:"960",height:"540"})),(0,i.kt)("p",null,"The Toolkit provides a suite of software tools and documentation to help users\ndesign, build, and automate integrations."),(0,i.kt)("h2",{id:"about-the-toolkit"},"About the Toolkit"),(0,i.kt)("p",null,"At the heart of the toolkit is the ",(0,i.kt)("inlineCode",{parentName:"p"},"project"),"\u2014a set of jobs, triggers, and\ncredentials which allow organizations to flexibly define workflows and\nintegrations across their systems."),(0,i.kt)("p",null,"Projects can be ported from the ",(0,i.kt)("inlineCode",{parentName:"p"},"platform")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"microservice")," (the main\ndeployment pathway for the Integration Toolkit) and back again (see below) but\nto really understand the toolkit you've got to first understand Open Function\nGroup and ",(0,i.kt)("inlineCode",{parentName:"p"},"platform"),", the enterprise iPaaS."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Integration Toolkit",src:n(51716).Z,width:"653",height:"540"})),(0,i.kt)("p",null,"Open Function Group has been building free and open source software (FOSS) for\ndata integration projects in the health, humanitarian, and international\ndevelopment sectors since in 2014. Their software and services are now in use by\ngovernments, NGOs, and impact-first businesses in over 40 countries."),(0,i.kt)("p",null,"OFG's first integration platform was entirely FOSS, but they soon shifted to an\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open-core_model"},'"open-core"'),' (think GitLab) in\norder to sustain their impact-focused integration work. Their main hosted\noffering, the OpenFn "platform", is ',(0,i.kt)("em",{parentName:"p"},"proprietary"),' but makes extensive use of the\nopen-source integration toolkit; in fact, the "platform" may be thought of as an\nenterprise/hosted layer running on-top of the basic, open-source building blocks\nprovided by the Integration Toolkit.'),(0,i.kt)("h3",{id:"why-ofg-is-driving-the-development-of-the-integration-toolkit"},"Why OFG is driving the development of the Integration Toolkit"),(0,i.kt)("p",null,"Our mission is to make health & humanitarian interventions more efficient &\neffective, and we see investment in the integration toolkit as strategic."),(0,i.kt)("p",null,"We'll strive to preserve the integration toolkit as a healthy and bona fide open\nsource project and sustains its operations through business activities related\nto the toolkit and their other proprietary and/or service offerings until it\ngrows legs of its own and is taken over by the broader community."),(0,i.kt)("p",null,"We have designed the tools in the toolkit to be useful as standalone pieces of\nsoftware ",(0,i.kt)("em",{parentName:"p"},"and")," as modules, used by other applications. Because a substantial\nportion of OFG's revenue comes from contracts related to the platform, and\nbecause the platform relies on OpenFn/core, OpenFn/engine, and the OpenFn\nadaptors, we hope to ensure that OFG will always be incentivized to continue\ntheir investment in the integration toolkit."),(0,i.kt)("p",null,"In other words, we're attempting to ensure that as OFG grows, they will continue\nenhancing the open source integration toolkit regardless of whether or not\nadditional funders and/or stakeholders contribute to the project."),(0,i.kt)("h2",{id:"whats-in-the-integration-toolkit"},"What's in the Integration Toolkit"),(0,i.kt)("p",null,'Separate from "the platform", the integration toolkit is the suite of\napplications and modules provided by OFG and the community which enable data\nintegration, interoperability, and automation solutions via OpenFn-compliant\njobs, triggers, and credentials. The key components of the toolkit are:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"OpenFn/docs"),(0,i.kt)("li",{parentName:"ol"},"OpenFn/core"),(0,i.kt)("li",{parentName:"ol"},"OpenFn/engine"),(0,i.kt)("li",{parentName:"ol"},"OpenFn/microservice"),(0,i.kt)("li",{parentName:"ol"},"OpenFn/devtools"),(0,i.kt)("li",{parentName:"ol"},"the OpenFn adaptors"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"OpenFn/lightning (coming soon...)"))),(0,i.kt)("admonition",{title:"Microservice and devtools are being replaced by Lightning",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please note that ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice"},"OpenFn/microservice"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools")," are being deprecated\nand replaced by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/lightning"},"OpenFn/Lightning"),", When\nlighting is released.")),(0,i.kt)("h3",{id:"lightning-coming-soon"},"Lightning, coming soon!"),(0,i.kt)("p",null,"Lightning is an upcoming addition to the Integration Toolkit. It is a ",(0,i.kt)("em",{parentName:"p"},"fully\nopen source")," workflow automation platform designed for governments and NGOs who\nneed a flexible solution to integrate and connect ",(0,i.kt)("em",{parentName:"p"},"any system"),"."),(0,i.kt)("p",null,"You can read all about it ",(0,i.kt)("a",{parentName:"p",href:"/documentation/about-lightning"},"here"),"!"),(0,i.kt)("h2",{id:"architecture-for-implementation"},"Architecture for implementation"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lightning architecture",src:n(13082).Z,width:"1984",height:"842"})),(0,i.kt)("h2",{id:"open-source-steering-committee-ossc"},"Open Source Steering Committee (OSSC)"),(0,i.kt)("p",null,"We've also initiated an Open Source Steering Committee (OSSC) to represent the\nOpenFn community of end users and implementers. It reviews and gives feedback on\nmajor roadmap decisions, new designs, specifications, features, and protocol\nchanges."),(0,i.kt)("p",null,"The OSSC's membership and decision making process are defined in the\n",(0,i.kt)("a",{parentName:"p",href:"https://openfn.github.io/governance/OSSC.html"},"OSSC's internal governance policy"),"\nif if you're interested in joining, we'd love to hear from you!"))}h.isMDXComponent=!0},51716:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/integration-toolkit-60d5da5a4249dfb60732d4989d99c0e5.png"},13082:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/lightning_architecture-10360fe58b1431842ce8bb94f7185243.png"},96458:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/openfn_dpg-52df06b3601e7e77d102fc3bcbdcd419.png"}}]);