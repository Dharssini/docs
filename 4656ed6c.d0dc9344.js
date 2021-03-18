(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{126:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(7),i=(r(0),r(258)),a={title:"Exit Codes & Errors"},s={unversionedId:"jobs/errors",id:"jobs/errors",isDocsHomePage:!1,title:"Exit Codes & Errors",description:"About errors",source:"@site/docs/jobs/errors.md",slug:"/jobs/errors",permalink:"/documentation/jobs/errors",editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/errors.md",version:"current",sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/documentation/trouble-shooting"},next:{title:"Release Notes",permalink:"/documentation/release-notes"}},l=[{value:"About errors",id:"about-errors",children:[]},{value:"Standard Exit Codes",id:"standard-exit-codes",children:[{value:"0: Success",id:"0-success",children:[]},{value:"1: Error",id:"1-error",children:[]},{value:"2: Timeout",id:"2-timeout",children:[]},{value:"10: Core Error",id:"10-core-error",children:[]},{value:"134: Out of memory",id:"134-out-of-memory",children:[]}]},{value:"Special Exit Codes (Platform)",id:"special-exit-codes-platform",children:[{value:"3: Failed to start",id:"3-failed-to-start",children:[]},{value:"4: The NodeVM is unresponsive",id:"4-the-nodevm-is-unresponsive",children:[]},{value:"5: Elixir/ErlangVM Error",id:"5-elixirerlangvm-error",children:[]},{value:"11: Node.js Error",id:"11-nodejs-error",children:[]}]},{value:"Memory Limits",id:"memory-limits",children:[{value:"NodeVM limits",id:"nodevm-limits",children:[]},{value:"Job state limits",id:"job-state-limits",children:[]}]}],c={toc:l};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"about-errors"},"About errors"),Object(i.b)("p",null,"Errors are your friends. The most important thing you can do when encountering\nan error in any step of a data integration project is to ",Object(i.b)("em",{parentName:"p"},"read")," what's on the\nscreen. While this may sound obvious, it's very easy to see a big block of\ntechnical language and switch off."),Object(i.b)("p",null,"Often, there are simple business reasons that\na run is failing and they can be identified from the error messages displayed in\nthe logs by @openfn/core."),Object(i.b)("h2",{id:"standard-exit-codes"},"Standard Exit Codes"),Object(i.b)("h3",{id:"0-success"},"0: Success"),Object(i.b)("p",null,"Exit code ",Object(i.b)("inlineCode",{parentName:"p"},"0")," is a success (run succeeded, e.g. a destination system responded\nwith a ",Object(i.b)("inlineCode",{parentName:"p"},"200"),")"),Object(i.b)("h3",{id:"1-error"},"1: Error"),Object(i.b)("p",null,"Exit code ",Object(i.b)("inlineCode",{parentName:"p"},"1")," is a normally-handled error (run failed normally, e.g. a\ndestination system responded with a ",Object(i.b)("inlineCode",{parentName:"p"},"4XX"),", ",Object(i.b)("inlineCode",{parentName:"p"},"5XX"),", or some specialized\n",Object(i.b)("inlineCode",{parentName:"p"},"RequiredFieldMissing")," error.)"),Object(i.b)("h3",{id:"2-timeout"},"2: Timeout"),Object(i.b)("p",null,"Exit code ",Object(i.b)("inlineCode",{parentName:"p"},"2")," means that your run timed out. It exceeded the timeout you set for\nyour job, or if you're using the hosted platform on a non-enterprise plan, it\nexceeded ",Object(i.b)("inlineCode",{parentName:"p"},"100")," seconds."),Object(i.b)("h3",{id:"10-core-error"},"10: Core Error"),Object(i.b)("p",null,"Exit code ",Object(i.b)("inlineCode",{parentName:"p"},"10")," means there was an error in ",Object(i.b)("inlineCode",{parentName:"p"},"@openfn/core/cli.js execute"),". It's\npossible that you job can't be run how it's written, but that various validation\nchecks failed to warn you earlier."),Object(i.b)("h3",{id:"134-out-of-memory"},"134: Out of memory"),Object(i.b)("p",null,"This is a standard out of memory error from the NodeVM. See\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#nodevm-limits"}),"NodeVM memory limits")," below."),Object(i.b)("h2",{id:"special-exit-codes-platform"},"Special Exit Codes (Platform)"),Object(i.b)("p",null,"The OpenFn platform controls the execution of all of your jobs via the ErlangVM.\n(Learn about Erlang ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.erlang.org/"}),"here"),".) The following exit codes\nare applied at the level of this controlling VM, rather than down inside your\nrun's NodeVM."),Object(i.b)("h3",{id:"3-failed-to-start"},"3: Failed to start"),Object(i.b)("p",null,"Exit code ",Object(i.b)("inlineCode",{parentName:"p"},"3")," means the run could not be started due to an Erlang error. This\ncould relate to network traffic, but very rare as an error which takes place\n",Object(i.b)("em",{parentName:"p"},"before")," the run is started will be retried\u2014with an exponential backoff\u2014for a\nvery long time."),Object(i.b)("h3",{id:"4-the-nodevm-is-unresponsive"},"4: The NodeVM is unresponsive"),Object(i.b)("p",null,"Exit code ",Object(i.b)("inlineCode",{parentName:"p"},"4")," means that the NodeVM running your job became unresponsive. It\nattempted to exit after the timeout but couldn't, so we shut down the process\nfrom the controlling ErlangVM."),Object(i.b)("h3",{id:"5-elixirerlangvm-error"},"5: Elixir/ErlangVM Error"),Object(i.b)("p",null,"Exit code ",Object(i.b)("inlineCode",{parentName:"p"},"5")," means we encountered an unexpected error during the execution of\nyour job which could only be caught by the controlling ErlangVM. Errors like\nthis are very rare and trigger an internal audit by the OpenFN engineering team."),Object(i.b)("h3",{id:"11-nodejs-error"},"11: Node.js Error"),Object(i.b)("p",null,"Exit code ",Object(i.b)("inlineCode",{parentName:"p"},"11")," means that there was an error in the NodeVM execution but the\nexit code itself couldn't be captured by our application."),Object(i.b)("h2",{id:"memory-limits"},"Memory Limits"),Object(i.b)("h3",{id:"nodevm-limits"},"NodeVM limits"),Object(i.b)("p",null,"The default memory limit for a Node process is ",Object(i.b)("inlineCode",{parentName:"p"},"512MB")," and unless you've\ncustomized it for use on core or have agreed to a high-memory plan on\nOpenFn.org, job runs will be killed by Node (",Object(i.b)("inlineCode",{parentName:"p"},"JavaScript heap out of memory"),")\nwhen they reach that threshold."),Object(i.b)("h4",{id:"increase-memory-limit-for-an-individual-execution"},"Increase memory limit for an individual execution"),Object(i.b)("p",null,"For a ",Object(i.b)("inlineCode",{parentName:"p"},"1GB")," limit for an individual job, use:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"node --max-old-space-size=1024 core execute ...arguments\n")),Object(i.b)("h4",{id:"increase-memory-limit-for-all-jobs-on-that-machine"},"Increase memory limit for all jobs on that machine"),Object(i.b)("p",null,"For a ",Object(i.b)("inlineCode",{parentName:"p"},"4GB")," limit for all jobs, set an environment variable with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"export NODE_OPTIONS=--max_old_space_size=4096\n")),Object(i.b)("h3",{id:"job-state-limits"},"Job state limits"),Object(i.b)("p",null,'While not strictly a memory limit, as state is saved to cloud storage/disk,\nthere is also a 10MB limit to the size of a job\'s "final state".'),Object(i.b)("p",null,"If you're dealing with large amounts of data you've got to (a) keep your total\nmemory use below 512MB during execution and (b) clean up state so that whatever\nyou're passing to the next job, whether via FLOW or via saved state for a CRON\njob, remains below 10MB."),Object(i.b)("p",null,"Sometimes, this necessitates streaming data from A -> B in the same job. Other\ntimes it will necessitate storing data as local variables and then posting data\nto your inbox in chunks before cleaning up state."))}d.isMDXComponent=!0},258:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return p}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(r),m=n,p=b["".concat(a,".").concat(m)]||b[m]||u[m]||i;return r?o.a.createElement(p,s(s({ref:t},c),{},{components:r})):o.a.createElement(p,s({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);