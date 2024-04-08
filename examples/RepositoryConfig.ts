import PolicyNexusTypes from 'policynexus-repository-types'


const repositoryConfig: PolicyNexusTypes.RepositoryConfig = {
    documents: "https://example.com/documents",
    indexes: [
        {
            file: "index.txt",
            sortBy: "published:date"
        }
    ]

}