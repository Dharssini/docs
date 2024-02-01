"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4664],{95788:(a,e,t)=>{t.d(e,{Iu:()=>u,yg:()=>g});var n=t(11504);function i(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function o(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function l(a,e){if(null==a)return{};var t,n,i=function(a,e){if(null==a)return{};var t,n,i={},o=Object.keys(a);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(i[t]=a[t]);return i}(a,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(i[t]=a[t])}return i}var s=n.createContext({}),c=function(a){var e=n.useContext(s),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},u=function(a){var e=c(a.components);return n.createElement(s.Provider,{value:e},a.children)},p="mdxType",d={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(a,e){var t=a.components,i=a.mdxType,o=a.originalType,s=a.parentName,u=l(a,["components","mdxType","originalType","parentName"]),p=c(t),m=i,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(g,r(r({ref:e},u),{},{components:t})):n.createElement(g,r({ref:e},u))}));function g(a,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=a,l[p]="string"==typeof a?a:i,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78952:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(45072),i=(t(11504),t(95788));const o={layout:"post",title:"Automating Real-Time Census Monitoring and Data Cleaning for iKapaData",author:"Lei Lei Tun",author_url:"https://github.com/hninleileitun",author_image_url:"https://avatars.githubusercontent.com/hninleileitun",tags:["case study","iKapaData","SurveyCTO","Zoho","Carto","data monitoring"],image:"/img/ikapa2.jpg",featured:!1},r=void 0,l={permalink:"/blog/2020/06/10/iKapaData-Case-Study",editUrl:"https://github.com/openfn/docs/edit/main/blog/2020-06-10-iKapaData-Case-Study.md",source:"@site/blog/2020-06-10-iKapaData-Case-Study.md",title:"Automating Real-Time Census Monitoring and Data Cleaning for iKapaData",description:"In 2017, OpenFn has saved the iKapaData team valuable time typically spent on",date:"2020-06-10T00:00:00.000Z",formattedDate:"June 10, 2020",tags:[{label:"case study",permalink:"/blog/tags/case-study"},{label:"iKapaData",permalink:"/blog/tags/i-kapa-data"},{label:"SurveyCTO",permalink:"/blog/tags/survey-cto"},{label:"Zoho",permalink:"/blog/tags/zoho"},{label:"Carto",permalink:"/blog/tags/carto"},{label:"data monitoring",permalink:"/blog/tags/data-monitoring"}],readingTime:1.825,hasTruncateMarker:!0,authors:[{name:"Lei Lei Tun",url:"https://github.com/hninleileitun",imageURL:"https://avatars.githubusercontent.com/hninleileitun"}],frontMatter:{layout:"post",title:"Automating Real-Time Census Monitoring and Data Cleaning for iKapaData",author:"Lei Lei Tun",author_url:"https://github.com/hninleileitun",author_image_url:"https://avatars.githubusercontent.com/hninleileitun",tags:["case study","iKapaData","SurveyCTO","Zoho","Carto","data monitoring"],image:"/img/ikapa2.jpg",featured:!1},prevItem:{title:"Real-Time Disease Monitoring for SwissTPH",permalink:"/blog/2020/06/25/SwissTPH-case-study"},nextItem:{title:"Enabling Scale at myAgro, 6 Years Later",permalink:"/blog/2020/06/09/enabling-scale-at-myagro"}},s={authorsImageUrls:[void 0]},c=[{value:"iKapaData&#39;s essential work in South Africa",id:"ikapadatas-essential-work-in-south-africa",level:3},{value:"iKapaData had no way to actively monitor data collection activities on the ground.",id:"ikapadata-had-no-way-to-actively-monitor-data-collection-activities-on-the-ground",level:4},{value:"Real-time data integration enabled live survey monitoring and quicker analysis.",id:"real-time-data-integration-enabled-live-survey-monitoring-and-quicker-analysis",level:4}],u={toc:c},p="wrapper";function d(a){let{components:e,...o}=a;return(0,i.yg)(p,(0,n.c)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"In 2017, OpenFn has saved the iKapaData team valuable time typically spent on\nmanual data entry and cleaning processes.The real-time connection has enabled\nlive data monitoring for the team as iKapaData survey enumerators were\nconducting the survey."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"ikapa",src:t(4108).c,width:"1024",height:"768"})),(0,i.yg)("h3",{id:"ikapadatas-essential-work-in-south-africa"},"iKapaData's essential work in South Africa"),(0,i.yg)("p",null,"The census plays an important role in public administration by creating a\ncompiled, numerical profile of South Africa. Enumerators are taught the local\nlanguage and local customs in order to effectively achieve information from all\nhouseholds. This dataset is used as a benchmark in research and analysis for the\npublic administration to determine policy decisions, budget decisions, and more.\nOpenFn enabled a system for iKapaData to ensure this delivery of accurate and\ntimely information for the census."),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"http://ikapadata.com/"},"iKapaData")," is a survey research and data science company\nwith an aim to make data accessible, tangible, and actionable. For a census in\nSouth Africa in 2017, they were collecting household data using\n",(0,i.yg)("a",{parentName:"p",href:"https://www.surveycto.com/"},"SurveyCTO.")," Each enumerator participating in the\nfieldwork was equipped with a tablet and an external GPS device for data\ncollection."),(0,i.yg)("h4",{id:"ikapadata-had-no-way-to-actively-monitor-data-collection-activities-on-the-ground"},"iKapaData had no way to actively monitor data collection activities on the ground."),(0,i.yg)("p",null,"As enumerators collected the census data, iKapaData wanted to analyze that\ndataset using two reporting applications, ",(0,i.yg)("a",{parentName:"p",href:"https://carto.com/"},"Carto")," and\n",(0,i.yg)("a",{parentName:"p",href:"https://www.zoho.com/"},"Zoho")," \u2013 each with its own data model and required\nformats. To upload the data into the two reporting systems, iKapaData would have\nto rely on time-intensive manual data migration, and there was no easy way to\nactively monitor the census data collection."),(0,i.yg)("h4",{id:"real-time-data-integration-enabled-live-survey-monitoring-and-quicker-analysis"},"Real-time data integration enabled live survey monitoring and quicker analysis."),(0,i.yg)("p",null,"OpenFn automation saved the iKapaData team valuable time typically spent on\nmanual data entry and cleaning processes. Using OpenFn, iKapaData set up\nautomated data cleaning and reporting pipelines that:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Automatically extracted data from SurveyCTO on a scheduled basis,"),(0,i.yg)("li",{parentName:"ul"},"Transformed data to the appropriate reporting formats for data and geo-spatial\nanalysis and,"),(0,i.yg)("li",{parentName:"ul"},"Uploaded key results to Zoho Analytics, while also adding locations to a map\non CartoDB to display the locations already visited by enumerators.")),(0,i.yg)("p",null,"The real-time connection enabled live data monitoring for the team as iKapaData\nsurvey enumerators were conducting the survey."),(0,i.yg)("p",null,"Learn more about OpenFn and SurveyCTO integrations\n",(0,i.yg)("a",{parentName:"p",href:"https://www.surveycto.com/blog/connecting-with-openfn/"},"here.")))}d.isMDXComponent=!0},4108:(a,e,t)=>{t.d(e,{c:()=>n});const n=t.p+"assets/images/ikapa2-f44d61a34f5b5203b90dc9abd2b576ba.jpg"}}]);