---
title: Automate Migration
sidebar_label: Automate Migration
---

You can use our `export and deploy` functionality to self-migrate your existing
OpenFn project configuration from v1 to v2, or between two different v2
instances. This guide walks you through the steps.

### v1-to-v2: Automating migration of your OpenFn v1 Project to v2

You can export your existing project configuration containing the jobs and
triggers from v1, then use the OpenFn
[CLI](https://github.com/OpenFn/kit/tree/main/packages/cli) tool to deploy it to
your v2 project space. To start, make sure you have the latest version of the
CLI installed ([see CLI basic docs](../docs/build-for-developers/cli-intro.md)).
To learn more about the project configuration as code, head over to our
[Portability](../deploy/portability.md) page.

In order to be able to deploy the project, you need to have at least `admin`
access to the v2 project you're deploying to. In addition, if you're migrating
to a project on the OpenFn-hosted platform (on
[app.openfn.org](https://app.openfn.org)) make sure you have the right
[pricing plan](https://www.openfn.org/pricing) to accomodate the number of
workflows, runs, and features you desire for your v2 project.

#### Exporting Your v1 Project

1. Navigate to `Project Settings` on your https://v1.openfn.org/ project.
2. Click `Export Config` under the Project Configuration section and choose
   `Export for v2 (migrate)`. You'll receive a download link by email, and you
   can also access the link from the `Downloads` menu.
3. Download the exported `project.yaml` file and save it in a folder on your
   computer.

#### Setup and Deployment to v2

4. In a code editor, create a new `config.json` file with the following content:

- `apiKey`: Specify your API Key/ Personal Access Token from your v2 user
  account. See [this page](../manage-users/api-tokens.md) for how to to create
  one.
- `specPath`: Specify the path to the `project.yaml` file exported from your v1
  project (wherever you saved it on your computer - e.g.,
  `/usr/rita/Downloads/my_downloaded_project.yaml` file).
- `statePath`: Do not edit.
- `endpoint`: Set as the web URL where your v2 instance is hosted. If you're
  using the OpenFn-hosted platform, keep it as "https://app.openfn.org".

See below example `config.json` file to use as a template.

```json
{

    "apiKey": {"your-v2-api key"},

    "specPath": "4474_2024045092123Z_v2_project.yaml",

    "statePath": ".state.json",

    "endpoint": "https://app.openfn.org"
}

```

5. Next open up the OpenFn CLI. First, you need to pull the config of your v2
   project. Start by copying the project ID from the URL of your v2 project like
   so:

![Project ID](/img/projectid.png)

6. Then run the `openfn pull` CLI commmand below with the project ID and the
   path to your `config.json` file created above.

```
openfn pull {your-project-id} -c config.json
```

This will output a new `project.yaml` file and a `.state.json` (which is your v2
project configuration, including any Workflows already configured on v2).

7. Open up your exported v1 `project.yaml` file, copy everything from under
   `workflows:`

![Select Workflows](/img/select_workflow_to_add.png)

8. Paste the copied config in the bottom of `workflows` section of your the
   newly created v2 `project.yaml`. (You are manually copying over the v1 config
   over to your v2 project's Workflows.)

![Existing Workflows](/img/migration_existing-workflows.png)

![Workflows Added](/img/migration_workflow_pasted.png)

9. Finally, once you're happy with your new v2 `project.yaml` file, it's time to
   deploy the new config to your v2. Run the following command in the CLI to
   _deploy_.

```
openfn deploy -c config.json
```

When prompted, confirm you want to deploy by typing `y` ("yes").

10. If successfully, verify the new Project config on your v2 app.

:::tip Questions?

Ask on [Community](https://community.openfn.org) if you run into issues or
questions. For an overview of all the recommended v1-to-v2 migration steps,
check out the [Migration Steps docs](../migration/migration-steps.md).

:::

### v2-to-v2: Automating project migration from one OpenFn v2 instance to another

If you want to migrate a project from one instance of OpenFn v2 (e.g., the
cloud-hosted [app.openfn.org](https://app.openfn.org)) to another (e.g., your
local deployment of the v2), you can also leverage the OpenFn
[CLI](https://github.com/OpenFn/kit/tree/main/packages/cli) tool. To start, make
sure you have the latest version of the CLI installed
([see CLI basic docs](../docs/build-for-developers/cli-intro.md)).

::: info v2-to-v2 Migration Guide coming soon! 

A detailed guide on how to
migrate projects between two instances of OpenFn v2
([lightning](https://github.com/OpenFn/lightning)) is coming soon.

To learn more about OpenFn deployment, be sure to check out our
[planning guide](https://docs.openfn.org/documentation/deploy/options) and
[technical guidelines](https://docs.openfn.org/documentation/deploy/options#technical-guidelines).

:::
