"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[49736],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>y});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(45072),a=(n(11504),n(95788));const o={title:"Limits"},i=void 0,l={unversionedId:"build/limits",id:"build/limits",title:"Limits",description:"OpenFn has a number of configurable limits that help ensure smooth operation.",source:"@site/docs/build/limits.md",sourceDirName:"build",slug:"/build/limits",permalink:"/documentation/next/build/limits",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build/limits.md",tags:[],version:"current",frontMatter:{title:"Limits"},sidebar:"docs",previous:{title:"Workflow Tutorial",permalink:"/documentation/next/build/tutorial"},next:{title:"Configure Steps",permalink:"/documentation/next/build/steps/"}},s={},p=[{value:"Workflow execution duration (1 hour)",id:"workflow-execution-duration-1-hour",level:2},{value:"Memory Usage (500 MB)",id:"memory-usage-500-mb",level:2},{value:"Dataclip Size (10MB)",id:"dataclip-size-10mb",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"OpenFn has a number of configurable limits that help ensure smooth operation.\nThis page details what those limits are and how they can be adjusted."),(0,a.yg)("admonition",{title:"Increasing limits",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Contact ",(0,a.yg)("a",{parentName:"p",href:"mailto:enterprise@openfn.org"},"enterprise@openfn.org")," to increase limits on standard plans, configure\ncustom limits on dedicated deployments, or get help adjusting limits on your\nlocally deployment instance.")),(0,a.yg)("h2",{id:"workflow-execution-duration-1-hour"},"Workflow execution duration (1 hour)"),(0,a.yg)("p",null,"Each workflow attempt needs to complete in less than ",(0,a.yg)("inlineCode",{parentName:"p"},"1 hour"),". You can view the\nduration of each attempt by clicking on the attempt ID. If an attempt exceeds\nthis limit, it will be killed by the worker and you'll see a ",(0,a.yg)("inlineCode",{parentName:"p"},"Killed:Timeout"),"\nbadge as your attempt state."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("em",{parentName:"p"},"Instance superusers can control this limit the ",(0,a.yg)("inlineCode",{parentName:"em"},"MAX_RUN_DURATION")," environment\nvariable."))),(0,a.yg)("h2",{id:"memory-usage-500-mb"},"Memory Usage (500 MB)"),(0,a.yg)("p",null,"Each workflow attempt may not use more than ",(0,a.yg)("inlineCode",{parentName:"p"},"500 MB")," of memory. You can view the\nmaximum memory usage of each attempt by clicking on the attempt ID. If an\nattempt exceeds this limit, it will be killed by the worker and you'll see a\n",(0,a.yg)("inlineCode",{parentName:"p"},"Killed:OOM")," badge as your attempt state."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("em",{parentName:"p"},"Instance superusers can control this limit via the ",(0,a.yg)("inlineCode",{parentName:"em"},"MAX_RUN_MEMORY"),"\nenvironment variable."))),(0,a.yg)("h2",{id:"dataclip-size-10mb"},"Dataclip Size (10MB)"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Each ",(0,a.yg)("strong",{parentName:"li"},"webhook request")," to a trigger URL cannot exceed ",(0,a.yg)("inlineCode",{parentName:"li"},"10MB"),"."),(0,a.yg)("li",{parentName:"ol"},"If you are persisting the final state of each ",(0,a.yg)("strong",{parentName:"li"},"run")," as a dataclip, each\ndataclip may not exceed ",(0,a.yg)("inlineCode",{parentName:"li"},"10MB"),".")),(0,a.yg)("p",null,"If you send a payload to a webhook trigger URL which breaches this limit, the\nserver will respond with a ",(0,a.yg)("inlineCode",{parentName:"p"},"413")," error with a ",(0,a.yg)("inlineCode",{parentName:"p"},":request_entity_too_large"),"\nmessage."),(0,a.yg)("p",null,"If the dataclips produced by the final state of runs and attempts are too large,\nthey will not be persisted. The worker will still process downstream steps but\nthese steps will not be retryable because Lightning won't save a copy of the\ndataclips. You will see an ",(0,a.yg)("inlineCode",{parentName:"p"},"ERROR: DataClip too large for storage")," error in your\nattempt logs."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("em",{parentName:"p"},"Instance superusers can control this limit via the ",(0,a.yg)("inlineCode",{parentName:"em"},"MAX_DATACLIP_SIZE"),"\nenvironment variable."))))}m.isMDXComponent=!0}}]);