(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{208:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),o=n(8),i=(n(0),n(265)),r={title:"Devtools"},l={unversionedId:"devtools/home",id:"devtools/home",isDocsHomePage:!1,title:"Devtools",description:"A set of tools for writing &amp; testing expressions, managing OpenFn projects,",source:"@site/docs/devtools/home.md",slug:"/devtools/home",permalink:"/documentation/devtools/home",editUrl:"https://github.com/openfn/docs/edit/main/docs/devtools/home.md",version:"current",sidebar:"docs",previous:{title:"Generic Data Sources",permalink:"/documentation/source-apps"},next:{title:"Adaptors",permalink:"/documentation/build/adaptors"}},s=[{value:"Up and running",id:"up-and-running",children:[]},{value:"Usage",id:"usage",children:[{value:"Bash usage",id:"bash-usage",children:[]},{value:"The <code>--test</code> option",id:"the---test-option",children:[]}]},{value:"Configure an OpenFn project",id:"configure-an-openfn-project",children:[]},{value:"Pre-Requisites",id:"pre-requisites",children:[]},{value:"Scripts",id:"scripts",children:[{value:"bootstrap",id:"bootstrap",children:[]},{value:"generate-project.js",id:"generate-projectjs",children:[]},{value:"generate-doclets",id:"generate-doclets",children:[]},{value:"analyse-doclets",id:"analyse-doclets",children:[]},{value:"bundle",id:"bundle",children:[]},{value:"bundle-all",id:"bundle-all",children:[]},{value:"upload-release",id:"upload-release",children:[]}]},{value:"Releasing a new adaptor version for production use",id:"releasing-a-new-adaptor-version-for-production-use",children:[]},{value:"Using a new adaptor in an OpenFn/platform instance",id:"using-a-new-adaptor-in-an-openfnplatform-instance",children:[]}],p={toc:s};function c(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A set of tools for writing ","&"," testing expressions, managing OpenFn projects,\nand developing new adaptors."),Object(i.b)("h2",{id:"up-and-running"},"Up and running"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Make sure you've got ",Object(i.b)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"git")," (maybe GitBash for\nWindows?)"),Object(i.b)("li",{parentName:"ol"},"And ",Object(i.b)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," (version 12 or greater)"),Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"git clone git@github.com:OpenFn/devtools.git")," for SSH or\n",Object(i.b)("inlineCode",{parentName:"li"},"git clone https://github.com/OpenFn/devtools.git")),Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"cd devtools")),Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"./install.sh ssh")," or ",Object(i.b)("inlineCode",{parentName:"li"},"./install.sh https")," to install core,\nlanguage-common, and language-http")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},'Note: If you get a "permission denied" message when running ',Object(i.b)("inlineCode",{parentName:"em"},"./install.sh"),", try\n",Object(i.b)("inlineCode",{parentName:"em"},"run chmod +x ./install.sh ")," then retry the install command.")),Object(i.b)("p",null,"To install specific adaptors, run\n",Object(i.b)("inlineCode",{parentName:"p"},"./install.sh ${ssh || https} language-${name}")),Object(i.b)("p",null,"You can run core from anywhere by using ",Object(i.b)("inlineCode",{parentName:"p"},"npm install -g @openfn/core")," for a\nglobal install."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Execute takes:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"-l [language-package].Adaptor"),": The adaptor being used"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"-e [expression.js]:")," The expression being tested"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"-s [state.json]"),": The message ",Object(i.b)("inlineCode",{parentName:"li"},"data: {...}")," and credential\n",Object(i.b)("inlineCode",{parentName:"li"},"configuration: {...}")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"-o [output.json]"),": The file to which the output will be written")),Object(i.b)("h3",{id:"bash-usage"},"Bash usage"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"~/devtools/core/bin/core execute \\\n  -l ~/devtools/adaptors/language-http \\\n  -s ./tmp/state.json \\\n  -o ./tmp/output.json \\\n  -e ./tmp/expression.js\n")),Object(i.b)("h3",{id:"the---test-option"},"The ",Object(i.b)("inlineCode",{parentName:"h3"},"--test")," option"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"~/devtools/core/bin/core execute \\\n  -l ~/devtools/adaptors/language-http \\\n  -s ./tmp/state.json \\\n  -o ./tmp/output.json \\\n  -e ./tmp/expression.js \\\n  --test\n")),Object(i.b)("p",null,"This intercepts all HTTP requests and displays the request information for\ndebugging."),Object(i.b)("h4",{id:"fakeadaptor"},Object(i.b)("inlineCode",{parentName:"h4"},".FakeAdaptor")),Object(i.b)("p",null,"Adaptors may provide dummy modules for testing. ",Object(i.b)("inlineCode",{parentName:"p"},"language-salesforce")," has a\nbuilt-in ",Object(i.b)("inlineCode",{parentName:"p"},".FakeAdaptor")," which allows a user to test expressions on data without\nsending them to a real Salesforce server."),Object(i.b)("p",null,"Instead of using ",Object(i.b)("inlineCode",{parentName:"p"},"-l ./language-salesforce.Adaptor"),", use\n",Object(i.b)("inlineCode",{parentName:"p"},"-l./language-salesforce.FakeAdaptor")," to test expressions offline:\n",Object(i.b)("inlineCode",{parentName:"p"},"./core/bin/core execute -l ./language-salesforce.FakeAdaptor -s ./tmp/state.json -o ./tmp/output.json -e ./tmp/expression.js")),Object(i.b)("h4",{id:"offline-testing-for-other-adaptors"},"Offline testing for other adaptors"),Object(i.b)("p",null,"For most standard adaptors which make use of HTTP requests, you can add ",Object(i.b)("inlineCode",{parentName:"p"},"--test"),"\nto the execute command to intercept all HTTP requests and return a ",Object(i.b)("inlineCode",{parentName:"p"},"200"),"."),Object(i.b)("h2",{id:"configure-an-openfn-project"},"Configure an OpenFn project"),Object(i.b)("p",null,"You can use YAML project configuration files to define projects both on the\n",Object(i.b)("a",{parentName:"p",href:"https://docs.openfn.org/documentation/deploy/platform"},"OpenFn platform")," and in\n",Object(i.b)("a",{parentName:"p",href:"https://openfn.github.io/microservice/readme.html#content"},"OpenFn microservice"),".\nRunning ",Object(i.b)("inlineCode",{parentName:"p"},"./scripts/generate-project.js")," helps you build a project config YAML\ninteractively, adding your triggers, credentials and jobs to the config. You can\nread more about the config file\n",Object(i.b)("a",{parentName:"p",href:"https://openfn.github.io/microservice/readme.html#sample-configuration"},"here")),Object(i.b)("p",null,"If you choose ",Object(i.b)("inlineCode",{parentName:"p"},"monolith")," mode, all your job code will be included in the YAML.\nIn ",Object(i.b)("inlineCode",{parentName:"p"},"URI")," mode, you\u2019ll get a config file with URI-s to your defined jobs."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Generate Project",src:n(444).default})),Object(i.b)("h2",{id:"pre-requisites"},"Pre-Requisites"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node")," is required to run jobs and use many\nof the scripts in Devtools.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"http://www.gnu.org/software/make/"},"Make")," is used so that our modern (es9)\nJavaScript can be run on older Node runtimes. To install it and other build\ntools, you might run ",Object(i.b)("inlineCode",{parentName:"p"},"sudo apt-get install build-essential"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"A basic working knowledge of NodeJs, promises and asynchronous functions is\nessential for writing adaptors."))),Object(i.b)("h2",{id:"scripts"},"Scripts"),Object(i.b)("p",null,"Devtools comes with a collection of scripts to aid in setting up a development\nenvironment for adaptor work, and include commands to quickly clone a large\nnumber of adaptors, create tarballs of adaptors with only production\ndependencies included, etc."),Object(i.b)("p",null,"For the kitchen sink, run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"./install ssh\n./scripts/bootstrap npm-install\n")),Object(i.b)("p",null,"In order to run the scripts, ensure you have cd'd into the project directory and\nenter ",Object(i.b)("inlineCode",{parentName:"p"},"./scripts/<script-name>")),Object(i.b)("h3",{id:"bootstrap"},"bootstrap"),Object(i.b)("p",null,"Installs all adaptors in ",Object(i.b)("inlineCode",{parentName:"p"},"repos")," file to the ",Object(i.b)("inlineCode",{parentName:"p"},"/adaptors")," directory and prepares\nthe working directory. This needs to be run before running any of the other\nscripts. Pass ",Object(i.b)("inlineCode",{parentName:"p"},"npm-install")," to run npm install for each adaptor also."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"./scripts/bootstrap npm-install")," - to clone, set up hooks and npm install in\neach ",Object(i.b)("inlineCode",{parentName:"p"},"./scripts/bootstrap"),"- to clone and set up hooks in each"),Object(i.b)("h3",{id:"generate-projectjs"},"generate-project.js"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"./scripts/generate-project.js")," interactively generates a YAML project\nconfiguration file that can be used both on the OpenFn platform and in OpenFn\nmicroservice to define projects."),Object(i.b)("h3",{id:"generate-doclets"},"generate-doclets"),Object(i.b)("p",null,"Iterates overs all language pack folder names found in the ",Object(i.b)("inlineCode",{parentName:"p"},"repos")," list and\ncreates a doclet json file in the ",Object(i.b)("inlineCode",{parentName:"p"},"doclets")," directory."),Object(i.b)("h3",{id:"analyse-doclets"},"analyse-doclets"),Object(i.b)("p",null,"Iterates overs all doclets found in ",Object(i.b)("inlineCode",{parentName:"p"},"doclets")," and gives a tree view of the\ndoclet structure using ",Object(i.b)("a",{parentName:"p",href:"https://github.com/OpenFn/jsdoc-query"},"jsdoc-query"),"."),Object(i.b)("h3",{id:"bundle"},"bundle"),Object(i.b)("p",null,"Creates a tarball with all production dependencies install for a given module."),Object(i.b)("p",null,"Example: ",Object(i.b)("inlineCode",{parentName:"p"},"./scripts/bundle-node language-common -o builds")," creates a\n",Object(i.b)("inlineCode",{parentName:"p"},"language-common-v1.0.0.tgz")," file in the 'builds' directory."),Object(i.b)("p",null,"Arguments ",Object(i.b)("inlineCode",{parentName:"p"},"./scripts/bundle-node <language> -o <output folder> -d")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-o")," - Output folder"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-d")," - Debug"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--no-ast")," - Don't build an include an AST for OpenFn.org to parse")),Object(i.b)("h3",{id:"bundle-all"},"bundle-all"),Object(i.b)("p",null,"Runs ",Object(i.b)("inlineCode",{parentName:"p"},"bundle")," for all repos found in the list, and outputs them to the ",Object(i.b)("inlineCode",{parentName:"p"},"builds"),"\nfolder."),Object(i.b)("h3",{id:"upload-release"},"upload-release"),Object(i.b)("p",null,"Uploads a tarball to a Github release."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"GH_TOKEN=<oauth-token> \\\n  ./scripts/upload-release -i ./builds/language-common-v0.0.0.tgz\n")),Object(i.b)("p",null,"Infers the repo name and version number from the file."),Object(i.b)("p",null,"Arguments ",Object(i.b)("inlineCode",{parentName:"p"},"./scripts/upload-release -i <file> [-u]")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"i")," - Path to build file to upload"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"u")," - Update a file if already exists (and is a different size)")),Object(i.b)("h2",{id:"releasing-a-new-adaptor-version-for-production-use"},"Releasing a new adaptor version for production use"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Bump the version in ",Object(i.b)("inlineCode",{parentName:"strong"},"package.json"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Run ",Object(i.b)("inlineCode",{parentName:"strong"},"npm install"))," to update ",Object(i.b)("inlineCode",{parentName:"li"},"package-lock.json")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Commit")," and tag your version with ",Object(i.b)("inlineCode",{parentName:"li"},"git tag"),". ",Object(i.b)("em",{parentName:"li"},"N.B., this is handled with a\ngit hook provided by ",Object(i.b)("inlineCode",{parentName:"em"},"bootstrap"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Push the commits and tag to GitHub")," with ",Object(i.b)("inlineCode",{parentName:"li"},"git push && git push --tags")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Create a release")," on the the associated repo on Github, selecting the\nversion tag that was pushed in the last step. Write a title and release notes\nas needed then click 'Publish release'."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Return to the devtools directory")," with ",Object(i.b)("inlineCode",{parentName:"li"},"cd ../../")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Bundle the module")," with\n",Object(i.b)("inlineCode",{parentName:"li"},"./scripts/bundle-node ./adaptors/<language-pack> -o builds")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Verify that the tarball was created")," in ",Object(i.b)("inlineCode",{parentName:"li"},"builds")," with the naming\nconvention of: ",Object(i.b)("inlineCode",{parentName:"li"},"<language-pack>-<version>.tgz")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Upload the build")," using the ",Object(i.b)("inlineCode",{parentName:"li"},"upload-release")," script:\n",Object(i.b)("inlineCode",{parentName:"li"},"./scripts/upload-release -i builds/<file>"))),Object(i.b)("p",null,"If the wrong file was uploaded or you want to replace the build on Github then\nuse the ",Object(i.b)("inlineCode",{parentName:"p"},"-u")," flag which deletes the build from Github if the filesize is\ndifferent."),Object(i.b)("p",null,"Note that this script expects a ",Object(i.b)("inlineCode",{parentName:"p"},"GH_TOKEN")," env variable, which is an OAuth2\ntoken you must get from Github (via the account page)"),Object(i.b)("h2",{id:"using-a-new-adaptor-in-an-openfnplatform-instance"},"Using a new adaptor in an OpenFn/platform instance"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add your release to the ",Object(i.b)("inlineCode",{parentName:"li"},"scripts/install-lp")," script."),Object(i.b)("li",{parentName:"ol"},"Add the version number to ",Object(i.b)("inlineCode",{parentName:"li"},"priv/adaptors.json"),"."),Object(i.b)("li",{parentName:"ol"},"Add the ",Object(i.b)("inlineCode",{parentName:"li"},"bodySchema")," to ",Object(i.b)("inlineCode",{parentName:"li"},"CredentialView.js"),".")))}c.isMDXComponent=!0},265:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),c=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(n),u=a,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||i;return n?o.a.createElement(m,l(l({ref:t},p),{},{components:n})):o.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},444:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/generate-project-40444c4a75e8e0b63a1cbe1e02d7f49d.gif"}}]);