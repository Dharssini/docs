"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[13755],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>h});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),y=o,h=u["".concat(l,".").concat(y)]||u[y]||d[y]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},63500:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(58168),o=(r(96540),r(15680));const i={title:"History & Search in OpenFn",sidebar_label:"History & Search"},a=void 0,s={unversionedId:"monitor-history/activity-history",id:"monitor-history/activity-history",title:"History & Search in OpenFn",description:"For platform administrators, History is your central console for monitoring",source:"@site/docs/monitor-history/activity-history.md",sourceDirName:"monitor-history",slug:"/monitor-history/activity-history",permalink:"/documentation/monitor-history/activity-history",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/monitor-history/activity-history.md",tags:[],version:"current",frontMatter:{title:"History & Search in OpenFn",sidebar_label:"History & Search"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/documentation/build/troubleshooting"},next:{title:"Inspect Runs",permalink:"/documentation/monitor-history/inspect-runs"}},l={},c=[{value:"History",id:"history",level:2},{value:"Workflow execution: Work Orders and Runs",id:"workflow-execution-work-orders-and-runs",level:2},{value:"How Search Works",id:"how-search-works",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.yg)(u,(0,n.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"For platform administrators, ",(0,o.yg)("inlineCode",{parentName:"p"},"History")," is your central console for monitoring\nall activity across your active Workflows. Read on to understand its key\ncomponents."),(0,o.yg)("h2",{id:"history"},"History"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"History")," page provides a list of all of the\n",(0,o.yg)("a",{parentName:"p",href:"/documentation/get-started/terminology#work-order"},"Work Orders")," and\n",(0,o.yg)("a",{parentName:"p",href:"/documentation/get-started/terminology#run"},"Runs")," that have been processed in a\nProject."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"History",src:r(79372).A,width:"2856",height:"1442"})),(0,o.yg)("h2",{id:"workflow-execution-work-orders-and-runs"},"Workflow execution: Work Orders and Runs"),(0,o.yg)("p",null,"OpenFn Workflows are executed as follows:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"A Workflow ",(0,o.yg)("inlineCode",{parentName:"li"},"Trigger")," is activated by a webhook event, cron timer, or manual\naction."),(0,o.yg)("li",{parentName:"ol"},"This creates a ",(0,o.yg)("inlineCode",{parentName:"li"},"Work Order"),"--a request to run a Workflow with a given input\n(e.g, a new form submission or patient record that needs to be processed).\nFor a Work Order to be cpmpleted, it should reach an ending Step succesfully\n(without errors) - this ensures that the processing of has been completed."),(0,o.yg)("li",{parentName:"ol"},"A ",(0,o.yg)("inlineCode",{parentName:"li"},"Run")," is then executed to try to complete the Workflow successfully. This\nRun will have a ",(0,o.yg)("a",{parentName:"li",href:"/documentation/monitor-history/status-codes"},"status code"),",\nindicating whether the Workflow Steps were successfully processed."),(0,o.yg)("li",{parentName:"ol"},"If the 1st ",(0,o.yg)("inlineCode",{parentName:"li"},"Run"),' fails, then you can rerun it to "retry" the workflow. A 2nd\n',(0,o.yg)("inlineCode",{parentName:"li"},"Run")," will be created. If successful, then both the Run and related Work\nOrder will be updated with a ",(0,o.yg)("inlineCode",{parentName:"li"},"success")," status.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"History Page",src:r(92162).A,width:"2300",height:"1133"})),(0,o.yg)("p",null,"Check out the other pages in this docs section to learn more about inspecting\nRuns, troubleshooting, and rerunning failed Runs."),(0,o.yg)("h2",{id:"how-search-works"},"How Search Works"),(0,o.yg)("p",null,"Via the searchbar on the history page you can find work orders whose ",(0,o.yg)("em",{parentName:"p"},"related"),"\ninput/output dataclips or run logs contain specific text strings. By default,\nthe system will search run logs only but you can select to search any or all of\nthree options:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Search Options",src:r(61708).A,width:"1010",height:"200"})),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"OpenFn UUIDs for workorders, runs, or steps"),(0,o.yg)("li",{parentName:"ol"},"Input/Output dataclip bodies"),(0,o.yg)("li",{parentName:"ol"},"Run logs")),(0,o.yg)("p",null,"If searching for text within an input/output dataclip or run logs, a ",(0,o.yg)("inlineCode",{parentName:"p"},"tsvector"),'\nsearch is applied. This method of searching allows you to find work orders\nquickly and allows for partial string matches across all text in the run logs\nand across the "keys" and "values" of your dataclips.'),(0,o.yg)("p",null,"Partial string mathcing working best at the start of words, so if you're looking\nfor items matching ",(0,o.yg)("inlineCode",{parentName:"p"},'"newPatient"')," it's better to search for ",(0,o.yg)("inlineCode",{parentName:"p"},'"newPat"')," than for\n",(0,o.yg)("inlineCode",{parentName:"p"},'"tient"'),". (When in doubt, whole words or IDs produce the best results.)"))}d.isMDXComponent=!0},79372:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/case-referral-history-10617e7207e08eb9739294ed3e534549.png"},92162:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/history-page-annotated-5da69a8394c966741655f5cc524e1279.png"},61708:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/search-options-7297a635f4821d282f3390efa74f9fca.png"}}]);