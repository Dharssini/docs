"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[10176],{95788:(e,t,n)=>{n.d(t,{Iu:()=>g,yg:()=>d});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,d=c["".concat(p,".").concat(m)]||c[m]||y[m]||a;return n?r.createElement(d,i(i({ref:t},g),{},{components:n})):r.createElement(d,i({ref:t},g))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(45072),o=(n(11504),n(95788));const a={title:"Planning"},i=void 0,l={unversionedId:"deploy/options",id:"version-legacy/deploy/options",title:"Planning",description:"Introduction",source:"@site/versioned_docs/version-legacy/deploy/options.md",sourceDirName:"deploy",slug:"/deploy/options",permalink:"/documentation/legacy/deploy/options",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/versioned_docs/version-legacy/deploy/options.md",tags:[],version:"legacy",frontMatter:{title:"Planning"},sidebar:"docs",previous:{title:"Microservice",permalink:"/documentation/legacy/microservice/home"},next:{title:"Requirements",permalink:"/documentation/legacy/deploy/requirements"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Sample Local Deployment Plan",id:"sample-local-deployment-plan",level:2},{value:"Moving from cloud to local (v1 or v2)",id:"moving-from-cloud-to-local-v1-or-v2",level:2},{value:"A user journey for locally deployed OpenFn",id:"a-user-journey-for-locally-deployed-openfn",level:3},{value:"Technical Guidelines",id:"technical-guidelines",level:2}],g={toc:s},c="wrapper";function y(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,r.c)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"OpenFn can be used as a secure, stable, scalable cloud-hosted offering or\ndeployed locally\u2014with both managed and un-managed options. Regardless of which\npath you choose, you can configure OpenFn so that no sensitive data is kept\noutside your country's borders."),(0,o.yg)("admonition",{title:"Portability",type:"success"},(0,o.yg)("p",{parentName:"admonition"},"Because of OpenFn's ",(0,o.yg)("a",{parentName:"p",href:"/documentation/legacy/portability"},"portability specification")," and open-source\ndeployment tools you can transition between these various pathways at any time.\nWe're committed to a ",(0,o.yg)("strong",{parentName:"p"},"no vendor lock-in")," experience.")),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:"center"},"Pathway"),(0,o.yg)("th",{parentName:"tr",align:"center"},"Free"),(0,o.yg)("th",{parentName:"tr",align:"center"},"Standard"),(0,o.yg)("th",{parentName:"tr",align:"center"},"Dedicated"),(0,o.yg)("th",{parentName:"tr",align:"center"},"Do-it-yourself (DIY)"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"center"},"Description"),(0,o.yg)("td",{parentName:"tr",align:"center"},"Go live today on OpenFn.org for small scale projects"),(0,o.yg)("td",{parentName:"tr",align:"center"},"Scale up and down, pay only for what you need"),(0,o.yg)("td",{parentName:"tr",align:"center"},"A dedicated, unrestricted OpenFn installation anywhere in the world on our servers or yours"),(0,o.yg)("td",{parentName:"tr",align:"center"},"Deploy and manage your own solutions with OpenFn")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"center"},"License"),(0,o.yg)("td",{parentName:"tr",align:"center"},"Free forever with usage limitations"),(0,o.yg)("td",{parentName:"tr",align:"center"},(0,o.yg)("strong",{parentName:"td"},"SaaS")," ",(0,o.yg)("a",{parentName:"td",href:"https://www.openfn.org/pricing"},"plans"),"; contact ",(0,o.yg)("a",{parentName:"td",href:"mailto:enterprise@openfn.org"},"enterprise@openfn.org")," for custom/invoice agreements"),(0,o.yg)("td",{parentName:"tr",align:"center"},(0,o.yg)("strong",{parentName:"td"},"SDaaS")," includes deployment, maintenance, security patches, upgrades, and troubleshooting as a service; contact ",(0,o.yg)("a",{parentName:"td",href:"mailto:enterprise@openfn.org"},"enterprise@openfn.org")),(0,o.yg)("td",{parentName:"tr",align:"center"},"LGPLv3 means use freely as part of any closed or open-source solution, but make all ",(0,o.yg)("em",{parentName:"td"},"derivative")," works open source")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"center"},"Location"),(0,o.yg)("td",{parentName:"tr",align:"center"},"Secure ",(0,o.yg)("strong",{parentName:"td"},"global")," cloud infrastructure"),(0,o.yg)("td",{parentName:"tr",align:"center"},"Secure ",(0,o.yg)("strong",{parentName:"td"},"global")," cloud infrastructure"),(0,o.yg)("td",{parentName:"tr",align:"center"},(0,o.yg)("strong",{parentName:"td"},"Local (in-country)")," or ",(0,o.yg)("strong",{parentName:"td"},"Global")," infrastructure"),(0,o.yg)("td",{parentName:"tr",align:"center"},"Wherever you want")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"center"},"Deployment"),(0,o.yg)("td",{parentName:"tr",align:"center"},(0,o.yg)("strong",{parentName:"td"},"Click to start")," at ",(0,o.yg)("a",{parentName:"td",href:"https://www.openfn.org/signup"},"OpenFn.org")),(0,o.yg)("td",{parentName:"tr",align:"center"},(0,o.yg)("strong",{parentName:"td"},"Click to start")," at ",(0,o.yg)("a",{parentName:"td",href:"https://www.openfn.org/signup"},"OpenFn.org")),(0,o.yg)("td",{parentName:"tr",align:"center"},(0,o.yg)("strong",{parentName:"td"},"Contact")," ",(0,o.yg)("a",{parentName:"td",href:"mailto:enterprise@openfn.org"},"enterprise@openfn.org")),(0,o.yg)("td",{parentName:"tr",align:"center"},"Read this docs page and visit our ",(0,o.yg)("a",{parentName:"td",href:"https://www.github.com/OpenFn"},"Github"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"center"},"Setup & Configuration"),(0,o.yg)("td",{parentName:"tr",align:"center"},(0,o.yg)("strong",{parentName:"td"},"Your choice")," to setup yourself, with a certified implementer, or with the OpenFn.org team"),(0,o.yg)("td",{parentName:"tr",align:"center"},(0,o.yg)("strong",{parentName:"td"},"Your choice")," to setup yourself, with a certified implementer, or with the OpenFn.org team"),(0,o.yg)("td",{parentName:"tr",align:"center"},(0,o.yg)("strong",{parentName:"td"},"Your choice")," to setup yourself, with a certified implementer, or with the OpenFn.org team"),(0,o.yg)("td",{parentName:"tr",align:"center"},(0,o.yg)("strong",{parentName:"td"},"Your choice")," to setup yourself, with a certified implementer, or with the OpenFn.org team")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:"center"},"Support"),(0,o.yg)("td",{parentName:"tr",align:"center"},"Give & receive support via the ",(0,o.yg)("a",{parentName:"td",href:"https://community.openfn.org"},"community")),(0,o.yg)("td",{parentName:"tr",align:"center"},"Various levels from ",(0,o.yg)("a",{parentName:"td",href:"mailto:support@openfn.org"},"support@openfn.org")),(0,o.yg)("td",{parentName:"tr",align:"center"},"Various levels from ",(0,o.yg)("a",{parentName:"td",href:"mailto:support@openfn.org"},"support@openfn.org")),(0,o.yg)("td",{parentName:"tr",align:"center"},"Give & receive support via the ",(0,o.yg)("a",{parentName:"td",href:"https://community.openfn.org"},"community"))))),(0,o.yg)("h2",{id:"sample-local-deployment-plan"},"Sample Local Deployment Plan"),(0,o.yg)("admonition",{title:"This is just an example",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Your requirements will vary, but this is an example plan for achieving a\nlarge-scale, high-sensitivity local deployment.")),(0,o.yg)("p",null,"If you're considering a large-scale/high-sensitivity implementation of OpenFn on\nlocal/government-managed servers, you might:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Run a proof-of-concept, prototype, or time-bound production solution"),"\nusing the cloud hosted offering while determining fit and value. (It's a more\nsecure, less expensive, and faster way to prove out the value and viability\nof the solution itself.)"),(0,o.yg)("li",{parentName:"ol"},"While the first phase is running, ",(0,o.yg)("strong",{parentName:"li"},"assess the value and begin\npreparations"),":",(0,o.yg)("ol",{parentName:"li"},(0,o.yg)("li",{parentName:"ol"},"Assess the ",(0,o.yg)("strong",{parentName:"li"},"value of the solution")," itself\u2014is it solving the problems you\nthought it would?"),(0,o.yg)("li",{parentName:"ol"},"Asses your ",(0,o.yg)("strong",{parentName:"li"},"data residency requirements"),"\u2014do you need to run this\nsolution in country?"),(0,o.yg)("li",{parentName:"ol"},"Assess your team\u2019s technical ",(0,o.yg)("strong",{parentName:"li"},"DevOps capacity"),"\u2014how are other local\ndeployments of DPGs going?"),(0,o.yg)("li",{parentName:"ol"},"Assess your countries computing, storage, and networking\ninfrastructure\u2014what options","*"," are available for servers and network\nconnectivity?"),(0,o.yg)("li",{parentName:"ol"},"Determine if a ",(0,o.yg)("strong",{parentName:"li"},'"zero-persistence"')," cloud solution or a ",(0,o.yg)("strong",{parentName:"li"},"locally\ndeployed")," solution is best for your ministry\u2014with the data above run a\ncost-benefit analysis on both options."))),(0,o.yg)("li",{parentName:"ol"},"Engage with OpenFn.org or a certified partner to ",(0,o.yg)("strong",{parentName:"li"},"practice deployment"),",\nmigration, rollback, restart, backup, etc."),(0,o.yg)("li",{parentName:"ol"},"Using OpenFn\u2019s portability tools, ",(0,o.yg)("strong",{parentName:"li"},"run a cloned local version")," of your\ncloud-hosted solution to assess the readiness of your local deployment."),(0,o.yg)("li",{parentName:"ol"},"Establish a ",(0,o.yg)("strong",{parentName:"li"},"fail-over protocol")," with OpenFn to \u201cfail to cloud\u201d for\ncritical systems.",(0,o.yg)("ol",{parentName:"li"},(0,o.yg)("li",{parentName:"ol"},"How often should the implementation configuration (not the sensitive data)\nbe backed up to the OpenFn.org hosted cloud?"),(0,o.yg)("li",{parentName:"ol"},"What credentials and/or test environments should the cloud backup have\naccess to?"),(0,o.yg)("li",{parentName:"ol"},"Establish a plan for switching between cloud and local."))),(0,o.yg)("li",{parentName:"ol"},"Establish a ",(0,o.yg)("strong",{parentName:"li"},"support retainer")," with OpenFn-certified local vendors and/or\nthe OpenFn core team to help maintain the local deployment in case of issues."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Transition fully to your local deployment")," and maintain capacity to\nsupport or redeploy your solution to other cloud or local servers."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Monitor & adjust your strategy")," as and when required by your country\u2019s\nusage and data sovereignty requirements evolve over time.")),(0,o.yg)("p",null,"*","Head over to the ",(0,o.yg)("a",{parentName:"p",href:"/documentation/legacy/deploy/requirements"},"Requirements")," page for more information\non recommended server specifications."),(0,o.yg)("h2",{id:"moving-from-cloud-to-local-v1-or-v2"},"Moving from cloud to local (v1 or v2)"),(0,o.yg)("p",null,"For users that are planning a self-hosted implementation, we recommend\ndeveloping and testing the initial solution on the OpenFn SaaS (v1 or v2,\npossibly on a free tier) and then exporting for use in Lightning (v2)."),(0,o.yg)("p",null,"This allows the implementer to focus on ironing out the business and technical\nrequirements of the automation before incurring deployment costs. Focus on the\nsolution, not the deployment. Your OpenFn solution can then be migrated to a\nlocal deployment of Lightning once it has been piloted, its value has been\nproven, and you're ready to scale it up."),(0,o.yg)("h3",{id:"a-user-journey-for-locally-deployed-openfn"},"A user journey for locally deployed OpenFn"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Build and test your workflows on ",(0,o.yg)("a",{parentName:"li",href:"https://www.openfn.org"},"Openfn.org"),"."),(0,o.yg)("li",{parentName:"ol"},"Export your OpenFn project ",(0,o.yg)("em",{parentName:"li"},"as code"),' using the "export" button or deployment\nCLI.'),(0,o.yg)("li",{parentName:"ol"},"Deploy your local instance of OpenFn/Lightning."),(0,o.yg)("li",{parentName:"ol"},"Import your project (from step #2) to your local OpenFn/Lightning instance\nusing the deployment CLI."),(0,o.yg)("li",{parentName:"ol"},"Re-configure your credentials (credential secrets will ",(0,o.yg)("em",{parentName:"li"},"not")," be included in\nthe export)."),(0,o.yg)("li",{parentName:"ol"},"Test your locally deployed project.")),(0,o.yg)("h2",{id:"technical-guidelines"},"Technical Guidelines"),(0,o.yg)("p",null,"For detailed deployment documentation instructions, head to the Lightning\n",(0,o.yg)("a",{parentName:"p",href:"https://openfn.github.io/Lightning/readme.html"},"developer docs page"),", paying\nspecial attention to several sections:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://openfn.github.io/Lightning/readme.html#getting-started"},"Getting Started")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://openfn.github.io/Lightning/deployment.html"},"Deployment Considerations")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://openfn.github.io/Lightning/benchmarking.html"},"Benchmarking"))))}y.isMDXComponent=!0}}]);