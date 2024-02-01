"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[98512],{95788:(e,n,t)=>{t.d(n,{Iu:()=>d,yg:()=>g});var a=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,g=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},59716:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(45072),r=(t(11504),t(95788));const o={title:"Requirements"},i=void 0,l={unversionedId:"deploy/requirements",id:"version-legacy/deploy/requirements",title:"Requirements",description:"Plan first",source:"@site/versioned_docs/version-legacy/deploy/requirements.md",sourceDirName:"deploy",slug:"/deploy/requirements",permalink:"/documentation/deploy/requirements",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/versioned_docs/version-legacy/deploy/requirements.md",tags:[],version:"legacy",frontMatter:{title:"Requirements"},sidebar:"docs",previous:{title:"Planning",permalink:"/documentation/deploy/options"},next:{title:"Portability",permalink:"/documentation/portability"}},s={},p=[{value:"Plan first",id:"plan-first",level:2},{value:"Assess your capacity",id:"assess-your-capacity",level:2},{value:"Knowledge Requirements",id:"knowledge-requirements",level:2},{value:"Machine Requirements",id:"machine-requirements",level:2},{value:"Possible Configurations",id:"possible-configurations",level:2},{value:"(a) Simple",id:"a-simple",level:3},{value:"(b) Recommended Minimum",id:"b-recommended-minimum",level:3},{value:"(c) Ideal",id:"c-ideal",level:3}],d={toc:p},m="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.c)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"plan-first"},"Plan first"),(0,r.yg)("p",null,"Not sure where to start? Head back to the\n",(0,r.yg)("a",{parentName:"p",href:"/documentation/deploy/options"},'"Planning"')," page to think about how you want to\nscale up your OpenFn automation projects."),(0,r.yg)("h2",{id:"assess-your-capacity"},"Assess your capacity"),(0,r.yg)("admonition",{title:"Help your partner estimate up-front and ongoing costs",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Use these questions to start assessing capacity and technical resources so that\nyour deployment partner can better estimate your total cost of ownership.")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"How do you currently deploy, monitor, and maintain cloud-based applications\nat your organization/government? All deployment environments and institutions\nare unique and OpenFn is flexible; based on your current dev-ops processes we\nwill recommend different deployment mechanisms."),(0,r.yg)("li",{parentName:"ol"},"What IT and DevOps staff resources are available to support OpenFn deployment\nand maintenance? Do they have experience with Docker & Kubernetes? Do they\nhave experience with Postgres databases?"),(0,r.yg)("li",{parentName:"ol"},"Will the deployment require high-availability? (i.e., if OpenFn will receive\nrequests in real-time from other applications rather than run cron-based\njobs, then at least two instances of OpenFn should be run simultaneously\nbehind a load-balancer, making use of \u201cdistributed Erlang\u201d to ensure graceful\napplication redundancy; if OpenFn will not be responsible for receiving\nrequests and will only be responsible for making relatively time-independent\noutbound requests on a cron schedule, the importance of maintaining a\nzero-downtime system is slightly reduced.)")),(0,r.yg)("h2",{id:"knowledge-requirements"},"Knowledge Requirements"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Skill"),(0,r.yg)("th",{parentName:"tr",align:null},"Relevance and reason"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Erlang"),(0,r.yg)("td",{parentName:"tr",align:null},"The OpenFn ",(0,r.yg)("strong",{parentName:"td"},"webapp/orchestration layer")," is an Erlang OTP application.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Javascript"),(0,r.yg)("td",{parentName:"tr",align:null},"The OpenFn ",(0,r.yg)("strong",{parentName:"td"},"job processing workers")," and OpenFn workflows themselves are Javascript-based. With knowledge of how NodeJs works you can build workflows that do ",(0,r.yg)("em",{parentName:"td"},"anything"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Postgres"),(0,r.yg)("td",{parentName:"tr",align:null},"The default ",(0,r.yg)("strong",{parentName:"td"},"database")," for OpenFn is PostgreSQL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Docker"),(0,r.yg)("td",{parentName:"tr",align:null},"We publish all ",(0,r.yg)("strong",{parentName:"td"},"OpenFn ",(0,r.yg)("a",{parentName:"strong",href:"https://hub.docker.com/repository/docker/openfn/lightning/general"},"images"))," on Docker Hub. Whether you're streamlining developer setup or using container orchestration technologies, understanding docker and containerized computing is helpful.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Kubernetes"),(0,r.yg)("td",{parentName:"tr",align:null},"For high-availability deployments, Kubernetes services provide ",(0,r.yg)("strong",{parentName:"td"},"load balancing")," and simplify ",(0,r.yg)("strong",{parentName:"td"},"container management")," on multiple hosts. They make it easy for an enterprise's apps to have greater scalability and be flexible, portable and more productive.")))),(0,r.yg)("h2",{id:"machine-requirements"},"Machine Requirements"),(0,r.yg)("admonition",{title:'If you\'re going with "DIY", start simple',type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Kubernetes is ",(0,r.yg)("em",{parentName:"p"},"NOT")," required, but it's recommended for high-availability\ndeployments. Consider docker or bare-metal deployments (Erlang OTP apps work\nvery well on Linux) for a simpler setup.")),(0,r.yg)("p",null,"The official OpenFn SaaS uses ",(0,r.yg)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," for managed\ndeployments on Google Cloud and we recommend it for high-availability and\nscalable deployments. With dynamic workloads, it is important (for stability and\ncost reasons) to be able to scale the Erlang OTP app node pool & pods\nindependently of the Javascript worker node pool & pods."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Use a scalable SQL service and keeping ",(0,r.yg)("em",{parentName:"li"},"at least")," two app nodes running with\nthe following specs will help prevent unwanted downtime.",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"GKE requests:"),' cpu@ "500m", memory@ "1024Mi"'),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"GKE limits:"),' memory@ "2560Mi"'))),(0,r.yg)("li",{parentName:"ol"},"For a simple non-Kubernetes/HA deployments, the minimum recommended machines\nare:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Application machine:")," 2 vCPU (roughly a single core of a 2.6 GHz Intel\nXeon E5) with 3.75 GB memory and 15 gb of storage for the application",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"Any linux-based operating system that can run Docker (Ubuntu 20.04+ or\nDebian 9+)."),(0,r.yg)("li",{parentName:"ol"},"Docker (18 or greater)."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Database machine:")," 2 vCPU (roughly a single core of a 2.6 GHz Intel Xeon\nE5) with 3.75 GB memory. Storage required for the DB varies by how many\ndays (if any) of message data you\u2019d like to store on the app itself and\ncannot be determined without estimates for message/run throughput. If\nscaling physical storage is not difficult for your particular deployment,\nstart at 40gb. 3. A Postgres (at least v14.2) instance (as we run this on a\n",(0,r.yg)("em",{parentName:"li"},"separate server"),") from the application for greater stability."))),(0,r.yg)("li",{parentName:"ol"},"If both the application and database are hosted on the same machine (which is\nnot recommended) that machine should have roughly the sum of the requirements\nabove."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Note")," that the application by default provides an HTTP endpoint (no\nTLS/SSL). A reverse-proxy/load-balancer is expected to provide both HTTPS\n(HTTP2 compliant) and load balancing between instances.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"I.e. the application server provides no encryption for web access, a web\nserver in front of the application needs to be provided; Nginx is a good\nstart, provided with TLS certificates.")))),(0,r.yg)("li",{parentName:"ol"},"While network architecture is up to the client, we strongly ",(0,r.yg)("strong",{parentName:"li"},"recommend a\nprivate subnet")," for the application servers."),(0,r.yg)("li",{parentName:"ol"},"The OpenFn application does not need to be deployed on the same machine as\nany other services, however network routing and firewall rules will need to\nbe provided in order for the integration to access the source and destination\nsystems if hosted on different servers."),(0,r.yg)("li",{parentName:"ol"},"For ",(0,r.yg)("strong",{parentName:"li"},"troubleshooting/external support"),", administrators will need SSH access\nto an unrestricted account (",(0,r.yg)("inlineCode",{parentName:"li"},"sudo")," for Ubuntu) if deployment maintenance\nservices are required.")),(0,r.yg)("h2",{id:"possible-configurations"},"Possible Configurations"),(0,r.yg)("p",null,"While your deployment strategy should be carefully considered with a DevOps\nspecialist, the following sample configurations may provide useful starting\npoints."),(0,r.yg)("h3",{id:"a-simple"},"(a) Simple"),(0,r.yg)("p",null,"Deploy the application and database on the same machine."),(0,r.yg)("mermaid",{value:'flowchart TB\n  subgraph "Linux VM with Docker"\n    ex1-.-db1\n    direction TB\n    ex1(Erlang OTP App with JS Worker)\n    db1[(PostgreSQL)]\n  end'}),(0,r.yg)("h3",{id:"b-recommended-minimum"},"(b) Recommended Minimum"),(0,r.yg)("p",null,"Deploy the application and database on separate machines."),(0,r.yg)("mermaid",{value:'flowchart TB\n  ex1-.-db1\n  subgraph "Linux VM with Docker"\n    direction LR\n    ex1(Erlang OTP App)-.-js1(NodeJs Worker App)\n  end\n  subgraph "Linux VM"\n    db1[(PostgreSQL)]\n  end'}),(0,r.yg)("h3",{id:"c-ideal"},"(c) Ideal"),(0,r.yg)("p",null,"Auto-scale different optimized node pools in a Kubernetes cluster for the Erlang\norchestration app and the Javascript worker app."),(0,r.yg)("p",null,"Consider high-availability Postgres-as-a-service, or also run it in a cluster."),(0,r.yg)("mermaid",{value:'flowchart TB\n  ex1-.-db1\n  ex1-.-js1\n  lb1--\x3eex1\n  subgraph "Load Balancer"\n    lb1(Ingress)\n  end\n  subgraph "VMs/Node Pools for Erlang apps"\n    direction LR\n    ex1(Erlang OTP Apps)\n  end\n  subgraph "VMs/Node Pool for JS Worker Apps"\n    js1(NodeJs Worker Apps)\n  end\n  subgraph "VMs/Node Pool"\n    db1[(PostgreSQL)]\n  end'}))}c.isMDXComponent=!0}}]);