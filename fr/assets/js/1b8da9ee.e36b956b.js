(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[9275],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return l},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=c(a),d=r,b=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return a?n.createElement(b,s(s({ref:t},l),{},{components:a})):n.createElement(b,s({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},25352:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return l}});var n=a(22122),r=a(19756),o=(a(67294),a(3905)),s={title:"Tableau"},i={unversionedId:"apps/tableau",id:"apps/tableau",isDocsHomePage:!1,title:"Tableau",description:"(Work in progress)",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/apps/tableau.md",sourceDirName:"apps",slug:"/apps/tableau",permalink:"/fr/documentation/apps/tableau",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/tableau.md",version:"current",frontMatter:{title:"Tableau"},sidebar:"docs",previous:{title:"SurveyCTO",permalink:"/fr/documentation/apps/survey-cto"},next:{title:"Questions fr\xe9quemment pos\xe9es",permalink:"/fr/documentation/faqs"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Integration Use Cases",id:"integration-use-cases",children:[]}],c={toc:u};function l(e){var t=e.components,s=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"(Work in progress)"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.tableau.com/"},"Tableau")," is a visual analytics platform that helps people use data to solve problems."),(0,o.kt)("p",null,'Tableau Desktop does not have a built-in database, rather it connects to different data sources (files, databases, etc). After connecting to a data source, Tableau can "extract" that data into a Tableau Data Extract file that is both compressed and represented in a columnar store format.'),(0,o.kt)("p",null,"A list of the data sources that you can connect to Tableau from can be found here: ",(0,o.kt)("a",{parentName:"p",href:"https://www.tableau.com/products/techspecs"},"https://www.tableau.com/products/techspecs")),(0,o.kt)("p",null,"OpenFn has experience setting up databases structured in a way that Tableau can pull from."),(0,o.kt)("h2",{id:"integration-use-cases"},"Integration Use Cases"),(0,o.kt)("p",null,"An iNGO uses CommCare, Kobo Toolbox and Survey CTO for different maternal health projects in several different geographies. This iNGO would like to use a business intelligence tool, like Tableau, to create data visualisations for it's projects' key indicators. To accomplish this, the iNGO uses OpenFn to take the survey data from CommCare, Kobo Toolbox and Survey CTO and then create a structured database from it using MySQL. Once the structured database is established, OpenFn assists the iNGO with connecting this data to Tableau."),(0,o.kt)("p",null,"Refer to the diagram below for a visualization of the data flow cited in the above use case."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tableau Data Flow Visualization",src:a(44387).Z})))}l.isMDXComponent=!0},44387:function(e,t,a){"use strict";t.Z=a.p+"assets/images/survey_db_tableau-fd5bc5832da679ed66badac6a7130303.png"}}]);