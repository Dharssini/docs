"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3549],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75720:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),i=["components"],l={title:"Create Person in OpenMRS",sidebar_label:"Create Person in OpenMRS",id:"Create-Person-in-OpenMRS-2016-02-12",keywords:["library","job","expression","openmrs","dataValue","field","fields"]},s=void 0,p={unversionedId:"jobs/auto/Create-Person-in-OpenMRS-2016-02-12",id:"jobs/auto/Create-Person-in-OpenMRS-2016-02-12",isDocsHomePage:!1,title:"Create Person in OpenMRS",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/Create-Person-in-OpenMRS-2016-02-12.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/Create-Person-in-OpenMRS-2016-02-12",permalink:"/library/jobs/auto/Create-Person-in-OpenMRS-2016-02-12",tags:[],version:"current",frontMatter:{title:"Create Person in OpenMRS",sidebar_label:"Create Person in OpenMRS",id:"Create-Person-in-OpenMRS-2016-02-12",keywords:["library","job","expression","openmrs","dataValue","field","fields"]},sidebar:"library",previous:{title:"Create Patient in OpenMRS",permalink:"/library/jobs/auto/Create-Patient-in-OpenMRS-2019-10-24"},next:{title:"Upsert to mBrana",permalink:"/library/jobs/auto/Upsert-to-mBrana-2021-05-11"}},u=[{value:"Metadata",id:"metadata",children:[],level:2},{value:"Key Functions",id:"key-functions",children:[],level:2},{value:"Expression",id:"expression",children:[],level:2}],c={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: Create Person in OpenMRS"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-openmrs"},(0,o.kt)("inlineCode",{parentName:"a"},"@openfn/language-openmrs"))),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-openmrs/releases/tag/v0.0.2"},(0,o.kt)("inlineCode",{parentName:"a"},"v0.0.2"))),(0,o.kt)("li",{parentName:"ul"},"Created almost 6 years ago"),(0,o.kt)("li",{parentName:"ul"},"Updated 7 months ago"),(0,o.kt)("li",{parentName:"ul"},"Score: ",(0,o.kt)("b",null,"0")," (an ",(0,o.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fields")),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'person(\n  fields(\n    field("gender", "M"),\n    field("names", function(state) {\n      return [{\n        "givenName": dataValue("form.first_name")(state),\n        "familyName": "Sports_Music_Field_Day"\n      }]\n    })\n  )\n)\n')))}d.isMDXComponent=!0}}]);