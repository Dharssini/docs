(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[379],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return h},kt:function(){return u}});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||a;return n?s.createElement(m,i(i({ref:t},h),{},{components:n})):s.createElement(m,i({ref:t},h))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},343:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c},default:function(){return h}});var s=n(22122),r=n(19756),a=(n(67294),n(3905)),i={layout:"post",title:"Sync Like You Mean It: Thinking Through System \u201cSyncing\u201d Protocols",author:"Jed Goldstein",author_url:"https://github.com/jedbgold",author_image_url:"https://avatars.githubusercontent.com/jedbgold",tags:["how-to","tips"],featured:!0},o={permalink:"/articles/2021/02/17/syncing-options",editUrl:"https://github.com/openfn/docs/edit/main/articles/2021-02-17-syncing-options.md",source:"@site/articles/2021-02-17-syncing-options.md",title:"Sync Like You Mean It: Thinking Through System \u201cSyncing\u201d Protocols",description:"\u201cSyncing\u201d is getting two systems to a state of harmony. This might mean keeping",date:"2021-02-17T00:00:00.000Z",formattedDate:"February 17, 2021",tags:[{label:"how-to",permalink:"/articles/tags/how-to"},{label:"tips",permalink:"/articles/tags/tips"}],readingTime:3.535,truncated:!0,prevItem:{title:"Forms and Cases: CommCare and event-based integration",permalink:"/articles/2021/05/24/commcare-events"},nextItem:{title:"Our Servers or Yours: Thinking through deployment options",permalink:"/articles/2021/02/03/hosted-or-local-deployment"}},c=[{value:"Real Time/Event Based Syncs",id:"real-timeevent-based-syncs",children:[]},{value:"Scheduled Syncs",id:"scheduled-syncs",children:[]},{value:"Both Sync Options Have Their Pros and Cons",id:"both-sync-options-have-their-pros-and-cons",children:[]}],l={toc:c};function h(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,s.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u201cSyncing\u201d is getting two systems to a state of harmony. This might mean keeping\na list of patients up to date, though modifications can be made in either\nsystem. It might mean copying transactions from one system to another on a\nnightly basis. It might mean a lot of things, but the key concept is that when\nyou sync systems, you\u2019re asking them to work together while simultaneously\nrespecting both software systems\u2019 independence."),(0,a.kt)("p",null,"In this post we\u2019ll discuss two different syncing protocols to consider when\ndesigning your data integration. These include:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Real-time, or event-based, syncs")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Scheduled syncs"))),(0,a.kt)("p",null,"For a\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.openfn.org/blog/2021/02/09/interoperability_for_case_referrals"},"recent project in Cambodia"),",\nOpenFn is being used by social workers to automate case referrals between the\nsoftware systems Primero and OSCaR. In the design phase, we evaluated these two\nsyncing options. Below, we'll explain what each one is, the differences between\nthem and which option we chose in the end."),(0,a.kt)("h3",{id:"real-timeevent-based-syncs"},"Real Time/Event Based Syncs"),(0,a.kt)("p",null,"The first option considered for this integration was the real-time/event based\nsync. This type of sync is triggered whenever a specified event takes place in a\nsystem. With this approach, whenever a case is referred in Primero (via the user\ninterface, i.e., when a real case-worker clicks the \u201crefer\u201d button) OpenFn\nreceives a small payload with case data and transmits it to OSCaR and vice\nversa."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Real_Time_Sync",src:n(94353).Z})),(0,a.kt)("p",null,"Because of their instantaneous nature, real time/event based syncs are great for\nintegrations that involve mobile payments or sms messages to recipients. Really,\nanything that needs to be done \u201cnow\u201d! Additionally, depending on your data\nvolumes real time syncs might save you money because you\u2019re only using resources\nwhen specific events take place. For instance, in the above example, a run is\ntriggered by a referral, so if there are only 10 case referrals/month, you'd\nonly process 10 runs each month."),(0,a.kt)("p",null,"This type of sync is great because it\u2019s instantaneous, typically quite\nstraightforward to set up, doesn\u2019t require any \u201cstate mangagement\u201d on OpenFn,\nand allows for the reprocessing of individual events. There are, however,\ndrawbacks."),(0,a.kt)("p",null,"For instance, what happens if the app that\u2019s sending notifications to OpenFn\nfails to send? What if AWS or GCP goes down, taking half of the internet with\nit? If Primero \u201cthinks\u201d it sent the referral, OpenFn never receives it, that\ncase might not get referred to Oscar!"),(0,a.kt)("h3",{id:"scheduled-syncs"},"Scheduled Syncs"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Schedule_Dependent_Sync",src:n(739).Z})),(0,a.kt)("p",null,"The second option considered, a bi-directional schedule dependent sync, solves\nfor the issue discussed above. On a scheduled basis (every 5 minutes, for\nexample) OpenFn checks with Primero and Oscar to see if case referrals need to\nbe transmitted between the two systems and then refers the case if required. In\nthe unlikely event that any of the software systems involved crash, the\nstability provided by the bi-directional sync means that all data is preserved\nand eventually makes it to its destination safely."),(0,a.kt)("p",null,"The major drawback here is complexity. We had to use 4 jobs instead of 2, and\nthe job that is responsible for \u201cpulling\u201d data that\u2019s been updated since the\ntime of the last successful sync has to keep \u201cstate\u201d\u2014or some sort of working\nmemory of what it\u2019s done in the past. When pulling modified cases from Primero,\nOpenFn now only pulls cases modified on or after ",(0,a.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD HH:MM:SS")," where\n",(0,a.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD HH:MM:SS")," is the time of the last successful, round-trip\nsynchronization. OpenFn has built-in functionality to handle exactly this\nrequirement, but not all ETL systems do and it\u2019s a design implication that must\nbe considered."),(0,a.kt)("p",null,"Ultimately, for the project in Cambodia, we decided that this sync option is the\nright choice because data integrity is more important than the speed of this\ndata flow. That\u2019s a crucial point to understand\u2014the organizations operating in\nCambodia decided that for this particular use case, being able to guarantee\neventual syncing was more important than having real-time syncing."),(0,a.kt)("h3",{id:"both-sync-options-have-their-pros-and-cons"},"Both Sync Options Have Their Pros and Cons"),(0,a.kt)("p",null,"Both options definitely have their use-cases and OpenFn's platform versatility\nenables your team to decide which type of sync is right for your project."),(0,a.kt)("p",null,"As always, we are here to help with any questions as you think through which\nsync option makes the most sense for your project."))}h.isMDXComponent=!0},94353:function(e,t,n){"use strict";t.Z=n.p+"assets/images/syncs1-ed8efbe5bdd76218c43fc801bcf76516.png"},739:function(e,t,n){"use strict";t.Z=n.p+"assets/images/syncs2-b82b2585d36f4b7bb128dc2cae15fc7b.png"}}]);