# PolicyNexus Repository Types

Type-Definitions for PolicyNexus Repositories.
Contains definitions for:

- [TypeScript](#typescript)
- [JSON-Schema](#json-schema)

To Contribute to "PolicyNexus Repository Types" please have a look at:

- [Local Development](#local-development)

# Usage

## TypeScript

You can install the Typescript-Types via `npm` or `yarn`.

```bash
npm install $PACKAGE_NAME
```

After that just import the Types into your project aus usual:

```ts
import * as PolicyNexus from '$PACKAGE_NAME'

const policyNexusDocument: PolicyNexus.Document = {
    "$schema": "https://raw.githubusercontent.com/policynexus/repository-types/main/schemas/policynexus-document.schema.json",
    "name": "Example Document",
    "published": "2024-04-08",
    // ...
}
```

The following types are included in this repository:

- **Document**
- **RepositoryConfig**

For more information about these types check out: `main.js`


## JSON-Schema

As the JSON-Schema files are already included in the [Repository](https://github.com/policynexus/repository-types) it is recommended to just use the following files schema-files in a PolicyNexus Repository.

- **Document:** https://raw.githubusercontent.com/policynexus/repository-types/main/schemas/policynexus-document.schema.json
- **RepositoryConfig:** https://raw.githubusercontent.com/policynexus/repository-types/main/schemas/policynexus-repository.schema.json

# Local Development

## Schema Generation

Schema files are generated from the corresponding typescript types. You can update the schema files as follows:

```bash
git clone https://github.com/policynexus/repository-types
cd repository-types
npm install --dev
npm run build
```
