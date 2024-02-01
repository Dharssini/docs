"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[32508],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>c});var o=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),h=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=h(n),g=i,c=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return n?o.createElement(c,r(r({ref:t},p),{},{components:n})):o.createElement(c,r({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var h=2;h<a;h++)r[h]=n[h];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},96316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var o=n(45072),i=(n(11504),n(95788));const a={title:"Troubleshooting integrations",sidebar_label:"Troubleshooting"},r=void 0,s={unversionedId:"build/troubleshooting",id:"build/troubleshooting",title:"Troubleshooting integrations",description:"Or, a penny for your thoughts during the debugging process.",source:"@site/docs/build/troubleshooting.md",sourceDirName:"build",slug:"/build/troubleshooting",permalink:"/documentation/next/build/troubleshooting",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/build/troubleshooting.md",tags:[],version:"current",frontMatter:{title:"Troubleshooting integrations",sidebar_label:"Troubleshooting"}},l={},h=[{value:"The Implementation Perspective",id:"the-implementation-perspective",level:2},{value:"1. What do you desire?",id:"1-what-do-you-desire",level:3},{value:"2. How are you asking for it?",id:"2-how-are-you-asking-for-it",level:3},{value:"3. Is what you&#39;re asking for going to produce the effect you desire?",id:"3-is-what-youre-asking-for-going-to-produce-the-effect-you-desire",level:3},{value:"4. Does the expression implement what you&#39;re asking for?",id:"4-does-the-expression-implement-what-youre-asking-for",level:3},{value:"5. Does the adaptor support/enable the implementation in the expression?",id:"5-does-the-adaptor-supportenable-the-implementation-in-the-expression",level:3},{value:"6. Does the target API support/enable the implementation in the adaptor?",id:"6-does-the-target-api-supportenable-the-implementation-in-the-adaptor",level:3},{value:"The Product Perspective",id:"the-product-perspective",level:2},{value:"Find balance, in the end",id:"find-balance-in-the-end",level:2}],p={toc:h},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,o.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Or, a penny for your thoughts during the debugging process."),(0,i.yg)("p",null,"So, you've noticed that something isn't quite right. Here's a list of questions,\nand complications, that might help you get to the bottom of it."),(0,i.yg)("h2",{id:"the-implementation-perspective"},"The Implementation Perspective"),(0,i.yg)("p",null,"First, keep this quick checklist at hand... answering these questions ",(0,i.yg)("em",{parentName:"p"},"in order"),"\nwill ensure that you're spending as little time as possible getting to the cause\nof the problem, whether that's big or small."),(0,i.yg)("h3",{id:"1-what-do-you-desire"},"1. What do you desire?"),(0,i.yg)("p",null,"This one might take a lifetime to answer, but in the context of debugging you\ncan limit the bounds a bit. We really can't move forward until you're clear on\nwhat you want."),(0,i.yg)("h3",{id:"2-how-are-you-asking-for-it"},"2. How are you asking for it?"),(0,i.yg)("p",null,"Show me the issue, the specifications, the \"requirement\"! Let's make sure it's\nclearly articulated and memorialized. If so, move to Q3!"),(0,i.yg)("h3",{id:"3-is-what-youre-asking-for-going-to-produce-the-effect-you-desire"},"3. Is what you're asking for going to produce the effect you desire?"),(0,i.yg)("p",null,"This is a tricky one, and may involve the engineering team. (In fact, this is\noften when engineering gets called in. There's a \"bug\", and before we take a\nlook at any code we need to figure out if what's being asked for\u2014the\nspecification\u2014will actually produce the desired outcomes.)"),(0,i.yg)("h3",{id:"4-does-the-expression-implement-what-youre-asking-for"},"4. Does the expression implement what you're asking for?"),(0,i.yg)("p",null,"So we're ",(0,i.yg)("em",{parentName:"p"},"certain")," that the spec will produce the effect we want? OK, great...\nnow let's look at the job expression. Does the job expression implement the\nspec? How can you prove (with logs, assertions, etc.) that it does? Don't move\non until you're certain of this, or certain that it ",(0,i.yg)("em",{parentName:"p"},"can't"),", given the adaptor\nyou're using!"),(0,i.yg)("admonition",{title:"Time check",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"N.B., a change to the job expression takes as little as a couple of minutes.")),(0,i.yg)("h3",{id:"5-does-the-adaptor-supportenable-the-implementation-in-the-expression"},"5. Does the adaptor support/enable the implementation in the expression?"),(0,i.yg)("p",null,"OK, if you're certain the expression is doing all it can with the spec... maybe\nthere's a bug in the adaptor! Something in how that helper function was\nimplemented may not be doing what the author of the adaptor intended\u2014and this\ncould be producing the \"bug\"."),(0,i.yg)("p",null,"If you're starting work on the adaptor, you should have ",(0,i.yg)("em",{parentName:"p"},"already")," reduced the\nproblem to a ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"GENERAL PROBLEM")),", leaving aside all specifics of this\nimplementation. You're starting to change the way that this adaptor interacts\nwith the target API. You've got out your API docs and you're CURLing requests\ndirectly to various endpoints, setting up tests in the adaptor, etc."),(0,i.yg)("admonition",{title:"Time check",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"A change to the adaptor might take an hour, maybe a few. We're on the order of a\nday, if you've got big changes and include the time required to deploy new\nversions.")),(0,i.yg)("h3",{id:"6-does-the-target-api-supportenable-the-implementation-in-the-adaptor"},"6. Does the target API support/enable the implementation in the adaptor?"),(0,i.yg)("p",null,"Whoa... if you've made it down here you're in now \"big serious\" land. Tread\nlightly! I'm guessing that you've found lots of Stack Overflow threads\ndescribing the issue you're facing. What you're getting at is that ",(0,i.yg)("em",{parentName:"p"},"despite")," the\nAPI docs we used to build this adaptor, there's something different about the\nway the API is actually behaving."),(0,i.yg)("p",null,"Maybe there's a new API version with a breaking change?"),(0,i.yg)("p",null,"Maybe there's a bug in the target system?"),(0,i.yg)("p",null,"Either way, when you get down to this level you're spending a LOT of time and\nyou're engaging with the broader open source community. You should post on at\nleast one forum before signing off for the day."),(0,i.yg)("admonition",{title:"Time check",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Writing a new adaptor for a new API version, or fixing a bug in another\ndeveloper's system via a pull request... this stuff takes weeks and months and,\nworse yet, the timelines are often outside of our control.")),(0,i.yg)("h2",{id:"the-product-perspective"},"The Product Perspective"),(0,i.yg)("p",null,"To throw a spanner into the works ",(0,i.yg)("em",{parentName:"p"},"(embrace the complexity!)")," when I wear my\nproduct hat I invert the pyramid here. While a problem might be solved in 15\nminutes by writing a new line in the ",(0,i.yg)("inlineCode",{parentName:"p"},"expression")," (see Q4), is this a\ngeneralizable problem and could I save ",(0,i.yg)("em",{parentName:"p"},"future implementers"),' those 15 minutes by\nmaking a change to the adaptor (see Q5) that would provide this fix/feature "out\nof the box"?'),(0,i.yg)("p",null,"Better yet... could I make some change to the OpenFn platform (or to Primero, or\nCommCare, or DHIS2?) that would enable easier/better/adaptors and solve this\nproblem with clicks, not code?"),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},'Remember those jobs we used to write that did nothing (simply returning state)\nif a condition was met? Well, using exactly this approach we delivered an\n"exclusion filter" feature to OpenFn which allows a user to skip certain inbound\nmessages based on criteria, rather than having to evaluate those message in the\njob.'),(0,i.yg)("p",{parentName:"admonition"},"It took much more work than writing that one ",(0,i.yg)("inlineCode",{parentName:"p"},"fn(...)")," block at the top of a\nsingle client's job, but now it saves ",(0,i.yg)("em",{parentName:"p"},"everyone")," from writing that line in the\nfuture.")),(0,i.yg)("h2",{id:"find-balance-in-the-end"},"Find balance, in the end"),(0,i.yg)("p",null,"These questions are always knocking around inside my head and I try to weigh\nthis product perspective against the implementation perspective. In the end,\nit's always about balance (no surprise there) in how we ",(0,i.yg)("em",{parentName:"p"},"solve"),' these problems,\nbut by following the implementation perspective in how you approach, understand,\ndebug, and produce estimates will get more information out onto the table faster\nand enable a better "OK, how should we solve this given the current\nchronological and commercial constraints" conversation between the\nImplementation Team and the Engineering Team.'))}d.isMDXComponent=!0}}]);