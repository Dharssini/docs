"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[1661],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44485:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],s={layout:"post",title:"Our Servers or Yours: Thinking through deployment options",author:"Jed Goldstein",author_url:"https://github.com/jedbgold",author_image_url:"https://avatars.githubusercontent.com/jedbgold",tags:["how-to","tips"],featured:!0},l=void 0,c={permalink:"/articles/2021/02/03/hosted-or-local-deployment",editUrl:"https://github.com/openfn/docs/edit/main/articles/2021-02-03-hosted-or-local-deployment.md",source:"@site/articles/2021-02-03-hosted-or-local-deployment.md",title:"Our Servers or Yours: Thinking through deployment options",description:"Zandile is a program manager at an iNGO and she needs to use CommCare, DHIS2,",date:"2021-02-03T00:00:00.000Z",formattedDate:"February 3, 2021",tags:[{label:"how-to",permalink:"/articles/tags/how-to"},{label:"tips",permalink:"/articles/tags/tips"}],readingTime:4.345,truncated:!0,authors:[{name:"Jed Goldstein",url:"https://github.com/jedbgold",imageURL:"https://avatars.githubusercontent.com/jedbgold"}],frontMatter:{layout:"post",title:"Our Servers or Yours: Thinking through deployment options",author:"Jed Goldstein",author_url:"https://github.com/jedbgold",author_image_url:"https://avatars.githubusercontent.com/jedbgold",tags:["how-to","tips"],featured:!0},prevItem:{title:"Sync Like You Mean It: Thinking Through System \u201cSyncing\u201d Protocols",permalink:"/articles/2021/02/17/syncing-options"},nextItem:{title:"Tracked entity instances in DHIS2",permalink:"/articles/2020/12/09/upsert-in-dhis2"}},u={authorsImageUrls:[void 0]},p=[{value:"What is SaaS?",id:"what-is-saas",level:2},{value:"Some benefits of SaaS",id:"some-benefits-of-saas",level:3},{value:"What is Local Deployment?",id:"what-is-local-deployment",level:2},{value:"Some benefits of Local Deployment",id:"some-benefits-of-local-deployment",level:3},{value:"Zandile&#39;s Decision",id:"zandiles-decision",level:2},{value:"Which Deployment Option is Best for your organization?",id:"which-deployment-option-is-best-for-your-organization",level:2}],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Zandile is a program manager at an iNGO and she needs to use CommCare, DHIS2,\nand OpenFn for an upcoming public health project. She understands that all three\npieces of software can be deployed locally, or accessed as SaaS (Software as a\nService)."),(0,r.kt)("p",null,"Essentially, Zandile needs to decide if she would like to run the software on\nsomeone else\u2019s servers (SaaS), or on her organization\u2019s own servers (deployed\nlocally). Before making a decision she outlines the basic, non-technical\nconsiderations for both options."),(0,r.kt)("h2",{id:"what-is-saas"},"What is SaaS?"),(0,r.kt)("p",null,"SaaS is software that is installed and ",(0,r.kt)("em",{parentName:"p"},"runs")," on computers maintained by\nsoftware professionals, rather than on your own computer. While those computers\nmight be anywhere in the world, typically you'll access and ",(0,r.kt)("em",{parentName:"p"},"use")," this software via\nthe Internet."),(0,r.kt)("h3",{id:"some-benefits-of-saas"},"Some benefits of SaaS"),(0,r.kt)("p",null,"With SaaS, the software vendor is responsible for the expenses of managing and\nmonitoring all of the technical components and issues associated with the\nsoftware. This means that Zandile\u2019s iNGO will not be responsible for updating\nthe software to ensure compliance with new security regulations, maintaining the\nservers, backing up the data, purchasing and managing uninterrupted power\nsupplies, and providing a team of physical security guards to protect the\ncomputers and data therein against physical theft."),(0,r.kt)("p",null,'Going the SaaS route is often faster and more secure, because you do not need to\ndevelop expertise in "DevOps" or hire IT and physical security specialists. This\noption also provides the greatest amount of flexibility & scalability\u2013 because\nthe SaaS provider is able to deliver more or less computing power, storage, and\nbandwidth\u2014right when it\u2019s needed.'),(0,r.kt)("p",null,"Having smaller setup costs (you don't have to grow a software delivery company\nof your own) often makes this a more economical choice for many, though SaaS\nwill always come with some sort of ongoing fee\u2014a price per month or year that\ngoes to the vendor to compensate for the time and money they'll spend to ensure\nyour software works properly."),(0,r.kt)("h2",{id:"what-is-local-deployment"},"What is Local Deployment?"),(0,r.kt)("p",null,"Unlike the SaaS option, local deployment means installing and running software\non your own computers\u2014typically on your organization\u2019s servers."),(0,r.kt)("h3",{id:"some-benefits-of-local-deployment"},"Some benefits of Local Deployment"),(0,r.kt)("p",null,"If a SaaS provider doesn't offer hosting in your country and your government\ndoesn't allow your data to reside on foreign servers (i.e., you're not allowed\nto use things like Gmail, WhatsApp or Facebook for communicating sensitive\ninformation) then local deployment allows you to use tools like CommCare, DHIS2,\nand OpenFn while adhering to government data sovereignty regulations."),(0,r.kt)("p",null,"Local deployment also provides your organization with complete ownership of the\nend-to-end system. Your IT team will be personally responsible for ensuring that\nthe software works, is maintained, is secure, etc. If your organization does not\nalready have an IT team in place, then this can become a costly headache, but\nfor a large organization with embedded IT experience, local deployment often\nmakes sense."),(0,r.kt)("p",null,"Ultimately, being able to directly hire and fire the people who are responsible\nfor your software's proper functioning can be very useful. It means you have\ncomplete responsibility for whether or not the solution succeeds."),(0,r.kt)("p",null,"If you've already got the teams in place (security, DevOps, etc.) then this\noption can be more economical in the long run. With a very good DevOps team,\nmaintaining an extra piece of software might only occupy 20% of a\nfull-time-employee's salary. For your security guards, if the software is\ninstalled in the same physical location it's possible that your costs won't\nincrease at all. While there will be very high setup costs, over time you may\nrealize cost savings by running an efficient software delivery unit within your\norganization that spreads its focus around a number of projects."),(0,r.kt)("h2",{id:"zandiles-decision"},"Zandile's Decision"),(0,r.kt)("p",null,"In this fictional case, data residency is a concern\u2014her data is sensitive or\ncontains PII\u2014and CommCare, DHIS2 and OpenFn do not provide hosting in the\ncountry she's located. Zandile's organization has a large, experienced IT team\nthat has managed high-availability software projects for many years... they're\npros. While they anticipate that the setup costs will be quite high (around\n$60000 and several months for this set of deployments) they plan on using this\nsoftware for the next 5 years and have determined that they'll recoup a\nsignificant portion of that setup cost by not having to pay license fees for\nSaaS. They go with local deployment."),(0,r.kt)("h2",{id:"which-deployment-option-is-best-for-your-organization"},"Which Deployment Option is Best for your organization?"),(0,r.kt)("p",null,'The answer is: "it depends", but if your organization has never managed local\nsoftware deployments, then we recommend going the SaaS approach. SaaS systems,\nlike the one OpenFn and CommCare offer, are simply going to be more secure, more\nstable, and more scalable for the money.'),(0,r.kt)("p",null,"Crucially, you can always start with SaaS (most tools even offer a free tier)\nand then decide later to invest in the big startup costs of a local deployment\nif the license fees for the SaaS feel high enough to make local deployment more\neconomical over the long term. After a few months or years on the SaaS, you'll\nlikely be in a better position to know if you want to continue using the\nsoftware for 5-10 years."),(0,r.kt)("p",null,"Should you need any help with your decision though please do not hesitate to\ncontact OpenFn."))}d.isMDXComponent=!0}}]);