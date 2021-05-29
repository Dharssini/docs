(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[5840],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91684:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={title:"Utilisation d'op\xe9rations plusieurs"},u={unversionedId:"jobs/multiple-operations",id:"jobs/multiple-operations",isDocsHomePage:!1,title:"Utilisation d'op\xe9rations plusieurs",description:"Vous pouvez faire beaucoup de choses en s\xe9quence avec OpenFn, que ce soit \xe0 l'aide de core, microservice ou platform.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/jobs/multiple-operations.md",sourceDirName:"jobs",slug:"/jobs/multiple-operations",permalink:"/fr/documentation/jobs/multiple-operations",editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/multiple-operations.md",version:"current",frontMatter:{title:"Utilisation d'op\xe9rations plusieurs"},sidebar:"docs",previous:{title:"Qu'est-ce qu'une op\xe9ration ?",permalink:"/fr/documentation/jobs/operations"},next:{title:"Etat initial et final pour les runs",permalink:"/fr/documentation/jobs/state"}},s=[{value:"Jobs de flux par rapport aux op\xe9rations multiples dans un seul job par rapport \xe0 l&#39;affichage dans l&#39;inbox",id:"jobs-de-flux-par-rapport-aux-op\xe9rations-multiples-dans-un-seul-job-par-rapport-\xe0-laffichage-dans-linbox",children:[{value:"Raisons d&#39;utiliser des jobs de flux",id:"raisons-dutiliser-des-jobs-de-flux",children:[]},{value:"Motifs d&#39;utiliser plusieurs op\xe9rations dans un m\xeame job",id:"motifs-dutiliser-plusieurs-op\xe9rations-dans-un-m\xeame-job",children:[]},{value:"Motifs de l&#39;affichage dans l&#39;inbox",id:"motifs-de-laffichage-dans-linbox",children:[]}]}],l={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Vous pouvez faire beaucoup de choses en s\xe9quence avec OpenFn, que ce soit \xe0 l'aide de ",(0,i.kt)("inlineCode",{parentName:"p"},"core"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"microservice")," ou ",(0,i.kt)("inlineCode",{parentName:"p"},"platform"),"."),(0,i.kt)("h2",{id:"jobs-de-flux-par-rapport-aux-op\xe9rations-multiples-dans-un-seul-job-par-rapport-\xe0-laffichage-dans-linbox"},"Jobs de flux par rapport aux op\xe9rations multiples dans un seul job par rapport \xe0 l'affichage dans l'inbox"),(0,i.kt)("h3",{id:"raisons-dutiliser-des-jobs-de-flux"},"Raisons d'utiliser des jobs de flux"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chaque op\xe9ration doit utiliser des fonctions qui sont ",(0,i.kt)("em",{parentName:"li"},"seulement")," disponibles dans des diff\xe9rents adaptateurs."),(0,i.kt)("li",{parentName:"ul"},"Vous ",(0,i.kt)("em",{parentName:"li"},"devez")," avoir des credentials diff\xe9rents pour chaque op\xe9ration"),(0,i.kt)("li",{parentName:"ul"},"Vous voulez voir les succ\xe8s et les \xe9checs au niveau de chaque op\xe9ration"),(0,i.kt)("li",{parentName:"ul"},"Chaque run individuel prend beaucoup de temps et vous vous inqui\xe9tez que votre NodeVM n'expire. (Sur ",(0,i.kt)("inlineCode",{parentName:"li"},"plateform"),", cela se produit apr\xe8s une 100s pour les utilisateurs non-entreprise\xa0; sur ",(0,i.kt)("inlineCode",{parentName:"li"},"microservice")," vous avez probablement configur\xe9 votre propre dur\xe9e d'expiration.)")),(0,i.kt)("h3",{id:"motifs-dutiliser-plusieurs-op\xe9rations-dans-un-m\xeame-job"},"Motifs d'utiliser plusieurs op\xe9rations dans un m\xeame job"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Le job doit \xeatre atomique, vous voulez que le tout soit consid\xe9r\xe9 comme un \xe9chec si une partie de celui-ci \xe9choue."),(0,i.kt)("li",{parentName:"ul"},"Vous ex\xe9cutez des jobs manuellement et vous voulez un seul bouton sur lequel cliquer pour r\xe9essayer la s\xe9quence compl\xe8te d'op\xe9rations."),(0,i.kt)("li",{parentName:"ul"},"Vous mettez \xe0 jour un ",(0,i.kt)("inlineCode",{parentName:"li"},"curseur")," dans une s\xe9rie d'op\xe9rations qui impliquent ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," et ",(0,i.kt)("inlineCode",{parentName:"li"},"POST"),". Lorsque le ",(0,i.kt)("inlineCode",{parentName:"li"},"POST")," \xe9choue, vous ne voulez pas mettre \xe0 jour le ",(0,i.kt)("inlineCode",{parentName:"li"},"curseur")," pour l'ex\xe9cution du travail suivant qui contient le ",(0,i.kt)("inlineCode",{parentName:"li"},"GET"),"."),(0,i.kt)("li",{parentName:"ul"},"Vos op\xe9rations ne prennent pas trop de temps (<100s au total pour ",(0,i.kt)("inlineCode",{parentName:"li"},"plateform"),") et vous souhaitez r\xe9duire le nombre d'ex\xe9cutions.")),(0,i.kt)("h3",{id:"motifs-de-laffichage-dans-linbox"},"Motifs de l'affichage dans l'inbox"),(0,i.kt)("p",null,"Vous pouvez d\xe9cider de renvoyer les donn\xe9es d'un ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," vers votre inbox et laisser un autre job \xeatre d\xe9clench\xe9 par un filtre de messages."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"get('somePath', { query: { after: '2020-10-12' } }, post('my-inbox-uuid'));\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vous aimeriez stocker le r\xe9sultat de la premi\xe8re op\xe9ration pour une utilisation ou une inspection ult\xe9rieure et ne pas avoir \xe0 r\xe9essayer cette op\xe9ration afin de reproduire le m\xeame r\xe9sultat."),(0,i.kt)("li",{parentName:"ul"},"Vous ne vous souciez pas des petits d\xe9lais entre le premier et le deuxi\xe8me job en cours d'ex\xe9cution.")))}p.isMDXComponent=!0}}]);