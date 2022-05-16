"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[9159],{3905:function(e,t,i){i.d(t,{Zo:function(){return m},kt:function(){return u}});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(i),u=a,k=d["".concat(l,".").concat(u)]||d[u]||p[u]||s;return i?n.createElement(k,r(r({ref:t},m),{},{components:i})):n.createElement(k,r({ref:t},m))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=i.length,r=new Array(s);r[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<s;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},15059:function(e,t,i){i.r(t),i.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=i(83117),a=i(80102),s=(i(67294),i(3905)),r=["components"],o={sidebar_label:"Implementation Checklist",title:"Implementation Checklist for planning your next integration project"},l="Implementation Checklist",c={unversionedId:"getting-started/implementation-checklist",id:"getting-started/implementation-checklist",title:"Implementation Checklist for planning your next integration project",description:"This checklist draws from experience of implementing interoperability projects",source:"@site/docs/getting-started/implementation-checklist.md",sourceDirName:"getting-started",slug:"/getting-started/implementation-checklist",permalink:"/documentation/getting-started/implementation-checklist",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/getting-started/implementation-checklist.md",tags:[],version:"current",frontMatter:{sidebar_label:"Implementation Checklist",title:"Implementation Checklist for planning your next integration project"},sidebar:"docs",previous:{title:"Project Walk-through",permalink:"/documentation/build/example-build"},next:{title:"The Integration Toolkit",permalink:"/documentation/getting-started/integration-toolkit"}},m={},p=[{value:"(1) Preparing for the Technical Implementation",id:"1-preparing-for-the-technical-implementation",level:2},{value:"(2) Functional Requirements",id:"2-functional-requirements",level:2},{value:"(3) System APIs",id:"3-system-apis",level:2},{value:"(4) Data Flows",id:"4-data-flows",level:2},{value:"(5) Security",id:"5-security",level:2},{value:"(6) Administration",id:"6-administration",level:2},{value:"Provisioning, Hosting, &amp; Maintenance",id:"provisioning-hosting--maintenance",level:3},{value:"Support",id:"support",level:3},{value:"Questions or feedback?",id:"questions-or-feedback",level:2}],d={toc:p};function u(e){var t=e.components,i=(0,a.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"implementation-checklist"},"Implementation Checklist"),(0,s.kt)("p",null,"This checklist draws from experience of implementing interoperability projects\nwith in-country government agencies (incl. UNICEF country offices, Ministry of\nSocial Services Cambodia, MoH Thailand) to offer an implementation & planning\nguide covering key milestones in most interoperability and integration projects."),(0,s.kt)("p",null,"While this checklist should be tailored for each implementation, the tasks\noutlined here provide a template workplan that can help any organization prepare\nfor their upcoming implementation."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Check out a real-world example See the UNICEF Cambodia repository for documented\noutputs from this checklist from an interoperability project implemented for the\nCambodia Ministry of Social Affairs, Veterans, and Youth Rehabilitation and\npartner NGOs:\n",(0,s.kt)("a",{parentName:"p",href:"https://openfn.github.io/unicef-cambodia/"},"openfn.github.io/unicef-cambodia/")))),(0,s.kt)("h2",{id:"1-preparing-for-the-technical-implementation"},"(1) Preparing for the Technical Implementation"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Point of contacts identified for informing functional requirements,\ntechnical requirements (incl. target system administrators), & testing"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Dating sharing agreement finalized (including data residency & compliance\nrequirements, and detailed list of data points that may be exchanged)")),(0,s.kt)("h2",{id:"2-functional-requirements"},"(2) Functional Requirements"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Business value articulated & user stories documented.\n",(0,s.kt)("a",{parentName:"li",href:"/documentation/design/design-quickstart#1-capture-requirements-as-user-stories"},"Learn more about user stories.")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Diagrams documenting business processes.\n",(0,s.kt)("a",{parentName:"li",href:"/documentation/design/design-quickstart#2-diagram-the-business-process"},"Learn more about diagrams & BPMN notation.")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Data element mapping specifications drafted.\n",(0,s.kt)("a",{parentName:"li",href:"/documentation/design/design-quickstart#3-map-data-elements-to-be-exchanged"},"Read about mapping specs here"),".")),(0,s.kt)("h2",{id:"3-system-apis"},"(3) System APIs"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Do the target systems have available APIs?"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","API documentation secured"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Access to staging/developer environments for testing with target systems\nsecured"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Authentication via the API tested to verify your system credentials"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Target API endpoints determined based on the functional requirements"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Target API endpoints tested to validate API behavior and verify your\nsystem credential's permissions")),(0,s.kt)("h2",{id:"4-data-flows"},"(4) Data Flows"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,s.kt)("inlineCode",{parentName:"li"},"Trigger")," confirmed (What kicks off a flow or data sync? Is it time- or\nevent-based?)"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Diagrams documenting the technical data flow finalized.\n",(0,s.kt)("a",{parentName:"li",href:"/documentation/design/design-quickstart#2-diagram-the-business-process"},"Learn more about diagrams & BPMN notation.")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Data element mapping specifications finalized (with specifications for\ndata transformation, cleaning, & calculation rules, technical specs)"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Technical specifications finalized for the integration setup (which\nreference the ",(0,s.kt)("inlineCode",{parentName:"li"},"Diagrams")," & ",(0,s.kt)("inlineCode",{parentName:"li"},"Data element mapping specifications"),")"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Solution assumptions documented (regarding human workflows, data entry,\nconsent, other criteria)"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Testing plan drafted with testing instructions for end users with expected\ninputs & outputs")),(0,s.kt)("h2",{id:"5-security"},"(5) Security"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Sign-off received for the technical specifications & how compliance will\nbe ensured"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Sign-off for data points (if any) that can be logged to help monitor\nintegration ",(0,s.kt)("inlineCode",{parentName:"li"},"Activity History")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Administrator users & access levels confirmed")),(0,s.kt)("h2",{id:"6-administration"},"(6) Administration"),(0,s.kt)("h3",{id:"provisioning-hosting--maintenance"},"Provisioning, Hosting, & Maintenance"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Deployment pathway confirmed (SaaS, Local, Open-Source) - If using OpenFn,\n",(0,s.kt)("a",{parentName:"li",href:"/documentation/deploy/options"},"learn about deployment options"),"."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Hosting & Maintenance: Software maintenance, security updates, server\nstatus, etc. - confirm roles & responsibilities across systems")),(0,s.kt)("h3",{id:"support"},"Support"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Administor responsible for monitoring the integration is identified &\ntrained"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Support point of contacts (e.g., system administrators) identified for\neach target system if troubleshooting support required"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Solution documentation & training materials saved/shared")),(0,s.kt)("h2",{id:"questions-or-feedback"},"Questions or feedback?"),(0,s.kt)("p",null,"If you have any inputs, comments, or questions\u2013please contribute! Submite a pull\nrequest to this documentation page or leave a comment in\n",(0,s.kt)("a",{parentName:"p",href:"https://community.openfn.org/"},"OpenFn Community"),"."))}u.isMDXComponent=!0}}]);