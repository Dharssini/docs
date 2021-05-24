(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4098],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=m(n),h=a,d=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},17561:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"OpenHIE instantan\xe9"},p={unversionedId:"instant-openhie",id:"instant-openhie",isDocsHomePage:!1,title:"OpenHIE instantan\xe9",description:"Aper\xe7u",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/instant-openhie.md",sourceDirName:".",slug:"/instant-openhie",permalink:"/fr/documentation/instant-openhie",editUrl:"https://github.com/openfn/docs/edit/main/docs/instant-openhie.md",version:"current",frontMatter:{title:"OpenHIE instantan\xe9"},sidebar:"docs",previous:{title:"Microservice",permalink:"/fr/documentation/microservice/home"},next:{title:"Do-it-yourself Deployments",permalink:"/fr/documentation/deploy/diy"}},s=[{value:"Aper\xe7u",id:"aper\xe7u",children:[]},{value:"Cas d&#39;utilisation pour l&#39;impl\xe9mentation du prototype",id:"cas-dutilisation-pour-limpl\xe9mentation-du-prototype",children:[{value:"R\xe9cits utilisateur",id:"r\xe9cits-utilisateur",children:[]}]},{value:"Conception de la mise en \u0153uvre",id:"conception-de-la-mise-en-\u0153uvre",children:[]},{value:"Explorer l\u2019impl\xe9mentation",id:"explorer-limpl\xe9mentation",children:[]},{value:"\xc0 propos de la configuration de l&#39;impl\xe9mentation",id:"\xe0-propos-de-la-configuration-de-limpl\xe9mentation",children:[{value:"Processus",id:"processus",children:[]},{value:"\xc9tapes de configuration du projet",id:"\xe9tapes-de-configuration-du-projet",children:[]}]},{value:"Job writing notes",id:"job-writing-notes",children:[]},{value:"System Deployment Steps",id:"system-deployment-steps",children:[]}],m={toc:s};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"aper\xe7u"},"Aper\xe7u"),(0,o.kt)("p",null,"En partenariat avec ",(0,o.kt)("a",{parentName:"p",href:"https://digitalsquare.org/"},"Digital Square")," et ",(0,o.kt)("em",{parentName:"p"},"FCDO COVIDaction"),", ",(0,o.kt)("strong",{parentName:"p"},"OpenFn a investi dans sa bo\xeete \xe0 outils d'int\xe9gration open source")," pour fournir des solutions d'int\xe9gration robustes qui peuvent connecter ",(0,o.kt)("em",{parentName:"p"},"n'importe quel syst\xe8me de sant\xe9 num\xe9rique")," et \xeatre rapidement impl\xe9ment\xe9es sur n'importe quel serveur, dans n'importe quel pays, par n'importe quelle organisation."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/documentation/microservice/home/"},"OpenFn/microservice"))," est une composante enti\xe8rement compatible avec ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," qui peut \xeatre utilis\xe9e pour piloter le flux de travail, se conformer aux normes et int\xe9grer les composants de la pile ",(0,o.kt)("a",{parentName:"p",href:"https://openhim.readthedocs.io/en/latest/implementations/openhie.html"},"OpenHIE"),"."),(0,o.kt)("p",null,"Nous cherchons \xe0 am\xe9liorer la valeur du projet ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," en d\xe9veloppant un paquet qui inclura ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," comme voie d'int\xe9gration pour se connecter \xe0 l'architecture ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"},"OpenHIE"),"."),(0,o.kt)("p",null,"Ce paquet vise \xe0 am\xe9liorer la valeur de ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," en fournissant une autre option pour un traitement d'informations robuste, l'int\xe9gration et l'automatisation des processus m\xe9tier (flux de travail). Lors du d\xe9ploiement de ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE"),", les impl\xe9mentateurs ont maintenant l'option d'inclure ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," en tant que composant."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," peut \xe9galement \xeatre utilis\xe9 comme moteur de flux de travail pour automatiser une logique de travail complexe \xe0 c\xf4t\xe9 de ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," et de la ",(0,o.kt)("a",{parentName:"p",href:"https://openhim.readthedocs.io/en/latest/implementations/openhie.html"},"pile OpenHIE"),". Les ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"t\xe2ches ")," individuelles dans ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn"),", parfois nombreuses dans un seul d\xe9ploiement de microservice, peut \xeatre utilis\xe9 comme ",(0,o.kt)("em",{parentName:"p"},"\xab m\xe9diateurs \xbb")," (",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/mediator-library/"},"voir la biblioth\xe8que OpenHIE de m\xe9diateurs existants"),") pour transformer rapidement et cartographier les donn\xe9es \xe0 l'architecture ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"},"OpenHIE"),"."),(0,o.kt)("p",null,"Pour d\xe9montrer un cas d'utilisation r\xe9el de la fa\xe7on dont ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," pourrait \xeatre impl\xe9ment\xe9 dans l'architecture ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"},"OpenHIE"),", nous avons rencontr\xe9 plusieurs membres de la communaut\xe9 pour identifier des cas d'utilisation cl\xe9s pour une impl\xe9mentation de prototype de r\xe9f\xe9rence."),(0,o.kt)("p",null,"Visitez le ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo"},"d\xe9p\xf4t de d\xe9mo ici"),"."),(0,o.kt)("h2",{id:"cas-dutilisation-pour-limpl\xe9mentation-du-prototype"},"Cas d'utilisation pour l'impl\xe9mentation du prototype"),(0,o.kt)("p",null,"Nous avons vu que le cas d\u2019utilisation de l\u2019int\xe9gration le plus courant est que les prestataires de services de sant\xe9, en particulier les grands agents de sant\xe9 communautaires (\xab ASC \xbb), doivent int\xe9grer leurs donn\xe9es et leur programmation dans des architectures nationales de cybersant\xe9."),(0,o.kt)("h3",{id:"r\xe9cits-utilisateur"},"R\xe9cits utilisateur"),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"En tant que responsable de la mise en \u0153uvre de la sant\xe9 communautaire, je souhaite int\xe9grer mon application de gestion de cas CommCare utilis\xe9e par les ASC au registre national des patients, afin de pouvoir d\xe9velopper un dossier de sant\xe9 partag\xe9 et automatiser les pipelines de rapports.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"En tant que prestataire de services de sant\xe9, je souhaite int\xe9grer mon application existante au SIH national, mais je veux appliquer la norme FHIR \xe0 mes donn\xe9es collect\xe9es avant le partage pour adh\xe9rer aux exigences de conformit\xe9 et de rapport.")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nous avons donc d\xe9cid\xe9 de cr\xe9er une solution d'int\xe9gration qui d\xe9montre comment les applications ",(0,o.kt)("strong",{parentName:"li"},"ASC")," existantes peuvent \xeatre int\xe9gr\xe9es \xe0 l'infrastructure nationale de sant\xe9 et tirer parti d'un travail simple sur ",(0,o.kt)("a",{parentName:"li",href:"https://openfn.org/"},"OpenFn")," en tant que m\xe9diateur ",(0,o.kt)("a",{parentName:"li",href:"http://openhim.org/mediator-library/"})," pour appliquer la norme de donn\xe9es FHIR ",(0,o.kt)("a",{parentName:"li",href:"https://fhir.org/"})," et d'autres manipulations de donn\xe9es n\xe9cessaires pour s'int\xe9grer \xe0 ",(0,o.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR"),".")),(0,o.kt)("h2",{id:"conception-de-la-mise-en-\u0153uvre"},"Conception de la mise en \u0153uvre"),(0,o.kt)("p",null,"En r\xe9sum\xe9, le prototype envoie les donn\xe9es d'enregistrement des cas de patients depuis les applications mobiles de collecte de donn\xe9es (",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"KoboToolbox"),") \xe0 ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice"),". ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," transforme ensuite les donn\xe9es et s'assure qu'elles adh\xe8rent aux normes de donn\xe9es ",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-example.json.html"},"patient")," et ",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/encounter-example.json.html"},"r\xe9pondent ")," aux normes de donn\xe9es, vant de l'envoyer vers un ",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR canal")," dans ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM"),". ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," est utilis\xe9 ici comme un ","_","\xab canal \xbb","_"," pour l'architecture ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"},"OpenHIE")," afin de valider les demandes et les transmettre \xe0 d'autres syst\xe8mes dans l'architecture ",(0,o.kt)("strong",{parentName:"p"},"nationale de cybersant\xe9"),". Dans ce cas, nous transf\xe9rons les donn\xe9es du cas vers pour que le patient soit enregistrer dans un serveur ",(0,o.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR"),"."),(0,o.kt)("p",null,"Cette conception d'impl\xe9mentation a \xe9t\xe9 jug\xe9e la plus \xe9lev\xe9e / la plus demand\xe9e car elle exploite les fonctionnalit\xe9s de base d'",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," (fournissant un proxy invers\xe9 et g\xe9n\xe9rant une piste d'audit) sans obliger les int\xe9grateurs \xe0 cr\xe9er un nouveau ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/mediator-library/"},"m\xe9diateur, un")," processus plus complexe que de configurer une ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"t\xe2che")," dans un ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"projet OpenFn"),"."),(0,o.kt)("p",null,"Ce prototype inclut les composants suivants :"),(0,o.kt)("p",null,"Une instance ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," peut \xeatre cr\xe9\xe9e, contenant ",(0,o.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR"),", ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM"),", et un seul ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"d\xe9ploiement OpenFn/microservice")," (un fichier ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"projet.aml"),", export\xe9 \xe0 partir de ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn/platform"),") avec 2 taches diff\xe9rentes ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"}),". Lorsque les donn\xe9es sont transf\xe9r\xe9es \xe0 ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice")," \xe0 partir de deux soumissions de formulaire distinctes sur ",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," et ",(0,o.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo"),", elles sont trait\xe9es et cr\xe9ent des ressources ",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR")," des patient via ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," et ",(0,o.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR"),". Nous avons opt\xe9 pour un seul \xab projet \xbb ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice")," avec deux ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"t\xe2ches")," et ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/triggers/"},"d\xe9clencheurs")," l\xe9g\xe8rement diff\xe9rents pour mettre en \xe9vidence la polyvalence des ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"projects OpenFn"),"."),(0,o.kt)("h2",{id:"explorer-limpl\xe9mentation"},"Explorer l\u2019impl\xe9mentation"),(0,o.kt)("p",null,"Actuellement, il y a deux fa\xe7ons diff\xe9rentes d'explorer cette d\xe9mo. La premi\xe8re (la m\xe9thode ",(0,o.kt)("em",{parentName:"p"},"\xab Instant \xbb")," ) la plus traditionnelle consiste \xe0 ",(0,o.kt)("strong",{parentName:"p"},"cloner le d\xe9p\xf4t OpenFn/Instant-demo"),". Une fois \xe0 l'int\xe9rieur, les utilisateurs tapent sur ",(0,o.kt)("em",{parentName:"p"},"\xab configuration du fil \xbb")," pour tout mettre en marche. L'ex\xe9cution d'un ",(0,o.kt)("em",{parentName:"p"},"\xab test de fil \xbb")," d\xe9montrera ensuite le flux ",(0,o.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo"),"/",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," \xe0 ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," \xe0 ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," \xe0 ",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR"),"."),(0,o.kt)("p",null,"Ils peuvent explorer les diff\xe9rents ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"taches"),", exemples de charges utiles, points de terminaison, et publier des donn\xe9es aux diff\xe9rents terminaux en utilisant soit les param\xe8tres de transfert de donn\xe9es dans ",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," et ",(0,o.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo")," ou via ",(0,o.kt)("a",{parentName:"p",href:"https://curl.se/"},"CURL")," (ou leur requ\xeate HTTP agent de choix.)"),(0,o.kt)("p",null,"Une fois ex\xe9cut\xe9, les utilisateurs peuvent voir comment les soumissions standard ",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," et ",(0,o.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo")," sont transform\xe9es par l'",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice")," pour adh\xe9rer aux sp\xe9cifications ",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR")," pour les ",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-example.json.html"},"patients")," et les ",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/encounter-example.json.html"},"rencontres"),", et ensuite que ces ressources suivantes sont cr\xe9\xe9es sur le serveur ",(0,o.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR")," via un canal sur l'",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM"),"."),(0,o.kt)("p",null,"La seconde (l\xe9g\xe8rement moins conventionnelle) pour explorer la ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo"},"d\xe9mo"),", est via ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn.org"),". Puisque ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"les projets OpenFn")," peuvent \xeatre ex\xe9cut\xe9s dans un",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"microservice")," ou sur la ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"plate-forme h\xe9berg\xe9e"),", nous avons fourni une instance de projet sur ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn.org")," qui permet aux utilisateurs d'explorer la configuration requise pour int\xe9grer ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," dans un projet ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE"),". Il y a trois ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/projects/p5pqx3/jobs"},"taches")," accessibles avec un ",(0,o.kt)("strong",{parentName:"p"},"utilisateur de d\xe9monstration")," avec un",(0,o.kt)("em",{parentName:"p"},"nom d'utilisateur : ",(0,o.kt)("a",{parentName:"em",href:"mailto:demo@openfn.org"},"demo@openfn.org"))," et ",(0,o.kt)("em",{parentName:"p"},"un mot de passe : guest123"),"."),(0,o.kt)("p",null,"Les trois t\xe2ches montreront :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Comment une soumission de ",(0,o.kt)("a",{parentName:"li",href:"https://www.commcarehq.org/"},"CommCare")," est transform\xe9e et envoy\xe9e \xe0 ",(0,o.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR")," ;"),(0,o.kt)("li",{parentName:"ul"},"Comment une soumission ",(0,o.kt)("a",{parentName:"li",href:"https://www.kobotoolbox.org/"},"Kobo")," est transform\xe9e et envoy\xe9e \xe0 ",(0,o.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR")," ;"),(0,o.kt)("li",{parentName:"ul"},"Et \xe0 quoi ressemblent les ressources finales qui seraient envoy\xe9es \xe0 ",(0,o.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR"),".")),(0,o.kt)("p",null,"Nous esp\xe9rons que cela fournira un point d'entr\xe9e pr\xe9cieux pour la configuration d'",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant d'OpenHIE")," avec ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservices"),"."),(0,o.kt)("h2",{id:"\xe0-propos-de-la-configuration-de-limpl\xe9mentation"},"\xc0 propos de la configuration de l'impl\xe9mentation"),(0,o.kt)("h3",{id:"processus"},"Processus"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Nous avons rencontr\xe9 des ",(0,o.kt)("a",{parentName:"p",href:"https://ohie.org/tag/community/"},"membres de la communaut\xe9 OpenHIE")," pour comprendre les cas d'utilisation, et avec ",(0,o.kt)("a",{parentName:"p",href:"https://www.jembi.org/"},"Jembi Health Systems")," pour en savoir plus sur les paquets, les sp\xe9cifications et les exigences de conformit\xe9 ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\xc9chantillon de sources de donn\xe9es identifi\xe9es (vraies formulaires d'enregistrement de cas",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," et ",(0,o.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo - voic ici)")," que nous pourrions utiliser pour envoyer des donn\xe9es \xe0 l'",(0,o.kt)("strong",{parentName:"p"},"'architecture nationale de cybersant\xe9"),". Voici un ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/blob/main/fixtures/commcare_sample.json"},"exemple de charge utile de soumission de CommCare")," Voici un ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/blob/main/fixtures/koboCaseRegistration.json"},"exemple de charge utile de soumission de Kobo"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"R\xe9vision de la documentation ",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR-HL7")," pour d\xe9terminer les exigences des normes de donn\xe9es pour les donn\xe9es des patients et les donn\xe9es de rencontre. Voir ",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-example.json.html"},"la sp\xe9cification du patient FHIR")," et ",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/encounter-example.json.html"},"la sp\xe9cification de rencontre FHIR"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\xc9valuation des capacit\xe9s",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," vs. ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," pour d\xe9terminer comment utiliser. Nous avons d\xe9termin\xe9 que l'utilisation d'un ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"canal OpenHIM")," tirera parti de la fonctionnalit\xe9 d'audit principale d'",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM"),", mais pas nous obliger \xe0 cr\xe9er un ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/mediator-library/"},"nouveau m\xe9diateur"),"."))),(0,o.kt)("h3",{id:"\xe9tapes-de-configuration-du-projet"},"\xc9tapes de configuration du projet"),(0,o.kt)("p",null,"Il y a deux fa\xe7ons de configurer un ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml")," pour s'ex\xe9cuter en tant que ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"microservice"),". La premi\xe8re est d'utiliser la ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"plateforme OpenFn.org "),", et la seconde est d'utiliser ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools"),"."),(0,o.kt)("p",null,"Ces deux m\xe9thodes sont d\xe9taill\xe9es ci-dessous :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Configurer un projet en utilisant la plate-forme OpenFn.org")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Cette option permet aux organisations d\u2019exploiter les fonctionnalit\xe9s int\xe9gr\xe9es d'",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn.org")," pour faciliter la configuration du ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"projet")," , ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"l'\xe9criture de t\xe2ches")," et la gestion du code source.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Le fichier ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"projet.yaml")," g\xe9n\xe9r\xe9 \xe0 partir de cette configuration de projet sera alors utilis\xe9 comme structure de base pour l' ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn Microservice"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Les \xe9tapes pour configurer le projet ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn Microservice")," en utilisant la ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"plate-forme OpenFn.org")," sont les suivantes :"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"A. Ajoutez ",(0,o.kt)("a",{parentName:"strong",href:"/documentation/build/credentials/"},"les identifiants")," au projet qui seront utilis\xe9es pour connecter le Microservice OpenFn \xe0 OpenHIM.")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"C'est \xe9galement l'occasion d'ajouter des ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/credentials/"},"identifiants ")," qu' ",(0,o.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice")," peut utiliser pour se connecter aux syst\xe8mes sources (comme ",(0,o.kt)("a",{parentName:"li",href:"https://www.commcarehq.org/"},"CommCare")," ou ",(0,o.kt)("a",{parentName:"li",href:"https://www.kobotoolbox.org/"},"KoBotoolbox"),").")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"B. Ajouter les ",(0,o.kt)("a",{parentName:"strong",href:"/documentation/build/triggers/"},"d\xe9clencheurs")," au projet qui serontutilis\xe9s par ",(0,o.kt)("a",{parentName:"strong",href:"/documentation/microservice/home/"},"OpenFn Microservice")," pour faire correspondre les charges des syst\xe8mes sources aux ",(0,o.kt)("a",{parentName:"strong",href:"/documentation/build/jobs/"},"OpenFn Microservice Jobs"),".")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Notez que le ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"Microservice")," est configur\xe9 pour ex\xe9cuter une t\xe2che ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"})," en fonction de la forme de la charge utile entrante.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Par exemple, un d\xe9clencheur ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/triggers/"})," peut \xeatre configur\xe9 pour correspondre aux charges utiles, \xe0 partir de ",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare"),", qui contiennent le message ",(0,o.kt)("inlineCode",{parentName:"p"},"{\xab @name \xbb : \xab Inscrire un nouveau patient \xbb}")," dans le corps de leur message.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Une ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"t\xe2che")," donn\xe9e correspondra alors \xe0 ce message, et sera utilis\xe9 par le ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"Microservice OpenFn")," pour (a) cr\xe9er un une charge utile dans le ",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"standard FHIR")," contenant une",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/encounter-example.json.html"},"ressource de rencontre")," et (b) envoyer la charge utile",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-example.json.html"},"standard FHIR ")," \xe0 ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," avec des instructions pour le charger sur ",(0,o.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR"),"."))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"C. Exporter le fichier ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml")," en utilisant l'assistant d'exportation d'",(0,o.kt)("a",{parentName:"strong",href:"https://openfn.org/"},"OpenFn.org"))),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"generated YAML")," file will then be used by the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice")," to execute the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/jobs/"},"jobs")," for the matching payloads."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Configure a project using the ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools"))),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This option allows organisations to configure the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"project")," and host ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/#a-basic-expression"},"job expression")," source files, for ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"OpenFn Microservice projects"),", without using the ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn platform"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"With this option, it is recommended that organisations use source versioning tools and platforms such as ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"github")," to manage the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"project")," and ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/#a-basic-expression"},"job expression")," source code/files.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To configure the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn Microservice project")," using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools"),", create a local folder or github repository to host your project configuration files. Inside this folder, one would then perform the following actions:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a credential.json file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add credentials as shown in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/blob/main/openfn/docker/config/project.yaml#L165-L167"},"sample credential here"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/#a-basic-expression"},"job expressions"),". In this case, one would create the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/tree/main/expressions"},"CommCare-to-OpenHIM")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/tree/main/expressions"},"Kobo-to-OpenHIM")," expressions as shown in the demo expressions ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/tree/main/expressions"},"here"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Run the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/devtools/home/#configure-an-openfn-project"},"OpenFn CLI")," to configure the rest of the project. The ",(0,o.kt)("a",{parentName:"p",href:"/documentation/devtools/home/#configure-an-openfn-project"},"CLI")," will assemble the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml")," file from the different artifacts as provided. See detailed steps in the documentation site ",(0,o.kt)("a",{parentName:"p",href:"/documentation/devtools/home/#configure-an-openfn-project"},"here"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The last step of the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/devtools/home/#configure-an-openfn-project"},"CLI")," prompts will allow one to export the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"Project YAML file"),", which will then be used by the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn Microservice")," to execute the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"jobs")," for matching payloads."))))))),(0,o.kt)("h2",{id:"job-writing-notes"},"Job writing notes"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," provides two ways of writing jobs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/jobs/job-studio/"},"OpenFn.org\u2019s Job Studio")," as detailed in the documentation site ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/jobs/"},"here"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"With this option, if editing an existing ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/jobs/#a-basic-expression"},"Job Expression"),", one would be expected to use ",(0,o.kt)("a",{parentName:"li",href:"https://openfn.org/"},"OpenFn.org Project Export service")," to re-generate the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"Project YAML")," file for the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice"),"."))),(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This option also allows organisations to write ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/jobs/#a-basic-expression"},"job expressions")," without using the ",(0,o.kt)("a",{parentName:"li",href:"https://openfn.org/"},"OpenFn\u2019s hosted service"),". See detailed documentation ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/devtools"},"here")),(0,o.kt)("li",{parentName:"ul"},"With this option, if editing an existing ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/jobs/#a-basic-expression"},"Job Expression"),", one would be expected to run the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/devtools/home/#configure-an-openfn-project"},"OpenFn CLI"),", to re-generate the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"Project YAML file")," for the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice"),".")))),(0,o.kt)("h2",{id:"system-deployment-steps"},"System Deployment Steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://openfn.org/"},"OpenFn")," provides an automated deployment script that allows system admins to setup and run the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice"),"."),(0,o.kt)("li",{parentName:"ul"},"For example, to run the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo"},"Instant-demo Microservice"),", the following steps are recommended:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Clone the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo"},"OpenFn/instant-demo repo")),(0,o.kt)("li",{parentName:"ul"},"Overwrite the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo/blob/main/openfn/docker/config/project.yaml"},"sample \u201cproject.yaml\u201d")," file with your newly generated ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml file"),", or use the existing ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"YAML file")," to deploy the demo project. Run the setup command as described in the documentation ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo"},"here")),(0,o.kt)("li",{parentName:"ul"},"Verify the system is working by ",(0,o.kt)("a",{parentName:"li",href:"https://curl.se/"},"curling")," data (or submitting forms on ",(0,o.kt)("a",{parentName:"li",href:"https://www.commcarehq.org/"},"CommCare"),"/",(0,o.kt)("a",{parentName:"li",href:"https://www.kobotoolbox.org/"},"Kobo"),") matching their ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/triggers/"},"triggers")," to the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"microservice")," endpoint ",(0,o.kt)("inlineCode",{parentName:"li"},"(localhost:4001/inbox)")," and checking to see that resources are created in ",(0,o.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR"),"."),(0,o.kt)("li",{parentName:"ul"},"Note how the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo/blob/main/test.js"},"test.js file")," handles this verification with the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo/blob/main/openfn/docker/config/project.yaml"},"sample project.yaml"))))))}l.isMDXComponent=!0}}]);