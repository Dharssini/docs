"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[2306],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63224:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"Etat initial et final pour les runs"},u=void 0,p={unversionedId:"jobs/state",id:"jobs/state",isDocsHomePage:!1,title:"Etat initial et final pour les runs",description:"\xc9tat initial",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/jobs/state.md",sourceDirName:"jobs",slug:"/jobs/state",permalink:"/fr/documentation/jobs/state",editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/state.md",tags:[],version:"current",frontMatter:{title:"Etat initial et final pour les runs"},sidebar:"docs",previous:{title:"Utilisation d'op\xe9rations plusieurs",permalink:"/fr/documentation/jobs/multiple-operations"},next:{title:"L'op\xe9ration each(...)",permalink:"/fr/documentation/jobs/each"}},s=[{value:"\xc9tat initial",id:"\xe9tat-initial",children:[],level:2},{value:"\xc9tat final",id:"\xe9tat-final",children:[{value:"\xc9tat final apr\xe8s une erreur",id:"\xe9tat-final-apr\xe8s-une-erreur",children:[],level:3}],level:2},{value:"\xc9tats par type de trigger de job",id:"\xe9tats-par-type-de-trigger-de-job",children:[],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\xe9tat-initial"},"\xc9tat initial"),(0,i.kt)("p",null,"Selon les outils que vous utilisez et ce qui a d\xe9clench\xe9 un run donn\xe9, l'",(0,i.kt)("inlineCode",{parentName:"p"},"\xe9tat")," initial pour un job ex\xe9cut\xe9 peut \xeatre g\xe9n\xe9r\xe9 de diff\xe9rentes mani\xe8res, et vous pourriez m\xeame construire un ",(0,i.kt)("inlineCode",{parentName:"p"},"\xe9tat")," \xe0 la main. Pour ",(0,i.kt)("inlineCode",{parentName:"p"},"microservice"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"engine")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"platform")," cependant, il y a des r\xe8gles strictes sur la fa\xe7on dont l'",(0,i.kt)("inlineCode",{parentName:"p"},"\xe9tat")," est cr\xe9\xe9 et fourni \xe0 un runtime pour l'ex\xe9cution de vos op\xe9rations. Voir le tableau ci-dessous pour plus de d\xe9tails."),(0,i.kt)("h2",{id:"\xe9tat-final"},"\xc9tat final"),(0,i.kt)("p",null,"L'\xe9tat final d'un job ex\xe9cut\xe9 est d\xe9termin\xe9 par ",(0,i.kt)("em",{parentName:"p"},"vous"),". Les expressions de job sont une s\xe9rie d'",(0,i.kt)("inlineCode",{parentName:"p"},"op\xe9rations"),"\xa0; elles prennent chacune un ",(0,i.kt)("inlineCode",{parentName:"p"},"\xe9tat")," et renvoient un autre ",(0,i.kt)("inlineCode",{parentName:"p"},"\xe9tat"),", apr\xe8s avoir cr\xe9\xe9 un nombre quelconque d'effets secondaires."),(0,i.kt)("h3",{id:"\xe9tat-final-apr\xe8s-une-erreur"},"\xc9tat final apr\xe8s une erreur"),(0,i.kt)("p",null,"Si un job ex\xe9cut\xe9 \xe9choue, il ne produira pas d'\xe9tat final. Le run lui-m\xeame aura un ",(0,i.kt)("inlineCode",{parentName:"p"},"log")," des informations qui lui sont attach\xe9es, ainsi que son code de sortie. Mais il n'y a pas n\xe9cessairement un ",(0,i.kt)("inlineCode",{parentName:"p"},"\xe9tat")," final propre qui peut \xeatre s\xe9rialis\xe9 en ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Si vous utilisez un job d\xe9clench\xe9 par ",(0,i.kt)("inlineCode",{parentName:"p"},"failure")," (\xe9chec), cette ex\xe9cution de job n'obtiendra pas l'\xe9tat final de l'ex\xe9cution de job pr\xe9c\xe9dente, car elle a \xe9chou\xe9 et n'a pas d'\xe9tat final. Il recevra \xe0 la place l'\xe9tat initial du run pr\xe9c\xe9dent (failed) plus une nouvelle cl\xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," qui contient les logs stringifi\xe9s du run pr\xe9c\xe9dent. Voir ci-dessous pour plus de d\xe9tails."))),(0,i.kt)("h2",{id:"\xe9tats-par-type-de-trigger-de-job"},"\xc9tats par type de trigger de job"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\xc9v\xe8nement d\xe9clencheur"),(0,i.kt)("th",{parentName:"tr",align:null},"\xc9tat initial"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"requ\xeate http"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{ data: httpRequest.body, configuration: job.credential.body }"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cron"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{ ...finalStateOfLastSuccessfulRun, configuration: job.credential.body }"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"flux\xa0: succ\xe8s"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{ ...finalStateOfTriggeringRun, configuration: job.credential.body }"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"flux\xa0: \xe9chec"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{ ...initialStateOfTriggeringRun, error: logsFromTriggeringRun, configuration: job.credential.body }"))))))}d.isMDXComponent=!0}}]);