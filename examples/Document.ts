// import PolicyNexusTypes from '@PolicyNexus/source-repository-types' 
import PolicyNexusTypes from '../main'

const document: PolicyNexusTypes.Document = {
    $schema: "https://raw.githubusercontent.com/policynexus/source-repository-types/main/schemas/policynexus-document.schema.json",
    updatedAt: "2021-08-01T00:00:00Z",
    publishedOn: "2021-08-01",
    name: "Example Document",
    description: "This is an example document.",
    createdBy: {
        type: "person",
        updatedAt: "2021-08-01T00:00:00Z",
        author: "John Doe",
        email: "john@doe.org"
    },
    artifacts: [
        {
            type: "pdf",
            uri: "https://example.com/document.json"
        }
    ],
    tags: [],
    additionalProperties: {
    
    }
    
}

console.log(document)