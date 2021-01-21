(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var o=n(3),r=n(7),a=(n(0),n(143)),i={title:"Using multiple operations"},s={unversionedId:"jobs/multiple-operations",id:"jobs/multiple-operations",isDocsHomePage:!1,title:"Using multiple operations",description:"You can do many things in sequence with OpenFn, whether using core,",source:"@site/docs/jobs/multiple-operations.md",slug:"/jobs/multiple-operations",permalink:"/docs/jobs/multiple-operations",editUrl:"https://github.com/openfn/docs/edit/master/docs/jobs/multiple-operations.md",version:"current",sidebar:"docs",previous:{title:"Operations",permalink:"/docs/jobs/operations"},next:{title:"Frequently Asked Questions",permalink:"/docs/faqs"}},l=[{value:"Flow jobs vs multiple operations in a single job vs posting back to the inbox",id:"flow-jobs-vs-multiple-operations-in-a-single-job-vs-posting-back-to-the-inbox",children:[{value:"Reasons to use flow jobs",id:"reasons-to-use-flow-jobs",children:[]},{value:"Reasons to use multiple operations in a single job",id:"reasons-to-use-multiple-operations-in-a-single-job",children:[]},{value:"Reasons to post back to the inbox",id:"reasons-to-post-back-to-the-inbox",children:[]}]}],u={toc:l};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can do many things in sequence with OpenFn, whether using ",Object(a.b)("inlineCode",{parentName:"p"},"core"),",\n",Object(a.b)("inlineCode",{parentName:"p"},"microservice"),", or ",Object(a.b)("inlineCode",{parentName:"p"},"platform"),"."),Object(a.b)("h2",{id:"flow-jobs-vs-multiple-operations-in-a-single-job-vs-posting-back-to-the-inbox"},"Flow jobs vs multiple operations in a single job vs posting back to the inbox"),Object(a.b)("h3",{id:"reasons-to-use-flow-jobs"},"Reasons to use flow jobs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Each operation needs to use functions that are ",Object(a.b)("em",{parentName:"li"},"only")," available in different\nadaptors."),Object(a.b)("li",{parentName:"ul"},"You ",Object(a.b)("em",{parentName:"li"},"must")," have different credentials for each operation"),Object(a.b)("li",{parentName:"ul"},"You want to see success and failure at the level of each operation"),Object(a.b)("li",{parentName:"ul"},"Each individual run takes a long time and you're worried about your NodeVM\nbeing timed out. (On ",Object(a.b)("inlineCode",{parentName:"li"},"platform"),", this happens after 100s for non-enterprise\nusers; on ",Object(a.b)("inlineCode",{parentName:"li"},"microservice")," you've likely configured your own timeout duration.)")),Object(a.b)("h3",{id:"reasons-to-use-multiple-operations-in-a-single-job"},"Reasons to use multiple operations in a single job"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The job must be atomic, you want the whole thing to count as a failure if any\npart of it fails."),Object(a.b)("li",{parentName:"ul"},"You run jobs manually and you want a single button to click to retry the\nentire sequence of operations."),Object(a.b)("li",{parentName:"ul"},"You update a ",Object(a.b)("inlineCode",{parentName:"li"},"cursor")," in a series of operations that involve ",Object(a.b)("inlineCode",{parentName:"li"},"GET")," and ",Object(a.b)("inlineCode",{parentName:"li"},"POST"),".\nWhen the ",Object(a.b)("inlineCode",{parentName:"li"},"POST")," fails, you don't want to update the ",Object(a.b)("inlineCode",{parentName:"li"},"cursor")," for the\nsubsequent job run which contains the ",Object(a.b)("inlineCode",{parentName:"li"},"GET"),"."),Object(a.b)("li",{parentName:"ul"},"Your operations don't take too long (<100s in total for ",Object(a.b)("inlineCode",{parentName:"li"},"platform"),") and you\nwant to reduce the number of executions.")),Object(a.b)("h3",{id:"reasons-to-post-back-to-the-inbox"},"Reasons to post back to the inbox"),Object(a.b)("p",null,"You might decide to send data from a ",Object(a.b)("inlineCode",{parentName:"p"},"GET")," back to your inbox and let another\njob be triggered by a message filter."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"get('somePath', { query: { after: '2020-10-12' } }, post('my-inbox-uuid'));\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You'd like to store the result of the first operation for later use or\ninspection and not have to retry that operation in order to reproduce the\ndata."),Object(a.b)("li",{parentName:"ul"},"You don't care about small delays between the first and second job being run.")))}c.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),c=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=c(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=c(n),d=o,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return n?r.a.createElement(m,s(s({ref:t},u),{},{components:n})):r.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);