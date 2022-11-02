# [OpenFn Documentation & Issue Tracking](https://docs.openfn.org)

## [![Logo](static/img/round-logo.png)&nbsp;&nbsp;docs.openfn.org](https://docs.openfn.org)

**_To view the documentation please visit
[docs.openfn.org](https://docs.openfn.org)._**

### Other documentation

Documentation for various OpenFn tools, such as
[openfn/microservice](https://openfn.github.io/microservice/),
[openfn/devtools](https://openfn.github.io/devtools/),
[openfn/core](https://github.com/OpenFn/core), and all of our open-source
adaptors can be found in
[OpenFn's Github organization](https://github.com/OpenFn).

This repository is used to maintain the docs site, and for users to submit
issues and feature requests.

### Contributing to this documentation site

Visit https://docs.openfn.org/documentation/writing-docs/.

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern
static website generator.

- To create new docs pages, add markdown files (or JS files) to the `/docs`
  folder.
- To view those new pages via the navigation, add links to them in the header,
  footer, or sidebars.
- Note that page ids (which are required in `sidebar.js` are _either_ set
  explicitly _or_ automatically generated by docusaurus as the filename, sans
  extension.)

```sh
./sidebars.js
./sidebars-library.js
./docusaurs.config.js
```

#####

Installation

```console
asdf install
```

```console
yarn install
```

(On Mac, I first had to run `corepack enable` to get yarn.)

### Local Development

```console
yarn run start
```

This command builds the job library from OpenFn.org, starts a local development
server, and opens up a browser window. Most changes are reflected live without
having to restart the server.

```
yarn run start-offline
```

This command skips the job library step, which requires an active internet
connection.

### Build and serve for full-featured testing

```console
yarn run generate-library
yarn run build
yarn run serve
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

### Deployment

Builds to `main` will automatically be deployed to
[docs.openfn.org](https://docs.openfn.org).
