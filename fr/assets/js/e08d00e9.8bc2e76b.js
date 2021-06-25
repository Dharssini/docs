(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8057],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},27503:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"CommCare to Azure Sql",sidebar_label:"CommCare to Azure Sql",id:"CommCare-to-Azure-Sql-2020-01-27",keywords:["library","job","expression","mssql","alterState","join","map","sql"]},l={unversionedId:"jobs/auto/CommCare-to-Azure-Sql-2020-01-27",id:"jobs/auto/CommCare-to-Azure-Sql-2020-01-27",isDocsHomePage:!1,title:"CommCare to Azure Sql",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/CommCare-to-Azure-Sql-2020-01-27.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/CommCare-to-Azure-Sql-2020-01-27",permalink:"/fr/library/jobs/auto/CommCare-to-Azure-Sql-2020-01-27",version:"current",sidebar_label:"CommCare to Azure Sql",frontMatter:{title:"CommCare to Azure Sql",sidebar_label:"CommCare to Azure Sql",id:"CommCare-to-Azure-Sql-2020-01-27",keywords:["library","job","expression","mssql","alterState","join","map","sql"]},sidebar:"library",previous:{title:"send email",permalink:"/fr/library/jobs/auto/send-mail-in-mailgun"},next:{title:"Extract Vitas Data",permalink:"/fr/library/jobs/auto/Extract-Vitas-Data-2021-05-11"}},s=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],m={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: CommCare to Azure Sql"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-mssql"},(0,o.kt)("inlineCode",{parentName:"a"},"@openfn/language-mssql"))),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-mssql"},(0,o.kt)("inlineCode",{parentName:"a"},"latest"))),(0,o.kt)("li",{parentName:"ul"},"Created over 1 year ago"),(0,o.kt)("li",{parentName:"ul"},"Updated about 1 year ago"),(0,o.kt)("li",{parentName:"ul"},"Score: ",(0,o.kt)("b",null,"3")," (an ",(0,o.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"join"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sql")),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Insert household, fail on duplicate (consider upsert strategy, if you want!)\nsql({\n  query:\n    'INSERT INTO Household (' +\n    [\n      'commcare_id',\n      'is_head',\n      'total_members',\n      'head_name',\n      'date_registered',\n      'village',\n      'new_thing',\n    ].join(', ') +\n    `) VALUES ('` +\n    [\n      state.data.metadata.instanceID,\n      state.data.form.head_of_household === 'yes' ? 1 : 0,\n      state.data.form.hh_members,\n      state.data.form.individual_name,\n      state.data.form.registration_date,\n      state.data.form.village_name,\n      state.data.form.new_q,\n    ].join(`', '`) +\n    `');`,\n});\n\n// Prepare a string to be used for VALUES (...) in our member insert.\nalterState(state => {\n  const data = state.references[0];\n  const form = data.form;\n  const parentId = data.metadata.instanceID;\n  const memArr = form.register_hh_members.map((m, i) => {\n    return `('${parentId}-${i}', '${parentId}', '${m.hh_member_name}', '${m.age}')`;\n  });\n\n  state.members = memArr.join(', ');\n  return state;\n});\n\n// Insert members, fail on duplicate\nsql({\n  query: state =>\n    `INSERT INTO HouseholdMember (commcare_id, parent, name, age) VALUES ${state.members}`,\n});\n\n")))}u.isMDXComponent=!0}}]);