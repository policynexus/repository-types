export type Artifact = {
    uri: string,
    extension: "pdf" | "mp3"
}

export interface Document {
    $schema: string,
    pageURL: string,
    name: string,
    topics: string[],
    kind: string
    published: string,
    artifacts: Artifact[]
}


export interface RepositoryIndex {
    file: string,
    sortBy: "published:date" | "name:asc" | "name:desc"
}

export interface RepositoryConfig {
    documents: string,
    indexes: RepositoryIndex[]
}
