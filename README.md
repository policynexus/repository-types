# PolicyNexus Source-Repository Types

Type-Definitions for the Interface formats used in PolicyNexus Repositories.

# Installation

You can install the Typescript-Types via `npm` or `yarn`.

```bash
npm install @policynexus/source-repository-types
```

> The installation is only necessary for [use with Typescript](#use-with-typescript).
> For [use with JSON-Schema](#use-with-json-schema) see below.

# Use with Typescript


```ts
import * as PolicyNexus from '@policynexus/source-repository-types'

const policyNexusDocument: PolicyNexus.Document = {
    "$schema": "https://raw.githubusercontent.com/policynexus/source-repository-types/main/schemas/policynexus-document.schema.json",
    "name": "Example Document",
    "published": "2024-04-08",
    // ...
}
```
**More TypeScript examples:**

- [Document.ts](/examples/Document.ts)
- [RepositoryConfig.ts](/examples/RepositoryConfig.ts)


# Use with JSON-Schema

```json
{
    "$schema": "https://raw.githubusercontent.com/policynexus/source-repository-types/main/schemas/policynexus-document.schema.json",
    "name": "Example Policy",
    "publishedOn": "2021-01-01",
    "artifacts": [
        {
            "type": "pdf",
            "uri": "https://example.com/policy.pdf"
        }
    ],
    // ...
}

```
**More JSON-Schama Examples:**

- [/examples/Document.json](/examples/Document.json)
- [/examples/RepositoryConfig.json](/examples/RepositoryConfig.json)

## Available JSON-Schemas

- [/schemas/policynexus-document.schema.json](https://raw.githubusercontent.com/policynexus/source-repository-types/main/schemas/policynexus-document.schema.json)
- [/schemas/policynexus-repository.schema.json](https://raw.githubusercontent.com/policynexus/source-repository-types/main/schemas/policynexus-repository.schema.json)

# Development for Source-Repository Types

## Schema Generation

Schema files are generated from the corresponding typescript types. You can update the schema files as follows:

```bash
git clone https://github.com/policynexus/source-repository-types
cd source-repository-types
npm install --dev
# ...
npm run build
```


## Publish to NPM

If you have access to the PolicyNexus NPM Organization use the following lines to publish your changes:

```bash
git clone https://github.com/policynexus/source-repository-types
cd source-repository-types
# ...
npm login
npm publish --access public
```