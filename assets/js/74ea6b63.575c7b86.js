"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[62024],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>m});var o=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},y=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),y=r,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||a;return t?o.createElement(m,i(i({ref:n},c),{},{components:t})):o.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},21048:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=t(45072),r=(t(11504),t(95788));const a={title:"The Inbox",sidebar_label:"Your Inbox"},i=void 0,s={unversionedId:"build/inbox",id:"version-legacy/build/inbox",title:"The Inbox",description:"How it works",source:"@site/versioned_docs/version-legacy/build/inbox.md",sourceDirName:"build",slug:"/build/inbox",permalink:"/documentation/legacy/build/inbox",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/versioned_docs/version-legacy/build/inbox.md",tags:[],version:"legacy",frontMatter:{title:"The Inbox",sidebar_label:"Your Inbox"},sidebar:"docs",previous:{title:"Credentials",permalink:"/documentation/legacy/build/credentials"},next:{title:"Generic Sources",permalink:"/documentation/legacy/source-apps"}},l={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"<code>202/Accepted vs 201/Created</code>",id:"202accepted-vs-201created",level:2},{value:"Synchronous vs. Asynchronous Processing",id:"synchronous-vs-asynchronous-processing",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,o.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"how-it-works"},"How it works"),(0,r.yg)("p",null,"On the platform, each project has their own unique inbox URL, something like\n",(0,r.yg)("inlineCode",{parentName:"p"},"https://www.openfn.org/inbox/54804f1a-4a70-4392-97cb-1f350e98e9c8"),". That big\nstring of numbers and letters is called a ",(0,r.yg)("inlineCode",{parentName:"p"},"UUID"),'. It\'s your address, and the\n"place" on the web that you\'ll send data for processing by OpenFn if you\'re\ndoing real-time or "event-based" integration.'),(0,r.yg)("p",null,"Your project will always be listening, and whenever an HTTP request is received\nat that URL, we'll respond with a ",(0,r.yg)("inlineCode",{parentName:"p"},"202/Accepted")," and start processing the data\nsent either in the ",(0,r.yg)("inlineCode",{parentName:"p"},"body")," or the ",(0,r.yg)("inlineCode",{parentName:"p"},"parameters")," of that request."),(0,r.yg)("h2",{id:"202accepted-vs-201created"},(0,r.yg)("inlineCode",{parentName:"h2"},"202/Accepted vs 201/Created")),(0,r.yg)("p",null,"You've probably heard of ",(0,r.yg)("inlineCode",{parentName:"p"},"200/OK"),' or other common "status codes", but the\ndifference between a ',(0,r.yg)("inlineCode",{parentName:"p"},"201")," and a ",(0,r.yg)("inlineCode",{parentName:"p"},"202")," is very interesting from an integration\nperspective."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"201/Created")," means that we've completed processing whatever data was sent\nto us by the requester. Usually, this response is accompanied by a payload with\na new ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," for whatever resource what created. This is ",(0,r.yg)("em",{parentName:"p"},"not")," what OpenFn does,\ninstead we send a ",(0,r.yg)("inlineCode",{parentName:"p"},"202/Accepted")," indicating that your request was acceptable and\nwe'll get to work."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"OpenFn sends a ",(0,r.yg)("inlineCode",{parentName:"p"},"202/Accepted")," indicating that your request has passed our\ninitial validation (i.e. the data is valid ",(0,r.yg)("inlineCode",{parentName:"p"},"JSON")," or parseable ",(0,r.yg)("inlineCode",{parentName:"p"},"XML")," and the\ninbox URL exists) and that we've enqueued it for processing.")),(0,r.yg)("p",null,"Behind the scenes, we've now a system of simple, durable queues that ensure we\ndon't \"drop\" this event at any point in time from here on forward."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'We\'ll load it into the database and soon it will appear as a new "message"\nrecord in your "Inbox" page.'),(0,r.yg)("li",{parentName:"ol"},"We'll check the triggers for all the active jobs in your project and if it\nmatches one of those triggers we'll send it to another queue for job running."),(0,r.yg)("li",{parentName:"ol"},"We'll make sure your project is configured properly and that you haven't\nexceeded your usage limits."),(0,r.yg)("li",{parentName:"ol"},"We'll start executing a job run, which may itself may hundreds of unique HTTP\nrequests to other endpoints."),(0,r.yg)("li",{parentName:"ol"},'And finally we\'ll report back on the status of that run and soon it will\nappear as a new "run" in your "Activity History" page.')),(0,r.yg)("p",null,"Depending on how many requests your job makes, how much data is being processed,\nand the response time of your other systems, all of this could take quite some\ntime\u2014anywhere from ",(0,r.yg)("inlineCode",{parentName:"p"},"200ms")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"20 minutes"),"!"),(0,r.yg)("p",null,"If the system that sends the data to OpenFn needs to know whether all the\noperations in step 4 completed successfully (what do you count as a success with\nthese various custom actions, by the way?) you should consider implementing a\nSAGA pattern, whereby after all this processing is complete you trigger another\nrequest back to the initial system reporting on the downstream tasks. This can\nbe done in OpenFn with ",(0,r.yg)("a",{parentName:"p",href:"/documentation/legacy/jobs/multiple-operations"},"Flow Triggers"),"."),(0,r.yg)("h2",{id:"synchronous-vs-asynchronous-processing"},"Synchronous vs. Asynchronous Processing"),(0,r.yg)("p",null,"On ",(0,r.yg)("strong",{parentName:"p"},"OpenFn/platform"),", processing is asynchronous by default. Multiple complex workflows may be initiated, error handling and notifications all happen downstream. "),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"If you send data to OpenFn Inbox, you'll receive a ",(0,r.yg)("inlineCode",{parentName:"li"},"202")," if successful (and ",(0,r.yg)("inlineCode",{parentName:"li"},"502")," if we didn't receive your data/bad request). "),(0,r.yg)("li",{parentName:"ol"},'We\'ll then load it into the database and soon it will appear as a new "message"\nrecord in your "Inbox" page.'),(0,r.yg)("li",{parentName:"ol"},"We'll check the triggers for all the active jobs in your project and if it\nmatches one of those triggers we'll send it to another queue for job running."),(0,r.yg)("li",{parentName:"ol"},"We'll make sure your project is configured properly and that you haven't\nexceeded your usage limits."),(0,r.yg)("li",{parentName:"ol"},"We'll start executing a job run, which may itself may hundreds of unique HTTP\nrequests to other endpoints. "),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("em",{parentName:"li"},"If you want to then send an update back to the source system... you may configure another job to send requests and updates back to the triggering source system.")," ")),(0,r.yg)("p",null,"In ",(0,r.yg)("strong",{parentName:"p"},"OpenFn/microservice")," or using open-source tools, you could create a synchronous system. We've created a way to set up inbox endpoints as\n\"synchronous\", meaning they'll actually hold a connection open ",(0,r.yg)("em",{parentName:"p"},"until")," all of\nthe processing above is completed, and then respond with a ",(0,r.yg)("inlineCode",{parentName:"p"},"2XX"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"4xx"),", or\n",(0,r.yg)("inlineCode",{parentName:"p"},"5XX"),". This is not recommended for high volume systems, but may be a requirement\nfor some implementations; the sprit of ",(0,r.yg)("strong",{parentName:"p"},"OpenFn/microservice")," is to give as much\ncontrol as possible to whoever is deploying it on their servers."))}u.isMDXComponent=!0}}]);