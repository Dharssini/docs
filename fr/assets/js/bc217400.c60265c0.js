"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4869],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4247:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={title:"Open Data Kit (ODK)"},s=void 0,p={unversionedId:"apps/odk",id:"apps/odk",title:"Open Data Kit (ODK)",description:"Open Data Kit (ODK) Collect",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/apps/odk.md",sourceDirName:"apps",slug:"/apps/odk",permalink:"/fr/documentation/apps/odk",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/odk.md",tags:[],version:"current",frontMatter:{title:"Open Data Kit (ODK)"},sidebar:"docs",previous:{title:"Moodle",permalink:"/fr/documentation/apps/moodle"},next:{title:"Ona.io",permalink:"/fr/documentation/apps/ona"}},u={},c=[{value:"Open Data Kit (ODK) Collect",id:"open-data-kit-odk-collect",level:2},{value:"Open Data Kit (ODK) Aggregate",id:"open-data-kit-odk-aggregate",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"open-data-kit-odk-collect"},"Open Data Kit (ODK) Collect"),(0,a.kt)("p",null,"Pour contourner ODK Aggregate et soumettre des formulaires directement \xe0 OpenFn, effectuez les modifications suivantes dans votre application ODK Collect."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"S\xe9lectionnez ",(0,a.kt)("inlineCode",{parentName:"li"},"General Settings"),"."),(0,a.kt)("li",{parentName:"ol"},"S\xe9lectionnez ",(0,a.kt)("inlineCode",{parentName:"li"},"Server Settings"),"."),(0,a.kt)("li",{parentName:"ol"},"Sous ",(0,a.kt)("inlineCode",{parentName:"li"},"Type"),", s\xe9lectionnez ",(0,a.kt)("inlineCode",{parentName:"li"},"Other"),"."),(0,a.kt)("li",{parentName:"ol"},"Sous ",(0,a.kt)("inlineCode",{parentName:"li"},"URL"),", entrez `",(0,a.kt)("a",{parentName:"li",href:"https://www.openfn.org"},"https://www.openfn.org")),(0,a.kt)("li",{parentName:"ol"},"Sous ",(0,a.kt)("inlineCode",{parentName:"li"},"Submission path"),", entrez ",(0,a.kt)("inlineCode",{parentName:"li"},"/inbox/your-unique-inbox-url")," (vous pouvez copier ceci depuis votre Inbox OpenFn)."),(0,a.kt)("li",{parentName:"ol"},"Facultatif : Si vous avez activ\xe9 les m\xe9thodes d'authentification dans votre inbox, entrez votre ",(0,a.kt)("inlineCode",{parentName:"li"},"username")," et ",(0,a.kt)("inlineCode",{parentName:"li"},"password")," sur le m\xeame \xe9cran.")),(0,a.kt)("p",null,"Notez que vous ne pouvez pas charger les formulaires depuis OpenFn. Les formulaires doivent \xeatre charg\xe9s directement via la ",(0,a.kt)("a",{parentName:"p",href:"https://docs.opendatakit.org/collect-forms/#loading-forms-directly"},"m\xe9thode directe ODK"),", qui vous permet d'envoyer des formulaires en tant que fichiers par email ou Whatsapp. Les utilisateurs peuvent alors choisir de t\xe9l\xe9charger les fichiers et de les enregistrer dans le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"odk/ forms")," sur leur mobile. ."),(0,a.kt)("p",null,"Notez que si vous voulez inverser cette configuration et configurer ODK Collect pour vous reconnectez plut\xf4t \xe0 votre Aggregate\xa0:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Retournez \xe0 ",(0,a.kt)("inlineCode",{parentName:"li"},"General Settings"),"."),(0,a.kt)("li",{parentName:"ol"},"S\xe9lectionnez ",(0,a.kt)("inlineCode",{parentName:"li"},"Server Settings"),"."),(0,a.kt)("li",{parentName:"ol"},"Sous ",(0,a.kt)("inlineCode",{parentName:"li"},"Type"),", selectionnez ",(0,a.kt)("inlineCode",{parentName:"li"},"ODK Aggregate"),"."),(0,a.kt)("li",{parentName:"ol"},"Sous ",(0,a.kt)("inlineCode",{parentName:"li"},"URL"),", entrez ",(0,a.kt)("inlineCode",{parentName:"li"},"Your Aggregate URL")),(0,a.kt)("li",{parentName:"ol"},"Sous ",(0,a.kt)("inlineCode",{parentName:"li"},"Submission path"),", entrez ",(0,a.kt)("inlineCode",{parentName:"li"},"/submissions"),"."),(0,a.kt)("li",{parentName:"ol"},"Entrez votre ODK Aggregate ",(0,a.kt)("inlineCode",{parentName:"li"},"username")," et ",(0,a.kt)("inlineCode",{parentName:"li"},"password")," sur ce m\xeame \xe9cran.")),(0,a.kt)("h2",{id:"open-data-kit-odk-aggregate"},"Open Data Kit (ODK) Aggregate"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Pour les nouvelles soumissions d'ODK en temps r\xe9el, cliquez sur l'onglet \xab Form Management \xbb \xe0 en haut de votre interface Aggregate."),(0,a.kt)("li",{parentName:"ol"},"Cliquez sur \xab\xa0Publish\xa0\xbb \xe0 c\xf4t\xe9 du formulaire que vous souhaitez publier sur OpenFn."),(0,a.kt)("li",{parentName:"ol"},"Une bo\xeete de dialogue s'ouvre."),(0,a.kt)("li",{parentName:"ol"},'Dans la liste d\xe9roulante "Publish To:", s\xe9lectionnez ',(0,a.kt)("inlineCode",{parentName:"li"},"Z-ALPHA JSON Server"),"."),(0,a.kt)("li",{parentName:"ol"},"Choisissez les donn\xe9es \xe0 publier dans la liste d\xe9roulante \xab\xa0Data to Publish:\xa0\xbb. Vous pouvez\xa0: ",(0,a.kt)("strong",{parentName:"li"},"\xab\xa0Upload Existing Data ONLY\xa0\xbb")," (id\xe9al pour les migrations d'ensembles de donn\xe9es achev\xe9s), ",(0,a.kt)("strong",{parentName:"li"},"\xab\xa0Stream New Submission Data ONLY\xa0\xbb")," (id\xe9al pour les nouveaux projets), ou ",(0,a.kt)("strong",{parentName:"li"},"\xab\xa0BOTH Upload Existing & Stream New Submission Data\xa0\xbb")," (id\xe9al pour connecter les projets d\xe9j\xe0 en cours)."),(0,a.kt)("li",{parentName:"ol"},"Dans la zone de texte \xab\xa0URL to publish to:\xa0\xbb, entrez l'UUID de votre Inbox OpenFn. (p. ex., ",(0,a.kt)("inlineCode",{parentName:"li"},"https://www.openfn.org/inbox/8ad63a29-mUCh-sEcRET-cODes-wOW"),")"),(0,a.kt)("li",{parentName:"ol"},"Laissez \xab\xa0Authorization token:\xa0\xbb vide."),(0,a.kt)("li",{parentName:"ol"},"Laissez \xab\xa0Include Media as:\xa0\xbb r\xe9gl\xe9 sur \xab\xa0Links(URLs) to Media\xa0\xbb."),(0,a.kt)("li",{parentName:"ol"},"Cliquez sur \xab\xa0Publish\xa0\xbb et entrez votre adresse \xe9lectronique dans la bo\xeete de dialogue."),(0,a.kt)("li",{parentName:"ol"},"Cliquez sur l'onglet \xab\xa0Published Data\xa0\xbb sous \xab\xa0Form Management\xa0\xbb et s\xe9lectionnez votre formulaire pour afficher l'\xe9tat de votre \xe9diteur. Vous pouvez \xe9galement maintenant v\xe9rifier votre inbox OpenFn pour voir arriver les soumissions ODK.")))}m.isMDXComponent=!0}}]);