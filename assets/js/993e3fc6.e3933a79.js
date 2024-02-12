"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[2540],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>g});var a=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},11644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(45072),i=(n(11504),n(95788));const r={title:"Initial and final state"},o=void 0,s={unversionedId:"build/steps/state",id:"build/steps/state",title:"Initial and final state",description:"Each Step has an initial state (which may contain an Input) and results in a",source:"@site/docs/build/steps/state.md",sourceDirName:"build/steps",slug:"/build/steps/state",permalink:"/documentation/next/build/steps/state",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build/steps/state.md",tags:[],version:"current",frontMatter:{title:"Initial and final state"},sidebar:"docs",previous:{title:"Chaining operations",permalink:"/documentation/next/build/steps/multiple-operations"},next:{title:"The each(...) operation",permalink:"/documentation/next/build/steps/each"}},l={},p=[{value:"Initial state",id:"initial-state",level:2},{value:"Final state",id:"final-state",level:2},{value:"Passing state to the next Step",id:"passing-state-to-the-next-step",level:3},{value:"Final state after an error",id:"final-state-after-an-error",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.yg)(d,(0,a.c)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Each Step has an initial state (which may contain an ",(0,i.yg)("inlineCode",{parentName:"p"},"Input"),") and results in a\nfinal state that will include ",(0,i.yg)("inlineCode",{parentName:"p"},"Logs")," and an ",(0,i.yg)("inlineCode",{parentName:"p"},"Output"),". This article explains\nthese concepts in greater detail."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Job State Overview",src:n(73744).c,width:"960",height:"540"})),(0,i.yg)("h2",{id:"initial-state"},"Initial state"),(0,i.yg)("p",null,"Depending on whether you're running Workflows locally or on the app, the initial\n",(0,i.yg)("inlineCode",{parentName:"p"},"state")," for an individual Run might be generated differently. It could be\ngenerated manually (e.g., by creating a custom ",(0,i.yg)("inlineCode",{parentName:"p"},"Input")," on the app or\n",(0,i.yg)("inlineCode",{parentName:"p"},"state.json")," file if working locally\n",(0,i.yg)("a",{parentName:"p",href:"/documentation/next/cli"},"in the CLI"),"), or automatically when a\nwebhook event is triggered as incoming data is received, or as a cron trigger is\nactivated at the scheduled time."),(0,i.yg)("h2",{id:"final-state"},"Final state"),(0,i.yg)("p",null,"The final state of a Run is determined by ",(0,i.yg)("em",{parentName:"p"},"you"),". Remember that job expressions\nare a series of ",(0,i.yg)("inlineCode",{parentName:"p"},"operations"),"\u2014they each take ",(0,i.yg)("inlineCode",{parentName:"p"},"state")," and return ",(0,i.yg)("inlineCode",{parentName:"p"},"state"),", after\ncreating any number of side effects. You control what is outputted to hand off\nto the next Step and/or what is sent to the destination app."),(0,i.yg)("h3",{id:"passing-state-to-the-next-step"},"Passing state to the next Step"),(0,i.yg)("p",null,"See the below diagram for a visual description of how state might be passed between\nSteps in a Workflow."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Passing State",src:n(15207).c,width:"960",height:"540"})),(0,i.yg)("h3",{id:"final-state-after-an-error"},"Final state after an error"),(0,i.yg)("p",null,"If a Run fails, it will ",(0,i.yg)("em",{parentName:"p"},"not")," produce a final state. The run itself will have\n",(0,i.yg)("inlineCode",{parentName:"p"},"log")," information attached to it, along with its exit code, but there's not\nnecessarily a clean final ",(0,i.yg)("inlineCode",{parentName:"p"},"state")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"Output")," which can be serialized to ",(0,i.yg)("inlineCode",{parentName:"p"},"JSON"),"."),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"If you have configured a Step that runs ",(0,i.yg)("inlineCode",{parentName:"p"},"on failure")," of the prior Step, note\nthat its initial state will be the initial state of the previous (failed) Run,\nplus a new ",(0,i.yg)("inlineCode",{parentName:"p"},"error")," key that contains the stringified logs from the previous Run.")))}u.isMDXComponent=!0},15207:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/passing-state-steps-17bc7cfe23cd67dd8cf13db396f77c9b.png"},73744:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/state-javascript-3f1f25457b3d41d55ff5192953265f65.png"}}]);