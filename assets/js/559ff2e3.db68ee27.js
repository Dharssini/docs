"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[89960],{95788:(e,r,t)=>{t.d(r,{Iu:()=>u,yg:()=>y});var o=t(11504);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),d=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=d(e.components);return o.createElement(s.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=n,y=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return t?o.createElement(y,a(a({ref:r},u),{},{components:t})):o.createElement(y,a({ref:r},u))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var d=2;d<i;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54144:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=t(45072),n=(t(11504),t(95788));const i={title:"Exit Codes & Errors"},a=void 0,l={unversionedId:"build-for-developers/errors",id:"build-for-developers/errors",title:"Exit Codes & Errors",description:"About errors",source:"@site/docs/build-for-developers/errors.md",sourceDirName:"build-for-developers",slug:"/build-for-developers/errors",permalink:"/documentation/next/build-for-developers/errors",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build-for-developers/errors.md",tags:[],version:"current",frontMatter:{title:"Exit Codes & Errors"}},s={},d=[{value:"About errors",id:"about-errors",level:2},{value:"Standard Exit Codes",id:"standard-exit-codes",level:2},{value:"0: Success",id:"0-success",level:3},{value:"1: Error",id:"1-error",level:3},{value:"2: Timeout",id:"2-timeout",level:3},{value:"10: Core Error",id:"10-core-error",level:3},{value:"134: Out of memory",id:"134-out-of-memory",level:3},{value:"Special Exit Codes (Platform)",id:"special-exit-codes-platform",level:2},{value:"3: Failed to start",id:"3-failed-to-start",level:3},{value:"4: The NodeVM is unresponsive",id:"4-the-nodevm-is-unresponsive",level:3},{value:"5: Elixir/ErlangVM Error",id:"5-elixirerlangvm-error",level:3},{value:"6: Aborted by project administrator",id:"6-aborted-by-project-administrator",level:3},{value:"11: Node.js Error",id:"11-nodejs-error",level:3},{value:"Limits",id:"limits",level:2},{value:"NodeVM memory limits",id:"nodevm-memory-limits",level:3},{value:"Job state limits",id:"job-state-limits",level:3}],u={toc:d},p="wrapper";function c(e){let{components:r,...t}=e;return(0,n.yg)(p,(0,o.c)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"about-errors"},"About errors"),(0,n.yg)("p",null,"Errors are your friends. The most important thing you can do when encountering\nan error in any step of a data integration project is to ",(0,n.yg)("em",{parentName:"p"},"read")," what's on the\nscreen. While this may sound obvious, it's very easy to see a big block of\ntechnical language and switch off."),(0,n.yg)("p",null,"Often, there are simple business reasons that a run is failing and they can be\nidentified from the error messages displayed in the logs by @openfn/core."),(0,n.yg)("h2",{id:"standard-exit-codes"},"Standard Exit Codes"),(0,n.yg)("h3",{id:"0-success"},"0: Success"),(0,n.yg)("p",null,"Exit code ",(0,n.yg)("inlineCode",{parentName:"p"},"0")," is a success (run succeeded, e.g. a destination system responded\nwith a ",(0,n.yg)("inlineCode",{parentName:"p"},"200"),")"),(0,n.yg)("h3",{id:"1-error"},"1: Error"),(0,n.yg)("p",null,"Exit code ",(0,n.yg)("inlineCode",{parentName:"p"},"1")," is a normally-handled error (run failed normally, e.g. a\ndestination system responded with a ",(0,n.yg)("inlineCode",{parentName:"p"},"4XX"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"5XX"),", or some specialized\n",(0,n.yg)("inlineCode",{parentName:"p"},"RequiredFieldMissing")," error.)"),(0,n.yg)("h3",{id:"2-timeout"},"2: Timeout"),(0,n.yg)("p",null,"Exit code ",(0,n.yg)("inlineCode",{parentName:"p"},"2")," means that your run timed out. It exceeded the timeout you set for\nyour job, or if you're using the hosted platform on a non-enterprise plan, it\nexceeded ",(0,n.yg)("inlineCode",{parentName:"p"},"100")," seconds."),(0,n.yg)("h3",{id:"10-core-error"},"10: Core Error"),(0,n.yg)("p",null,"Exit code ",(0,n.yg)("inlineCode",{parentName:"p"},"10")," means there was an error in ",(0,n.yg)("inlineCode",{parentName:"p"},"@openfn/core/cli.js execute"),". It's\npossible that you job can't be run how it's written, but that various validation\nchecks failed to warn you earlier."),(0,n.yg)("h3",{id:"134-out-of-memory"},"134: Out of memory"),(0,n.yg)("p",null,"This is a standard out of memory error from the NodeVM. See\n",(0,n.yg)("a",{parentName:"p",href:"#nodevm-limits"},"NodeVM memory limits")," below."),(0,n.yg)("h2",{id:"special-exit-codes-platform"},"Special Exit Codes (Platform)"),(0,n.yg)("p",null,"The OpenFn platform controls the execution of all of your jobs via the ErlangVM.\n(Learn about Erlang ",(0,n.yg)("a",{parentName:"p",href:"https://www.erlang.org/"},"here"),".) The following exit codes\nare applied at the level of this controlling VM, rather than down inside your\nrun's NodeVM."),(0,n.yg)("h3",{id:"3-failed-to-start"},"3: Failed to start"),(0,n.yg)("p",null,"Exit code ",(0,n.yg)("inlineCode",{parentName:"p"},"3")," means the run could not be started due to an Erlang error. This\ncould relate to network traffic, but very rare as an error which takes place\n",(0,n.yg)("em",{parentName:"p"},"before")," the run is started will be retried\u2014with an exponential backoff\u2014for a\nvery long time."),(0,n.yg)("h3",{id:"4-the-nodevm-is-unresponsive"},"4: The NodeVM is unresponsive"),(0,n.yg)("p",null,"Exit code ",(0,n.yg)("inlineCode",{parentName:"p"},"4")," means that the NodeVM running your job became unresponsive. It\nattempted to exit after the timeout but couldn't, so we shut down the process\nfrom the controlling ErlangVM."),(0,n.yg)("h3",{id:"5-elixirerlangvm-error"},"5: Elixir/ErlangVM Error"),(0,n.yg)("p",null,"Exit code ",(0,n.yg)("inlineCode",{parentName:"p"},"5")," means we encountered an unexpected error during the execution of\nyour job which could only be caught by the controlling ErlangVM. Errors like\nthis are very rare and trigger an internal audit by the OpenFN engineering team."),(0,n.yg)("h3",{id:"6-aborted-by-project-administrator"},"6: Aborted by project administrator"),(0,n.yg)("p",null,"Exit code ",(0,n.yg)("inlineCode",{parentName:"p"},"6")," means that a run created and queued for execution but then\nsubsequently aborted by request of an administrator or owner of that project."),(0,n.yg)("h3",{id:"11-nodejs-error"},"11: Node.js Error"),(0,n.yg)("p",null,"Exit code ",(0,n.yg)("inlineCode",{parentName:"p"},"11")," means that there was an error in the NodeVM execution but the\nexit code itself couldn't be captured by our application."),(0,n.yg)("h2",{id:"limits"},"Limits"),(0,n.yg)("p",null,"We've shifted this content to a dedicated ",(0,n.yg)("a",{parentName:"p",href:"/documentation/jobs/limits"},"limits"),"\npage."),(0,n.yg)("h3",{id:"nodevm-memory-limits"},(0,n.yg)("a",{parentName:"h3",href:"/documentation/jobs/limits#nodevm-memory-limits"},"NodeVM memory limits")),(0,n.yg)("h3",{id:"job-state-limits"},(0,n.yg)("a",{parentName:"h3",href:"/documentation/jobs/limits#job-state-limits"},"Job state limits")))}c.isMDXComponent=!0}}]);