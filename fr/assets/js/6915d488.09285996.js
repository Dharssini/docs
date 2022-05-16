"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[2890],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93306:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=t(83117),o=t(80102),s=(t(67294),t(3905)),a=["components"],i={title:"Un examen plus approfondi des jobs"},l=void 0,c={unversionedId:"jobs/understanding",id:"jobs/understanding",title:"Un examen plus approfondi des jobs",description:"Le but de cette documentation technique est de faciliter la r\xe9daction de jobs personnalis\xe9s complexes.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/jobs/understanding.md",sourceDirName:"jobs",slug:"/jobs/understanding",permalink:"/fr/documentation/jobs/understanding",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/understanding.md",tags:[],version:"current",frontMatter:{title:"Un examen plus approfondi des jobs"},sidebar:"docs",previous:{title:"Designing a job",permalink:"/fr/documentation/jobs/job-design-intro"},next:{title:"Qu'est-ce qu'une op\xe9ration ?",permalink:"/fr/documentation/jobs/operations"}},u={},p=[{value:"Termes et concepts cl\xe9s",id:"termes-et-concepts-cl\xe9s",level:2},{value:"State est transmis \xe0 operations. Operations renvoie state.",id:"state-est-transmis-\xe0-operations-operations-renvoie-state",level:2},{value:"S\xe9quences d&#39;op\xe9rations \xe0 l&#39;int\xe9rieur de fonctions personnalis\xe9es.",id:"s\xe9quences-dop\xe9rations-\xe0-lint\xe9rieur-de-fonctions-personnalis\xe9es",level:2},{value:"Contr\xf4ler le timing entre les op\xe9rations avec des fonctions asynchrones.",id:"contr\xf4ler-le-timing-entre-les-op\xe9rations-avec-des-fonctions-asynchrones",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Le but de cette documentation technique est de faciliter la r\xe9daction de jobs personnalis\xe9s complexes."),(0,s.kt)("h2",{id:"termes-et-concepts-cl\xe9s"},"Termes et concepts cl\xe9s"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"core")," (",(0,s.kt)("a",{parentName:"li",href:"https://github.com/openfn/core"},"https://github.com/openfn/core"),") est le programme Javascript qui ex\xe9cute les jobs pour OpenFn dans un environnement Node.js \xe9ph\xe9m\xe8re."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"state")," est un fichier .JSON qui est construit et transmis \xe0 l'environnement Node. Il contient au moins deux cl\xe9s, ",(0,s.kt)("inlineCode",{parentName:"li"},"configuration")," et ",(0,s.kt)("inlineCode",{parentName:"li"},"data"),". La configuration sera remplie avec vos credentials et sera utilis\xe9e par les adaptateurs pour l'authentification, et les donn\xe9es seront remplies avec les donn\xe9es du message si le job a \xe9t\xe9 d\xe9clench\xe9e par un message entrant.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "configuration": {\n    "username": "taylor",\n    "password": "shhhhhh",\n    "loginUrl": "https://login.salesforce.com"\n  },\n  "data": {\n    "a": 1,\n    "b": {\n      "x": [1, 2, 3]\n    }\n  }\n}\n')),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"expressions")," sont des s\xe9quences d'op\xe9rations \xe0 ex\xe9cuter. Ils font partie de \xab\xa0jobs\xa0\xbb qui incluent \xe9galement un credential, un trigger, une \xe9tiquette et (parfois) un chemin de fichier github."),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"operations")," sont des fonctions nomm\xe9es , export\xe9es pour \xeatre utilis\xe9es par des adaptateurs sp\xe9cifiques qui transmettent state et renvoient state.")),(0,s.kt)("h2",{id:"state-est-transmis-\xe0-operations-operations-renvoie-state"},"State est transmis \xe0 operations. Operations renvoie state."),(0,s.kt)("p",null,"C'est un concept cl\xe9. Lorsque vous \xe9crivez\xa0:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"create('object', fields(\n  field(...)\n));\n")),(0,s.kt)("p",null,"La fonction ex\xe9cut\xe9e dans votre pack de langue (p. ex. ",(0,s.kt)("inlineCode",{parentName:"p"},"language-salesforce"),") va ex\xe9cuter chaque op\xe9ration avec state, puis renverra state. Si vous voulez ex\xe9cuter des op\xe9rations dans une autre fonction personnalis\xe9e, vous devez explicitement transmettre state."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"alterState(state => {\n  return create('object', fields(\n    field(...)\n  ))(state)\n});\n")),(0,s.kt)("h2",{id:"s\xe9quences-dop\xe9rations-\xe0-lint\xe9rieur-de-fonctions-personnalis\xe9es"},"S\xe9quences d'op\xe9rations \xe0 l'int\xe9rieur de fonctions personnalis\xe9es."),(0,s.kt)("p",null,"En utilisant ",(0,s.kt)("inlineCode",{parentName:"p"},"execute")," vous pouvez encha\xeener plusieurs op\xe9rations s\xe9quentielles dans une fonction personnalis\xe9e."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'alterState(state => {\n  const { userName } = state.data.form.meta;\n\n  if (userName != \'tester\') {\n    return execute(\n      upsert("person__c", "Name", fields(\n        field(...),\n        field(...)\n      )),\n      beta.each(\n        dataPath("form.array[*]"),\n        upsert("object", "Name", fields(\n          field(...)\n        ))\n      )\n    )(state)\n  }\n  return state;\n});\n')),(0,s.kt)("h2",{id:"contr\xf4ler-le-timing-entre-les-op\xe9rations-avec-des-fonctions-asynchrones"},"Contr\xf4ler le timing entre les op\xe9rations avec des fonctions asynchrones."),(0,s.kt)("p",null,"Pour \xeatre vraiment complexe, vous pourriez vouloir ex\xe9cuter un certain nombre de fonctions asynchrones \xe0 l'int\xe9rieur d'une op\xe9ration ",(0,s.kt)("inlineCode",{parentName:"p"},"alterState"),", mais ATTENDRE que ces fonctions soient r\xe9solues avant de passer \xe0 l'op\xe9ration suivante. Si ",(0,s.kt)("inlineCode",{parentName:"p"},"execute")," ne fonctionne pas pour votre cas d'utilisation, vous pouvez utiliser ",(0,s.kt)("inlineCode",{parentName:"p"},"Promise.all")," et renvoyer une fonction asynchrone."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"alterState(state => {\n  console.log('Here we will await the result of a LOT of async operations.');\n  console.log('First we define a bunch of different async functions.');\n  const postClinics = async c => {\n    return post(state.configuration.inboxUrl, {\n      body: { clinics: c },\n    })(state);\n  };\n\n  const postPatients = async p => {\n    return post(state.configuration.inboxUrl, {\n      body: { patients: p },\n    })(state);\n  };\n\n  const postVisits = async v => {\n    return post(state.configuration.inboxUrl, {\n      body: { visits: v },\n    })(state);\n  };\n\n  console.log(\n    'Then we define a single function that wraps them all up and waits for all the individual functions to resolve.'\n  );\n  async function makePosts() {\n    return Promise.all([\n      ...state.data.clinicSets.map(item => postClinics(item)),\n      ...state.data.patientSets.map(item => postPatients(item)),\n      ...state.data.visitSets.map(item => postVisits(item)),\n    ]);\n  }\n\n  console.log(\n    'Then we return that function, forcing our next operation to await the result of this one.'\n  );\n  return makePosts();\n});\n\nalterState(state => {\n  console.log('I get called AFTER those async functions are resolved.');\n  return state;\n});\n")))}m.isMDXComponent=!0}}]);