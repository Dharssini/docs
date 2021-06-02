(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8206],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return v}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(t),v=o,f=d["".concat(u,".").concat(v)]||d[v]||c[v]||s;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66616:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return a},toc:function(){return u},default:function(){return l}});var r=t(22122),o=t(19756),s=(t(67294),t(3905)),i={title:"D\xe9veloppement d'applications connect\xe9es",sidebar_label:"Cr\xe9er des APIs conformes"},a={unversionedId:"for-devs",id:"for-devs",isDocsHomePage:!1,title:"D\xe9veloppement d'applications connect\xe9es",description:"Cette section est pour vous si vous souhaitez cr\xe9er ou \xe9tendre une application existante pouvant se connecter \xe0 OpenFn. Nous suivons les directives de l'api JSON standard moderne.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/for-devs.md",sourceDirName:".",slug:"/for-devs",permalink:"/fr/documentation/for-devs",editUrl:"https://github.com/openfn/docs/edit/main/docs/for-devs.md",version:"current",sidebar_label:"Cr\xe9er des APIs conformes",frontMatter:{title:"D\xe9veloppement d'applications connect\xe9es",sidebar_label:"Cr\xe9er des APIs conformes"},sidebar:"docs",previous:{title:"Questions fr\xe9quemment pos\xe9es",permalink:"/fr/documentation/faqs"},next:{title:"Google Summer of Code",permalink:"/fr/documentation/gsoc"}},u=[{value:"Envoi des donn\xe9es \xe0 OpenFn",id:"envoi-des-donn\xe9es-\xe0-openfn",children:[{value:"Taille de la charge",id:"taille-de-la-charge",children:[]}]},{value:"R\xe9ception des donn\xe9es d&#39;OpenFn",id:"r\xe9ception-des-donn\xe9es-dopenfn",children:[]}],p={toc:u};function l(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Cette section est pour vous si vous souhaitez cr\xe9er ou \xe9tendre une application existante pouvant se connecter \xe0 OpenFn. Nous suivons les directives de l'api JSON standard moderne."),(0,s.kt)("p",null,"Pour que votre application soit un fournisseur de donn\xe9es (ou \xab source \xbb) pour les int\xe9grations d'OpenFn, nous vous recommandons fortement de cr\xe9er un \xab service de notifications \xbb (parfois appel\xe9 un \xab service de webhooks \xbb ou \xab API push bas\xe9e sur des \xe9v\xe9nements \xbb). Ceci est pr\xe9f\xe9rable \xe0 l'utilisation d'une api REST pour deux raisons : (1) Un service de notifications donnera \xe0 vos clients la possibilit\xe9 de configurer des int\xe9grations en temps r\xe9el, et (2) un service de notifications est plus efficace pour vos serveurs et OpenFn \u2014 au lieu de faire des requ\xeates et de les traiter toutes les X secondes, vos serveurs et les serveurs d'OpenFn ne fonctionneront que lorsque de nouvelles donn\xe9es seront disponibles."),(0,s.kt)("p",null,"Pour que votre application soit un consommateur (ou une \xab destination \xbb) pour OpenFn, vous devez soit disposer d'une API de repos standard, bas\xe9e sur JSON, soit cr\xe9er un paquet de langue qui r\xe9pond aux sp\xe9cifications de votre API."),(0,s.kt)("h2",{id:"envoi-des-donn\xe9es-\xe0-openfn"},"Envoi des donn\xe9es \xe0 OpenFn"),(0,s.kt)("p",null,"Pour envoyer des donn\xe9es \xe0 OpenFn, votre application doit \xeatre en mesure de faire un message HTTPS \xe0 une URL externe avec un objet JSON valide comme corps du message. Consultez l'exemple suivant utilisant cURL :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST \\\n  -H "Content-Type: application/json" \\\n  -H "Cache-Control: no-cache" \\\n  -d \'{"foo":"bar", "baz":"qux"}\' \\\n  "https://staging.openfn.org/inbox/some-secret-api-key"\n')),(0,s.kt)("p",null,"OpenFn r\xe9pondra avec un objet JSON de 200 et un objet JSON vide en cas de publication r\xe9ussie. 400s signifie que l'URL externe de l'utilisateur est incorrecte, et 500s signifie qu'il y a une erreur d'application sur OpenFn. Bien que les 500 soient rares, ils peuvent \xeatre dus \xe0 un JSON non valide dans le corps de votre MESSAGE."),(0,s.kt)("p",null,"Si vous ne pouvez pas notifier une URL externe quand un \xe9v\xe9nement a lieu, vous pouvez toujours vous int\xe9grer \xe0 OpenFn si vous avez une API REST bas\xe9e sur JSON. Les utilisateurs d'OpenFn peuvent envoyer des requ\xeates HTTP GET \xe0 votre application et effectuer des actions suppl\xe9mentaires en fonction de votre r\xe9ponse. Vous devez autoriser l'authentification de base ou par jeton et la r\xe9ponse \xe0 un GET valide avec JSON. Il n'y a pas de format sp\xe9cifique pour votre r\xe9ponse, car les utilisateurs peuvent l'analyser comme ils le souhaitent, extraire les donn\xe9es pertinentes, puis effectuer d'autres actions, comme la charger dans un syst\xe8me de destination, avec ces donn\xe9es. Voir ",(0,s.kt)("a",{parentName:"p",href:"https://www.github.com/openfn/language-http"},"language-http")," pour des d\xe9tails sur la fa\xe7on dont les utilisateurs font ces requ\xeates HTTP g\xe9n\xe9riques."),(0,s.kt)("h3",{id:"taille-de-la-charge"},"Taille de la charge"),(0,s.kt)("p",null,"Si vous utilisez la plateforme, et que vous ne pr\xe9voyez pas d'utiliser un plan d'entreprise, vous devrez prendre en compte la taille des donn\xe9es que vous envoyez dans chaque bloc de charge. Ex\xe9cutez ",(0,s.kt)("inlineCode",{parentName:"p"},"state")," est g\xe9n\xe9ralement limit\xe9 \xe0 ",(0,s.kt)("inlineCode",{parentName:"p"},"10 MB")," et vous devriez donc garder vos charges bien en dessous de cette limite."),(0,s.kt)("h2",{id:"r\xe9ception-des-donn\xe9es-dopenfn"},"R\xe9ception des donn\xe9es d'OpenFn"),(0,s.kt)("p",null,"Pour faciliter la connexion des utilisateurs \xe0 votre application, il est fortement recommand\xe9 de cr\xe9er un package de langue avec l'authentification requise et un ensemble d'actions simples et autoris\xe9es qui sont bien abstraites dans les \xab fonctions d'assistances \xbb. Voir ",(0,s.kt)("a",{parentName:"p",href:"https://www.github.com/openfn/language-dhis2"}," language-dhis2 ")," pour un exemple de package de langage qui cr\xe9e une interface plus simple pour un api REST traditionnelle bas\xe9e sur JSON. Les adaptateurs sont \xe9crits en Javascript et ex\xe9cutez en Node. Vous pouvez convertir le JSON d'OpenFn en XML, ou en tout autre format avant de l'envoyer \xe0 votre application et vous pouvez utiliser tous les modules de node que vous aimeriez. Voir ",(0,s.kt)("a",{parentName:"p",href:"https://www.github.com/openfn/language-postgresql"},"language-postgresql")," pour un exemple d'adaptateur qui se connecte directement aux bases de donn\xe9es PostgreSQL en utilisant un module populaire NPM appel\xe9 \xab pg \xbb."),(0,s.kt)("p",null,"Pour recevoir des donn\xe9es de l'adaptateur g\xe9n\xe9rique ",(0,s.kt)("inlineCode",{parentName:"p"},"language-http")," d'OpenFn, votre application doit autoriser les requ\xeates POST, PUT ou GET de base, jeton ou condens\xe9 authentifi\xe9es. (Bien qu'il ne soit pas conseill\xe9 de cr\xe9er une API qui n\xe9cessite des requ\xeates GET pour cr\xe9er ou mettre \xe0 jour des donn\xe9es.)"))}l.isMDXComponent=!0}}]);