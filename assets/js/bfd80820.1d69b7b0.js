(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3063],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),f=r,m=c["".concat(s,".").concat(f)]||c[f]||p[f]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},56983:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),o={title:"Add data values with dhis2",sidebar_label:"\ud83d\udcdc Add data values",id:"DHIS2-DataValues-API",keywords:["library","job","expression","dhis2","dataValue","field","fields"]},l={unversionedId:"jobs/auto/DHIS2-DataValues-API",id:"jobs/auto/DHIS2-DataValues-API",isDocsHomePage:!1,title:"Add data values with dhis2",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/library/jobs/auto/DHIS2-DataValues-API.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/DHIS2-DataValues-API",permalink:"/library/jobs/auto/DHIS2-DataValues-API",version:"current",sidebar_label:"\ud83d\udcdc Add data values",frontMatter:{title:"Add data values with dhis2",sidebar_label:"\ud83d\udcdc Add data values",id:"DHIS2-DataValues-API",keywords:["library","job","expression","dhis2","dataValue","field","fields"]},sidebar:"library",previous:{title:"COVID-19 TEI (dhis2) with dhis2",permalink:"/library/jobs/auto/COVID-19 TEI dhis2-2021-03-22"},next:{title:"Add events with dhis2",permalink:"/library/jobs/auto/DHIS2-Events-API"}},s=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],u={toc:s};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\ud83d\udcdc ",(0,i.kt)("em",null,"This job is an official example from OpenFn.")),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name: Add data values"),(0,i.kt)("li",{parentName:"ul"},"Adaptor: ",(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2"},(0,i.kt)("inlineCode",{parentName:"a"},"@openfn/language-dhis2"))),(0,i.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2"},(0,i.kt)("inlineCode",{parentName:"a"},"latest"))),(0,i.kt)("li",{parentName:"ul"},"Created date unknown"),(0,i.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,i.kt)("li",{parentName:"ul"},"Score: ",(0,i.kt)("b",null,"100")," (an ",(0,i.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,i.kt)("h2",{id:"key-functions"},"Key Functions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fields")),(0,i.kt)("h2",{id:"expression"},"Expression"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// ----\n// Add data to data value sets in DHIS2 using a generic JSON message, submitted\n// by Taylor Downs @ OpenFn.\n// ---\n\ndataValueSet(\n  fields(\n    field('dataSet', 'pBOMPrpg1QX'),\n    field('orgUnit', 'DiszpKrYNg8'),\n    field('period', '201401'),\n    field('completeData', dataValue('form.date')),\n    field('dataValues', function (state) {\n      return [\n        dataElement('qrur9Dvnyt5', dataValue('form.prop_a')(state)),\n        dataElement('oZg33kd9taw', dataValue('form.prop_b')(state)),\n        dataElement('msodh3rEMJa', dataValue('form.prop_c')(state)),\n      ];\n    })\n  )\n);\n\n")))}d.isMDXComponent=!0}}]);