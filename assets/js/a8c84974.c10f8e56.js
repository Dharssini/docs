"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[7328],{95788:(e,t,n)=>{n.d(t,{Iu:()=>h,yg:()=>g});var a=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(g,o(o({ref:t},h),{},{components:n})):a.createElement(g,o({ref:t},h))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(45072),i=(n(11504),n(95788));const r={layout:"post",title:"Real-Time Disease Monitoring for SwissTPH",author:"Lei Lei Tun",author_url:"https://github.com/hninleileitun",author_image_url:"https://avatars.githubusercontent.com/hninleileitun",tags:["case study","SwissTPH","healthcare","CommCare","DHIS2","data monitoring"],image:"/img/swisstph1.jpg",featured:!0},o=void 0,s={permalink:"/blog/2020/06/25/SwissTPH-case-study",editUrl:"https://github.com/openfn/docs/edit/main/blog/2020-06-25-SwissTPH-case-study.md",source:"@site/blog/2020-06-25-SwissTPH-case-study.md",title:"Real-Time Disease Monitoring for SwissTPH",description:"By integrating a CommCare mobile data collection app with a national DHIS2",date:"2020-06-25T00:00:00.000Z",formattedDate:"June 25, 2020",tags:[{label:"case study",permalink:"/blog/tags/case-study"},{label:"SwissTPH",permalink:"/blog/tags/swiss-tph"},{label:"healthcare",permalink:"/blog/tags/healthcare"},{label:"CommCare",permalink:"/blog/tags/comm-care"},{label:"DHIS2",permalink:"/blog/tags/dhis-2"},{label:"data monitoring",permalink:"/blog/tags/data-monitoring"}],readingTime:1.66,hasTruncateMarker:!0,authors:[{name:"Lei Lei Tun",url:"https://github.com/hninleileitun",imageURL:"https://avatars.githubusercontent.com/hninleileitun"}],frontMatter:{layout:"post",title:"Real-Time Disease Monitoring for SwissTPH",author:"Lei Lei Tun",author_url:"https://github.com/hninleileitun",author_image_url:"https://avatars.githubusercontent.com/hninleileitun",tags:["case study","SwissTPH","healthcare","CommCare","DHIS2","data monitoring"],image:"/img/swisstph1.jpg",featured:!0},prevItem:{title:"Helping an Airport Soar: Synchronizing Asset Data Between the Tarmac and HQ",permalink:"/blog/2020/07/01/airport-case-study"},nextItem:{title:"Automating Real-Time Census Monitoring and Data Cleaning for iKapaData",permalink:"/blog/2020/06/10/iKapaData-Case-Study"}},l={authorsImageUrls:[void 0]},c=[{value:"SwissTPH: A world-leading institute in global health",id:"swisstph-a-world-leading-institute-in-global-health",level:3},{value:"SwissTPH had no way to monitor the diagnoses and treatments of sick children in Nigeria in real-time.",id:"swisstph-had-no-way-to-monitor-the-diagnoses-and-treatments-of-sick-children-in-nigeria-in-real-time",level:4},{value:"OpenFn helps to bridge the time gap between data collection and analysis.",id:"openfn-helps-to-bridge-the-time-gap-between-data-collection-and-analysis",level:4}],h={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,a.c)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"By integrating a CommCare mobile data collection app with a national DHIS2\nreporting system for the ALMANACH health initiative, OpenFn provided SwissTPH\nwith an automated, real-time connection that enables live disease monitoring\nin 2019."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"swissTPH",src:n(23948).c,width:"5312",height:"2988"})),(0,i.yg)("h3",{id:"swisstph-a-world-leading-institute-in-global-health"},"SwissTPH: A world-leading institute in global health"),(0,i.yg)("p",null,"The diverse professionals working at ",(0,i.yg)("a",{parentName:"p",href:"https://www.swisstph.ch/en/"},"SwissTPH")," all\nhave one common goal: to improve the health of people globally. In Nigeria,\nSwissTPH is helping healthcare providers to better screen, diagnose, and treat\nsick children through the\n",(0,i.yg)("a",{parentName:"p",href:"https://www.swisstph.ch/en/projects/project-detail/project-action/detail/project-controller/Projects/project/implementation-of-almanach-in-the-icrc/"},"ALMANACH health initiative."),"\nTo do so, they are actively researching how to improve both curative care and\nthe prevention of disease to ensure the best treatment possible."),(0,i.yg)("p",null,"SwissTPH is a global health institute focusing on infectious and\nnon-communicable diseases, health system, interventions, and environment. It\naims to improve population health, nationally and internationally, through a\nbetter understanding of disease and healthcare systems."),(0,i.yg)("h4",{id:"swisstph-had-no-way-to-monitor-the-diagnoses-and-treatments-of-sick-children-in-nigeria-in-real-time"},"SwissTPH had no way to monitor the diagnoses and treatments of sick children in Nigeria in real-time."),(0,i.yg)("p",null,"To analyze disease patterns across health facilities, SwissTPH researchers would\nhave to wait days until staff members exported, cleaned, and uploaded the\ndiagnoses data collected to DHIS2\u2014a time-consuming data process, prone to human\nerror."),(0,i.yg)("h4",{id:"openfn-helps-to-bridge-the-time-gap-between-data-collection-and-analysis"},"OpenFn helps to bridge the time gap between data collection and analysis."),(0,i.yg)("p",null,"OpenFn eliminates time lags, saving SwissTPH money and time and sending critical\npatient information where and when it is needed, faster. By integrating a\nCommCare mobile data collection app with a national DHIS2 reporting system for\nthe ALMANACH health initiative, OpenFn has provided SwissTPH with an automated,\nreal-time connection that enables live disease monitoring."),(0,i.yg)("p",null,"Every day the OpenFn automated reporting solution delivers 300 beneficiary case\nupdates and logs events with 100 individual \u201cdata elements\u201d in DHIS2. The\nsolution runs on Switzerland-based cloud servers to ensure compliance with\nSwissTPH\u2019s data residency concerns."),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"The photo above was originally posted on the SwissTPH News\n",(0,i.yg)("a",{parentName:"em",href:"https://www.swisstph.ch/de/swiss-tph-news/news-detail-d/news/improving-health-of-children-in-nigeria/"},"site"),".\nThe Almanach tablet-based decision support tool supports health workers in\ndiagnosing and treating sick children. OpenFn integrates this data with DHIS2\nfor real-time reporting.")))}d.isMDXComponent=!0},23948:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/swisstph1-a40422f3055ed82aabd6f9ad4e5d2a93.jpg"}}]);