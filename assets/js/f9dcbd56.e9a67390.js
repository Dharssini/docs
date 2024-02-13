"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[81768],{95788:(e,t,a)=>{a.d(t,{Iu:()=>u,yg:()=>y});var n=a(11504);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=p(a),c=o,y=g["".concat(i,".").concat(c)]||g[c]||d[c]||r;return a?n.createElement(y,l(l({ref:t},u),{},{components:a})):n.createElement(y,l({ref:t},u))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[g]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4e4:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(45072),o=(a(11504),a(95788));const r={title:"Basic usage of OpenFn CLI",sidebar_label:"Basic usage",slug:"/cli-usage"},l=void 0,s={unversionedId:"build-for-developers/cli-usage",id:"build-for-developers/cli-usage",title:"Basic usage of OpenFn CLI",description:"Execute a job, run a workflow, adjust logging, maintain adaptors, and save the state.",source:"@site/docs/build-for-developers/cli-usage.md",sourceDirName:"build-for-developers",slug:"/cli-usage",permalink:"/documentation/cli-usage",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build-for-developers/cli-usage.md",tags:[],version:"current",frontMatter:{title:"Basic usage of OpenFn CLI",sidebar_label:"Basic usage",slug:"/cli-usage"},sidebar:"docs",previous:{title:"Get started",permalink:"/documentation/cli"},next:{title:"CLI walkthrough",permalink:"/documentation/cli-walkthrough"}},i={},p=[{value:"Execute a job, run a workflow, adjust logging, maintain adaptors, and save the state.",id:"execute-a-job-run-a-workflow-adjust-logging-maintain-adaptors-and-save-the-state",level:4},{value:"Run a job",id:"run-a-job",level:3},{value:"Write resulting state to disk",id:"write-resulting-state-to-disk",level:3},{value:"Return resulting state through stdout",id:"return-resulting-state-through-stdout",level:3},{value:"Adjust logging level",id:"adjust-logging-level",level:3},{value:"Maintain auto-installed adaptors repo",id:"maintain-auto-installed-adaptors-repo",level:3},{value:"Run a workflow",id:"run-a-workflow",level:3}],u={toc:p},g="wrapper";function d(e){let{components:t,...a}=e;return(0,o.yg)(g,(0,n.c)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h4",{id:"execute-a-job-run-a-workflow-adjust-logging-maintain-adaptors-and-save-the-state"},"Execute a job, run a workflow, adjust logging, maintain adaptors, and save the state."),(0,o.yg)("p",null,"You're probably here to run jobs (expressions) or workflows, which the CLI makes\neasy. Keep reading for an outline of the basic usage scenarios of the CLI."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"run-a-job"},"Run a job"),(0,o.yg)("p",null,"To run a single job, you must explicitly specify which adaptor to use. You can\nfind the list of publicly available ",(0,o.yg)("a",{parentName:"p",href:"/adaptors"},"adaptors here"),". See examples\nbelow."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Pass the ",(0,o.yg)("inlineCode",{parentName:"p"},"-i")," flag to auto-install that adaptor (it's safe to do this\nredundantly).")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Use a shorthand (e.g., ",(0,o.yg)("inlineCode",{parentName:"strong"},"http"),"):")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn path/to/job.js -ia http\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Use the full package name (e.g., ",(0,o.yg)("inlineCode",{parentName:"strong"},"@openfn/language-http"),"):")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn path/to/job.js -ia @openfn/language-http\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Add a specific version:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn path/to/job.js -ia http@2.0.0\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Pass a path to a locally installed adaptor:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn path/to/job.js -a http=/repo/openfn/adaptors/my-http-build\n")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"write-resulting-state-to-disk"},"Write resulting state to disk"),(0,o.yg)("p",null,"After the job finishes, the CLI writes the resulting state to disk. By default,\nit creates an ",(0,o.yg)("inlineCode",{parentName:"p"},"output.json")," next to the job file."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"You can specify custom paths for the output and state files:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn path/to/job.js -ia adaptor-name -o path/to/output.json -s path/to/state.json\n")),(0,o.yg)("h3",{id:"return-resulting-state-through-stdout"},"Return resulting state through stdout"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Use ",(0,o.yg)("inlineCode",{parentName:"strong"},"-O")," to return the output through stdout:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn path/to/job.js -ia adaptor-name -O\n")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"adjust-logging-level"},"Adjust logging level"),(0,o.yg)("p",null,"You can pass ",(0,o.yg)("inlineCode",{parentName:"p"},"-l info")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"--log info")," to get more feedback about what's\nhappening during runtime. Below is the list of different log levels"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"log level"),(0,o.yg)("th",{parentName:"tr",align:null},"description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"openfn path/to/job.js -a adaptor -l none")),(0,o.yg)("td",{parentName:"tr",align:null},"Quiet mode")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"openfn path/to/job.js -a adaptor -l default")),(0,o.yg)("td",{parentName:"tr",align:null},"Top level information of what is happening")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"openfn path/to/job.js -a adaptor -l info")),(0,o.yg)("td",{parentName:"tr",align:null},"Get more feedback about runtime, cli and the job")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"openfn path/to/job.js -a adaptor -l debug")),(0,o.yg)("td",{parentName:"tr",align:null},"Get information about runtime, cli, compiler and the job")))),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"maintain-auto-installed-adaptors-repo"},"Maintain auto-installed adaptors repo"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"List the repo contents:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn repo list\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Specify the repo folder using the ",(0,o.yg)("inlineCode",{parentName:"strong"},"OPENFN_REPO_DIR")," env var:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"export OPENFN_REPO_DIR=/path/to/repo\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Auto-install adaptors and check if a matching version is found in the repo:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn path/to/job.js -ia adaptor-name\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Remove all adaptors from the repo:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn repo clean\n")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"run-a-workflow"},"Run a workflow"),(0,o.yg)("details",null,(0,o.yg)("summary",null,"A workflow has a structure like this"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "start": "a", // optionally specify the start node (defaults to jobs[0])\n  "jobs": [\n    {\n      "id": "a",\n      "expression": "fn((state) => state)", // code or a path\n      "adaptor": "@openfn/language-common@1.75", // specifiy the adaptor to use (version optional)\n      "data": {}, // optionally pre-populate the data object (this will be overriden by keys in in previous state)\n      "configuration": {}, // Use this to pass credentials\n      "next": {\n        // This object defines which jobs to call next\n        // All edges returning true will run\n        // If there are no next edges, the workflow will end\n        "b": true,\n        "c": {\n          "condition": "!state.error" // Note that this is an expression, not a function\n        }\n      }\n    }\n  ]\n}\n'))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"To run a workflow:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn path/to/workflow.json -i\n")),(0,o.yg)("p",null,"Check out this detailed ",(0,o.yg)("a",{parentName:"p",href:"cli-walkthrough#7-running-workflows"},"tutorial")," on\nrunning workflows via the CLI."))}d.isMDXComponent=!0}}]);