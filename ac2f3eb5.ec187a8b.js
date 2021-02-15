(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{194:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(7),o=(t(0),t(253)),i={},c={unversionedId:"jobs/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks",id:"jobs/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks",isDocsHomePage:!1,title:"ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks",description:"`js",source:"@site/library/jobs/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks.md",slug:"/jobs/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks",permalink:"/library/jobs/ODK-Create-Many-Records-Moving-In-And-Out-Of-Repeat-Blocks",version:"current",sidebar:"library",previous:{title:"DHIS2-Events-API",permalink:"/library/jobs/DHIS2-Events-API"},next:{title:"send-mail-in-mailgun",permalink:"/library/jobs/send-mail-in-mailgun"}},l=[],d={toc:l};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/*\n  Create many records from an ODK submission, moving in and out of repeat\n  blocks, submitted by Taylor Downs @ OpenFn.\n*/\n\nbeta.each(\n  '$.data.data[*]',\n  create(\n    'ODK__c',\n    fields(\n      field('Event_Type__c', dataValue('event_type')),\n      field('Training_Type__c', dataValue('training_type')),\n      field('Event_Leader_ID__c', dataValue('leader')),\n      field('Event_Date__c', dataValue('date')),\n      field('metainstanceid__c', dataValue('*meta-instance-id*'))\n    )\n  )\n),\n  beta.each(\n    merge(\n      dataPath('data[*].attendee_new[*]'),\n      fields(field('parentId', lastReferenceValue('id')))\n    ),\n    create(\n      'ODK_Child_2__c',\n      fields(\n        field('ODK__c', dataValue('parentId')),\n        field('Barcode__c', dataValue('new_attendee_id')),\n        field('First_Name__c', dataValue('new_attendee_first_name')),\n        field('Last_Name__c', dataValue('new_attendee_last_name')),\n        field('Phone_Number__c', dataValue('new_attendee_phone'))\n      )\n    )\n  ),\n  beta.each(\n    merge(\n      dataPath('data[*].attendee[*]'),\n      fields(\n        field('parentId', function (state) {\n          return state.references[state.references.length - 1].id;\n        })\n        // ^^ This will get the sfID of the 1st item created.\n      )\n    ),\n    create(\n      'ODK_Child_1__c',\n      fields(\n        field('ODK__c', dataValue('parentId')),\n        field('Barcode__c', dataValue('attendee_id')),\n        field('Late__c', dataValue('late'))\n      )\n    )\n  );\n")))}s.isMDXComponent=!0},253:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),s=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),p=a,b=u["".concat(i,".").concat(p)]||u[p]||f[p]||o;return t?r.a.createElement(b,c(c({ref:n},d),{},{components:t})):r.a.createElement(b,c({ref:n},d))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);