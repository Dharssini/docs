"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[9881],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9517:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),a=["components"],l={title:"Using multiple operations"},s=void 0,u={unversionedId:"jobs/multiple-operations",id:"jobs/multiple-operations",title:"Using multiple operations",description:"You can do many things in sequence with OpenFn, whether using core,",source:"@site/docs/jobs/multiple-operations.md",sourceDirName:"jobs",slug:"/jobs/multiple-operations",permalink:"/documentation/jobs/multiple-operations",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/multiple-operations.md",tags:[],version:"current",frontMatter:{title:"Using multiple operations"},sidebar:"docs",previous:{title:"What's an operation?",permalink:"/documentation/jobs/operations"},next:{title:"Initial and final state for runs",permalink:"/documentation/jobs/state"}},p={},c=[{value:"Flow jobs vs multiple operations in a single job vs posting back to the inbox",id:"flow-jobs-vs-multiple-operations-in-a-single-job-vs-posting-back-to-the-inbox",level:2},{value:"Reasons to use flow jobs",id:"reasons-to-use-flow-jobs",level:3},{value:"Reasons to use multiple operations in a single job",id:"reasons-to-use-multiple-operations-in-a-single-job",level:3},{value:"Reasons to post back to the inbox",id:"reasons-to-post-back-to-the-inbox",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can do many things in sequence with OpenFn, whether using ",(0,i.kt)("inlineCode",{parentName:"p"},"core"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"microservice"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"platform"),"."),(0,i.kt)("h2",{id:"flow-jobs-vs-multiple-operations-in-a-single-job-vs-posting-back-to-the-inbox"},"Flow jobs vs multiple operations in a single job vs posting back to the inbox"),(0,i.kt)("h3",{id:"reasons-to-use-flow-jobs"},"Reasons to use flow jobs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each operation needs to use functions that are ",(0,i.kt)("em",{parentName:"li"},"only")," available in different\nadaptors."),(0,i.kt)("li",{parentName:"ul"},"You ",(0,i.kt)("em",{parentName:"li"},"must")," have different credentials for each operation"),(0,i.kt)("li",{parentName:"ul"},"You want to see success and failure at the level of each operation"),(0,i.kt)("li",{parentName:"ul"},"Each individual run takes a long time and you're worried about your NodeVM\nbeing timed out. (On ",(0,i.kt)("inlineCode",{parentName:"li"},"platform"),", this happens after 100s for non-enterprise\nusers; on ",(0,i.kt)("inlineCode",{parentName:"li"},"microservice")," you've likely configured your own timeout duration.)")),(0,i.kt)("h3",{id:"reasons-to-use-multiple-operations-in-a-single-job"},"Reasons to use multiple operations in a single job"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The job must be atomic, you want the whole thing to count as a failure if any\npart of it fails."),(0,i.kt)("li",{parentName:"ul"},"You run jobs manually and you want a single button to click to retry the\nentire sequence of operations."),(0,i.kt)("li",{parentName:"ul"},"You update a ",(0,i.kt)("inlineCode",{parentName:"li"},"cursor")," in a series of operations that involve ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"POST"),".\nWhen the ",(0,i.kt)("inlineCode",{parentName:"li"},"POST")," fails, you don't want to update the ",(0,i.kt)("inlineCode",{parentName:"li"},"cursor")," for the\nsubsequent job run which contains the ",(0,i.kt)("inlineCode",{parentName:"li"},"GET"),"."),(0,i.kt)("li",{parentName:"ul"},"Your operations don't take too long (<100s in total for ",(0,i.kt)("inlineCode",{parentName:"li"},"platform"),") and you\nwant to reduce the number of executions.")),(0,i.kt)("h3",{id:"reasons-to-post-back-to-the-inbox"},"Reasons to post back to the inbox"),(0,i.kt)("p",null,"You might decide to send data from a ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," back to your inbox and let another\njob be triggered by a message filter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"get('somePath', { query: { after: '2020-10-12' } }, post('my-inbox-uuid'));\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You'd like to store the result of the first operation for later use or\ninspection and not have to retry that operation in order to reproduce the\ndata."),(0,i.kt)("li",{parentName:"ul"},"You don't care about small delays between the first and second job being run.")))}d.isMDXComponent=!0}}]);