"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[97924],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>m});var a=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},63684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(45072),i=(n(11504),n(95788));const o={sidebar_label:"API Discovery",title:"API Discovery for Workflow Design"},r="Discovering APIs to inform your workflow automation design",s={unversionedId:"design/api-discovery",id:"design/api-discovery",title:"API Discovery for Workflow Design",description:"This article explains how to analyze API documentation and draft a technical workflow diagram.",source:"@site/docs/design/api-discovery.md",sourceDirName:"design",slug:"/design/api-discovery",permalink:"/documentation/next/design/api-discovery",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/design/api-discovery.md",tags:[],version:"current",frontMatter:{sidebar_label:"API Discovery",title:"API Discovery for Workflow Design"},sidebar:"docs",previous:{title:"Workflow Design",permalink:"/documentation/next/design/design-workflow"},next:{title:"Mapping Specifications",permalink:"/documentation/next/design/mapping-specs"}},l={},p=[{value:"What is an API?",id:"what-is-an-api",level:2},{value:"How to analyze API documentation",id:"how-to-analyze-api-documentation",level:2},{value:"Determine integration options",id:"determine-integration-options",level:3},{value:"Authentication",id:"authentication",level:3},{value:"API Endpoints",id:"api-endpoints",level:3},{value:"Limits",id:"limits",level:3},{value:"Technical Workflow Diagramming",id:"technical-workflow-diagramming",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,i.yg)(d,(0,a.c)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"discovering-apis-to-inform-your-workflow-automation-design"},"Discovering APIs to inform your workflow automation design"),(0,i.yg)("p",null,"This article explains how to analyze API documentation and draft a technical workflow diagram."),(0,i.yg)("h2",{id:"what-is-an-api"},"What is an API?"),(0,i.yg)("p",null,"APIs tell applications how to communicate. An API is the \u201cmessenger\u201d that: "),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Tells you how to form a request,"),(0,i.yg)("li",{parentName:"ol"},"Delivers your request to the provider that you\u2019re requesting it from, and then "),(0,i.yg)("li",{parentName:"ol"},"Delivers the response back to you")),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"center"},(0,i.yg)("img",{alt:"Workflow",src:n(22240).c,width:"900",height:"313"})))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"center"},(0,i.yg)("em",{parentName:"td"},(0,i.yg)("a",{parentName:"em",href:"https://snipcart.com/blog/integrating-apis-introduction"},"Source")))))),(0,i.yg)("p",null,"OpenFn connects with APIs via http requests sent via the web. OpenFn can automate any tasks supported by the APIs of the applications it integrates with (e.g., if an app\u2019s API supports sending payments, then OpenFn can automate sending payments). "),(0,i.yg)("h2",{id:"how-to-analyze-api-documentation"},"How to analyze API documentation"),(0,i.yg)("p",null,"In the beginning of the design process, you should explore the target system\u2019s API documentation to determine the options for integration. "),(0,i.yg)("h3",{id:"determine-integration-options"},"Determine integration options"),(0,i.yg)("p",null,"Consider these questions to determine your integration options\u2013even if an API is not available. :"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Is there a RESTful API? ",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"If yes, OpenFn can connect out-of-box! REST API is the gold standard for most modern web apps, and typically supports JSON data format."))),(0,i.yg)("li",{parentName:"ol"},"Is there a webhook? ",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Most mobile data collection apps offer this feature. Some call it \u201cdata forwarding\u201d, \u201cweb callback\u201d, or \u201cHTTP push API\u201d."),(0,i.yg)("li",{parentName:"ul"},"Webhooks automatically send messages or notifications when something happens (e.g., when a new form is submitted, notify external services like OpenFn). These event-based notifications enable real-time data integration or automated actions. "))),(0,i.yg)("li",{parentName:"ol"},"Otherwise, what are other options for importing/exporting data from the target applications? ",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Can you connect directly to a database? "),(0,i.yg)("li",{parentName:"ul"},"Is there a way to import/export files? (JSON, CSV, XLS, or XML)"),(0,i.yg)("li",{parentName:"ul"},"Is there a legacy API (e.g., SOAP) that we can communicate with via HTTP requests? ")))),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"OpenFn can connect any app, even if an API is not supported. See the ",(0,i.yg)("a",{parentName:"p",href:"/adaptors"},"\u201cAdaptors\u201d")," section to learn more.")),(0,i.yg)("h3",{id:"authentication"},"Authentication"),(0,i.yg)("p",null,"API documentation will typically have a section dedicated to authentication options. Look for this to discover which authentication methods are supported, and whether configuration work will be required to set up a new user or API credential. "),(0,i.yg)("p",null,"Consider that authentication methods that leverage API Keys or OAuth are typically more secure than basic authentication (username/password). "),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"As early as possible, request an API credential from the system administrator of the app you\u2019re trying to integrate with. This way, you can test authentication with a developer/test environment to verify that you\u2019re able to connect. ")),(0,i.yg)("h3",{id:"api-endpoints"},"API Endpoints"),(0,i.yg)("p",null,"Analyze the documentation to see which resources/entities and features are supported by the API. For example, if you want to register Patient records via the API, search for reference to the \u201c/patients\u201d endpoint (or whatever this resource is called in your target application). "),(0,i.yg)("p",null,"This section of the documentation will include an overview of which HTTP request methods (i.e., POST, GET, etc.) and request parameters are supported, as well as example HTTP requests you can send to the API."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"HTTP request methods will inform you which operations are supported by the API.")," "),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"C"),"reate \u2192 POST"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"R"),"ead \u2192 GET"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"U"),"pdate \u2192 PUT or PATCH"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"D"),"elete \u2192 DELETE")),(0,i.yg)("p",null,"For example, if you want to query Patient records from an app, see if the API documentation supports ",(0,i.yg)("inlineCode",{parentName:"p"},"GET \u2018/patients\u2019"),". "),(0,i.yg)("h3",{id:"limits"},"Limits"),(0,i.yg)("p",null,"Be on the lookout for API limits. Documentation will often have a dedicated section that will describe if there are any limits or considerations for API requests and rates, concurrency, and record limits. Understanding these limits upfront can inform your integration design to ensure high-performing, scalable automation. "),(0,i.yg)("h2",{id:"technical-workflow-diagramming"},"Technical Workflow Diagramming"),(0,i.yg)("p",null,"The output of API discovery should be a \u201ctechnical\u201d workflow diagram. This diagram is different from the functional workflow diagram produced during ",(0,i.yg)("a",{parentName:"p",href:"/documentation/next/design/discovery"},"\u201cDiscovery\u201d")," in that it captures the technical specifications for how to integrate with target applications. These specifications include the specific methods/operations (e.g., GET, POST) and the database/API names of the target resources (i.e., specific API endpoints or database tables). "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Workflow",src:n(36072).c,width:"1292",height:"616"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"When drafting your technical specifications, consider the following:")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Plan for failure. Your workflows will fail. Consider what happens when they do\u2026"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Should individuals be notified? "),(0,i.yg)("li",{parentName:"ul"},"How can the workflow be re-processed safely? "),(0,i.yg)("li",{parentName:"ul"},"How to ensure no duplicate data is created? "))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Where possible, use unique identifiers to build idempotent automation. Check for existing records in the target system using an available unique identifier:")," ",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"System record UUIDs (e.g., record_id: asjd2910-b8zy1s0a),"),(0,i.yg)("li",{parentName:"ul"},"Unique codes (e.g., HOUSEHOLD-10013) and "),(0,i.yg)("li",{parentName:"ul"},"Unique combination of attributes (e.g., familyName + phoneNumber + village + districtCode)"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"If the target system does not have native \u201cupsert\u201d operation or built-in duplicate-checking before insert, implement an upsert  (\u201cupdate or insert\u201d) pattern to\u2026"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Check if a record exists using a unique identifier\u2026"),(0,i.yg)("li",{parentName:"ul"},"If yes, update the record."),(0,i.yg)("li",{parentName:"ul"},"If not, insert a new record."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("strong",{parentName:"li"},"Don\u2019t forget to consider data volumes. Depending on whether you need to handle 1, 10000, or 1M+ records, your workflow approach may need change."),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Estimate the file size of the data to be extracted "),(0,i.yg)("li",{parentName:"ul"},"Consider API limits (records returned per page, request rate limits)"),(0,i.yg)("li",{parentName:"ul"},"Consider bulk operations & batching requests")))),(0,i.yg)("p",null,"Check out the technical workflow diagram below for syncing forms submissions from KoboToolBox to DHIS2. The original functional diagram can be found ",(0,i.yg)("a",{parentName:"p",href:"/documentation/next/design/discovery#workflow-requirements-gathering"},"here"),". "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Workflow",src:n(20172).c,width:"1727",height:"1168"})))}u.isMDXComponent=!0},22240:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/api_diagram-ce0d6a6e501d81416321e3153e07cca5.png"},36072:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/api_example-197713f1191daf91318bc785e632a065.png"},20172:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/technical_example-c8055d4ecca52166fc011ab00f36478d.png"}}]);