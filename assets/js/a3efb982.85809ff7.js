"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[42368],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>m});var n=r(11504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,m=p["".concat(l,".").concat(d)]||p[d]||y[d]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98756:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(45072),o=(r(11504),r(95788));const i={title:"History tracking in OpenFn",sidebar_label:"History"},a=void 0,s={unversionedId:"monitor-history/activity-history",id:"monitor-history/activity-history",title:"History tracking in OpenFn",description:"For platform administrators, History is your central console for monitoring",source:"@site/docs/monitor-history/activity-history.md",sourceDirName:"monitor-history",slug:"/monitor-history/activity-history",permalink:"/documentation/next/monitor-history/activity-history",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/monitor-history/activity-history.md",tags:[],version:"current",frontMatter:{title:"History tracking in OpenFn",sidebar_label:"History"},sidebar:"docs",previous:{title:"Portability",permalink:"/documentation/next/deploy/portability"},next:{title:"Inspect Runs",permalink:"/documentation/next/monitor-history/inspect-runs"}},l={},c=[{value:"History",id:"history",level:2},{value:"Workflow execution: Work Orders and Runs",id:"workflow-execution-work-orders-and-runs",level:2}],u={toc:c},p="wrapper";function y(e){let{components:t,...i}=e;return(0,o.yg)(p,(0,n.c)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"For platform administrators, ",(0,o.yg)("inlineCode",{parentName:"p"},"History")," is your central console for monitoring\nall activity across your active Workflows. Read on to understand its key\ncomponents."),(0,o.yg)("h2",{id:"history"},"History"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"History")," page provides a list of all of the\n",(0,o.yg)("a",{parentName:"p",href:"/documentation/next/get-started/terminology#work-order"},"Work Orders")," and\n",(0,o.yg)("a",{parentName:"p",href:"/documentation/next/get-started/terminology#run"},"Runs")," that have been processed\nin a Project."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"History",src:r(59472).c,width:"2856",height:"1442"})),(0,o.yg)("h2",{id:"workflow-execution-work-orders-and-runs"},"Workflow execution: Work Orders and Runs"),(0,o.yg)("p",null,"OpenFn Workflows are executed as follows:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"A Workflow ",(0,o.yg)("inlineCode",{parentName:"li"},"Trigger")," is activated by a webhook event, cron timer, or manual\naction."),(0,o.yg)("li",{parentName:"ol"},"This creates a ",(0,o.yg)("inlineCode",{parentName:"li"},"Work Order"),"--a request to run a Workflow with a given input\n(e.g, a new form submission or patient record that needs to be processed).\nFor a Work Order to be cpmpleted, it should reach an ending Step succesfully\n(without errors) - this ensures that the processing of has been completed."),(0,o.yg)("li",{parentName:"ol"},"A ",(0,o.yg)("inlineCode",{parentName:"li"},"Run")," is then executed to try to complete the Workflow successfully. This\nRun will have a\n",(0,o.yg)("a",{parentName:"li",href:"/documentation/next/monitor-history/status-codes"},"status code"),", indicating\nwhether the Workflow Steps were successfully processed."),(0,o.yg)("li",{parentName:"ol"},"If the 1st ",(0,o.yg)("inlineCode",{parentName:"li"},"Run"),' fails, then you can rerun it to "retry" the workflow. A 2nd\n',(0,o.yg)("inlineCode",{parentName:"li"},"Run")," will be created. If successful, then both the Run and related Work\nOrder will be updated with a ",(0,o.yg)("inlineCode",{parentName:"li"},"success")," status.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"History Page",src:r(58972).c,width:"2300",height:"1133"})),(0,o.yg)("p",null,"Check out the other pages in this docs section to learn more about inspecting\nRuns, troubleshooting, and rerunning failed Runs."))}y.isMDXComponent=!0},59472:(e,t,r)=>{r.d(t,{c:()=>n});const n=r.p+"assets/images/case-referral-history-10617e7207e08eb9739294ed3e534549.png"},58972:(e,t,r)=>{r.d(t,{c:()=>n});const n=r.p+"assets/images/history-page-annotated-5da69a8394c966741655f5cc524e1279.png"}}]);