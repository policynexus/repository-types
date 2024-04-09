// import PolicyNexusTypes from '@PolicyNexus/source-repository-types' 
import PolicyNexusTypes from '../main'

const repositoryConfig: PolicyNexusTypes.RepositoryConfig = {
    $schema: "https://raw.githubusercontent.com/policynexus/source-repository-types/main/schemas/policynexus-repository-config.schema.json",
    documents: "https://example.com/documents",
    indexes: [
        {
            file: "index.txt",
            sortBy: {
                field: "published",
                order: "asc"
            },
            updatedAt: "2021-08-01T00:00:00Z"
        }
    ]
}

console.log(repositoryConfig)