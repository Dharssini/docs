"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[34128],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>d});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,d=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76120:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(45072),a=(r(11504),r(95788));const o={layout:"post",title:"Moving from Webpack to esbuild on Phoenix",author:"Stuart Corbishley",author_url:"https://github.com/stuartc",author_image_url:"https://avatars.githubusercontent.com/stuartc",tags:["how-to","js","webpack","build","phoenix","ci/cd"],featured:!0},i=void 0,l={permalink:"/articles/2021/10/15/webpack-to-esbuild-part1",editUrl:"https://github.com/openfn/docs/edit/main/articles/2021-10-15-webpack-to-esbuild-part1.md",source:"@site/articles/2021-10-15-webpack-to-esbuild-part1.md",title:"Moving from Webpack to esbuild on Phoenix",description:"We're very happy users of Elixir and Phoenix at OpenFn, given that we've been",date:"2021-10-15T00:00:00.000Z",formattedDate:"October 15, 2021",tags:[{label:"how-to",permalink:"/articles/tags/how-to"},{label:"js",permalink:"/articles/tags/js"},{label:"webpack",permalink:"/articles/tags/webpack"},{label:"build",permalink:"/articles/tags/build"},{label:"phoenix",permalink:"/articles/tags/phoenix"},{label:"ci/cd",permalink:"/articles/tags/ci-cd"}],readingTime:6.47,hasTruncateMarker:!0,authors:[{name:"Stuart Corbishley",url:"https://github.com/stuartc",imageURL:"https://avatars.githubusercontent.com/stuartc"}],frontMatter:{layout:"post",title:"Moving from Webpack to esbuild on Phoenix",author:"Stuart Corbishley",author_url:"https://github.com/stuartc",author_image_url:"https://avatars.githubusercontent.com/stuartc",tags:["how-to","js","webpack","build","phoenix","ci/cd"],featured:!0},prevItem:{title:"Testing a React app, the blurred line between Unit, integration and E2E",permalink:"/articles/2021/10/22/testing-react-app-with-jest-hound"},nextItem:{title:"Improving Multistage Docker Builds using Buildx",permalink:"/articles/2021/10/08/improving-multistage-docker-builds-using-buildx"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s},p="wrapper";function b(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"We're very happy users of Elixir and Phoenix at OpenFn, given that we've been\nusing it continuously for about 6 years - upgrades and all. Our front-end\ntoolchain, albeit far from out of date (Webpack ",(0,a.yg)("inlineCode",{parentName:"p"},"5.52.1")," today) has left some\nroom for improvement."))}b.isMDXComponent=!0}}]);