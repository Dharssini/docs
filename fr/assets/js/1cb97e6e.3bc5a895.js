"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[2058],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),p=a,m=f["".concat(i,".").concat(p)]||f[p]||d[p]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6717:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),s=["components"],l={title:"Close Household in Salesforce",sidebar_label:"Close Household in Salesforce",id:"Close-Household-in-Salesforce-2022-02-21",keywords:["library","job","expression","salesforce","dataValue","field","fields","upsert"]},i=void 0,u={unversionedId:"jobs/auto/Close-Household-in-Salesforce-2022-02-21",id:"jobs/auto/Close-Household-in-Salesforce-2022-02-21",title:"Close Household in Salesforce",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/Close-Household-in-Salesforce-2022-02-21.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/Close-Household-in-Salesforce-2022-02-21",permalink:"/fr/library/jobs/auto/Close-Household-in-Salesforce-2022-02-21",draft:!1,tags:[],version:"current",frontMatter:{title:"Close Household in Salesforce",sidebar_label:"Close Household in Salesforce",id:"Close-Household-in-Salesforce-2022-02-21",keywords:["library","job","expression","salesforce","dataValue","field","fields","upsert"]},sidebar:"library",previous:{title:"CHW Reassignment (Production)",permalink:"/fr/library/jobs/auto/CHW-Reassignment-Production-2017-05-15"},next:{title:"Coach Session Register",permalink:"/fr/library/jobs/auto/Coach-Session-Register-2021-05-03"}},c={},d=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],f={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: Close Household in Salesforce"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,o.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v2.7.4"},(0,o.kt)("inlineCode",{parentName:"a"},"v2.7.4"))),(0,o.kt)("li",{parentName:"ul"},"Created 3 months ago"),(0,o.kt)("li",{parentName:"ul"},"Updated 3 months ago"),(0,o.kt)("li",{parentName:"ul"},"Score: ",(0,o.kt)("b",null,"0")," (an ",(0,o.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"upsert")),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"upsert(\n  'Household__c',\n  'CommCare_Code__c',\n  fields(\n    field('CommCare_Username__c', dataValue('form.meta.username')),\n    field('CommCare_Code__c', dataValue('form.case.@case_id')),\n    field('Active_Household__c', state => {\n      var status = dataValue('form.case.close')(state);\n      return status && status !== 'No' && status !== false && status ===''\n        ? true\n        : undefined;\n    }),\n    field('Source__c', 1),\n    field('Last_Modified_Date_CommCare__c', dataValue('server_modified_on')),\n    field('Case_Closed_Date__c', state => {\n      var status = dataValue('form.case.close')(state);\n      var closed = status && status !== 'No' && status !== false && status ===''\n        ? true\n        : undefined;\n      var date =  dataValue('server_modified_on')(state); \n      return closed && closed == true ? date : undefined; \n    })\n  )\n)\n")))}p.isMDXComponent=!0}}]);