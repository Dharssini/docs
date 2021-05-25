(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[1922],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78743:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),i={title:"The Inbox",sidebar_label:"Your Inbox"},s={unversionedId:"build/inbox",id:"build/inbox",isDocsHomePage:!1,title:"The Inbox",description:"How it works",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/build/inbox.md",sourceDirName:"build",slug:"/build/inbox",permalink:"/fr/documentation/build/inbox",editUrl:"https://github.com/openfn/docs/edit/main/docs/build/inbox.md",version:"current",sidebar_label:"Your Inbox",frontMatter:{title:"The Inbox",sidebar_label:"Your Inbox"},sidebar:"docs",previous:{title:"Credentials",permalink:"/fr/documentation/build/credentials"},next:{title:"Sources de donn\xe9es g\xe9n\xe9riques",permalink:"/fr/documentation/source-apps"}},l=[{value:"How it works",id:"how-it-works",children:[]},{value:"<code>202/Accepted vs 201/Created</code>",id:"202accepted-vs-201created",children:[]},{value:"Synchronous vs. Asynchronous Processing",id:"synchronous-vs-asynchronous-processing",children:[]}],p={toc:l};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"On the platform, each project has their own unique inbox URL, something like ",(0,a.kt)("inlineCode",{parentName:"p"},"https://www.openfn.org/inbox/54804f1a-4a70-4392-97cb-1f350e98e9c8"),". That big string of numbers and letters is called a ",(0,a.kt)("inlineCode",{parentName:"p"},"UUID"),'. It\'s your address, and the "place" on the web that you\'ll send data for processing by OpenFn if you\'re doing real-time or "event-based" integration.'),(0,a.kt)("p",null,"Your project will always be listening, and whenever an HTTP request is received at that URL, we'll respond with a ",(0,a.kt)("inlineCode",{parentName:"p"},"202/Accepted")," and start processing the data sent either in the ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"parameters")," of that request."),(0,a.kt)("h2",{id:"202accepted-vs-201created"},(0,a.kt)("inlineCode",{parentName:"h2"},"202/Accepted vs 201/Created")),(0,a.kt)("p",null,"You've probably heard of ",(0,a.kt)("inlineCode",{parentName:"p"},"200/OK"),' or other common "status codes", but the difference between a ',(0,a.kt)("inlineCode",{parentName:"p"},"201")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"202")," is very interesting from an integration perspective."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"201/Created")," means that we've completed processing whatever data was sent to us by the requester. Usually, this response is accompanied by a payload with a new ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," for whatever resource what created. This is ",(0,a.kt)("em",{parentName:"p"},"not")," what OpenFn does, instead we send a ",(0,a.kt)("inlineCode",{parentName:"p"},"202/Accepted")," indicating that your request was acceptable and we'll get to work."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"OpenFn sends a ",(0,a.kt)("inlineCode",{parentName:"p"},"202/Accepted")," indicating that your request has passed our initial validation (i.e. the data is valid ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")," or parseable ",(0,a.kt)("inlineCode",{parentName:"p"},"XML")," and the inbox URL exists) and that we've enqueued it for processing."))),(0,a.kt)("p",null,"Behind the scenes, we've now a system of simple, durable queues that ensure we don't \"drop\" this event at any point in time from here on forward."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'We\'ll load it into the database and soon it will appear as a new "message" record in your "Inbox" page.'),(0,a.kt)("li",{parentName:"ol"},"We'll check the triggers for all the active jobs in your project and if it matches one of those triggers we'll send it to another queue for job running."),(0,a.kt)("li",{parentName:"ol"},"We'll make sure your project is configured properly and that you haven't exceeded your usage limits."),(0,a.kt)("li",{parentName:"ol"},"We'll start executing a job run, which may itself may hundreds of unique HTTP requests to other endpoints."),(0,a.kt)("li",{parentName:"ol"},'And finally we\'ll report back on the status of that run and soon it will appear as a new "run" in your "Activity History" page.')),(0,a.kt)("p",null,"Depending on how many requests your job makes, how much data is being processed, and the response time of your other systems, all of this could take quite some time\u2014anywhere from ",(0,a.kt)("inlineCode",{parentName:"p"},"200ms")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"20 minutes"),"!"),(0,a.kt)("p",null,"If the system that sends the data to OpenFn needs to know whether all the operations in step 4 completed successfully (what do you count as a success with these various custom actions, by the way?) you should consider implementing a SAGA pattern, whereby after all this processing is complete you trigger another request back to the initial system reporting on the downstream tasks. This can be done in OpenFn with ",(0,a.kt)("a",{parentName:"p",href:"/documentation/jobs/multiple-operations"},"Flow Triggers"),"."),(0,a.kt)("h2",{id:"synchronous-vs-asynchronous-processing"},"Synchronous vs. Asynchronous Processing"),(0,a.kt)("p",null,"On ",(0,a.kt)("strong",{parentName:"p"},"OpenFn/platform"),", processing is asynchronous by default. Multiple complex workflows may be initiated, error handling and notifications all happen downstream."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If you send data to OpenFn Inbox, you'll receive a ",(0,a.kt)("inlineCode",{parentName:"li"},"202")," if successful (and ",(0,a.kt)("inlineCode",{parentName:"li"},"502")," if we didn't receive your data/bad request)."),(0,a.kt)("li",{parentName:"ol"},'We\'ll then load it into the database and soon it will appear as a new "message" record in your "Inbox" page.'),(0,a.kt)("li",{parentName:"ol"},"We'll check the triggers for all the active jobs in your project and if it matches one of those triggers we'll send it to another queue for job running."),(0,a.kt)("li",{parentName:"ol"},"We'll make sure your project is configured properly and that you haven't exceeded your usage limits."),(0,a.kt)("li",{parentName:"ol"},"We'll start executing a job run, which may itself may hundreds of unique HTTP requests to other endpoints."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"If you want to then send an update back to the source system... you may configure another job to send requests and updates back to the triggering source system."))),(0,a.kt)("p",null,"In ",(0,a.kt)("strong",{parentName:"p"},"OpenFn/microservice")," or using open-source tools, you could create a synchronous system. We've created a way to set up inbox endpoints as \"synchronous\", meaning they'll actually hold a connection open ",(0,a.kt)("em",{parentName:"p"},"until")," all of the processing above is completed, and then respond with a ",(0,a.kt)("inlineCode",{parentName:"p"},"2XX"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"4xx"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"5XX"),". This is not recommended for high volume systems, but may be a requirement for some implementations; the sprit of ",(0,a.kt)("strong",{parentName:"p"},"OpenFn/microservice")," is to give as much control as possible to whoever is deploying it on their servers."))}c.isMDXComponent=!0}}]);