import PolicyNexusTypes from 'policynexus-repository-types'

const document: PolicyNexusTypes.Document = {
    $schema: "https://raw.githubusercontent.com/policynexus/repository-types/main/schemas/policynexus-document.schema.json",
    name: "Example Document",
    pageURL: "https://example.com",
    kind: "document",
    published: "2021-01-01",
    topics: ["example", "test"],
    artifacts: [
        {
            uri: "https://example.com/document.pdf",
            extension: "pdf"
        }
    ]
}

console.log(document)