(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[2231],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return f},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},f),{},{components:n})):r.createElement(m,i({ref:t},f))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},99322:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"Send sms from Salesforce workflow action with telerivet",sidebar_label:"\ud83d\udcdc Send sms from Salesforce workflow action",id:"send-sms-from-salesforce-workflow",keywords:["library","job","expression","telerivet","dataValue","field","fields","send"]},l={unversionedId:"jobs/auto/send-sms-from-salesforce-workflow",id:"jobs/auto/send-sms-from-salesforce-workflow",isDocsHomePage:!1,title:"Send sms from Salesforce workflow action with telerivet",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/library/jobs/auto/send-sms-from-salesforce-workflow.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/send-sms-from-salesforce-workflow",permalink:"/fr/library/jobs/auto/send-sms-from-salesforce-workflow",version:"current",sidebar_label:"\ud83d\udcdc Send sms from Salesforce workflow action",frontMatter:{title:"Send sms from Salesforce workflow action with telerivet",sidebar_label:"\ud83d\udcdc Send sms from Salesforce workflow action",id:"send-sms-from-salesforce-workflow",keywords:["library","job","expression","telerivet","dataValue","field","fields","send"]},sidebar:"library",previous:{title:"2. SMS Balance Update to Customer with telerivet",permalink:"/fr/library/jobs/auto/2. SMS Balance Update to Customer-2018-12-14"}},s=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],c={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\ud83d\udcdc ",(0,a.kt)("em",null,"This job is an official example from OpenFn.")),(0,a.kt)("h2",{id:"metadata"},"Metadata"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: Send sms from Salesforce workflow action"),(0,a.kt)("li",{parentName:"ul"},"Adaptor: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-telerivet"},(0,a.kt)("inlineCode",{parentName:"a"},"@openfn/language-telerivet"))),(0,a.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,a.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-telerivet"},(0,a.kt)("inlineCode",{parentName:"a"},"latest"))),(0,a.kt)("li",{parentName:"ul"},"Created date unknown"),(0,a.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,a.kt)("li",{parentName:"ul"},"Score: ",(0,a.kt)("b",null,"100")," (an ",(0,a.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,a.kt)("h2",{id:"key-functions"},"Key Functions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"send")),(0,a.kt)("h2",{id:"expression"},"Expression"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"send(\n  fields(\n    field(\n      'to_number',\n      dataValue(\n        'Envelope.Body.notifications.Notification.sObject.phone_number__c'\n      )\n    ),\n    field('message_type', 'sms'),\n    field('route_id', ''),\n    field('content', function (state) {\n      return 'Hey there. Your name is '.concat(\n        dataValue('Envelope.Body.notifications.Notification.sObject.name__c')(\n          state\n        ),\n        '.'\n      );\n    })\n  )\n);\n\n")))}f.isMDXComponent=!0}}]);