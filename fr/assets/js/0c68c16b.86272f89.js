(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8238],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),f=a,m=c["".concat(s,".").concat(f)]||c[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},93674:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"Add events with dhis2",sidebar_label:"\ud83d\udcdc Add events",id:"DHIS2-Events-API",keywords:["library","job","expression","dhis2","dataValue","field","fields"]},l={unversionedId:"jobs/auto/DHIS2-Events-API",id:"jobs/auto/DHIS2-Events-API",isDocsHomePage:!1,title:"Add events with dhis2",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/library/jobs/auto/DHIS2-Events-API.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/DHIS2-Events-API",permalink:"/fr/library/jobs/auto/DHIS2-Events-API",version:"current",sidebar_label:"\ud83d\udcdc Add events",frontMatter:{title:"Add events with dhis2",sidebar_label:"\ud83d\udcdc Add events",id:"DHIS2-Events-API",keywords:["library","job","expression","dhis2","dataValue","field","fields"]},sidebar:"library",previous:{title:"Add data values with dhis2",permalink:"/fr/library/jobs/auto/DHIS2-DataValues-API"},next:{title:"COVID Case Registration (gs) with googlesheets",permalink:"/fr/library/jobs/auto/COVID Case Registration gs-2021-03-02"}},s=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\ud83d\udcdc ",(0,i.kt)("em",null,"This job is an official example from OpenFn.")),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name: Add events"),(0,i.kt)("li",{parentName:"ul"},"Adaptor: ",(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2"},(0,i.kt)("inlineCode",{parentName:"a"},"@openfn/language-dhis2"))),(0,i.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2"},(0,i.kt)("inlineCode",{parentName:"a"},"latest"))),(0,i.kt)("li",{parentName:"ul"},"Created date unknown"),(0,i.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,i.kt)("li",{parentName:"ul"},"Score: ",(0,i.kt)("b",null,"100")," (an ",(0,i.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,i.kt)("h2",{id:"key-functions"},"Key Functions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fields")),(0,i.kt)("h2",{id:"expression"},"Expression"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// ----\n// Create new events in DHIS2 using a generic JSON message, submitted by\n// Taylor Downs @ OpenFn for demonstration porpoises.\n// ---\n\nevent(\n  fields(\n    field('program', 'eBAyeGv0exc'),\n    field('orgUnit', 'DiszpKrYNg8'),\n    field('eventDate', dataValue('meta.date')),\n    field('status', 'COMPLETED'),\n    field('storedBy', 'admin'),\n    field('coordinate', {\n      latitude: '59.8',\n      longitude: '10.9',\n    }),\n    field('dataValues', function (state) {\n      return [\n        dataElement('qrur9Dvnyt5', dataValue('form.prop_a')(state)),\n        dataElement('oZg33kd9taw', dataValue('form.prop_b')(state)),\n        dataElement('msodh3rEMJa', dataValue('form.prop_c')(state)),\n      ];\n    })\n  )\n);\n\n")))}d.isMDXComponent=!0}}]);