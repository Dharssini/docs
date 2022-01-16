"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[5190],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},71759:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return d},default:function(){return f}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],l={layout:"post",title:"Building an Integrated Data Warehouse to Track and Share Student Performance",author:"Lei Lei Tun",author_url:"https://github.com/hninleileitun",author_image_url:"https://avatars.githubusercontent.com/hninleileitun",tags:["case study","African School of Excellence","education","PostgreSQL","Redash","education","data warehouse","automated reporting"],image:"/img/ase.jpg",featured:!1},s=void 0,c={permalink:"/blog/2020/07/01/african-school-of-excellence-case-study",editUrl:"https://github.com/openfn/docs/edit/main/blog/2020-07-01-african-school-of-excellence-case-study.md",source:"@site/blog/2020-07-01-african-school-of-excellence-case-study.md",title:"Building an Integrated Data Warehouse to Track and Share Student Performance",description:"ASE had a diverse data portfolio spread across so many sources that couldn't",date:"2020-07-01T00:00:00.000Z",formattedDate:"July 1, 2020",tags:[{label:"case study",permalink:"/blog/tags/case-study"},{label:"African School of Excellence",permalink:"/blog/tags/african-school-of-excellence"},{label:"education",permalink:"/blog/tags/education"},{label:"PostgreSQL",permalink:"/blog/tags/postgre-sql"},{label:"Redash",permalink:"/blog/tags/redash"},{label:"data warehouse",permalink:"/blog/tags/data-warehouse"},{label:"automated reporting",permalink:"/blog/tags/automated-reporting"}],readingTime:1.605,truncated:!0,authors:[{name:"Lei Lei Tun",url:"https://github.com/hninleileitun",imageURL:"https://avatars.githubusercontent.com/hninleileitun"}],prevItem:{title:"Enhanced Survey Monitoring and Quicker Analysis for Program Improvement in India",permalink:"/blog/2020/07/01/KGVK-case-study"},nextItem:{title:"Helping an Airport Soar: Synchronizing Asset Data Between the Tarmac and HQ",permalink:"/blog/2020/07/01/airport-case-study"}},u={authorsImageUrls:[void 0]},d=[{value:"African School of Excellence is working to deliver quality, affordable education in South Africa.",id:"african-school-of-excellence-is-working-to-deliver-quality-affordable-education-in-south-africa",children:[],level:3},{value:"ASE had a diverse, but disconnected data portfolio.",id:"ase-had-a-diverse-but-disconnected-data-portfolio",children:[],level:3},{value:"To connect the data sources and enable easy, quick analysis, Open Function Group\u2026",id:"to-connect-the-data-sources-and-enable-easy-quick-analysis-open-function-group",children:[],level:3}],p={toc:d};function f(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ASE had a diverse data portfolio spread across so many sources that couldn't\neasily be analyzed. Open Function delivered a centralized, single-view solution\nfor monitoring students and sharing data across schools."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ase",src:n(15513).Z})),(0,r.kt)("h3",{id:"african-school-of-excellence-is-working-to-deliver-quality-affordable-education-in-south-africa"},"African School of Excellence is working to deliver quality, affordable education in South Africa."),(0,r.kt)("p",null,"In South Africa, school funding and tuition costs often defer students from\nreaching their full potential.\n",(0,r.kt)("a",{parentName:"p",href:"http://www.ase.org.za/"},"African School of Excellence (ASE)")," helps students\naccess affordable, world-class education by providing affordable world-class\neducation to everyone through the creation of a self-sustaining network of elite\nindependent secondary schools at a fraction of the cost."),(0,r.kt)("p",null,"ASE focuses their mission on three essential factors: world-class quality,\naffordability, and scalability; They believe their students will succeed in\nSouth Africa and internationally when provided attainable education. ASE seeks\nto grow an even bigger network of schools throughout South Africa to provide the\ntens of thousands of disadvantaged students with elite education."),(0,r.kt)("h3",{id:"ase-had-a-diverse-but-disconnected-data-portfolio"},"ASE had a diverse, but disconnected data portfolio."),(0,r.kt)("p",null,"ASE used Google, Khan Academy, EdAdmin, and a custom built survey app to track\nstudent progress. The data set was rich, but diverse and spread across so many\nsources, so it couldn't easily be analyzed."),(0,r.kt)("h3",{id:"to-connect-the-data-sources-and-enable-easy-quick-analysis-open-function-group"},"To connect the data sources and enable easy, quick analysis, Open Function Group\u2026"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Built a data warehouse on PostgreSQL database to centrally capture data across\nthe organization,"),(0,r.kt)("li",{parentName:"ul"},"Implemented OpenFn to integrate the existing siloed data sources,"),(0,r.kt)("li",{parentName:"ul"},"Configured an analytics layer using Readash for real-time program monitoring,\nand"),(0,r.kt)("li",{parentName:"ul"},"Enabled data sharing across teachers, partners, and schools.")),(0,r.kt)("p",null,"By building an integrated data warehouse , OFG delivered a centralized,\nsingle-view solution for monitoring students and sharing data across schools.\nWith OpenFn, ASE has access to student data like never before. To learn more\nabout OFG data warehouse solutions, see\n",(0,r.kt)("a",{parentName:"p",href:"https://www.openfn.org/solutions"},"Solutions")," or\n",(0,r.kt)("a",{parentName:"p",href:"mailto://admin@openfn.org"},"contact our team"),"."),(0,r.kt)("p",null,"The photo above was originally posted on the Wikimedia\n",(0,r.kt)("a",{parentName:"p",href:"https://commons.wikimedia.org/wiki/File:WikiAfrica_Schools_training_African_School_for_Excellence_(23).jpg"},"site"),'\nunder "WikiAfrica Schools training Africa School of Excellence."'))}f.isMDXComponent=!0},15513:function(e,t,n){t.Z=n.p+"assets/images/ase-29bd6b269909d78ce1ccb28e91406721.jpg"}}]);