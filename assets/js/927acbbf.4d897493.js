"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[81448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={title:"Portability"},r=void 0,l={unversionedId:"portability",id:"portability",title:"Portability",description:"Intent",source:"@site/docs/portability.md",sourceDirName:".",slug:"/portability",permalink:"/documentation/portability",draft:!1,editUrl:"https://github.com/openfn/docs/edit/main/docs/portability.md",tags:[],version:"current",frontMatter:{title:"Portability"},sidebar:"docs",previous:{title:"Requirements",permalink:"/documentation/deploy/requirements"},next:{title:"Instant OpenHIE",permalink:"/documentation/instant-openhie"}},s={},p=[{value:"Intent",id:"intent",level:2},{value:"&quot;Projects as code&quot;",id:"projects-as-code",level:2},{value:"The project &quot;spec&quot;",id:"the-project-spec",level:3},{value:"The project &quot;state&quot;",id:"the-project-state",level:3},{value:"Using the CLI to deploy or describe projects projects as code",id:"using-the-cli-to-deploy-or-describe-projects-projects-as-code",level:3},{value:"<code>openfn pull</code> to generate a project spec and state",id:"openfn-pull-to-generate-a-project-spec-and-state",level:3},{value:"<code>openfn deploy</code> to create a project on a Lightning instance",id:"openfn-deploy-to-create-a-project-on-a-lightning-instance",level:3},{value:"<code>openfn deploy</code> to update an existing project",id:"openfn-deploy-to-update-an-existing-project",level:3},{value:"Automated Version Control with Github and Lightning",id:"automated-version-control-with-github-and-lightning",level:3},{value:"Github Repository Secrets",id:"github-repository-secrets",level:4},{value:"Github Repository Structure",id:"github-repository-structure",level:4},{value:"Example Deploy Workflow for GitHub",id:"example-deploy-workflow-for-github",level:4},{value:"Example Pull Workflow for GitHub",id:"example-pull-workflow-for-github",level:4},{value:"Using version control",id:"using-version-control",level:4},{value:"Lightning to GitHub",id:"lightning-to-github",level:5},{value:"Github to Lightning",id:"github-to-lightning",level:5},{value:"Getting Help with the cli",id:"getting-help-with-the-cli",level:3},{value:"Other Versions",id:"other-versions",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"intent"},"Intent"),(0,a.kt)("p",null,'The portability specification allows for the representations of entire workflow\nprojects "as code", lets user move between various deployment pathways (cloud,\nlocal, DIY, etc.) and proposes a globally-applicable way of ',(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"specifying\nworkflow automation"))," and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"systems integration"))," that might be applied\nacross workflow-engines/integration platforms across the sector. Nothing about\nthe spec ",(0,a.kt)("em",{parentName:"p"},"must")," be specific to OpenFn or any one of our individual products. We\nenvision a future in which software built with Lightning, the OpenFn Integration\nToolkit, and entirely new and different integration/workflow tools can adopt\nthis specification."),(0,a.kt)("p",null,"If you're interested in contributing to the specification, reach out to OpenFn\nvia the ",(0,a.kt)("a",{parentName:"p",href:"https://community.openfn.org"},"community forum"),", write to us, or suggest\nchanges by submitting a pull request here."),(0,a.kt)("h2",{id:"projects-as-code"},'"Projects as code"'),(0,a.kt)("p",null,"The portability specification v4 defines how entire projects (groups of\nworkflows with their associated triggers, edges, credentials and jobs) can be\nrepresented as code. It improves the OpenFn developer experience, allowing\nworkflows to be built and tested locally; (b) enables project version control\nand an audit trail of project changes; and (c) allows users to port existing\nworkflows from OpenFn v1 to v2, as well as between instances or deployments of\nLightning."),(0,a.kt)("h3",{id:"the-project-spec"},'The project "spec"'),(0,a.kt)("p",null,'The project specification (or "spec") is often saved as a ',(0,a.kt)("inlineCode",{parentName:"p"},"project.yaml")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: openhie-project\ndescription: Some sample\n# credentials:\n# globals:\nworkflows:\n  OpenHIE-Workflow:\n    name: OpenHIE Workflow\n    jobs:\n      FHIR-standard-Data-with-change:\n        name: FHIR-standard-Data-with-change\n        adaptor: '@openfn/language-http@latest'\n        enabled: true\n        # credential:\n        # globals:\n        body: |\n          fn(state => {\n            console.log(\"hello github integration\")\n            return state\n        });\n\n      Send-to-OpenHIM-to-route-to-SHR:\n        name: Send-to-OpenHIM-to-route-to-SHR\n        adaptor: '@openfn/language-http@latest'\n        enabled: true\n        # credential:\n        # globals:\n        body: |\n          fn(state => state);\n\n      Notify-CHW-upload-successful:\n        name: Notify-CHW-upload-successful\n        adaptor: '@openfn/language-http@latest'\n        enabled: true\n        # credential:\n        # globals:\n        body: |\n          fn(state => state);\n\n      Notify-CHW-upload-failed:\n        name: Notify-CHW-upload-failed\n        adaptor: '@openfn/language-http@latest'\n        enabled: true\n        # credential:\n        # globals:\n        body: |\n          fn(state => state);\n\n    triggers:\n      webhook:\n        type: webhook\n    edges:\n      webhook->FHIR-standard-Data-with-change:\n        source_trigger: webhook\n        target_job: FHIR-standard-Data-with-change\n        condition: always\n      FHIR-standard-Data-with-change->Send-to-OpenHIM-to-route-to-SHR:\n        source_job: FHIR-standard-Data-with-change\n        target_job: Send-to-OpenHIM-to-route-to-SHR\n        condition: on_job_success\n      Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-successful:\n        source_job: Send-to-OpenHIM-to-route-to-SHR\n        target_job: Notify-CHW-upload-successful\n        condition: on_job_success\n      Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-failed:\n        source_job: Send-to-OpenHIM-to-route-to-SHR\n        target_job: Notify-CHW-upload-failed\n        condition: on_job_failure\n")),(0,a.kt)("h3",{id:"the-project-state"},'The project "state"'),(0,a.kt)("p",null,"The project state is a representation of a particular project as ",(0,a.kt)("em",{parentName:"p"},"on a specific\nLightning instance"),". It is often saved as ",(0,a.kt)("inlineCode",{parentName:"p"},"projectState.json")," and contains UUIDs\nfor resources on a particular Lightning deployment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "workflows": {\n    "OpenHIE-Workflow": {\n      "id": "27ae2937-0959-48b8-a597-b1646aae8c14",\n      "name": "OpenHIE Workflow",\n      "jobs": {\n        "Transform-data-to-FHIR-standard": {\n          "id": "e44f65bb-5038-4e17-8d93-b63cbe95254a",\n          "delete": true\n        },\n        "Send-to-OpenHIM-to-route-to-SHR": {\n          "id": "977b87ff-f347-42b5-832f-6ae2ca726f32",\n          "name": "Send-to-OpenHIM-to-route-to-SHR",\n          "adaptor": "@openfn/language-http@latest",\n          "body": "fn(state => state);\\n",\n          "enabled": true\n        },\n        "Notify-CHW-upload-successful": {\n          "id": "86b743a3-fd00-4629-b9fb-d5f38fb56d0b",\n          "name": "Notify-CHW-upload-successful",\n          "adaptor": "@openfn/language-http@latest",\n          "body": "fn(state => state);\\n",\n          "enabled": true\n        },\n        "Notify-CHW-upload-failed": {\n          "id": "be85df30-0abd-4f8e-be17-501f67e18b8d",\n          "name": "Notify-CHW-upload-failed",\n          "adaptor": "@openfn/language-http@latest",\n          "body": "fn(state => state);\\n",\n          "enabled": true\n        },\n        "FHIR-standard-Data": {\n          "id": "55016dda-42e3-4ee1-8a9c-24e3f23d42f1",\n          "delete": true\n        },\n        "FHIR-standard-Data-with-change": {\n          "id": "28dd0846-a6ae-40c0-8ab4-3e0a6b487afe",\n          "name": "FHIR-standard-Data-with-change",\n          "adaptor": "@openfn/language-http@latest",\n          "body": "fn(state => state);\\n",\n          "enabled": true\n        }\n      },\n      "triggers": {\n        "webhook": {\n          "id": "530cde0b-0de4-4f68-8834-0a4356a2fe53",\n          "type": "webhook"\n        }\n      },\n      "edges": {\n        "webhook->Transform-data-to-FHIR-standard": {\n          "id": "b2c7407b-0ae9-4ca5-9d6b-ee624976fa54",\n          "delete": true\n        },\n        "Transform-data-to-FHIR-standard->Send-to-OpenHIM-to-route-to-SHR": {\n          "id": "d22ed6f4-26a2-4c85-b261-cc110a6851e6",\n          "delete": true\n        },\n        "Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-successful": {\n          "id": "26c12f7f-7806-4008-87cd-6747998f95f4",\n          "condition": "on_job_success",\n          "source_job_id": "977b87ff-f347-42b5-832f-6ae2ca726f32",\n          "source_trigger_id": null,\n          "target_job_id": "86b743a3-fd00-4629-b9fb-d5f38fb56d0b"\n        },\n        "Send-to-OpenHIM-to-route-to-SHR->Notify-CHW-upload-failed": {\n          "id": "0630ac96-4f67-4de7-8c3d-0bf3f89f80d9",\n          "condition": "on_job_failure",\n          "source_job_id": "977b87ff-f347-42b5-832f-6ae2ca726f32",\n          "source_trigger_id": null,\n          "target_job_id": "be85df30-0abd-4f8e-be17-501f67e18b8d"\n        },\n        "webhook->FHIR-standard-Data": {\n          "id": "5ce3a8ed-b9eb-464a-a2cd-ba55adc393c2",\n          "delete": true\n        },\n        "FHIR-standard-Data->Send-to-OpenHIM-to-route-to-SHR": {\n          "id": "5f459cd9-2882-4a61-a2cc-ec45e58d4837",\n          "delete": true\n        },\n        "webhook->FHIR-standard-Data-with-change": {\n          "id": "75e7f7d8-274b-410d-9600-730bbd535229",\n          "condition": "always",\n          "source_job_id": null,\n          "source_trigger_id": "530cde0b-0de4-4f68-8834-0a4356a2fe53",\n          "target_job_id": "28dd0846-a6ae-40c0-8ab4-3e0a6b487afe"\n        },\n        "FHIR-standard-Data-with-change->Send-to-OpenHIM-to-route-to-SHR": {\n          "id": "1e5ba385-2c49-4241-8cd2-042c99a810ec",\n          "condition": "on_job_success",\n          "source_job_id": "28dd0846-a6ae-40c0-8ab4-3e0a6b487afe",\n          "source_trigger_id": null,\n          "target_job_id": "977b87ff-f347-42b5-832f-6ae2ca726f32"\n        }\n      }\n    }\n  },\n  "id": "8deff39d-8189-4bd7-9dc7-f9f08e7f2c60",\n  "name": "openhie-project"\n}\n')),(0,a.kt)("h3",{id:"using-the-cli-to-deploy-or-describe-projects-projects-as-code"},"Using the CLI to deploy or describe projects projects as code"),(0,a.kt)("p",null,"The project spec and project state can be used for a variety of reasons, e.g.\none could generate the state and spec as backups of the project or one could\ngenerate these files and use them for auditing and record keeping, etc. The\nOpenFn ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/kit/tree/main/packages/cli"},"CLI")," comes with\ncommands that can be used to pull project configurations down from a running\nLightning server, and to deploy or push updates to existing projects on a\nLightning server."),(0,a.kt)("admonition",{title:"Don't have the CLI yet?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Install it by running ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install -g @openfn/cli"))),(0,a.kt)("p",null,"Before using the CLI, configure it either by passing in environment variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"OPENFN_ENDPOINT=https://app.openfn.org\nOPENFN_API_KEY=yourSecretApiToken\n")),(0,a.kt)("p",null,"Or through a ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // Required, can be overridden or set with `OPENFN_API_KEY` env var\n  "apiKey": "***",\n\n  // Optional: can be set using the -p, defaults to project.yaml\n  "specPath": "project.yaml",\n\n  // Optional: can be set using -s, defaults to .state.json\n  "statePath": ".state.json",\n\n  // Optional: defaults to OpenFn.org\'s API, can be overridden or set with\n  // `OPENFN_ENDPOINT` env var\n  "endpoint": "https://app.openfn.org"\n}\n')),(0,a.kt)("p",null,"More details on the CLI can be found\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/kit/tree/main/packages/cli#basic-usage"},"here"),"."),(0,a.kt)("h3",{id:"openfn-pull-to-generate-a-project-spec-and-state"},(0,a.kt)("inlineCode",{parentName:"h3"},"openfn pull")," to generate a project spec and state"),(0,a.kt)("p",null,"To generate the spec and state files for an existing project, use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"openfn pull {YOUR-PROJECT-UUID} -c ./config.json\n")),(0,a.kt)("p",null,"This command will save (or overwrite) a project spec and state file based on the\npath you've set in your configuration."),(0,a.kt)("h3",{id:"openfn-deploy-to-create-a-project-on-a-lightning-instance"},(0,a.kt)("inlineCode",{parentName:"h3"},"openfn deploy")," to create a project on a Lightning instance"),(0,a.kt)("p",null,"To deploy a new project to a Lightning instance from a project spec (without a\nproject state) file use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"openfn deploy -c config.json\n")),(0,a.kt)("h3",{id:"openfn-deploy-to-update-an-existing-project"},(0,a.kt)("inlineCode",{parentName:"h3"},"openfn deploy")," to update an existing project"),(0,a.kt)("p",null,"With a valid project state defined in your ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json"),", the same\n",(0,a.kt)("inlineCode",{parentName:"p"},"openfn deploy")," command will beam up your changes as described by a difference\nbetween your project spec and what's found on the server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'openfn deploy -c config.json\nChecking https://demo.openfn.org/api/provision/4adf2644-ed4e-4f97-a24c-ab35b3cb1efa for existing project.\nProject found.\n[CLI] \u2666 Changes:\n {\n   workflows: [\n     {\n       jobs: [\n         {\n-          body: "fn(state => {\\n  console.log(\\"ok\\")\\n  return state\\n});"\n+          body: "fn(state => {\\n  console.log(\\"some changes here!\\")\\n  return state\\n});\\n"\n         }\n         ...\n         ...\n         ...\n       ]\n     }\n   ]\n }\n\n? Deploy? yes\n[CLI] \u2666 Deployed.\n')),(0,a.kt)("h3",{id:"automated-version-control-with-github-and-lightning"},"Automated Version Control with Github and Lightning"),(0,a.kt)("p",null,"Representations of projects as code and pull/deploy functionality allows you to\ncheck your whole project into a version control system such as Github."),(0,a.kt)("p",null,"Lightning comes with a Github App that enables user to sync projects from an\ninstance to Github using the ",(0,a.kt)("inlineCode",{parentName:"p"},"openfn pull")," command and to do the vice versa\nusing ",(0,a.kt)("inlineCode",{parentName:"p"},"openfn deploy"),"."),(0,a.kt)("p",null,"To set up version control:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a project repo connection to a github repository in ",(0,a.kt)("strong",{parentName:"li"},"Project Settings\n-> Sync to Github"),"."),(0,a.kt)("li",{parentName:"ol"},"Follow the instructions to install the Lightning Github app in your desired\nrepository."),(0,a.kt)("li",{parentName:"ol"},"Once you have created a a connection, set up ",(0,a.kt)("inlineCode",{parentName:"li"},"pull")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"deploy")," workflows\nthat use openfn github actions below."),(0,a.kt)("li",{parentName:"ol"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"OPENFN_API_KEY")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"OPENFN_PROJECT_ID")," repository secrets to your\nGithub repo as described below."),(0,a.kt)("li",{parentName:"ol"},"Add a ",(0,a.kt)("inlineCode",{parentName:"li"},".config.json")," file to your repository which specifies your endpoint\nand paths to project spec and state files."),(0,a.kt)("li",{parentName:"ol"},"Click the sync to Github button to initiate a sync from Lightning to GitHub."),(0,a.kt)("li",{parentName:"ol"},"Push a change to your selected branch to push changes from Github to\nLightning.")),(0,a.kt)("h4",{id:"github-repository-secrets"},"Github Repository Secrets"),(0,a.kt)("p",null,"The workflows that interact with the OpenFn actions will need the repository set\nup with two secrets used in the github actions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OPENFN_API_KEY: This is your API Key as generated from Lightning and will be\nneeded for authentication"),(0,a.kt)("li",{parentName:"ul"},"OPENFN_PROJECT_ID: This is your Project ID from Lightning this will be used to\npull from the lightning instance")),(0,a.kt)("h4",{id:"github-repository-structure"},"Github Repository Structure"),(0,a.kt)("p",null,"Here you can do pretty much what you want, so long as you've got a ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json"),"\npointing to your project spec, state, and Lightning endpoint."),(0,a.kt)("h4",{id:"example-deploy-workflow-for-github"},"Example ",(0,a.kt)("a",{parentName:"h4",href:"https://github.com/OpenFn/demo-openhie/blob/main/.github/workflows/deploy.yml"},"Deploy Workflow")," for GitHub"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/quickstart#creating-your-first-workflow"},"https://docs.github.com/en/actions/quickstart#creating-your-first-workflow"),"\nfor more help here."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"on:\n  push:\n    branches:\n      - main\n\njobs:\n  deploy-to-lightning:\n    runs-on: ubuntu-latest\n    name: A job to deploy to Lightning\n    steps:\n      - name: openfn deploy\n        uses: OpenFn/cli-deploy-action@v0.1.11\n        with:\n          secret_input: ${{ secrets.OPENFN_API_KEY }}\n")),(0,a.kt)("h4",{id:"example-pull-workflow-for-github"},"Example ",(0,a.kt)("a",{parentName:"h4",href:"https://github.com/OpenFn/demo-openhie/blob/main/.github/workflows/pull.yml"},"Pull Workflow")," for GitHub"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/quickstart#creating-your-first-workflow"},"https://docs.github.com/en/actions/quickstart#creating-your-first-workflow"),"\nfor more help here."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"on: [repository_dispatch]\n\njobs:\n  pull-from-lightning:\n    runs-on: ubuntu-latest\n    permissions:\n      contents: write\n    name: A job to pull changes from Lightning\n    steps:\n      - name: openfn pull and commit\n        uses: OpenFn/cli-pull-action@v0.7.0\n        with:\n          secret_input: ${{ secrets.OPENFN_API_KEY }}\n          project_id_input: ${{ secrets.OPENFN_PROJECT_ID }}\n          commit_message_input:\n            'user ${{ github.event.client_payload.message }}'\n")),(0,a.kt)("p",null,"The Lightning ",(0,a.kt)("a",{parentName:"p",href:"https://demo.openfn.org"},"demo instance")," is currently connected to\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/demo-openhie/"},"this repo"),". Feel free to play around\nwith it."),(0,a.kt)("h4",{id:"using-version-control"},"Using version control"),(0,a.kt)("h5",{id:"lightning-to-github"},"Lightning to GitHub"),(0,a.kt)("p",null,'Once you have configured version control for a project and a related repository\nbranch, you can sync changes to GitHub by pressing the "Initiate Sync" button on\nthe version control page and the Lightning GitHub app will run a ',(0,a.kt)("inlineCode",{parentName:"p"},"openfn pull"),"\naction to update the versioned representation of your project as code."),(0,a.kt)("h5",{id:"github-to-lightning"},"Github to Lightning"),(0,a.kt)("p",null,"Assuming you've configured a deploy action, any time there are changes made to\nthat branch in your GitHub repo, those changes will be pushed to your Lightning\nproject via ",(0,a.kt)("inlineCode",{parentName:"p"},"openfn deploy"),"."),(0,a.kt)("h3",{id:"getting-help-with-the-cli"},"Getting Help with the cli"),(0,a.kt)("p",null,"The cli package comes with an inbuilt ",(0,a.kt)("inlineCode",{parentName:"p"},"help"),". Adding ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," to a command such\nas ",(0,a.kt)("inlineCode",{parentName:"p"},"openfn deploy --help")," will result in a help message describing the command\nand the options available when using this command. See an example below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"openfn deploy --help\nopenfn deploy\n\nDeploy a project's config to a remote Lightning instance\n\nOptions:\n      --version                Show version number                                                                                                                     [boolean]\n      --help                   Show help                                                                                                                               [boolean]\n  -c, --config, --config-path  The location of your config file                                                                                      [default: \"./.config.json\"]\n      --no-confirm             Skip confirmation prompts (e.g. 'Are you sure?')                                                                                        [boolean]\n      --describe               Downloads the project yaml from the specified instance                                                                                  [boolean]\n  -l, --log                    Set the log level                                                                                                                        [string]\n      --log-json               Output all logs as JSON objects                                                                                                         [boolean]\n  -p, --project-path           The location of your project.yaml file                                                                                                   [string]\n  -s, --state-path             Path to the state file\n")),(0,a.kt)("h2",{id:"other-versions"},"Other Versions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"portability-versions#proposal-v4"},"Portability Proposal v4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"portability-versions#proposal-v3"},"Portability Proposal v3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"portability-versions#proposal-v2"},"Portability Proposal v2")," (",(0,a.kt)("inlineCode",{parentName:"li"},"@latest")," for\nplatform-app/microservice compatibility.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"portability-versions#proposal-v1"},"Portability Proposal v1"))))}u.isMDXComponent=!0}}]);