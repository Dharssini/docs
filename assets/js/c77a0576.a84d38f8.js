"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8698],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86507:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],s={layout:"post",title:"Helping an Airport Soar: Synchronizing Asset Data Between the Tarmac and HQ",author:"Lei Lei Tun",author_url:"https://github.com/hninleileitun",author_image_url:"https://avatars.githubusercontent.com/hninleileitun",tags:["case study","airport","CommCare","development","IBM Maximo","automated reporting"],image:"/img/airport.jpeg",featured:!1},l=void 0,p={permalink:"/blog/2020/07/01/airport-case-study",editUrl:"https://github.com/openfn/docs/edit/main/blog/2020-07-01-airport-case-study.md",source:"@site/blog/2020-07-01-airport-case-study.md",title:"Helping an Airport Soar: Synchronizing Asset Data Between the Tarmac and HQ",description:"With real-time data syncs, OpenFn helps this airport ensure top-quality assets",date:"2020-07-01T00:00:00.000Z",formattedDate:"July 1, 2020",tags:[{label:"case study",permalink:"/blog/tags/case-study"},{label:"airport",permalink:"/blog/tags/airport"},{label:"CommCare",permalink:"/blog/tags/comm-care"},{label:"development",permalink:"/blog/tags/development"},{label:"IBM Maximo",permalink:"/blog/tags/ibm-maximo"},{label:"automated reporting",permalink:"/blog/tags/automated-reporting"}],readingTime:1.91,truncated:!0,authors:[{name:"Lei Lei Tun",url:"https://github.com/hninleileitun",imageURL:"https://avatars.githubusercontent.com/hninleileitun"}],frontMatter:{layout:"post",title:"Helping an Airport Soar: Synchronizing Asset Data Between the Tarmac and HQ",author:"Lei Lei Tun",author_url:"https://github.com/hninleileitun",author_image_url:"https://avatars.githubusercontent.com/hninleileitun",tags:["case study","airport","CommCare","development","IBM Maximo","automated reporting"],image:"/img/airport.jpeg",featured:!1},prevItem:{title:"Building an Integrated Data Warehouse to Track and Share Student Performance",permalink:"/blog/2020/07/01/african-school-of-excellence-case-study"},nextItem:{title:"Real-Time Disease Monitoring for SwissTPH",permalink:"/blog/2020/06/25/SwissTPH-case-study"}},u={authorsImageUrls:[void 0]},c=[{value:"Airports are complex businesses, responsible for passengers, equipment, employees, and safety.",id:"airports-are-complex-businesses-responsible-for-passengers-equipment-employees-and-safety",level:3},{value:"This airport was using multiple technologies to get the job done, and had no way to sync information between technologies and service teams.",id:"this-airport-was-using-multiple-technologies-to-get-the-job-done-and-had-no-way-to-sync-information-between-technologies-and-service-teams",level:3},{value:"OpenFn integration delivers real-time service updates to the Airport HQ.",id:"openfn-integration-delivers-real-time-service-updates-to-the-airport-hq",level:3}],m={toc:c};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With real-time data syncs, OpenFn helps this airport ensure top-quality assets\nand service for its workers and passengers. This integrated asset management\nsystem saves time and money, and prevents errors by reducing manual, paper-based\ndata transfer between systems."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"airport",src:n(18933).Z,width:"1260",height:"708"})),(0,o.kt)("h3",{id:"airports-are-complex-businesses-responsible-for-passengers-equipment-employees-and-safety"},"Airports are complex businesses, responsible for passengers, equipment, employees, and safety."),(0,o.kt)("p",null,"Airports all over the world face the challenge of ever-increasing passenger\ncapacity and airline demand. To meet this demand, they put core infrastructure\nand safety (for both workers and passengers) at high regard, and must prioritize\nrigorous asset management, repairs, and maintenance."),(0,o.kt)("p",null,"An international American airport that serves 18 million passengers and 180,000\naircraft operations annually manages an extensive network of assets, including\nheavy machinery, across a large area with intermittent network coverage. With\nOpenFn, an international airport has unleashed the power of\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ibm.com/support/knowledgecenter/SSBLW8/com.ibm.mamc.doc/overview/c_prod_overview.html"},"IBM Maximo EAM.")),(0,o.kt)("h3",{id:"this-airport-was-using-multiple-technologies-to-get-the-job-done-and-had-no-way-to-sync-information-between-technologies-and-service-teams"},"This airport was using multiple technologies to get the job done, and had no way to sync information between technologies and service teams."),(0,o.kt)("p",null,"To comply with FAA requirements, the airport conducts regular walk-downs in\nwhich field staff rigorously document each asset and flag and photograph\nrequired repairs. The airport uses IBM Maximo EAM to manage assets and schedule\nrepairs at HQ and CommCare to capture asset and work order data offline on the\ntarmac. The staff regularly follows a manual process to transfer data between\nthe two tools, which is a time-intensive task with high risk for human error. HQ\nwas also not able to access and analyze information collected in the field in\nnear real-time."),(0,o.kt)("h3",{id:"openfn-integration-delivers-real-time-service-updates-to-the-airport-hq"},"OpenFn integration delivers real-time service updates to the Airport HQ."),(0,o.kt)("p",null,"This integrated asset management system saves time and money, and prevents\nerrors by reducing manual, paper-based data transfer between systems. OpenFn\nalso enables the field and HQ teams to each use the tool that suits them best:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On the tarmac, field staff use an intuitive, affordable mobile tool (CommCare)\nto receive new maintenance orders from HQ, document assets, and report and\nphotograph required maintenance."),(0,o.kt)("li",{parentName:"ul"},"OpenFn automatically forwards updates on assets and required maintenance HQ\nstaff."),(0,o.kt)("li",{parentName:"ul"},"HQ staff then use a leading industry tool (IBM Maximo) to store asset data,\nschedule maintenance, and perform performance analysis.")),(0,o.kt)("p",null,"With real-time data syncs, OpenFn helps this airport ensure top-quality assets\nand service for its workers and passengers."))}d.isMDXComponent=!0},18933:function(e,t,n){t.Z=n.p+"assets/images/airport-161901865b81160f5f11ae83f4b50292.jpeg"}}]);