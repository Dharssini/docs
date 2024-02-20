"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[46105],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),g=r,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||o;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},84060:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const o={title:"Get started with the OpenFn CLI",sidebar_label:"Get started",slug:"/cli"},l=void 0,i={unversionedId:"build-for-developers/cli-intro",id:"build-for-developers/cli-intro",title:"Get started with the OpenFn CLI",description:"Build and test your automated workflows and integrations via the command line.",source:"@site/docs/build-for-developers/cli-intro.md",sourceDirName:"build-for-developers",slug:"/cli",permalink:"/documentation/cli",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build-for-developers/cli-intro.md",tags:[],version:"current",frontMatter:{title:"Get started with the OpenFn CLI",sidebar_label:"Get started",slug:"/cli"},sidebar:"docs",previous:{title:"Manage changes",permalink:"/documentation/build/steps/working-with-branches"},next:{title:"Basic usage",permalink:"/documentation/cli-usage"}},s={},p=[{value:"Build and test your automated workflows and integrations via the command line.",id:"build-and-test-your-automated-workflows-and-integrations-via-the-command-line",level:4},{value:"Before you start",id:"before-you-start",level:3},{value:"Install the OpenFn CLI",id:"install-the-openfn-cli",level:3},{value:"Update the OpenFn CLI",id:"update-the-openfn-cli",level:3},{value:"Troubleshoot Installation",id:"troubleshoot-installation",level:3}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h4",{id:"build-and-test-your-automated-workflows-and-integrations-via-the-command-line"},"Build and test your automated workflows and integrations via the command line."),(0,r.yg)("p",null,"The OpenFn CLI is a developer tool to help you build, test, and manage your\nworkflows and integration with OpenFn directly from the command line. It\u2019s\nsimple to install, works on macOS, Windows, and Linux, and offers a range of\nfunctionality to enhance your developer experience with OpenFn. You can use the\nOpenFn CLI to:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Securely run OpenFn steps and workflows"),(0,r.yg)("li",{parentName:"ul"},"Troubleshoot and debug OpenFn steps"),(0,r.yg)("li",{parentName:"ul"},"Deployment of workflows to OpenFn")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"before-you-start"},"Before you start"),(0,r.yg)("p",null,"Before you begin with the @openfn/cli, make sure to follow these simple steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Code Editor:")," Ensure you have a code editor installed on your machine. You\ncan use popular editors like ",(0,r.yg)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VS Code")," or\n",(0,r.yg)("a",{parentName:"li",href:"https://www.sublimetext.com/"},"Sublime"),"."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Node.js Installation:")," Install Node.js (version 18 or later): - For Linux,\nWindows, or macOS, use a version manager like\n",(0,r.yg)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm")," or\n",(0,r.yg)("a",{parentName:"li",href:"https://asdf-vm.com/guide/getting-started.html"},"asdf"),". -\n",(0,r.yg)("a",{parentName:"li",href:"https://kinsta.com/blog/how-to-install-node-js/"},"Install Node.js")," by\nfollowing this guide."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Understand OpenFn Basics:")," Have a basic understanding of OpenFn,\nparticularly steps and adaptors. Check out the ",(0,r.yg)("a",{parentName:"li",href:"/documentation"},"Intro section"),"\non this site.")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"install-the-openfn-cli"},"Install the OpenFn CLI"),(0,r.yg)("p",null,"To download the latest version of\n",(0,r.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/@openfn/cli"},"@openfn/cli"),", on the command line,\nrun the following command."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm install -g @openfn/cli\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Make sure everything works by running the built-in test job")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openfn test\n")),(0,r.yg)("p",null,"The word ",(0,r.yg)("inlineCode",{parentName:"p"},"openfn")," will invoke the CLI. The word ",(0,r.yg)("inlineCode",{parentName:"p"},"test")," will invoke the test\ncommand."),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Expand to see the expected output."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'[CLI] \u2666 Versions:\n     \u25b8 node.js     18.12.1\n     \u25b8 cli         1.0.0\n[CLI] \u2139 Running test workflow...\n\n[CLI] \u2139 Execution plan:\n[CLI] \u2139 {\n"options": {\n    "start": "start"\n},\n"workflow": {\n    "steps": [\n    {\n        "id": "start",\n        "state": {\n        "data": {\n            "defaultAnswer": 42\n        }\n        },\n        "expression": "const fn = () => (state) => { console.log(\'Starting computer...\'); return state; }; fn()",\n        "next": {\n        "calculate": "!state.error"\n        }\n    },\n    {\n        "id": "calculate",\n        "expression": "const fn = () => (state) => { console.log(\'Calculating to life, the universe, and everything..\'); return state }; fn()",\n        "next": {\n        "result": true\n        }\n    },\n    {\n        "id": "result",\n        "expression": "const fn = () => (state) => ({ data: { answer: state.data.answer || state.data.defaultAnswer } }); fn()"\n    }\n    ]\n}\n}\n\n[CLI] \u2714 Compiled all expressions in workflow\n[R/T] \u2139 Executing undefined\n[R/T] \u2139 Starting step start\n[JOB] \u2139 Starting computer...\n[R/T] \u2714 Completed step start in 1ms\n[R/T] \u2139 Starting step calculate\n[JOB] \u2139 Calculating to life, the universe, and everything..\n[R/T] \u2714 Completed step calculate in 1ms\n[R/T] \u2139 Starting step result\n[R/T] \u2714 Completed step result in 0ms\n[CLI] \u2714 Result: 42\n'))),(0,r.yg)("p",null,"All other output is the CLI telling us what it is doing internally."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Check the version")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openfn -v\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Get help")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"openfn help\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"update-the-openfn-cli"},"Update the OpenFn CLI"),(0,r.yg)("p",null,"To install a new version straight on top of your current installation, run the\nfollowing command."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm install -g @openfn/cli\n")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"troubleshoot-installation"},"Troubleshoot Installation"),(0,r.yg)("p",null,"If you encounter installation issues, try uninstalling the current version first\nand then re-installing."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"npm uninstall -g @openfn/cli\nnpm install -g @openfn/cli\n")))}d.isMDXComponent=!0}}]);