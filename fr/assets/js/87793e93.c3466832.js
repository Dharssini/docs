"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[2852],{3905:function(e,t,a){a.d(t,{Zo:function(){return _},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},_=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,_=s(e,["components","mdxType","originalType","parentName"]),p=d(a),c=r,h=p["".concat(l,".").concat(c)]||p[c]||u[c]||o;return a?n.createElement(h,i(i({ref:t},_),{},{components:a})):n.createElement(h,i({ref:t},_))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},41210:function(e,t,a){a.r(t),a.d(t,{assets:function(){return _},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=["components"],s={title:"Upsert Household",sidebar_label:"Upsert Household",id:"Upsert-Household-2022-02-24",keywords:["library","job","expression","salesforce","dataValue","field","fields","query","relationship","upsertIf"]},l=void 0,d={unversionedId:"jobs/auto/Upsert-Household-2022-02-24",id:"jobs/auto/Upsert-Household-2022-02-24",title:"Upsert Household",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/Upsert-Household-2022-02-24.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/Upsert-Household-2022-02-24",permalink:"/fr/library/jobs/auto/Upsert-Household-2022-02-24",draft:!1,tags:[],version:"current",frontMatter:{title:"Upsert Household",sidebar_label:"Upsert Household",id:"Upsert-Household-2022-02-24",keywords:["library","job","expression","salesforce","dataValue","field","fields","query","relationship","upsertIf"]},sidebar:"library",previous:{title:"\u2728 Upsert Home Visit Log Form",permalink:"/fr/library/jobs/auto/Upsert-Home-Visit-Log-Form-2021-05-03"},next:{title:"\u2728 Upsert Household & Household Visit",permalink:"/fr/library/jobs/auto/Upsert-Household-Household-Visit-2022-06-28"}},_={},u=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],p={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: Upsert Household"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,o.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,o.kt)("inlineCode",{parentName:"a"},"latest"))),(0,o.kt)("li",{parentName:"ul"},"Created 5 months ago"),(0,o.kt)("li",{parentName:"ul"},"Updated 11 days ago"),(0,o.kt)("li",{parentName:"ul"},"Score: ",(0,o.kt)("b",null,"61")," (an ",(0,o.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"relationship"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"upsertIf")),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"query(\n  `SELECT Id, Parent_Geographic_Area__c, Parent_Geographic_Area__r.Name, Parent_Geographic_Area__r.Parent_Geographic_Area__c FROM Location__c WHERE CommCare_User_ID__c = '${dataValue(\n    'properties.owner_id'\n  )(state)}'`\n);\n\nfn(state => ({\n  ...state,\n  data: {\n    ...state.data,\n    villageNewId:\n      state.references[0].records && state.references[0].records.length !== 0\n        ? state.references[0].records[0].Id\n        : undefined,\n    areaNewId:\n      state.references[0].records && state.references[0].records.length !== 0\n        ? state.references[0].records[0].Parent_Geographic_Area__c\n        : undefined,\n    catchmentNewId:\n      state.references[0].records && state.references[0].records.length !== 0\n        ? (state.references[0].records[0].Parent_Geographic_Area__r \n          ? state.references[0].records[0].Parent_Geographic_Area__r.Parent_Geographic_Area__c\n          : undefined)\n        : undefined,\n  },\n}));\n\nupsertIf(\n    state.data.properties.commcare_username !== 'test.2021' &&\n    state.data.properties.test_user  !== 'Yes' ,\n  'Household__c',\n  'CommCare_Code__c',\n  fields(\n    field('CommCare_Username__c', dataValue('properties.commcare_username')),\n    field('MOH_household_code__c', dataValue('properties.moh_code')),\n   field('CommCare_Code__c', dataValue('case_id')),\n    field('Source__c', true),\n    //field('Household_CHW__c', 'a030Q00000A0jeYQAR'), //sandbox hardcoded mapping\n    field('Household_CHW__c', state => {\n      var chw = dataValue('properties.CHW_ID')(state);\n      return chw === 'a030800001zQrk'\n        ? 'a030800001zQrk5'\n        : chw\n        ? chw\n        : undefined;\n    }),\n   //TODO: Prod mapping to add back before go-live\n    field('Catchment__c', dataValue('catchmentNewId')),\n    field('Area__c', dataValue('areaNewId')),\n    field('Village__c', dataValue('villageNewId')),\n    field('Household_Village__c', dataValue('properties.village')),\n  //   relationship('Catchment__r', 'Name', state => {\n  //     var catchment =\n  //       state.data.properties.catchement ||\n  //       state.data.properties.catchment_name;\n  //     return catchment === '' || catchment === undefined\n  //       ? 'Unknown Location'\n  //       : catchment;\n  //   }), // check\n  //   field('Area__c', state => {\n  //    // var area = dataValue('properties.Area_Name')(state);\n  //     return area === '' || area === undefined ? 'a000Q00000Egmu4' : area;\n  //   }),  // Commented out because it was causing a job error \n  //   field('Household_village__c', dataValue('properties.village')),//case property, but not in message\n  \n  //   field('Village__c',dataValue('properties.village_name')), //lookup\n    field('Deaths_in_the_last_6_months__c', state => {\n      var death = dataValue(\n        'properties.deaths_in_past_6_months'\n      )(state);\n      return death > 0 ? 'Yes' : 'No';\n    }),\n    field('Access_to_safe_water__c',dataValue('properties.Safe_Water')),//not coming through\n    field('Treats_Drinking_Water__c',dataValue('properties.Treats_Drinking_Water')),//not coming through\n    field('Tippy_Tap__c',dataValue('properties.Active_Handwashing_Station')),//not coming through\n    field('Pit_Latrine__c',dataValue('properties.Functional_Latrine')),//not coming through\n    field('Rubbish_Pit__c',dataValue('properties.Rubbish_Pit')),//not coming through\n    field('Drying_Rack__c',dataValue('properties.Drying_Rack')),//not coming through\n    field('Kitchen_Garden__c',dataValue('properties.Kitchen_Garden')),//not coming through\n    field('Cookstove__c',dataValue('properties.Improved_Cooking_Method')),//not coming through\n    field('Clothe__c',dataValue('properties.Clothesline')),//not coming through\n    field('WASH_Trained__c',dataValue('properties.WASH_Trained')),//not coming through\n    field('Uses_ITNs__c',dataValue('properties.ITNs')),\n     field(\n      'Has_muac_tape__c',\n      dataValue('properties.family_muac_tape_available')\n    ),\n    //field('Total_household_people__c',dataValue('properties.Total_Number_of_Members')), //not coming through\n    field('Health_insurance__c', dataValue('properties.health_insurace_cover')),\n    field('Health_insurance_active_status__c',dataValue('properties.healthinsurance_active')),\n    field('Health_insurance_type__c', state => {\n      var status = dataValue('properties.health_insurance')(state);\n      return status && status === 'other_please_specify_if_active'\n        ? 'Other'\n        : status === 'nhif'\n        ? 'NHIF'\n        : status === 'Linda_mama' || 'linda_mama'\n        ? 'Linda mama'\n        : status;\n    }),\n    field('Other_Health_Insurance__c',dataValue('properties.if_other_please_specify')),\n    field('Work_with_TBA__c', dataValue('properties.tba')),\n    field('TBA_name__c', dataValue('properties.which_tba')),\n    field('Last_Modified_Date_CommCare__c', dataValue('server_date_modified')),//Need a case property),\n    field('Active_Household__c', state => {\n      var status = dataValue('properties.Household_Status')(state);\n      return status && status === 'No'\n        ? false\n        : status === 'Yes'\n        ? true\n        : status;\n    }),\n    // relationship('Head_of_Household__r', 'CommCare_ID__c', dataValue('properties.head_of_household_case_id')),\n     field('Inactive_Reason__c', state => {\n      var reason = dataValue('properties.Reason_for_Inactive')(state);\n      return reason ? reason.toString().replace(/_/g, ' ') : null;\n    }),\n     field(\n      'Active_in_Nutrition_Program__c',\n      dataValue(\n        'properties.enrolled_in_a_lwala_nutrition_program'\n      )\n    ),\n    field(\n      'lwala_nutrition_program_enrollment_date__c',\n      dataValue(\n        'properties.lwala_nutrition_program_enrollment_date'\n      )\n    ),\n    field(\n      'Trained_in_gardening__c',\n      dataValue('properties.household_trained_on_gardening')\n    ),\n    field(\n      'household_trained_on_gardening_date__c',\n      dataValue(\n        'properties.when_was_the_household_trained_on_gardening'\n      )\n    ),\n    field(\n      'Seed_Input_Support__c',\n      dataValue('properties.household_provided_with_seed_input_support'\n      )\n    ),\n    field(\n      'household_provided_with_seed_input_suppo__c',\n      dataValue(\n        'properties.when_was_the_household_provided_with_seed_input_support'\n      )\n    ),\n    field(\n      'MIYCN_Trained__c',\n      dataValue('properties.household_trained_on_MIYCN')\n    ),\n    // not in message:\n    // field(\n    //   'Kitchen_Garden__c',\n    //   dataValue('properties.nutrition_enrollment.household_has_kitchen_garden')\n    // ),\n\n    //field('Case_Closed_Date__c', state => {\n    //  var closed = dataValue('date_closed')(state); \n    //  var date =  dataValue('server_date_modified')(state); \n    //  return closed && closed == true ? date : undefined; \n   // })\n    )\n);\n\n")))}c.isMDXComponent=!0}}]);