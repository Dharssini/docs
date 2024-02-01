"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[32960],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>y});var o=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?o.createElement(y,a(a({ref:t},p),{},{components:n})):o.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(45072),r=(n(11504),n(95788));const i={title:"Using multiple operations"},a=void 0,l={unversionedId:"build-for-developers/multiple-operations",id:"build-for-developers/multiple-operations",title:"Using multiple operations",description:"You can do many things in sequence with OpenFn, whether using core,",source:"@site/docs/build-for-developers/multiple-operations.md",sourceDirName:"build-for-developers",slug:"/build-for-developers/multiple-operations",permalink:"/documentation/next/build-for-developers/multiple-operations",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build-for-developers/multiple-operations.md",tags:[],version:"current",frontMatter:{title:"Using multiple operations"}},s={},u=[{value:"Flow jobs vs multiple operations in a single job vs posting back to the inbox",id:"flow-jobs-vs-multiple-operations-in-a-single-job-vs-posting-back-to-the-inbox",level:2},{value:"Reasons to use flow jobs",id:"reasons-to-use-flow-jobs",level:3},{value:"Reasons to use multiple operations in a single job",id:"reasons-to-use-multiple-operations-in-a-single-job",level:3},{value:"Reasons to post back to the inbox",id:"reasons-to-post-back-to-the-inbox",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,o.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"You can do many things in sequence with OpenFn, whether using ",(0,r.yg)("inlineCode",{parentName:"p"},"core"),",\n",(0,r.yg)("inlineCode",{parentName:"p"},"microservice"),", or ",(0,r.yg)("inlineCode",{parentName:"p"},"platform"),"."),(0,r.yg)("h2",{id:"flow-jobs-vs-multiple-operations-in-a-single-job-vs-posting-back-to-the-inbox"},"Flow jobs vs multiple operations in a single job vs posting back to the inbox"),(0,r.yg)("h3",{id:"reasons-to-use-flow-jobs"},"Reasons to use flow jobs"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Each operation needs to use functions that are ",(0,r.yg)("em",{parentName:"li"},"only")," available in different\nadaptors."),(0,r.yg)("li",{parentName:"ul"},"You ",(0,r.yg)("em",{parentName:"li"},"must")," have different credentials for each operation"),(0,r.yg)("li",{parentName:"ul"},"You want to see success and failure at the level of each operation"),(0,r.yg)("li",{parentName:"ul"},"Each individual run takes a long time and you're worried about your NodeVM\nbeing timed out. (On ",(0,r.yg)("inlineCode",{parentName:"li"},"platform"),", this happens after 100s for non-enterprise\nusers; on ",(0,r.yg)("inlineCode",{parentName:"li"},"microservice")," you've likely configured your own timeout duration.)")),(0,r.yg)("h3",{id:"reasons-to-use-multiple-operations-in-a-single-job"},"Reasons to use multiple operations in a single job"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The job must be atomic, you want the whole thing to count as a failure if any\npart of it fails."),(0,r.yg)("li",{parentName:"ul"},"You run jobs manually and you want a single button to click to retry the\nentire sequence of operations."),(0,r.yg)("li",{parentName:"ul"},"You update a ",(0,r.yg)("inlineCode",{parentName:"li"},"cursor")," in a series of operations that involve ",(0,r.yg)("inlineCode",{parentName:"li"},"GET")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"POST"),".\nWhen the ",(0,r.yg)("inlineCode",{parentName:"li"},"POST")," fails, you don't want to update the ",(0,r.yg)("inlineCode",{parentName:"li"},"cursor")," for the\nsubsequent job run which contains the ",(0,r.yg)("inlineCode",{parentName:"li"},"GET"),"."),(0,r.yg)("li",{parentName:"ul"},"Your operations don't take too long (<100s in total for ",(0,r.yg)("inlineCode",{parentName:"li"},"platform"),") and you\nwant to reduce the number of executions.")),(0,r.yg)("h3",{id:"reasons-to-post-back-to-the-inbox"},"Reasons to post back to the inbox"),(0,r.yg)("p",null,"You might decide to send data from a ",(0,r.yg)("inlineCode",{parentName:"p"},"GET")," back to your inbox and let another\njob be triggered by a message filter."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"get('somePath', { query: { after: '2020-10-12' } }, post('my-inbox-uuid'));\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"You'd like to store the result of the first operation for later use or\ninspection and not have to retry that operation in order to reproduce the\ndata."),(0,r.yg)("li",{parentName:"ul"},"You don't care about small delays between the first and second job being run.")))}d.isMDXComponent=!0}}]);