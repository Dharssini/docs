"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3054],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},s=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:e},s),{},{components:r})):n.createElement(f,a({ref:e},s))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:o,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90515:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],u={layout:"post",title:"Improving Multistage Docker Builds using Buildx",author:"Stuart Corbishley",author_url:"https://github.com/stuartc",author_image_url:"https://avatars.githubusercontent.com/stuartc",tags:["how-to","docker","ci/cd"],featured:!0},c=void 0,l={permalink:"/articles/2021/10/08/improving-multistage-docker-builds-using-buildx",editUrl:"https://github.com/openfn/docs/edit/main/articles/2021-10-08-improving-multistage-docker-builds-using-buildx.md",source:"@site/articles/2021-10-08-improving-multistage-docker-builds-using-buildx.md",title:"Improving Multistage Docker Builds using Buildx",description:"So you're using docker's multi-stage builds and noticed that your build times",date:"2021-10-08T00:00:00.000Z",formattedDate:"October 8, 2021",tags:[{label:"how-to",permalink:"/articles/tags/how-to"},{label:"docker",permalink:"/articles/tags/docker"},{label:"ci/cd",permalink:"/articles/tags/ci-cd"}],readingTime:5.985,truncated:!0,authors:[{name:"Stuart Corbishley",url:"https://github.com/stuartc",imageURL:"https://avatars.githubusercontent.com/stuartc"}],frontMatter:{layout:"post",title:"Improving Multistage Docker Builds using Buildx",author:"Stuart Corbishley",author_url:"https://github.com/stuartc",author_image_url:"https://avatars.githubusercontent.com/stuartc",tags:["how-to","docker","ci/cd"],featured:!0},prevItem:{title:"Moving from Webpack to esbuild on Phoenix",permalink:"/articles/2021/10/15/webpack-to-esbuild-part1"},nextItem:{title:"Wrapping my head around jobs",permalink:"/articles/2021/07/05/wrapping-my-head-around-jobs"}},s={authorsImageUrls:[void 0]},p=[],d={toc:p};function m(t){var e=t.components,r=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"So you're using docker's multi-stage builds and noticed that your build times\naren't nearly as quick as you expected?"))}m.isMDXComponent=!0}}]);