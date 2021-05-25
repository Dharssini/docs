(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[5935],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},74619:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),a={title:"Exit Codes & Errors"},s={unversionedId:"jobs/errors",id:"jobs/errors",isDocsHomePage:!1,title:"Exit Codes & Errors",description:"About errors",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/jobs/errors.md",sourceDirName:"jobs",slug:"/jobs/errors",permalink:"/fr/documentation/jobs/errors",editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/errors.md",version:"current",frontMatter:{title:"Exit Codes & Errors"},sidebar:"docs",previous:{title:"D\xe9pannage",permalink:"/fr/documentation/trouble-shooting"},next:{title:"Limits",permalink:"/fr/documentation/jobs/limits"}},l=[{value:"About errors",id:"about-errors",children:[]},{value:"Standard Exit Codes",id:"standard-exit-codes",children:[{value:"0: Success",id:"0-success",children:[]},{value:"1: Error",id:"1-error",children:[]},{value:"2: Timeout",id:"2-timeout",children:[]},{value:"10: Core Error",id:"10-core-error",children:[]},{value:"134: Out of memory",id:"134-out-of-memory",children:[]}]},{value:"Special Exit Codes (Platform)",id:"special-exit-codes-platform",children:[{value:"3: Failed to start",id:"3-failed-to-start",children:[]},{value:"4: The NodeVM is unresponsive",id:"4-the-nodevm-is-unresponsive",children:[]},{value:"5: Elixir/ErlangVM Error",id:"5-elixirerlangvm-error",children:[]},{value:"11: Node.js Error",id:"11-nodejs-error",children:[]}]},{value:"Limits",id:"limits",children:[{value:"NodeVM memory limits",id:"nodevm-memory-limits",children:[]},{value:"Job state limits",id:"job-state-limits",children:[]}]}],d={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"about-errors"},"About errors"),(0,i.kt)("p",null,"Errors are your friends. The most important thing you can do when encountering an error in any step of a data integration project is to ",(0,i.kt)("em",{parentName:"p"},"read")," what's on the screen. While this may sound obvious, it's very easy to see a big block of technical language and switch off."),(0,i.kt)("p",null,"Often, there are simple business reasons that a run is failing and they can be identified from the error messages displayed in the logs by @openfn/core."),(0,i.kt)("h2",{id:"standard-exit-codes"},"Standard Exit Codes"),(0,i.kt)("h3",{id:"0-success"},"0: Success"),(0,i.kt)("p",null,"Exit code ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," is a success (run succeeded, e.g. a destination system responded with a ",(0,i.kt)("inlineCode",{parentName:"p"},"200"),")"),(0,i.kt)("h3",{id:"1-error"},"1: Error"),(0,i.kt)("p",null,"Exit code ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," is a normally-handled error (run failed normally, e.g. a destination system responded with a ",(0,i.kt)("inlineCode",{parentName:"p"},"4XX"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"5XX"),", or some specialized ",(0,i.kt)("inlineCode",{parentName:"p"},"RequiredFieldMissing")," error.)"),(0,i.kt)("h3",{id:"2-timeout"},"2: Timeout"),(0,i.kt)("p",null,"Exit code ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," means that your run timed out. It exceeded the timeout you set for your job, or if you're using the hosted platform on a non-enterprise plan, it exceeded ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," seconds."),(0,i.kt)("h3",{id:"10-core-error"},"10: Core Error"),(0,i.kt)("p",null,"Exit code ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," means there was an error in ",(0,i.kt)("inlineCode",{parentName:"p"},"@openfn/core/cli.js execute"),". It's possible that you job can't be run how it's written, but that various validation checks failed to warn you earlier."),(0,i.kt)("h3",{id:"134-out-of-memory"},"134: Out of memory"),(0,i.kt)("p",null,"This is a standard out of memory error from the NodeVM. See ",(0,i.kt)("a",{parentName:"p",href:"#nodevm-limits"},"NodeVM memory limits")," below."),(0,i.kt)("h2",{id:"special-exit-codes-platform"},"Special Exit Codes (Platform)"),(0,i.kt)("p",null,"The OpenFn platform controls the execution of all of your jobs via the ErlangVM. (Learn about Erlang ",(0,i.kt)("a",{parentName:"p",href:"https://www.erlang.org/"},"here"),".) The following exit codes are applied at the level of this controlling VM, rather than down inside your run's NodeVM."),(0,i.kt)("h3",{id:"3-failed-to-start"},"3: Failed to start"),(0,i.kt)("p",null,"Exit code ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," means the run could not be started due to an Erlang error. This could relate to network traffic, but very rare as an error which takes place ",(0,i.kt)("em",{parentName:"p"},"before")," the run is started will be retried\u2014with an exponential backoff\u2014for a very long time."),(0,i.kt)("h3",{id:"4-the-nodevm-is-unresponsive"},"4: The NodeVM is unresponsive"),(0,i.kt)("p",null,"Exit code ",(0,i.kt)("inlineCode",{parentName:"p"},"4")," means that the NodeVM running your job became unresponsive. It attempted to exit after the timeout but couldn't, so we shut down the process from the controlling ErlangVM."),(0,i.kt)("h3",{id:"5-elixirerlangvm-error"},"5: Elixir/ErlangVM Error"),(0,i.kt)("p",null,"Exit code ",(0,i.kt)("inlineCode",{parentName:"p"},"5")," means we encountered an unexpected error during the execution of your job which could only be caught by the controlling ErlangVM. Errors like this are very rare and trigger an internal audit by the OpenFN engineering team."),(0,i.kt)("h3",{id:"11-nodejs-error"},"11: Node.js Error"),(0,i.kt)("p",null,"Exit code ",(0,i.kt)("inlineCode",{parentName:"p"},"11")," means that there was an error in the NodeVM execution but the exit code itself couldn't be captured by our application."),(0,i.kt)("h2",{id:"limits"},"Limits"),(0,i.kt)("p",null,"We've shifted this content to a dedicated ",(0,i.kt)("a",{parentName:"p",href:"/documentation/jobs/limits"},"limits")," page."),(0,i.kt)("h3",{id:"nodevm-memory-limits"},(0,i.kt)("a",{parentName:"h3",href:"/documentation/jobs/limits#nodevm-memory-limits"},"NodeVM memory limits")),(0,i.kt)("h3",{id:"job-state-limits"},(0,i.kt)("a",{parentName:"h3",href:"/documentation/jobs/limits#job-state-limits"},"Job state limits")))}u.isMDXComponent=!0}}]);