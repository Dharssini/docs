(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[6992],{3905:function(e,a,n){"use strict";n.d(a,{Zo:function(){return s},kt:function(){return _}});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=t.createContext({}),c=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},s=function(e){var a=c(e.components);return t.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(n),_=r,p=f["".concat(d,".").concat(_)]||f[_]||u[_]||o;return n?t.createElement(p,i(i({ref:a},s),{},{components:n})):t.createElement(p,i({ref:a},s))}));function _(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58061:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d},default:function(){return s}});var t=n(22122),r=n(19756),o=(n(67294),n(3905)),i={title:"Using merge and each with salesforce",sidebar_label:"\ud83d\udcdc Using merge and each",id:"bring-formId-into-data-array-then-create-parent-and-children-in-salesforce",keywords:["library","job","expression","salesforce","create","dataPath","dataValue","each","field","fields","index","join","lastReferenceValue","merge"]},l={unversionedId:"jobs/auto/bring-formId-into-data-array-then-create-parent-and-children-in-salesforce",id:"jobs/auto/bring-formId-into-data-array-then-create-parent-and-children-in-salesforce",isDocsHomePage:!1,title:"Using merge and each with salesforce",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/library/jobs/auto/bring-formId-into-data-array-then-create-parent-and-children-in-salesforce.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/bring-formId-into-data-array-then-create-parent-and-children-in-salesforce",permalink:"/fr/library/jobs/auto/bring-formId-into-data-array-then-create-parent-and-children-in-salesforce",version:"current",sidebar_label:"\ud83d\udcdc Using merge and each",frontMatter:{title:"Using merge and each with salesforce",sidebar_label:"\ud83d\udcdc Using merge and each",id:"bring-formId-into-data-array-then-create-parent-and-children-in-salesforce",keywords:["library","job","expression","salesforce","create","dataPath","dataValue","each","field","fields","index","join","lastReferenceValue","merge"]},sidebar:"library",previous:{title:"Pre-processing data with salesforce",permalink:"/fr/library/jobs/auto/alter-state-before-operations"},next:{title:"Using promises with salesforce",permalink:"/fr/library/jobs/auto/complex-state-control"}},d=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],c={toc:d};function s(e){var a=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ud83d\udcdc ",(0,o.kt)("em",null,"This job is an official example from OpenFn.")),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: Using merge and each"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,o.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,o.kt)("inlineCode",{parentName:"a"},"latest"))),(0,o.kt)("li",{parentName:"ul"},"Created date unknown"),(0,o.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,o.kt)("li",{parentName:"ul"},"Score: ",(0,o.kt)("b",null,"100")," (an ",(0,o.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dataPath"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"each"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"index"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"join"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"lastReferenceValue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"merge")),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"each(\n  join('$.data.data[*]', '$.data.formId', 'formId'),\n  create(\n    'ODK_Submission__c',\n    fields(\n      //bridgetest sandbox record type, comment out when not in use\n      field('RecordTypeId', '012J00000005hlb'),\n      //prduction record type, comment out when not in use\n      //field(\"RecordType\", \"XXXXXXXXXXXXXXXX\"),\n      // or\n      //relationship(\"RecordType\", \"name\", dataValue(\"recort_type_name\")),\n      field('Record_Type_Name__c', dataValue('record_type_id')),\n      field('ODK_Form_Name__c', dataValue('formId')),\n      field('Site_School_ID_Number__c', dataValue('site')),\n      field('BT_Staff_ID__c', dataValue('recorded_by')),\n      field('Date__c', dataValue('today')),\n      field('Head_of_Household__c', dataValue('head_of_household')),\n      field(\n        'Head_of_Household_Gender__c',\n        dataValue('head_of_household_gender')\n      ),\n      field('Head_of_Household_age__c', dataValue('head_of_household_age')),\n      field('Light_Source__c', dataValue('light_source')),\n      field('communication__c', dataValue('communication')),\n      field('transport__c', dataValue('transport')),\n      field(\n        'number_of_children_in_household__c',\n        dataValue('number_of_children')\n      ),\n      field('school_visits__c', dataValue('school_visits')),\n      field('school_visit_reason__c', dataValue('school_visit_reason')),\n      field('Village__c', dataValue('village')),\n      field('ODK_Key__c', dataValue('*meta-instance-id*'))\n    )\n  )\n),\n  each(\n    merge(\n      dataPath('individual_na[*]'),\n      fields(\n        field('metaId', dataValue('*meta-instance-id*')),\n        field('parentId', lastReferenceValue('id')),\n        field('village', dataValue('$data.village'))\n      )\n    ),\n    create(\n      'ODK_Submission__c',\n      fields(\n        //bridgetest sandbox record type, comment out when not in use\n        field('RecordTypeId', '012J00000005hla'),\n        //prduction record type, comment out when not in use\n        //field(\"RecordType\", \"XXXXXXXXXXXXXXXX\"),\n        // or\n        //relationship(\"RecordType\", \"name\", dataValue(\"recort_type_name\")),\n        field('Related_ODK_Submission__c', dataValue('parentId')),\n        field('family_name__c', dataValue('given_name')),\n        field('school_coded__c', dataValue('school_coded')),\n        field('school_type__c', dataValue('school_type')),\n        field('gender__c', dataValue('gender')),\n        field('Pays_School_Fees__c', dataValue('school_fees_yes_no')),\n        field('in_primary_school__c', dataValue('in_primary_school')),\n        field('School_Fee_Amount__c', dataValue('school_fees')),\n        field('Age__c', dataValue('age')),\n        field('surname__c', dataValue('surname')),\n        field('out_of_school_reason__c', dataValue('out_of_school_reason')),\n        field('class_level__c', dataValue('class_level')),\n        field(\n          'other_out_of_school_reason__c',\n          dataValue('other_out_of_school_reason')\n        ),\n        field('Village__c', dataValue('village')),\n        // This is a concatenation, adding the unique child ID.\n        field('ODK_Key__c', function (state) {\n          return dataValue('metaId')(state).concat('(', index()(state), ')');\n        })\n      )\n    )\n  );\n\n")))}s.isMDXComponent=!0}}]);