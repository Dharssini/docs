"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[50103],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function _(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=_(e,["components","mdxType","originalType","parentName"]),c=p(r),u=o,m=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return r?t.createElement(m,a(a({ref:n},l),{},{components:r})):t.createElement(m,a({ref:n},l))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var _={};for(var s in n)hasOwnProperty.call(n,s)&&(_[s]=n[s]);_.originalType=e,_[c]="string"==typeof e?e:o,a[1]=_;for(var p=2;p<i;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},31554:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>_,toc:()=>p});var t=r(87462),o=(r(67294),r(3905));const i={title:"WF2-2. Bulk upsert Persons",sidebar_label:"\u2728 WF2-2. Bulk upsert Persons",id:"WF2-2-Bulk-upsert-Persons-2023-05-19",keywords:["library","job","expression","salesforce","bulk","dataValue","field","fields","join","map","query","relationship","upsertIf","JSON"]},a=void 0,_={unversionedId:"library/jobs/auto/WF2-2-Bulk-upsert-Persons-2023-05-19",id:"library/jobs/auto/WF2-2-Bulk-upsert-Persons-2023-05-19",title:"WF2-2. Bulk upsert Persons",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/adaptors/library/jobs/auto/WF2-2-Bulk-upsert-Persons-2023-05-19.md",sourceDirName:"library/jobs/auto",slug:"/library/jobs/auto/WF2-2-Bulk-upsert-Persons-2023-05-19",permalink:"/fr/adaptors/library/jobs/auto/WF2-2-Bulk-upsert-Persons-2023-05-19",draft:!1,tags:[],version:"current",frontMatter:{title:"WF2-2. Bulk upsert Persons",sidebar_label:"\u2728 WF2-2. Bulk upsert Persons",id:"WF2-2-Bulk-upsert-Persons-2023-05-19",keywords:["library","job","expression","salesforce","bulk","dataValue","field","fields","join","map","query","relationship","upsertIf","JSON"]},sidebar:"adaptors",previous:{title:"\u2728 Coach Session Register",permalink:"/fr/adaptors/library/jobs/auto/Coach-Session-Register-2021-05-03"},next:{title:"\u2728 Create Intervention",permalink:"/fr/adaptors/library/jobs/auto/Create-Intervention-2021-04-08"}},s={},p=[{value:"Metadata",id:"metadata",level:2},{value:"Key Functions",id:"key-functions",level:2},{value:"Expression",id:"expression",level:2}],l={toc:p},c="wrapper";function d(e){let{components:n,...r}=e;return(0,o.kt)(c,(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: WF2-2. Bulk upsert Persons"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,o.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v3.0.6"},(0,o.kt)("inlineCode",{parentName:"a"},"v3.0.6"))),(0,o.kt)("li",{parentName:"ul"},"Created 4 months ago"),(0,o.kt)("li",{parentName:"ul"},"Updated about 2 months ago"),(0,o.kt)("li",{parentName:"ul"},"Score: ",(0,o.kt)("b",null,"92")," (an ",(0,o.kt)("a",{parentName:"li",href:"/adaptors/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"bulk"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"join"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"query"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"relationship"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"upsertIf"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fn(state => {\n  if (state.payloads.length == 0)\n    return {\n      ...state,\n      householdMapping: [],\n      headOfHouseholdMapping: [],\n      motherMapping: [],\n      caregiverMapping: [],\n      sfRecordMapping: [],\n    };\n    // JSON logging of records\n    //HMN debug\n  //console.log('cases before query :: ', JSON.stringify(state.payloads, null, 2));\n  const owner_ids = state.payloads.map(data => data.properties.owner_id);\n  const uniq_owner_ids = [...new Set(owner_ids)];\n\n  return { ...state, uniq_owner_ids };\n});\n\n// get data from SF\nfn(state => {\n  if (state.payloads.length == 0) return state;\n\n  return query(\n    `SELECT CommCare_User_ID__c, Id village, Parent_Geographic_Area__c area, Parent_Geographic_Area__r.Name name, Parent_Geographic_Area__r.Parent_Geographic_Area__c catchment FROM Location__c WHERE CommCare_User_ID__c IN ('${state.uniq_owner_ids.join(\n      \"','\"\n    )}') GROUP BY Id, CommCare_User_ID__c, Parent_Geographic_Area__c, Parent_Geographic_Area__r.Name, Parent_Geographic_Area__r.Parent_Geographic_Area__c`\n  )(state);\n});\n\nfn(state => {\n  if (state.payloads.length == 0) return state;\n\n  const [reference] = state.references;\n\n  // console.log(JSON.stringify(reference.records, null, 2));\n\n  const records = reference.records;\n  const fetchReference = (owner_id, arg) => {\n    const result =\n      records && records.length > 0\n        ? records.filter(record => record.CommCare_User_ID__c === owner_id)\n        : 0;\n\n    //TODO: Update default value for 'unknown location' before go-live\n    return result.length > 0 ? result[0][arg] \n    : 'a000800001tMobaAAC' /*unknown location*/;\n\n  };\n\n  const cleanChoice = choice => {\n    if (choice) {\n      return choice.charAt(0).toUpperCase() + choice.slice(1).replace('_', ' ');\n    } else {\n      return '';\n    }\n  };\n\n  const handleMultiSelect = multiField => {\n    return multiField\n      ? multiField\n          .replace(/ /gi, ';')\n          .toLowerCase()\n          .split(';')\n          .map(value => {\n            return (\n              value.charAt(0).toUpperCase() + value.slice(1).replace('_', ' ')\n            );\n          })\n          .join(';')\n      : '';\n  };\n\n  const pregDangerMap = {\n    Vaginal_Bleeding: 'Vaginal Bleeding',\n    Water_Breaks: 'Water Breaks before Time of Delivery',\n    Prolonged_Labour: 'Prolonged Labour over 12 Hours',\n    Convulsions: 'Convulsions or Fits',\n    Abdominal_Pain: 'Severe Abdominal Pain before Delivery',\n    High_Fever: 'High Fever',\n    Low_Baby_Movement: 'Feeling the Baby move less or not at all',\n    Swelling: 'Swelling of Face and Hands',\n    Severe_Headache: 'Severe or Continuous Headache for more than 12 hours',\n    Severe_Vomiting: 'Severe or Continuous Vomiting',\n    none: 'None',\n  };\n\n  const counselMap = {\n    anc_visits: 'ANC Visits',\n    early_initiation_of_anc_less_than_3_months:\n      'Early initiation of ANC (less than 3 months)',\n    completing_recomended_anc_visits: 'Completing recomended ANC visits',\n    danger_signs: 'Danger signs',\n    skilled_birth: 'Skilled birth',\n    immunization: 'Immunization',\n    individual_birth_plan: 'Individual Birth Plan',\n    emergency_preparedness: 'Emergency preparedness',\n    childcare_and_affection: 'Childcare and affection',\n    nutrition_counseling: 'Nutrition counseling',\n    growth_monitoring: 'Growth monitoring',\n    exclusive_breastfeeding: 'Exclusive breastfeeding',\n    complementary_feeding: 'Complementary feeding',\n    sleeping_under_llitn: 'Sleeping under LLITN',\n    knowing_hiv_status: 'Knowing HIV status',\n    indoor_pollution: 'Indoor pollution',\n    personal_hygiene: 'Personal Hygiene',\n    safe_drinking_water: 'Safe drinking water',\n    safe_disposal_of_human_waste: 'Safe disposal of human waste',\n  };\n\n  const serviceMap = {\n    Scheduled_PSC_Apt: 'Scheduled PSC Apt',\n    Adverse_Drug_Reaction_Side_Effect: 'Adverse Drug Reaction/Side Effect',\n    Malnutrition: 'Malnutrition',\n    Malaria: 'Malaria',\n    TB: 'TB',\n    Treatment_for_Other_OIs: 'Treatment for other Ols',\n    ARI: 'ARI',\n    Anemia: 'Anemia',\n    Diarrhea: 'Diarrhea',\n    Pregnancy_Care: 'Pregnancy Care (ANC)',\n    Family_Planning: 'Family Planning (FP)',\n    Preconception_Counseling: 'Preconception Counseling',\n    Injury: 'Injury',\n    Other: 'Other',\n  };\n\n  const reasonMapping = {\n    lack_of_access_to_fp_information: 'Lack of access to FP information',\n    no_access_to_fp_services_hospitals:\n      'Lack of hospitals or places where FP services can be accessed',\n    not_willing_to_use_fp_due_to_negative_effects_myths_and_misconceptions:\n      'Myths and misconceptions',\n    barriers_at_service_delivery_points: 'Barriers at service delivery points',\n    pregnant: 'The client is pregnant',\n    intentions_of_getting_pregnant: 'Intentions of getting pregnant',\n    not_sexually_active: 'The client is not sexually active',\n    other_barriers_culture_male_partners_parents_etc:\n      'Other barriers (culture, male partners, parents, etc)',\n  };\n\n  const milestoneTypeMap = {\n    cognitive_delays_learning_difficulties:\n      'Cognitive Delays Learning Difficulties',\n    motor_delays: 'Motor Delays',\n    speech_and_language_delay: 'Delay Speech and Language Delay',\n    social_and_emotional: 'Social and emotional',\n  };\n\n  const milestoneMap = {\n    movement: 'Movement',\n    hearing: 'Hearing',\n    communication: 'Communication',\n    seeing: 'Seeing',\n    cognitive_delays: 'Cognitive Delays',\n    play: 'Play',\n  };\n  const nutritionMap = {\n    severe: 'Severely Malnourished',\n    moderate: 'Moderately Malnourished',\n    normal: 'Normal',\n  };\n\n  const fpMethodMap = {\n    male_condoms: 'Male condoms',\n    female_condoms: 'Female condoms',\n    pop: 'POP',\n    coc: 'COC',\n    emergency_pills: 'Emergency pills',\n    none: 'None',\n  };\n\n  return {\n    ...state,\n    counselMap,\n    serviceMap,\n    reasonMapping,\n    milestoneTypeMap,\n    milestoneMap,\n    nutritionMap,\n    pregDangerMap,\n    fpMethodMap,\n    cleanChoice,\n    handleMultiSelect,\n    fetchReference,\n  };\n});\n\n// build sfRecord before upserting\nfn(state => {\n  if (state.payloads.length == 0) return state;\n\n  const {\n    counselMap,\n    reasonMapping,\n    milestoneTypeMap,\n    milestoneMap,\n    nutritionMap,\n    pregDangerMap,\n    fpMethodMap,\n    cleanChoice,\n    handleMultiSelect,\n    fetchReference,\n  } = state;\n\n  const householdMapping = [\n    ...new Map(\n      state.payloads\n       .filter(\n          p =>\n            p.indices.parent.case_id  !== undefined &&\n            p.indices.parent.case_id  !== ''\n        )\n        .map(p => {\n          return {\n            CommCare_Code__c:\n              p.indices.parent.case_id || p.properties.parent_id,\n          };\n        })\n        .map(h => [h.CommCare_Code__c, h])\n    ).values(),\n  ];\n\n  const headOfHouseholdMapping = state.payloads\n    .filter(\n      p =>\n        p.properties.head_of_household_case_id !== undefined &&\n        p.properties.head_of_household_case_id !== ''\n    )\n    .map(p => {\n      return {\n        CommCare_Code__c: p.indices.parent.case_id || p.properties.parent_id,\n        'Head_of_Household__r.CommCare_ID__c':\n          p.properties.head_of_household_case_id,\n      };\n    });\n\n  const motherMapping = state.payloads\n    .filter(\n      p =>\n       /*HMN 050723 p.properties.commcare_username !== 'test.2021' &&\n        p.properties.test_user !== 'Yes' &&\n        */\n        p.properties.mother_case_id !== undefined &&\n        p.properties.mother_case_id !== '' &&\n        p.case_id!== undefined\n    )\n    .map(p => {\n      return {\n        'Mother__r.CommCare_ID__c': p.properties.mother_case_id,\n        CommCare_ID__c: p.case_id,\n      };\n    });\n\n  const caregiverMapping = state.payloads\n    .filter(\n      p =>\n       /*HMN 070523 p.properties.commcare_username !== 'test.2021' &&\n        p.properties.test_user !== 'Yes' &&\n        */\n        p.properties.caretaker_case_id !== undefined &&\n        p.properties.caretaker_case_id !== '' &&\n        p.case_id!== undefined\n    )\n    .map(p => {\n      return {\n        'Primary_Caregiver_Lookup__r.CommCare_ID__c':\n          p.properties.caretaker_case_id,\n        CommCare_ID__c: p.case_id,\n      };\n    });\n\n  const sfRecordMapping = state.payloads\n  .filter(\n      p =>\n       /*HMN 050723 \n        p.properties.commcare_username !== 'test.2021' &&\n        p.properties.test_user !== 'Yes'\n        */\n        p.case_id !== undefined &&\n        p.case_id !== ''\n    ) \n    .map(p => {\n      // For unbornOrName\n      const name1 = p.properties.Person_Name || p.properties.case_name;\n      const unborn = p.properties.name;\n\n      const name2 =\n        name1 === undefined || name1 === '' || name1 === null\n          ? unborn\n          : name1.replace(/\\w\\S*/g, function (txt) {\n              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();\n            });\n      const unbornOrName = name1 !== null ? name2 : 'Unborn Child';\n      // console.log('Person Name ::', unbornOrName);\n\n      // For chronicIllness\n      const chronicChoice =p.properties.please_specify_which_chronic_illness_the_person_has;\n      const choice2 = handleMultiSelect(chronicChoice);\n      const chronicIllness = choice2 ? choice2.replace(/_/g, ' ') : '';\n\n      const disabilityC =\n        p.properties.disability !== undefined && p.properties.disability !=='---' && p.properties.disability !== null\n          ? p.properties.disability\n              .toLowerCase()\n              .split(' ')\n              .map(word => word.charAt(0).toUpperCase() + word.slice(1))\n              .join(';')\n          : null;\n//HMN remove\nconsole.log(p.case_id)\n//console.log(disabilityC)\n//\n      const otherDisability =\n        p.properties.other_disability !== undefined && p.properties.other_disability !=='---' && p.properties.other_disability !== null\n          ? p.properties.other_disability\n              .toLowerCase()\n              .split(' ')\n              .map(word => word.charAt(0).toUpperCase() + word.slice(1))\n              .join(';')\n          : null;\n//HMN remove\n//console.log(otherDisability)\n//HMN\n      const hh_relation = p.properties.relation_to_hh;\n\n      const relationToTheHead = hh_relation !== undefined && hh_relation !== null\n        ? hh_relation.toString().replace(/_/g, ' ').charAt(0).toUpperCase() +\n          hh_relation.toString().replace(/_/g, ' ').slice(1)\n        : null;\n\n      const childStatus =\n        p.properties.Child_Status && p.properties.Record_Type === 'Unborn'\n          ? (p.properties.Child_Status = 'Unborn')\n          : p.properties.Child_Status && p.properties.Record_Type === 'Born'\n          ? (p.properties.Child_Status = 'Born')\n          : p.properties.Child_Status;\n\n      const childDangerSigns = p.properties.Other_Danger_Signs !== undefined && p.properties.Other_Danger_Signs !== null \n        ? p.properties.Other_Danger_Signs.toLowerCase()\n            .split(' ')\n            .map(word => word.charAt(0).toUpperCase() + word.slice(1))\n            .join(';')\n            .toString()\n            .replace(/_/g, ' ')\n        : p.properties.Other_Danger_Signs;\n\n      //clientCounselled\n      const clientChoices = p.properties.counsel_topic;\n      const choiceGroups = clientChoices ? clientChoices.split(' ') : null;\n      const clientCounselled = choiceGroups\n        ? choiceGroups\n            .map(cg => {\n              return counselMap[cg];\n            })\n            .join(';')\n        : choiceGroups;\n\n      // fpMethodDistributed\n      const fpStatus = p.properties.FP_commodity;\n      const fpValue =\n        fpStatus && fpStatus !== ''\n          ? fpStatus\n              .replace(/ /gi, ';')\n              .split(';')\n              .map(value => {\n                return fpMethodMap[value] || value;\n              })\n          : undefined;\n      const fpMethodDistributed = fpValue ? fpValue.join(';') : undefined;\n\n      // placeOfDelivery\n      const pFacility = p.properties.Delivery_Type;\n      const placeOfDelivery =\n        pFacility === 'Skilled'\n          ? 'Facility'\n          : pFacility === 'Unskilled'\n          ? 'Home'\n          : undefined;\n\n      // reasonForNotTakingFP\n      const rStatus = p.properties.No_FPmethod_reason;\n      const rValue =\n        rStatus && rStatus !== ''\n          ? rStatus\n              .replace(/ /gi, ';')\n              .split(';')\n              .map(value => {\n                return reasonMapping[value] || value;\n              })\n          : undefined;\n      const reasonForNotTakingFP = rValue ? rValue.join(';') : undefined;\n      \n      const recordType = p.properties.Record_Type;\n     \n      \n      return {\n        // TODO @aleksa, Source__c is causing an error\n        Source__c: true,\n        CommCare_ID__c: p.case_id,\n  \n        //HMN 05072023 'Primary_Caregiver_Lookup__r.CommCare_ID__c':p.properties.caretaker_case_id,\n        //HMN 05072023 'Mother__r.CommCare_ID__c': p.properties.mother_case_id,\n        'Household__r.CommCare_Code__c':\n          p.properties.parent_id || p.indices.parent.case_id,\n        commcare_location_id__c: p.properties.commcare_location_id,\n        CommCare_Username__c: p.properties.commcare_username,\n        Telephone__c: p.properties.contact_phone_number,\n\n        Consent_for_data_use__c: p.properties.data_sharing_consent,\n        CommCare_HH_Code__c: p.indices.parent.case_id,\n        Client_Status__c: p.properties.Client_Status,\n        Catchment__c: fetchReference(p.properties.owner_id, 'catchment'),\n        Area__c: fetchReference(p.properties.owner_id, 'area'),\n        Household_Village__c: fetchReference(p.properties.owner_id, 'village'),\n        Name: unbornOrName,\n        Chronic_illness__c: chronicIllness,\n        Currently_enrolled_in_school__c: p.properties.enrolled_in_school,\n        Education_Level__c: p.properties.Education_Level !== null && p.properties.Education_Level !== undefined\n          ? p.properties.Education_Level.toString().replace(/_/g, ' ')\n          : null,\n        Relation_to_the_head_of_the_household__c: relationToTheHead,\n        Gender__c: p.properties.Gender !== undefined ? p.properties.Gender : null,\n        Disability__c: disabilityC,\n        Other_disability__c: otherDisability,\n        Use_mosquito_net__c: p.properties.sleep_under_net,\n        Birth_Certificate__c: p.properties.birth_certificate,\n        Child_Status__c: childStatus,\n        'RecordType.Name': recordType === 'Unborn' || recordType === '' \n          ? 'Child' \n          : recordType.toString().replace(/_/g, ' '), //convert Unborn children to Child RT\n        //TT5 Mother Information  =====================//\n        MCH_booklet__c: p.properties.mch_booklet,\n        Reason_for_not_taking_a_pregnancy_test__c: p.properties.No_Preg_Test\n          ? p.properties.No_Preg_Test.toString().replace(/_/g, ' ')\n          : undefined,\n        Pregnancy_danger_signs__c: p.properties.pregnancy_danger_signs\n          ? pregDangerMap[p.properties.pregnancy_danger_signs]\n          : undefined,\n        Individual_birth_plan_counselling__c:\n          p.properties.individual_birth_plan,\n        Child_Danger_Signs__c: childDangerSigns,\n        //HAWI =====================//\n\n        Unique_Patient_Code__c: p.properties.Unique_Patient_Code,\n        Active_in_Support_Group__c: p.properties.Active_in_Support_Group,\n        Preferred_Care_Facility__c: p.properties.Preferred_Care_Facility,\n        Currently_on_ART_s__c: p.properties.ART,\n        ART_Regimen__c: p.properties.ARVs,\n        HAWI_Defaulter__c: p.properties.default === 'Yes' ? true : false,\n        Date_of_Default__c: p.properties.date_of_default,\n        Know_HIV_status__c: p.properties.known_hiv_status,\n        HIV_Status__c: p.properties.hiv_status,\n        //Illness ========================//\n        Persons_temperature__c: p.properties.temperature,\n        Days_since_illness_start__c: p.properties.duration_of_sickness,\n        Current_Malaria_Status__c: p.properties.malaria_test_results,\n        Malaria_test__c: p.properties.malaria_test,\n        Last_Malaria_Home_Test__c: p.properties.malaria_test_date,\n        Last_Malaria_Home_Treatment__c: cleanChoice(\n          p.properties.malaria_test_date\n        ),\n        Cough_over_14days__c: p.properties.symptoms_check_cough,\n        TB_patients_therapy_observed__c: p.properties.observed_tb_therapy,\n        Injuries_or_wounds__c: p.properties.wounds_or_injuries,\n        Pulse_Oximeter__c: p.properties.pulse_oximeter_available,\n        Heart_Rate_Pulse_Oximeter__c: p.properties.heart_rate_pulse_oximeter,\n        Oxygen_Concentration_Pulse_Oximeter__c:\n          p.properties.oxygen_concentration,\n        Can_child_drink__c: p.properties.can_child_drink,\n        Antibiotic_provided_for_fast_breathing__c: cleanChoice(\n          p.properties.antibiotic_fast_breathing\n        ),\n        Antibiotic_provided_for_chest_indrawing__c: cleanChoice(\n          p.properties.antibiotic_chest_indrawing\n        ),\n        Default_on_TB_treatment__c: cleanChoice(\n          p.properties.default_tb_treatment\n        ),\n        Treatment_Distribution__c: cleanChoice(\n          p.properties.distributed_treatments\n        ),\n        //Delivery  =====================//\n        Immediate_Breastfeeding__c: p.properties.Breastfeeding_Delivery,\n        Place_of_Delivery__c: placeOfDelivery,\n        Delivery_Facility__c: p.properties.Delivery_Facility\n          ? p.properties.Delivery_Facility.toString().replace(/_/g, ' ')\n          : null,\n        Delivery_Facility_Other__c: p.properties.Delivery_Facility_Other,\n        //Family Planning  =====================//\n        LMP__c: p.properties.LMP,\n        Family_Planning__c: p.properties.family_planning,\n        Family_Planning_Method__c: p.properties.family_planning_method,\n        FP_Method_Distributed__c: fpMethodDistributed,\n        Reasons_for_not_taking_FP_method__c: reasonForNotTakingFP,\n        Pregnant__c: p.properties.Pregnant === 'Yes' ? true : false,\n        Date_of_Delivery__c: p.properties.delivery_date,\n        Counselled_on_FP_Methods__c: p.properties.CounselledFP_methods,\n        Client_counselled_on__c: clientCounselled,\n        Client_provided_with_FP__c: cleanChoice(\n          p.properties[\n            'was_the_woman_15-49yrs_provided_with_family_planning_commodities_by_chv'\n          ]\n        ),\n        Received_pregnancy_test__c:\n          p.properties.did_you_adminsiter_a_pregnancy_test,\n        Pregnancy_test_result__c: p.properties.pregnancy_test_result,\n        Gravida__c: p.properties.Gravida,\n        Parity__c: p.properties.Parity,\n        //TT5 Child Information  =====================//\n        Exclusive_Breastfeeding__c: p.properties.Exclusive_Breastfeeding,\n        Counselled_on_Exclusive_Breastfeeding__c: p.properties.counseling,\n        Newborn_visited_48_hours_of_delivery__c:\n          p.properties.newborn_visited_48_hours_of_delivery,\n        Newborn_visit_counselling__c: cleanChoice(\n          p.properties.did_you_consel_the_mother_on1\n        ),\n        mother_visited_48_hours_of_the_delivery__c:\n          p.properties.visit_mother_48,\n        Mother_visit_counselling__c: cleanChoice(\n          p.properties.did_you_consel_the_mother_on2\n        ),\n        Newborn_visited_by_a_CHW_within_6_days__c:\n          p.properties.visit_6_days_from_delivery,\n        //Nutrition  =====================//\n        Caretaker_action_after_muac_screening__c:\n          p.properties.mother_screened_muac_action,\n        Caretaker_muac_findings__c:\n          p.properties.mother_screened_child_muac_result,\n        Food_groups_3_times_a_day__c: p.properties.food_groups,\n        Caretaker_screened_for_muac_this__c: cleanChoice(\n          p.properties.mother_screened_child_muac\n        ),\n        Caretaker_trained_in_muac__c: cleanChoice(\n          p.properties.mother_trained_muac\n        ),\n        of_Caretaker_MUAC_screenings__c: p.properties.mother_nb_screening,\n        Current_Height__c: p.properties.current_height,\n        Current_MUAC__c: p.properties.MUAC,\n        Current_Nutrition_Status__c: p.properties.Nutrition_Status\n          ? nutritionMap[p.properties.Nutrition_Status]\n          : undefined,\n        //TT5 & HAWI  =====================//\n        TT5_Mother_Registrant__c: p.properties.Pregnant == 'Yes' ? 'Yes' : null,\n        Enrollment_Date__c:\n          p.properties.age < 5 || p.properties.Pregnant == 'Yes'\n            ? p.server_date_modified\n            : null,\n        HAWI_Enrollment_Date__c:\n          p.properties.hiv_status == 'positive' ? p.server_date_modified : null,\n        Thrive_Thru_5_Registrant__c:\n          p.properties.age < 5 || p.properties.Pregnant == 'Yes' ? 'Yes' : 'No',\n        HAWI_Registrant__c:\n          p.properties.hiv_status == 'positive' ? 'Yes' : 'No',\n        //ANC  =====================//\n        ANC_1__c:\n          p.properties.ANC_1 && p.properties.ANC_1 !== ''\n            ? p.properties.ANC_1\n            : undefined,\n        ANC_2__c:\n          p.properties.ANC_2 && p.properties.ANC_2 !== ''\n            ? p.properties.ANC_2\n            : undefined,\n        ANC_3__c:\n          p.properties.ANC_3 && p.properties.ANC_3 !== ''\n            ? p.properties.ANC_3\n            : undefined,\n        ANC_4__c:\n          p.properties.ANC_4 && p.properties.ANC_4 !== ''\n            ? p.properties.ANC_4\n            : undefined,\n        ANC_5__c:\n          p.properties.ANC_5 && p.properties.ANC_5 !== ''\n            ? p.properties.ANC_5\n            : undefined,\n        Date_of_Birth__c:\n          p.properties.DOB && p.properties.DOB !== ''\n            ? p.properties.DOB.replace(/\\\\/g, '-')\n            : undefined,\n        //Immunization  =====================//\n        // Child_missed_immunization_type__c:\n        //   p.form.TT5.Child_Information.Immunizations.immunization_type,\n        BCG__c: p.properties.BCG,\n        OPV_0__c: p.properties.OPV_0,\n        Measles_6__c: p.properties.Measles_6,\n        Measles_9__c: p.properties.Measles_9,\n        Measles_18__c: p.properties.Measles_18,\n        OPV_1__c: p.properties.OPV_PCV_Penta_1,\n        OPV_2__c: p.properties.OPV_PCV_Penta_2,\n        OPV_3__c: p.properties.OPV_PCV_Penta_3,\n        Rotavirus_1__c: p.properties.rotavirus_1,\n        Rotavirus_2__c: p.properties.rotavirus_2,\n        IPV__c: p.properties.IPV,\n        Vitamin_A_12__c: p.properties.Vitamine_A,\n        Vitamin_A_18__c: p.properties.Vitamine_A_2,\n        Vitamin_A_24__c: p.properties.Vitamine_A_3,\n        Deworming_12__c: p.properties.Deworming_1,\n        Deworming_18__c: p.properties.Deworming_2,\n        Deworming_24__c: p.properties.Deworming_3,\n        //ECD  =====================//\n        Did_you_counsel_caregiver_on__c: cleanChoice(\n          p.properties.did_you_counsel_the_caregiver_on_delayed_milestones\n        ),\n        Delayed_Milestone__c: cleanChoice(\n          p.properties.does_the_child_has_a_delayed_milestone\n        ),\n        Child_has_2_or_more_play_items__c: cleanChoice(\n          p.properties.does_the_child_has_2_or_more_play_items_at_home\n        ),\n        Child_has_3_or_more_picture_books__c: cleanChoice(\n          p.properties.does_the_child_has_3_or_more_picture_books\n        ),\n        Delayed_Milestones_Counselled_On__c: p.properties\n          .which_delayed_milestone_area_did_you_counsel_the_caregiver_on\n          ? milestoneMap[\n              p.properties\n                .which_delayed_milestone_area_did_you_counsel_the_caregiver_on\n            ]\n          : undefined,\n        Delayed_Milestone_Type__c: p.properties.which_delayed_milestone\n          ? milestoneTypeMap[p.properties.which_delayed_milestone]\n          : undefined,\n        //Death  =====================//\n        Date_of_Death__c: p.properties.Date_of_Death,\n        Cause_of_Death__c: p.properties.cause_of_death_dead\n          ? p.properties.cause_of_death_dead.toString().replace(/_/g, ' ')\n          : p.properties.cause_of_death_dead,\n        Verbal_autopsy__c: p.properties.verbal_autopsy,\n        //Closing  =====================//\n        Last_Modified_Date_CommCare__c: p.date_modified,\n        Case_Closed_Date__c: p.date_closed,\n      };\n    });\n\n  sfRecordMapping.forEach(rec => {\n    Object.entries(rec).forEach(([key, value]) => {\n      if (value === '' || value === null) rec[key] = undefined;\n    });\n  });\n\n  // TODO clean up after QA\n  // console.log(JSON.stringify(caregiverMapping, null, 2), 'careGiver');\n  // console.log(JSON.stringify(motherMapping, null, 2), 'Mother');\n   //console.log(JSON.stringify(sfRecordMapping, null, 2), 'sfRecordMapping');\n  // console.log(JSON.stringify(householdMapping, null, 2), 'householdMapping');\n  // console.log(\n  //   JSON.stringify(headOfHouseholdMapping, null, 2),\n  //   'headOfHouseholdMapping'\n  // );\n\n  return {\n    ...state,\n    motherMapping,\n    sfRecordMapping,\n    caregiverMapping,\n    householdMapping,\n    headOfHouseholdMapping,\n  };\n});\n\n\n// TODO, Clean up when pass QA\n /*fn(state => {\n   state.sfRecordMapping.forEach(rec => {\n    Object.entries(rec).forEach(([key, value]) => {\n       if (typeof key !== 'string') throw `${key} is not a string`;\n    });\n   });\n   return state;\n });\n*/\n// bulk(\n//   'Household__c',\n//   'upsert',\n//   {\n//     extIdField: 'CommCare_Code__c',\n//     failOnError: true,\n//     allowNoOp: true,\n//   },\n//   state => {\n//     console.log('Bulk upserting...');\n//     return state.householdMapping;\n//   }\n// );\n\n// TODO, Clean up when pass QA\n// upsert data to SF\n// upsertIf(\n//   state.data.properties.commcare_username !== 'test.2021' &&\n//     state.data.properties.test_user !== 'Yes',\n//   'Person__c',\n//   'CommCare_ID__c',\n//   state => state.sfRecord\n// );\n\nbulk(\n  'Person__c',\n  'upsert',\n  {\n    extIdField: 'CommCare_ID__c',\n    failOnError: true,\n    allowNoOp: true,\n  },\n  state => {\n    console.log('Bulk upserting persons ::');\n    //HMN commented this  \n    //console.log(JSON.stringify(state.sfRecordMapping, null, 2));\n    return state.sfRecordMapping;\n  }\n);\n// TODO, Clean up when pass QA\n// upsertIf(\n//   state.data.properties.commcare_username !== 'test.2021' &&\n//     state.data.properties.test_user !== 'Yes' &&\n//     state.data.properties.caretaker_case_id !== undefined &&\n//     state.data.properties.caretaker_case_id !== '',\n//   'Person__c',\n//   'CommCare_ID__c',\n//   fields(\n//     relationship('Primary_Caregiver_Lookup__r', 'CommCare_ID__c', state => {\n//       return (caregiver = dataValue('properties.caretaker_case_id')(state));\n//     }),\n//     field('CommCare_ID__c', dataValue('case_id'))\n//   )\n// );\n\nbulk(\n  'Person__c',\n  'upsert',\n  {\n    extIdField: 'CommCare_ID__c',\n    failOnError: true,\n    allowNoOp: true,\n  },\n  state => {\n    console.log('Bulk upserting primary caregiver Persons ::');\n    //console.log(JSON.stringify(state.caregiverMapping, null, 2));\n    return state.caregiverMapping;\n  }\n);\n\n// TODO, Clean up when pass QA\n// upsertIf(\n//   state.data.properties.commcare_username !== 'test.2021' &&\n//     state.data.properties.test_user !== 'Yes' &&\n//     state.data.properties.mother_case_id !== undefined &&\n//     state.data.properties.mother_case_id !== '',\n//   'Person__c',\n//   'CommCare_ID__c',\n//   fields(\n//     relationship('Mother__r', 'CommCare_ID__c', state => {\n//       return (caregiver = dataValue('properties.mother_case_id')(state));\n//     }),\n//     field('CommCare_ID__c', dataValue('case_id'))\n//   )\n// );\nbulk(\n  'Person__c',\n  'upsert',\n  {\n    extIdField: 'CommCare_ID__c',\n    failOnError: true,\n    allowNoOp: true,\n  },\n  state => {\n    console.log('Bulk upserting mother Person::');\n   // console.log(JSON.stringify(state.motherMapping, null, 2));\n    return state.motherMapping;\n  }\n);\n\n// TODO, Clean up when pass QA\n// upsertIf(\n//   state.data.properties.commcare_username !== 'test.2021' &&\n//     state.data.properties.test_user !== 'Yes' &&\n//     state.data.properties.head_of_household_case_id !== undefined &&\n//     state.data.properties.head_of_household_case_id !== '',\n//   'Household__c',\n//   'CommCare_Code__c',\n//   fields(\n//     field('CommCare_Code__c', dataValue('indices.parent.case_id')),\n//     relationship(\n//       'Head_of_Household__r',\n//       'CommCare_ID__c',\n//       dataValue('properties.head_of_household_case_id')\n//     )\n//   )\n// );\n\nbulk(\n  'Household__c',\n  'upsert',\n  {\n    extIdField: 'CommCare_Code__c',\n    failOnError: true,\n    allowNoOp: true,\n  },\n  state => {\n    console.log('Bulk upserting head of household field on HH ::');\n   // console.log(JSON.stringify(state.headOfHouseholdMapping, null, 2));\n    return state.headOfHouseholdMapping;\n  }\n);\n\n")))}d.isMDXComponent=!0}}]);