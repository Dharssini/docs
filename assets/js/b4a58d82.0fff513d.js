"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8646],{72360:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294),o=n(86010),i="tabItem_OmH5";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(83117),o=n(67294),i=n(72389),r=n(67392),s=n(7094),l=n(12466),p=n(86010),d="tabList_uSqn",u="tabItem_LplD";function c(e){var t,n,i,c=e.lazy,m=e.block,h=e.defaultValue,g=e.values,k=e.groupId,f=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,r.l)(b,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),C=w.tabGroupChoices,T=w.setTabGroupChoices,j=(0,o.useState)(y),x=j[0],O=j[1],I=[],F=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var S=C[k];null!=S&&S!==x&&b.some((function(e){return e.value===S}))&&O(S)}var A=function(e){var t=e.currentTarget,n=I.indexOf(t),a=b[n].value;a!==x&&(F(t),O(a),null!=k&&T(k,a))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;n=I[a]||I[0];break;case"ArrowLeft":var o=I.indexOf(e.currentTarget)-1;n=I[o]||I[I.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,p.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":m},f)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return I.push(e)},onKeyDown:Z,onFocus:A,onClick:A},i,{className:(0,p.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),c?(0,o.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,i.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},11663:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return g}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=n(25710),s=n(22004),l=n(9877),p=n(72360),d=["components"],u={title:"Devtools"},c=void 0,m={unversionedId:"devtools/home",id:"devtools/home",title:"Devtools",description:"OpenFn/Devtools is a set of tools for writing &amp; testing job expressions,",source:"@site/docs/devtools/home.md",sourceDirName:"devtools",slug:"/devtools/home",permalink:"/documentation/devtools/home",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/devtools/home.md",tags:[],version:"current",frontMatter:{title:"Devtools"},sidebar:"docs",previous:{title:"Generic Sources",permalink:"/documentation/source-apps"},next:{title:"Adaptors",permalink:"/documentation/build/adaptors"}},h={},g=[{value:"Up and running",id:"up-and-running",level:2},{value:"Usage",id:"usage",level:2},{value:"Run a job using bash",id:"run-a-job-using-bash",level:3},{value:"More on Devtools",id:"more-on-devtools",level:3},{value:"Install a specific adaptor version",id:"install-a-specific-adaptor-version",level:3},{value:"The <code>--test</code> option",id:"the---test-option",level:3},{value:"<code>.FakeAdaptor</code>",id:"fakeadaptor",level:4},{value:"Offline testing for other adaptors",id:"offline-testing-for-other-adaptors",level:4},{value:"Configure an OpenFn project",id:"configure-an-openfn-project",level:2},{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"Scripts",id:"scripts",level:2},{value:"bootstrap",id:"bootstrap",level:3},{value:"generate-project.js",id:"generate-projectjs",level:3},{value:"generate-doclets",id:"generate-doclets",level:3},{value:"analyse-doclets",id:"analyse-doclets",level:3},{value:"Building adaptors for platform",id:"building-adaptors-for-platform",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Git config issues",id:"git-config-issues",level:3},{value:"SSH key issues",id:"ssh-key-issues",level:3},{value:"Github token sharing",id:"github-token-sharing",level:3},{value:"Using a new adaptor in an OpenFn/platform instance",id:"using-a-new-adaptor-in-an-openfnplatform-instance",level:2}],k={toc:g};function f(e){var t=e.components,u=(0,o.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},k,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"OpenFn/Devtools is a set of tools for writing ","&"," testing job expressions,\nmanaging OpenFn projects, and developing new adaptors. It's how most people work\nwith OpenFn from their own command lines, outside of OpenFn.org, Microservice,\nor Lightning."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Are you a developer?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/devtools"},"Devtools")," repo is a collection of bash\nand Node scripts, as well as a ",(0,i.kt)("em",{parentName:"p"},"suggested")," (but not necessary) directory\nstructure for working with OpenFn jobs and adaptors."),(0,i.kt)("p",{parentName:"div"},"To run OpenFn jobs locally, you only need ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/core"},"Core"),"\nand at least one adaptor, e.g.\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-http"},"language-http")," and you may prefer to\ninstall core globally via ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install -g @openfn/core")))),(0,i.kt)("h2",{id:"up-and-running"},"Up and running"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"git")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js")," (version 14 or greater)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone and install devtools to setup core, language-common, and language-http\nusing either SSH or HTTPS:"))),(0,i.kt)(l.Z,{defaultValue:"ssh",values:[{label:"SSH",value:"ssh"},{label:"HTTPS",value:"https"}],mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"ssh",mdxType:"TabItem"},(0,i.kt)(r.Z,{mdxType:"CodeBlock"},"git clone git@github.com:OpenFn/devtools.git","\n","cd devtools","\n","./install.sh ssh")),(0,i.kt)(p.Z,{value:"https",mdxType:"TabItem"},(0,i.kt)(r.Z,{mdxType:"CodeBlock"},"git clone https://github.com/OpenFn/devtools.git","\n","cd devtools","\n","./install.sh https"))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},'Note: If you get a "permission denied" message when running ',(0,i.kt)("inlineCode",{parentName:"em"},"./install.sh"),", try\n",(0,i.kt)("inlineCode",{parentName:"em"},"run chmod +x ./install.sh ")," then retry the install command.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Execute takes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"-l [language-package].Adaptor"),": The adaptor being used"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"-e [expression.js]:")," The expression being tested"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"-s [state.json]"),": The message ",(0,i.kt)("inlineCode",{parentName:"li"},"data: {...}")," and credential\n",(0,i.kt)("inlineCode",{parentName:"li"},"configuration: {...}")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"-o [output.json]"),": The file to which the output will be written")),(0,i.kt)("h3",{id:"run-a-job-using-bash"},"Run a job using bash"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"~/devtools/core/bin/core execute \\\n  -l ~/devtools/adaptors/language-http \\\n  -s ./tmp/state.json \\\n  -o ./tmp/output.json \\\n  -e ./tmp/expression.js\n")),(0,i.kt)("h3",{id:"more-on-devtools"},"More on Devtools"),(0,i.kt)(s.Z,{url:"https://www.youtube.com/watch?v=fkGI5YLp18s",mdxType:"ReactPlayer"}),(0,i.kt)("h3",{id:"install-a-specific-adaptor-version"},"Install a specific adaptor version"),(0,i.kt)("p",null,"To install specific adaptors, run\n",(0,i.kt)("inlineCode",{parentName:"p"},"./install.sh ${ssh || https} language-${name}")),(0,i.kt)("p",null,"When you install a new adaptor, the latest version will be enabled by default.\nTo switch the adaptor version when running jobs locally, in the root of the\nadaptor directory, run:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git checkout tags/v2.4.15")," (substitute ",(0,i.kt)("inlineCode",{parentName:"p"},"2.4.15")," with the adaptor version you\nwant)"),(0,i.kt)("h3",{id:"the---test-option"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"--test")," option"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"~/devtools/core/bin/core execute \\\n  -l ~/devtools/adaptors/language-http \\\n  -s ./tmp/state.json \\\n  -o ./tmp/output.json \\\n  -e ./tmp/expression.js \\\n  --test\n")),(0,i.kt)("p",null,"This intercepts all HTTP requests and displays the request information for\ndebugging."),(0,i.kt)("h4",{id:"fakeadaptor"},(0,i.kt)("inlineCode",{parentName:"h4"},".FakeAdaptor")),(0,i.kt)("p",null,"Adaptors may provide dummy modules for testing. ",(0,i.kt)("inlineCode",{parentName:"p"},"language-salesforce")," has a\nbuilt-in ",(0,i.kt)("inlineCode",{parentName:"p"},".FakeAdaptor")," which allows a user to test expressions on data without\nsending them to a real Salesforce server."),(0,i.kt)("p",null,"Instead of using ",(0,i.kt)("inlineCode",{parentName:"p"},"-l ./language-salesforce.Adaptor"),", use\n",(0,i.kt)("inlineCode",{parentName:"p"},"-l./language-salesforce.FakeAdaptor")," to test expressions offline:\n",(0,i.kt)("inlineCode",{parentName:"p"},"./core/bin/core execute -l ./language-salesforce.FakeAdaptor -s ./tmp/state.json -o ./tmp/output.json -e ./tmp/expression.js")),(0,i.kt)("h4",{id:"offline-testing-for-other-adaptors"},"Offline testing for other adaptors"),(0,i.kt)("p",null,"For most standard adaptors which make use of HTTP requests, you can add ",(0,i.kt)("inlineCode",{parentName:"p"},"--test"),"\nto the execute command to intercept all HTTP requests and return a ",(0,i.kt)("inlineCode",{parentName:"p"},"200"),"."),(0,i.kt)("h2",{id:"configure-an-openfn-project"},"Configure an OpenFn project"),(0,i.kt)("p",null,"You can use YAML project configuration files to define projects both on the\n",(0,i.kt)("a",{parentName:"p",href:"/documentation/deploy/platform"},"OpenFn platform")," and in\n",(0,i.kt)("a",{parentName:"p",href:"https://openfn.github.io/microservice/readme.html#content"},"OpenFn microservice"),".\nRunning ",(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/generate-project.js")," helps you build a project config YAML\ninteractively, adding your triggers, credentials and jobs to the config. You can\nread more about the config file\n",(0,i.kt)("a",{parentName:"p",href:"https://openfn.github.io/microservice/readme.html#sample-configuration"},"here")),(0,i.kt)("p",null,"If you choose ",(0,i.kt)("inlineCode",{parentName:"p"},"monolith")," mode, all your job code will be included in the YAML.\nIn ",(0,i.kt)("inlineCode",{parentName:"p"},"URI")," mode, you\u2019ll get a config file with URI-s to your defined jobs."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generate Project",src:n(78018).Z,width:"720",height:"550"})),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node")," is required to run jobs and use many\nof the scripts in Devtools (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run build")," is required after changes\nto adaptors).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A basic working knowledge of NodeJs, promises and asynchronous functions is\nessential for writing adaptors."))),(0,i.kt)("h2",{id:"scripts"},"Scripts"),(0,i.kt)("p",null,"Devtools comes with a collection of scripts to aid in setting up a development\nenvironment for adaptor work, and include commands to quickly clone a large\nnumber of adaptors, create tarballs of adaptors with only production\ndependencies included, etc."),(0,i.kt)("p",null,"For the kitchen sink, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./install ssh\n./scripts/bootstrap npm-install\n")),(0,i.kt)("p",null,"In order to run the scripts, ensure you have cd'd into the project directory and\nenter ",(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/<script-name>")),(0,i.kt)("h3",{id:"bootstrap"},"bootstrap"),(0,i.kt)("p",null,"Installs all adaptors in ",(0,i.kt)("inlineCode",{parentName:"p"},"repos")," file to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/adaptors")," directory and prepares\nthe working directory. This needs to be run before running any of the other\nscripts. Pass ",(0,i.kt)("inlineCode",{parentName:"p"},"npm-install")," to run npm install for each adaptor also."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/bootstrap npm-install")," - to clone, set up hooks and npm install in\neach ",(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/bootstrap"),"- to clone and set up hooks in each"),(0,i.kt)("h3",{id:"generate-projectjs"},"generate-project.js"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/generate-project.js")," interactively generates a YAML project\nconfiguration file that can be used both on the OpenFn platform and in OpenFn\nmicroservice to define projects."),(0,i.kt)("h3",{id:"generate-doclets"},"generate-doclets"),(0,i.kt)("p",null,"Iterates overs all language pack folder names found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"repos")," list and\ncreates a doclet json file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"doclets")," directory."),(0,i.kt)("h3",{id:"analyse-doclets"},"analyse-doclets"),(0,i.kt)("p",null,"Iterates overs all doclets found in ",(0,i.kt)("inlineCode",{parentName:"p"},"doclets")," and gives a tree view of the\ndoclet structure using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/jsdoc-query"},"jsdoc-query"),"."),(0,i.kt)("h2",{id:"building-adaptors-for-platform"},"Building adaptors for platform"),(0,i.kt)("p",null,"All adaptor releases are built inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"docker container"),". The importance of\nrunning the build and release process through a container is to standardize the\nbuild environment across the team. While adaptors can be built and run on lots\nof different operating systems and architectures, when we run the platform on\nKubernetes it expects linux boxes running x86... so that's where we build these\nofficial releases."),(0,i.kt)("p",null,"Here's how to build and release adaptors:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Reopen your package in ",(0,i.kt)("strong",{parentName:"li"},"dev-container")," by typing ",(0,i.kt)("inlineCode",{parentName:"li"},"ctrl+shift+p")," (or\n",(0,i.kt)("inlineCode",{parentName:"li"},"cmd+shift+p")," on mac) and choosing ",(0,i.kt)("strong",{parentName:"li"},"Remote-Container: Rebuild and Reopen in\nContainer"),"."),(0,i.kt)("li",{parentName:"ol"},"After the build is finished, open a terminal in vscode and run\n",(0,i.kt)("inlineCode",{parentName:"li"},"openfn-devtools release .")," to build, tag, and push to\n",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npm"),"."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"openfn-devtools package-release .")," to package everything with production\ndependencies and push to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/openfn"},"Github"),".")),(0,i.kt)("p",null,"Depending on how you've configured your local environment and your VSCode\ninstallation, you might encounter access issues preventing connections to NPM\nand GitHub."),(0,i.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"There are a number of issues that you may encounter related to sharing settings\nthat are responsible for passing ssh keys and local configurations from your\nhost machine into the VSCode container."),(0,i.kt)("h3",{id:"git-config-issues"},"Git config issues"),(0,i.kt)("p",null,"An issue can pop up about git config not set, To solve this, you should probably\nset your email and name globally using the commands below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'git config --global user.email "youremail@something.com"\ngit config --global user.name "Your Name"\n')),(0,i.kt)("h3",{id:"ssh-key-issues"},"SSH key issues"),(0,i.kt)("p",null,"You may find that you are unable to access your ",(0,i.kt)("inlineCode",{parentName:"p"},"ssh")," keys from inside the\ncontainer."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Error")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"permission denied (publickey)"))),(0,i.kt)("p",null,"To solve this, first make sure the ",(0,i.kt)("inlineCode",{parentName:"p"},"ssh agent")," is\n",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/containers#_sharing-git-credentials-with-your-container"},"up and running"),".\nIn MacOS, it is running by default. On Linux you can start the agent using the\ncommand"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"eval $(ssh-agent -s)\n")),(0,i.kt)("p",null,"Then you can add these line your ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bash_profile")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.zprofile")," (for Zsh) to\nmake it run by default."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'if [ -z "$SSH_AUTH_SOCK" ]; then\n   RUNNING_AGENT="`ps -ax | grep \'ssh-agent -s\' | grep -v grep | wc -l | tr -d \'[:space:]\'`"\n   if [ "$RUNNING_AGENT" = "0" ]; then\n      # Launch a new instance of the agent\n      ssh-agent -s &> $HOME/.ssh/ssh-agent\n   fi\n   eval `cat $HOME/.ssh/ssh-agent`\nfi\n')),(0,i.kt)("p",null,"Next, run the command below to add your identity to the ssh agent:"),(0,i.kt)(l.Z,{defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"MacOS",value:"macos"}],mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  ssh-add <path-to-your-ssh-file>\n"))),(0,i.kt)(p.Z,{value:"macos",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  ssh-add -A\n")))),(0,i.kt)("p",null,"Finally, configure VSCode to share your local ssh keys with the dev container.\nIn VSCode, go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings"),", and in the search bar, type\n",(0,i.kt)("inlineCode",{parentName:"p"},"terminal.integrated.inherit"),". You should see the option in the image below and\ncheck it if it's unchecked."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"vscode settings",src:n(78697).Z,width:"2688",height:"418"})),(0,i.kt)("h3",{id:"github-token-sharing"},"Github token sharing"),(0,i.kt)("p",null,"Our release process relies on a ",(0,i.kt)("inlineCode",{parentName:"p"},"GH_TOKEN")," variable. Set up an\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"access token"),"\nin Github."),(0,i.kt)("p",null,"In your ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bash_profile")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," file, export the newly created token by\nadding this line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"export GH_TOKEN=<TOKEN>\n")),(0,i.kt)("h2",{id:"using-a-new-adaptor-in-an-openfnplatform-instance"},"Using a new adaptor in an OpenFn/platform instance"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add your release to the ",(0,i.kt)("inlineCode",{parentName:"li"},"scripts/install-lp")," script."),(0,i.kt)("li",{parentName:"ol"},"Add the version number to ",(0,i.kt)("inlineCode",{parentName:"li"},"priv/adaptors.json"),"."),(0,i.kt)("li",{parentName:"ol"},"Add the ",(0,i.kt)("inlineCode",{parentName:"li"},"bodySchema")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"CredentialView.js"),".")))}f.isMDXComponent=!0},78018:function(e,t,n){t.Z=n.p+"assets/images/generate-project-40444c4a75e8e0b63a1cbe1e02d7f49d.gif"},78697:function(e,t,n){t.Z=n.p+"assets/images/vscode-settings-41387d833ade3295b22b17fbd500c692.png"}}]);