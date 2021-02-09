(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),o=t(7),i=(t(0),t(244)),r={title:"Frequently Asked Questions",sidebar_label:"FAQs"},s={unversionedId:"faqs",id:"faqs",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"Data integration, interoperability, and workflow automation can be confusing",source:"@site/docs/faqs.md",slug:"/faqs",permalink:"/documentation/faqs",editUrl:"https://github.com/openfn/docs/edit/main/docs/faqs.md",version:"current",sidebar_label:"FAQs",sidebar:"docs",previous:{title:"Tableau",permalink:"/documentation/apps/tableau"},next:{title:"Developing Connected Applications",permalink:"/documentation/for-devs"}},c=[{value:"What is OpenFn?",id:"what-is-openfn",children:[]},{value:"Who uses OpenFn?",id:"who-uses-openfn",children:[]},{value:"What is a <code>job</code>?",id:"what-is-a-job",children:[]},{value:"What is a <code>run</code>?",id:"what-is-a-run",children:[]},{value:"Is OpenFn open-source?",id:"is-openfn-open-source",children:[]},{value:"How much does OpenFn cost?",id:"how-much-does-openfn-cost",children:[{value:"Design &amp; implementation costs",id:"design--implementation-costs",children:[]},{value:"Ongoing costs",id:"ongoing-costs",children:[]}]},{value:"Can I trial the platform?",id:"can-i-trial-the-platform",children:[]},{value:"How reliable is the hosted service?",id:"how-reliable-is-the-hosted-service",children:[]},{value:"Can OpenFn integrate with my custom app?",id:"can-openfn-integrate-with-my-custom-app",children:[]},{value:"Does OpenFn support two-way syncing?",id:"does-openfn-support-two-way-syncing",children:[]},{value:"Do I need to know how to code?",id:"do-i-need-to-know-how-to-code",children:[]},{value:"Where is my data stored?",id:"where-is-my-data-stored",children:[]},{value:"Is my data secure?",id:"is-my-data-secure",children:[]},{value:"What if I have more questions?",id:"what-if-i-have-more-questions",children:[]}],p={toc:c};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Data integration, interoperability, and workflow automation can be confusing\nsubjects. Not to mention the fact that there are lots of different terms and\nways of talking about the same concepts. We get it. Here are a few questions\nthat come up a lot."),Object(i.b)("h2",{id:"what-is-openfn"},"What is OpenFn?"),Object(i.b)("p",null,"OpenFn is an ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"integration platform as a service")),". This means our prime\ndirective is to move data quickly and securely between different software\nsystems. In most cases:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"A source application sends ",Object(i.b)("strong",{parentName:"p"},"messages")," to your project\u2019s ",Object(i.b)("strong",{parentName:"p"},"inbox")," when\nsomething happens.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Jobs")," will be triggered, based on your ",Object(i.b)("strong",{parentName:"p"},"filters"),", and use the data in\nthose messages to attempt specific actions in destination systems.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("strong",{parentName:"p"},"logs")," are recorded so you can see precisely what happened and when and\nwhere it happened to take action in the event of a failed attempt\u2014like\nediting the job or even the source message and trying it again."))),Object(i.b)("h2",{id:"who-uses-openfn"},"Who uses OpenFn?"),Object(i.b)("p",null,"OpenFn is used by organizations big and small, but the individuals interacting\nwith the platform range from system administrators to Javascript developers.\nWith a basic understanding of Javascript, the flexibility of the platform is\nalmost limitless."),Object(i.b)("h2",{id:"what-is-a-job"},"What is a ",Object(i.b)("inlineCode",{parentName:"h2"},"job"),"?"),Object(i.b)("p",null,"OpenFn automation centers around jobs, which define the specific series of tasks\nor database actions OpenFn should perform. They can be set to be activated\n(triggered) at certain time intervals or when data matching specified criteria\nis received. You can think of jobs as a set of instructions you might give a\ndata entry staff member (e.g., create a new Patient record in OpenMRS when a\nform containing a newly registered client is received from CommCare, export data\nto DHIS2 every week on Friday 11pm, send SMS with payment confirmation number\nwhen payment confirmation message is received etc.)."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Jobs are fully configurable and reusable. They can also be chained together to\ncreate ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"jobs/multiple-operations"}),"multi-step automation")," flows, two-way syncs.\nand to keep data consistent between multiple applications (using multi-app Saga\npatterns). You can read more on two-way synching below."))),Object(i.b)("h2",{id:"what-is-a-run"},"What is a ",Object(i.b)("inlineCode",{parentName:"h2"},"run"),"?"),Object(i.b)("p",null,"A run is each individual execution of a job. Imagine that a job is configured to\ncreate a new patient in OpenMRS whenever a case is opened in CommCare. Over the\nnext week, if 5 cases are opened in CommCare, you\u2019ll see 5 different runs of\nthis one job in OpenFn. If 4 runs are successful and one has failed, you\u2019ll see\n4 new patients in OpenMRS, and your system administrator will have been notified\nthat one of those patients couldn\u2019t be created (or whatever more robust\nerror-handling you\u2019ve set up will take place.)"),Object(i.b)("p",null,"Note that there\u2019s not always a 1-to-1 mapping between runs and the real-world\nthings you\u2019re working with. I might define a job that gets all updated event\ndata from DHIS2 for the last 2 weeks and publishes it to a public map using\nCartoDB. This job will be triggered at specified time intervals, every 2 weeks\nin this case, and after a month, we\u2019ll only see 2 runs in OpenFn (that\u2019s one run\nevery two weeks). Each run will have succeeded or failed, and each one might\nhave processed thousands of events from DHIS2."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"For one last example, a single form submission in Open Data Kit might trigger a\njob that creates new contacts and attendance records in Salesforce. In this\ncase, you\u2019ll find a run for each ODK form submission, but each run will create\nlots of different records in Salesforce\u2014specifically, at least one contact and N\nnumber of attendance records, corresponding to the number of items in your ODK\nform\u2019s \u201cattendance repeat group\u201d."))),Object(i.b)("h2",{id:"is-openfn-open-source"},"Is OpenFn open-source?"),Object(i.b)("p",null,"OpenFn is a suite of different technologies with different licenses. We have\nbuilt and maintain dozens of open-source data transformation and API wrapper\nsoftware packages. Those are, for the most part, licensed under the ",Object(i.b)("strong",{parentName:"p"},"LGPL")," and\ncan be used freely to extract, transform, and load data from a command line, or\nas part of another software application."),Object(i.b)("p",null,"OpenFn also hosts a proprietary web-application that ties these tools together\n(",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.openfn.org"}),"www.openfn.org"),") into an out-of-the-box integration management platform. This\nplatform is open-core, providing the powerful ETL tools that sit at the heart of\nthe proprietary OpenFn.org iPaaS as free and open-source software (FOSS). All of\nthe jobs running on OpenFn.org, as well as all of the underlying adaptors, can\nbe run offline using our FOSS tools."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"OpenFn will also soon offer an enhanced FOSS implementation option called\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://openfn.github.io/microservice/"}),"OpenFn/microservice"),". This FOSS\nmicroservice approach is currently in development with funding from the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.osc.dial.community/"}),"DIAL Open Source Center"),",\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://digitalsquare.org/"}),"Digital Square"),", and the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.gov.uk/government/organisations/foreign-commonwealth-development-office"}),"FCDO"),"\n(formerly DFID)."),Object(i.b)("p",{parentName:"div"},"Please note that this pathway does not provide the entire OpenFn platform as\nfree and open source software (FOSS). In situations where a particular partner\nor government is unable to use the proprietary platform (though it can be\ndeployed on local servers with an unlimited use license), this approach ensures\nthat all jobs, triggers, and project configuration can be exported from\nOpenFn.org and used, in conjunction with OpenFn's FOSS ETL tools to deploy a\nmicroservices-style implementation which incurs zero licence costs and provides\nthe basic data processing that OpenFn's platform does. While at the outset there\nwill be no web interface and no ability to reprocess messages, etc., these\nfeatures could be built by partners in time to replace the features of the\nOpenFn platform. I.E., none of the initial investment in OpenFn will be lost if\nthe partners choose to build their own, fully open-source integration platform\nbased on our powerful open-source ETL tools."))),Object(i.b)("h2",{id:"how-much-does-openfn-cost"},"How much does OpenFn cost?"),Object(i.b)("h3",{id:"design--implementation-costs"},"Design & implementation costs"),Object(i.b)("p",null,"OFG offers a range of packages to ensure successful first-time implementations,\nwhich include integration consulting, design, configuration, and\ncapacity-building. Typical engagements take 1-5 days to complete, and our most\npopular package is the Integration QuickStart, in which we spend 1 week to\ndesign and configure ~5 integration flows end-to-end and provide administrative\ntraining to your staff for $5,000."),Object(i.b)("h3",{id:"ongoing-costs"},"Ongoing costs"),Object(i.b)("p",null,"OpenFn.org offers a free plan for users seeking to trial the platform or\nimplement projects handling low data volumes (up to 100 runs/month). Usage of\nOpenFn.org, the proprietary integration-platform-as-a-service (iPaaS), incurs\nongoing costs, which are largely dependent on the expected data volumes to be\nprocessed. OpenFn offers monthly subscriptions, enterprise licenses for annual\nand multi-year agreements, as well as unlimited and local deployment options.\nContact ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:enterprise@openfn.org"}),"enterprise@openfn.org")," to learn more and for a tailored cost estimate."),Object(i.b)("p",null,"There are also available DIY options, as well as bespoke training services to\ndevelop your capacity to implement and manage OpenFn independently."),Object(i.b)("h2",{id:"can-i-trial-the-platform"},"Can I trial the platform?"),Object(i.b)("p",null,"Yes. As a matter of fact, you can use it for free, forever."),Object(i.b)("p",null,"OpenFn.org offers a free plan to all users\n(",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.openfn.org/signup"}),"sign up here"),"). Try it out using OpenFn Docs,\nor contact our team for a free consultation and help getting started. Change\nyour OpenFn plan at any time (no lock-in!), or contact ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:enterprise@openfn.org"}),"enterprise@openfn.org")," to\nlearn more about annual, enterprise, and unlimited licenses."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"At low volumes, or for prototyping, you can use the hosted platform for free\nforever."))),Object(i.b)("h2",{id:"how-reliable-is-the-hosted-service"},"How reliable is the hosted service?"),Object(i.b)("p",null,"OpenFn has harnessed the extreme stability and scalability of Erlang to\ncoordinate these actions and provide users with email alerts, project management\ntools, and an online job writing IDE."),Object(i.b)("p",null,"We constantly monitor our own status with independent infrastructure at\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://status.openfn.org"}),"status.openfn.org"),". You can subscribe to\nnotifications there or follow ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/openfnstatus"}),"@openfnstatus"),"."),Object(i.b)("p",null,"We've been delivering this service continuously since 2014."),Object(i.b)("h2",{id:"can-openfn-integrate-with-my-custom-app"},"Can OpenFn integrate with my custom app?"),Object(i.b)("p",null,"Yes, OpenFn can integrate with ",Object(i.b)("em",{parentName:"p"},"any")," application."),Object(i.b)("p",null,"If your technology has a REST endpoint or webhooks service, it will likely work\nright out of the box. This covers most web applications (e.g., CommCare, Kobo,\nODK, DHIS2, Salesforce, MS Dynamics, MPesa, etc.). OpenFn can also integrate\nwith most databases, like Postgres, MySql, and Mongo, custom applications,\nlegacy government systems, and can even parse CSV files\u2013so long as these can be\naccessed from an online location. Read more about\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"source-apps"}),"connecting source applications"),", or check out the Apps page for\napplications widely implemented."),Object(i.b)("p",null,"We offer pre-built connectors (called \u201clanguage-packages\u201d or API \u201cadaptors\u201d) for\nour users\u2019 most popular apps to make the integration setup quicker and more\nuser-friendly when connecting with these tools. For example, users can implement\nlanguage-http to send basic HTTP requests to any web application, or implement\nlanguage-dhis2 to automatically handle DHIS2 authentication and access helper\nfunctions like fetchData()to export DHIS2 datasets."),Object(i.b)("h2",{id:"does-openfn-support-two-way-syncing"},"Does OpenFn support two-way syncing?"),Object(i.b)("p",null,"Yes, OpenFn can support two-way syncing of applications. Utilizing\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"build/triggers#flow-triggers"}),"Flow Triggers"),", OpenFn jobs can be chained\ntogether to facilitate real-time two-way data sync,\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"jobs/multiple-operations"}),"multi-step automation")," and data cleaning processes,\nand complex branching logic. Users can also implement bi-directional data syncs,\nas well as complex Saga Patterns to implement a transaction that spans multiple\napplications by configuring webhooks in their endpoint applications and\nperforming updates in both systems when events take place in either."),Object(i.b)("h2",{id:"do-i-need-to-know-how-to-code"},"Do I need to know how to code?"),Object(i.b)("p",null,"No, but it helps to have written a formula in MS Excel! Many OpenFn users are\nfamiliar with data, not development, and quickly get comfortable with OpenFn\njobs."),Object(i.b)("p",null,"If your project is leveraging an OpenFn adaptor (e.g.., language-dhis2), you\nhave access to pre-built helper functions (e.g., ",Object(i.b)("inlineCode",{parentName:"p"},"getPatient"),", ",Object(i.b)("inlineCode",{parentName:"p"},"update"),") so that\nyou don\u2019t need to write custom code, and rather can use OpenFn documentation or\nexisting job scripts to write your own job. See OpenFn Github for inspiration\nand open-source job code shared by OpenFn users. You\u2019ll notice that these\nfunctions work in the same way that functions do in Excel\u2026 ",Object(i.b)("inlineCode",{parentName:"p"},"sum(A1, A2, A3)")),Object(i.b)("p",null,"Jobs can be written and extended using raw Javascript for advanced data cleaning\nand manipulation. Therefore, you may want to implement Javascript to achieve\nspecific requirements or to extend existing OpenFn language-packages, which are\nopen-source!"),Object(i.b)("h2",{id:"where-is-my-data-stored"},"Where is my data stored?"),Object(i.b)("p",null,"OpenFn is a middleware provider rather than a data storage system. We move\ninformation from system A to system B, and integrations can be set up to be\ncompliant with GDPR, HIPAA, and other policies. To make auditing and\nreprocessing easy, OpenFn temporarily stores message data and job run history,\nbut we're not the single source of truth nor the final resting point for these\ndata. When organizations choose to use our hosted OpenFn platform at OpenFn.org,\nno data processed by OpenFn is stored locally and our platform runs on the\nGoogle Cloud Platform (GCP). Read more on our\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.openfn.org/compliance"}),"Compliance")," page."),Object(i.b)("p",null,"OpenFn.org currently offers hosting on U.S. and Swiss-based cloud servers.\nOpenFn local and in-country cloud deployments are also available upon request.\nContact ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:enterprise@openfn.org"}),"enterprise@openfn.org")," to learn more."),Object(i.b)("h2",{id:"is-my-data-secure"},"Is my data secure?"),Object(i.b)("p",null,"Yes, OpenFn prioritizes security, stability, and scalability (what we call\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.openfn.org/trust#s3"}),"S\xb3"),") above all else, and many of our users\nimplement OpenFn to comply with GDPR, HIPAA, and other policies. Read more on\nour ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.openfn.org/trust"}),"Trust"),",\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.openfn.org/compliance"}),"Compliance"),", and\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.openfn.org/privacy"}),"Privacy")," pages."),Object(i.b)("p",null,"OpenFn.org runs on the Google Cloud Platform, an infrastructure protected by\nmore than 500 top experts in information, application, and network security. For\norganizations with specific compliance and data governance requirements, OpenFn\ncan also be deployed on designated local- or cloud-infrastructure."),Object(i.b)("h2",{id:"what-if-i-have-more-questions"},"What if I have more questions?"),Object(i.b)("p",null,"Open Function Group is a team of ICT4D and integration specialists, waiting to\nhelp you get started. Click the chat icon in the bottom right hand corner of\nthis page to talk now. Or Email our team at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:admin@openfn.org"}),"admin@openfn.org"),", chat us on\nOpenFn.org, or post a question in our\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://community.openfn.org"}),"Community Forum"),"."))}l.isMDXComponent=!0},244:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,u=d["".concat(r,".").concat(m)]||d[m]||b[m]||i;return t?o.a.createElement(u,s(s({ref:n},p),{},{components:t})):o.a.createElement(u,s({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);