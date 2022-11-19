"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[94349],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=l(r),m=o,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(y,i(i({ref:e},u),{},{components:r})):n.createElement(y,i({ref:e},u))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9118:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={layout:"post",title:"Tracked entity instances in DHIS2",author:"Taylor Downs",author_url:"https://github.com/taylordowns2000",author_image_url:"https://avatars.githubusercontent.com/taylordowns2000",tags:["how-to","tips"],featured:!0},i=void 0,s={permalink:"/articles/2020/12/09/upsert-in-dhis2",editUrl:"https://github.com/openfn/docs/edit/main/articles/2020-12-09-upsert-in-dhis2.md",source:"@site/articles/2020-12-09-upsert-in-dhis2.md",title:"Tracked entity instances in DHIS2",description:"tl;dr: Lots of our users want to upsert tracked entity instances in dhis2, but",date:"2020-12-09T00:00:00.000Z",formattedDate:"December 9, 2020",tags:[{label:"how-to",permalink:"/articles/tags/how-to"},{label:"tips",permalink:"/articles/tags/tips"}],readingTime:1.71,hasTruncateMarker:!0,authors:[{name:"Taylor Downs",url:"https://github.com/taylordowns2000",imageURL:"https://avatars.githubusercontent.com/taylordowns2000"}],frontMatter:{layout:"post",title:"Tracked entity instances in DHIS2",author:"Taylor Downs",author_url:"https://github.com/taylordowns2000",author_image_url:"https://avatars.githubusercontent.com/taylordowns2000",tags:["how-to","tips"],featured:!0},prevItem:{title:"Our Servers or Yours: Thinking through deployment options",permalink:"/articles/2021/02/03/hosted-or-local-deployment"},nextItem:{title:"Product News: Enhanced Scheduled/Periodic Job Control",permalink:"/articles/2020/07/14/cron-is-better-than-a-timer"}},c={authorsImageUrls:[void 0]},l=[],u={toc:l};function p(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"tl;dr: Lots of our users want to upsert tracked entity instances in dhis2, but\nupserts aren\u2019t supported by a standard DHIS2 API endpoint. We built one in our\ndhis2 adaptor: it\u2019s composed of existing APIs and a bit of logic \ud83e\udd14. Now you can\n",(0,o.kt)("inlineCode",{parentName:"p"},"upsert")," tracked entity instances to DHIS2 \ud83d\udc4d \u2705."))}p.isMDXComponent=!0}}]);