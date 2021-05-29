(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[6307],{3905:function(e,a,n){"use strict";n.d(a,{Zo:function(){return s},kt:function(){return m}});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function u(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},s=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?t.createElement(f,o(o({ref:a},s),{},{components:n})):t.createElement(f,o({ref:a},s))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var u={};for(var l in a)hasOwnProperty.call(a,l)&&(u[l]=a[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var p=2;p<i;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},19538:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return o},metadata:function(){return u},toc:function(){return l},default:function(){return s}});var t=n(22122),r=n(19756),i=(n(67294),n(3905)),o={id:"each",title:"L'op\xe9ration each(...)"},u={unversionedId:"jobs/each",id:"jobs/each",isDocsHomePage:!1,title:"L'op\xe9ration each(...)",description:"L'op\xe9ration each vous permet d'effectuer une autre op\xe9ration sur chaque \xe9l\xe9ment d'une tableau.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/jobs/each.md",sourceDirName:"jobs",slug:"/jobs/each",permalink:"/fr/documentation/jobs/each",editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/each.md",version:"current",frontMatter:{id:"each",title:"L'op\xe9ration each(...)"},sidebar:"docs",previous:{title:"Initial and final state for runs",permalink:"/fr/documentation/jobs/state"},next:{title:"Le Job Studio OpenFn",permalink:"/fr/documentation/jobs/job-studio"}},l=[{value:"Each prend deux arguments",id:"each-prend-deux-arguments",children:[{value:"arrayPath",id:"arraypath",children:[]},{value:"l&#39;op\xe9ration",id:"lop\xe9ration",children:[]}]},{value:"dataValue(...) <em>dans</em> each(...)",id:"datavalue-dans-each",children:[]},{value:"fusionner (...) et ramener les donn\xe9es \xab\xa0vers le bas\xa0\xbb dans un tableau\xa0:",id:"fusionner--et-ramener-les-donn\xe9es-\xab-vers-le-bas-\xbb-dans-un-tableau-",children:[]},{value:"beta.each",id:"betaeach",children:[]}],p={toc:l};function s(e){var a=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"L'op\xe9ration ",(0,i.kt)("inlineCode",{parentName:"p"},"each")," vous permet d'effectuer une autre op\xe9ration sur chaque \xe9l\xe9ment d'une tableau."),(0,i.kt)("h2",{id:"each-prend-deux-arguments"},"Each prend deux arguments"),(0,i.kt)("p",null,"En d'autres termes, ",(0,i.kt)("inlineCode",{parentName:"p"},"each(arrayPath, operation)")," va ",(0,i.kt)("em",{parentName:"p"},"faire")," une ",(0,i.kt)("inlineCode",{parentName:"p"},"operation")," sur chaque \xe9l\xe9ment qu'il trouve dans le tableau ",(0,i.kt)("inlineCode",{parentName:"p"},"arrayPath"),". Cela ne prend que deux arguments\xa0:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"un arrayPath"),(0,i.kt)("li",{parentName:"ol"},"une op\xe9ration(...)")),(0,i.kt)("h3",{id:"arraypath"},"arrayPath"),(0,i.kt)("p",null,"Regardons le premier argument dans ",(0,i.kt)("inlineCode",{parentName:"p"},"each"),"... le chemin vers le tableau. Consid\xe9rez le code suivant \xe0 l'aide de l'adaptateur Salesforce\xa0:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"each(\n  dataPath('form.participants[*]'),\n  upsert(\n    'Person__c',\n    'Participant_Identification_Number_PID__c',\n    fields(\n      field('Participant_Identification_Number_PID__c', dataValue('pid')),\n      relationship('RecordType', 'Name', 'Participant'),\n      field('First_Name__c', dataValue('participant_first_name')),\n      field('Surname__c', dataValue('participant_surname')),\n      field('Mobile_Number_1__c', dataValue('mobile_number'))\n      field('Sex__c', dataValue('gender')),\n    )\n  )\n);\n")),(0,i.kt)("p",null,"Cela va ins\xe9rer une ressource ",(0,i.kt)("inlineCode",{parentName:"p"},"Person__c")," dans Salesforce pour chaque \xe9l\xe9ment trouv\xe9 dans le tableau ",(0,i.kt)("inlineCode",{parentName:"p"},"state.data.form.participants"),". Vous pouvez sp\xe9cifier ce chemin de la mani\xe8re suivante\xa0:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'$.data.form.participants[*]'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dataPath('form.participants[*]')"))),(0,i.kt)("p",null,"Remarquez la syntaxe du chemin JSON."),(0,i.kt)("h3",{id:"lop\xe9ration"},"l'op\xe9ration"),(0,i.kt)("p",null,"S'il y a 5 participants, il ex\xe9cutera l'op\xe9ration ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert")," sur tous les 5 \xe9l\xe9ments, en s\xe9quence. ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert")," prend les arguments qu'il prend normalement mais il op\xe8re ",(0,i.kt)("em",{parentName:"p"},"dans")," de tableau. Voir ci-dessous pour plus de d\xe9tails sur la ",(0,i.kt)("em",{parentName:"p"},"port\xe9e")," de cette op\xe9ration."),(0,i.kt)("h2",{id:"datavalue-dans-each"},"dataValue(...) ",(0,i.kt)("em",{parentName:"h2"},"dans")," each(...)"),(0,i.kt)("p",null,"Notez que dans l'op\xe9ration ",(0,i.kt)("inlineCode",{parentName:"p"},"each(...)"),", en utilisant ",(0,i.kt)("inlineCode",{parentName:"p"},"dataValue(path)")," va \xe9valuer un chemin \xe0 l'int\xe9rieur de chaque \xe9l\xe9ment du tableau."),(0,i.kt)("h2",{id:"fusionner--et-ramener-les-donn\xe9es-\xab-vers-le-bas-\xbb-dans-un-tableau-"},"fusionner (...) et ramener les donn\xe9es \xab\xa0vers le bas\xa0\xbb dans un tableau\xa0:"),(0,i.kt)("p",null,"Et si vous voulez acc\xe9der aux donn\xe9es dans votre op\xe9ration ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert")," qui n'existe ",(0,i.kt)("em",{parentName:"p"},"pas")," dans le tableau lui-m\xeame. Vous pouvez utiliser une \xe9tape de pr\xe9paration de donn\xe9es (voir\xa0: ",(0,i.kt)("inlineCode",{parentName:"p"},"alterState"),") ou utiliser ",(0,i.kt)("inlineCode",{parentName:"p"},"merge(path, data)")," qui vous permet de fusionner les donn\xe9es de la port\xe9e initiale vers le bas dans votre tableau et d'y acc\xe9der \xe0 partir de l'op\xe9ration ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"each(\n  merge(\n    dataPath('form.participants[*]'),\n    fields(\n      field('school_id', dataValue('form.school.id')),\n      field('intervention_type', dataValue('form.type'))\n    )\n  ),\n  upsert(\n    'Person__c',\n    'Participant_Identification_Number_PID__c',\n    fields(\n      field('Participant_Identification_Number_PID__c', dataValue('pid')),\n      relationship('RecordType', 'Name', 'Participant'),\n      field('First_Name__c', dataValue('participant_first_name')),\n      field('Surname__c', dataValue('participant_surname')),\n      field('Mobile_Number_1__c', dataValue('mobile_number'))\n      field('Sex__c', dataValue('gender')),\n      // new fields...\n      field('School__c', dataValue('school_id')),\n      field('Intervention_Type__c', dataValue('intervention_type'))\n    )\n  )\n);\n")),(0,i.kt)("h2",{id:"betaeach"},"beta.each"),(0,i.kt)("p",null,"Apr\xe8s avoir utilis\xe9 une op\xe9ration ",(0,i.kt)("inlineCode",{parentName:"p"},"each(...)"),", la port\xe9e des op\xe9rations suivantes sera \xe0 l'int\xe9rieur du tableau \xe0 ",(0,i.kt)("inlineCode",{parentName:"p"},"arrayPath"),". Si vous voulez retourner \xe0 la port\xe9e de niveau sup\xe9rieur pour que vous puissiez it\xe9rer dans un autre tableau plut\xf4t que de continuer \xe0 travailler \xe0 l'int\xe9rieur du premier tableau appel\xe9 avec la fonction ",(0,i.kt)("inlineCode",{parentName:"p"},"each()"),", vous pouvez utiliser ",(0,i.kt)("inlineCode",{parentName:"p"},"beta.each")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"beta.each(...)")," \xe9tendra un tableau de donn\xe9es bas\xe9e sur un JSONPath mais ensuite ",(0,i.kt)("strong",{parentName:"p"},"revenir")," \xe0 l'\xe9tat qui lui a \xe9t\xe9 donn\xe9 \xe0 la fin. Consultez la ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-common/blob/master/src/beta.js#L44"},"source")," ici."),(0,i.kt)("p",null,"Ceci est n\xe9cessaire si vous encha\xeenez plusieurs fonctions ",(0,i.kt)("inlineCode",{parentName:"p"},"each(...)")," ensemble en ligne dans la m\xeame expression. (P. ex., pour un formulaire dont les donn\xe9es comportent plusieurs \xab\xa0groupes de r\xe9p\xe9tition\xa0\xbb distincts qui sont rendus sous forme de tableaux\xa0: vous souhaitez cr\xe9er de nouveaux enregistrements pour chaque \xe9l\xe9ment du premier groupe de r\xe9p\xe9tition, puis ",(0,i.kt)("em",{parentName:"p"},"RETOURNER AU NIVEAU SUP\xc9RIEUR")," des donn\xe9es et enfin cr\xe9er de nouveaux enregistrements pour chaque \xe9l\xe9ment du deuxi\xe8me groupe de r\xe9p\xe9tition. L'utilisation de ",(0,i.kt)("inlineCode",{parentName:"p"},"beta.each(...)")," vous permet d'entrer dans le premier tableau, de cr\xe9er vos enregistrements, puis de revenir au niveau sup\xe9rieur et de pouvoir entrer dans le second tableau."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// create some schools from the state.data.form.schools array...\nbeta.each(\n  dataPath('form.schools[*]'),\n  upsert(\n    'School__c',\n    'School_ID__c',\n    fields(\n      field('School_ID__c', dataValue('schoolId')),\n      field('School_Name__c', dataValue('schoolName')),\n    )\n  )\n);\n\n// back up at the top level, we scope the next array with each...\nbeta.each(\n  dataPath('form.participants[*]'),\n  upsert(\n    'Person__c',\n    'Participant_Identification_Number_PID__c',\n    fields(\n      field('Participant_Identification_Number_PID__c', dataValue('pid')),\n      relationship('RecordType', 'Name', 'Participant'),\n      field('First_Name__c', dataValue('participant_first_name')),\n      field('Surname__c', dataValue('participant_surname')),\n      field('Mobile_Number_1__c', dataValue('mobile_number'))\n      field('Sex__c', dataValue('gender')),\n    )\n  )\n);\n")))}s.isMDXComponent=!0}}]);