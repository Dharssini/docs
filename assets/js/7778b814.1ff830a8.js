"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[46260],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>g});var a=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10172:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(45072),o=(t(11504),t(95788));const r={title:"Get started with the OpenFn CLI",sidebar_label:"Get started",slug:"/cli"},l=void 0,i={unversionedId:"build-for-developers/cli-intro",id:"build-for-developers/cli-intro",title:"Get started with the OpenFn CLI",description:"Build and test your automated workflows and integrations via the command line.",source:"@site/docs/build-for-developers/cli-intro.md",sourceDirName:"build-for-developers",slug:"/cli",permalink:"/documentation/next/cli",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build-for-developers/cli-intro.md",tags:[],version:"current",frontMatter:{title:"Get started with the OpenFn CLI",sidebar_label:"Get started",slug:"/cli"},sidebar:"docs",previous:{title:"Limits",permalink:"/documentation/next/build/limits"},next:{title:"Basic Usage",permalink:"/documentation/next/cli-usage"}},s={},p=[{value:"Build and test your automated workflows and integrations via the command line.",id:"build-and-test-your-automated-workflows-and-integrations-via-the-command-line",level:4},{value:"Before you start",id:"before-you-start",level:3},{value:"Install the OpenFn CLI",id:"install-the-openfn-cli",level:3},{value:"Update the OpenFn CLI",id:"update-the-openfn-cli",level:3},{value:"Troubleshoot Installation",id:"troubleshoot-installation",level:3}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,a.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h4",{id:"build-and-test-your-automated-workflows-and-integrations-via-the-command-line"},"Build and test your automated workflows and integrations via the command line."),(0,o.yg)("p",null,"The OpenFn CLI is a developer tool to help you build, test, and manage your\nworkflows and integration with OpenFn directly from the command line. It\u2019s\nsimple to install, works on macOS, Windows, and Linux, and offers a range of\nfunctionality to enhance your developer experience with OpenFn. You can use the\nOpenFn CLI to:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Securely run OpenFn jobs and workflows"),(0,o.yg)("li",{parentName:"ul"},"Troubleshoot and debug OpenFn jobs"),(0,o.yg)("li",{parentName:"ul"},"Deployment of workflows to OpenFn")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"before-you-start"},"Before you start"),(0,o.yg)("p",null,"Before you begin with the @openfn/cli, make sure to follow these simple steps:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Code Editor:")," Ensure you have a code editor installed on your machine. You\ncan use popular editors like ",(0,o.yg)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VS Code")," or\n",(0,o.yg)("a",{parentName:"li",href:"https://www.sublimetext.com/"},"Sublime"),"."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Node.js Installation:")," Install Node.js (version 18 or later): - For Linux,\nWindows, or macOS, use a version manager like\n",(0,o.yg)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm")," or\n",(0,o.yg)("a",{parentName:"li",href:"https://asdf-vm.com/guide/getting-started.html"},"asdf"),". -\n",(0,o.yg)("a",{parentName:"li",href:"https://kinsta.com/blog/how-to-install-node-js/"},"Install Node.js")," by\nfollowing this guide."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Understand OpenFn Basics:")," Have a basic understanding of OpenFn,\nparticularly jobs and adaptors. Check out the\n",(0,o.yg)("a",{parentName:"li",href:"/documentation/next"},"Intro section")," on this site.")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"install-the-openfn-cli"},"Install the OpenFn CLI"),(0,o.yg)("p",null,"To download the latest version of\n",(0,o.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/@openfn/cli"},"@openfn/cli"),", on the command line,\nrun the following command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm install -g @openfn/cli\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Make sure everything works by running the built-in test job")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn test\n")),(0,o.yg)("p",null,"The word ",(0,o.yg)("inlineCode",{parentName:"p"},"openfn")," will invoke the CLI. The word ",(0,o.yg)("inlineCode",{parentName:"p"},"test")," will invoke the test\ncommand."),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Expand to see the expected output."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'[CLI] \u2139 Versions:\n        \u25b8 node.js     18.12.1\n        \u25b8 cli         0.4.11\n        \u25b8 runtime     0.2.2\n        \u25b8 compiler    0.0.38\n[CLI] \u2139 Running test job...\n[CLI] \u2139 Workflow object:\n[CLI] \u2139 {\n    "start": "start",\n    "jobs": [\n    {\n        "id": "start",\n        "data": {\n        "defaultAnswer": 42\n        },\n        "expression": "const fn = () => (state) => { console.log(\'Starting computer...\'); return state; }; fn()",\n        "next": {\n        "calculate": "!state.error"\n        }\n    },\n    {\n        "id": "calculate",\n        "expression": "const fn = () => (state) => { console.log(\'Calculating to life, the universe, and everything..\'); return state }; fn()",\n        "next": {\n        "result": true\n        }\n    },\n    {\n        "id": "result",\n        "expression": "const fn = () => (state) => ({ data: { answer: state.data.answer || state.data.defaultAnswer } }); fn()"\n    }\n    ]\n}\n\n[CLI] \u2714 Compilation complete\n[R/T] \u2666 Starting job start\n[JOB] \u2139 Starting computer...\n[R/T] \u2139 Operation 1 complete in 0ms\n[R/T] \u2714 Completed job start in 1ms\n[R/T] \u2666 Starting job calculate\n[JOB] \u2139 Calculating to life, the universe, and everything..\n[R/T] \u2139 Operation 1 complete in 0ms\n[R/T] \u2714 Completed job calculate in 1ms\n[R/T] \u2666 Starting job result\n[R/T] \u2139 Operation 1 complete in 0ms\n[R/T] \u2714 Completed job result in 0ms\n[CLI] \u2714 Result: 42\n'))),(0,o.yg)("p",null,"All other output is the CLI telling us what it is doing internally."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Check the version")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn -v\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Get help")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"openfn help\n")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"update-the-openfn-cli"},"Update the OpenFn CLI"),(0,o.yg)("p",null,"To install a new version straight on top of your current installation, run the\nfollowing command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm install -g @openfn/cli\n")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"troubleshoot-installation"},"Troubleshoot Installation"),(0,o.yg)("p",null,"If you encounter installation issues, try uninstalling the current version first\nand then re-installing."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm uninstall -g @openfn/cli\nnpm install -g @openfn/cli\n")))}d.isMDXComponent=!0}}]);