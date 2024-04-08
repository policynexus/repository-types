import { CreatedBy } from "./types/CreatedBy"
import { Artifact } from "./types/Artifact"
import { RepositoryIndex } from "./types/RepositoryIndex"
import { Schema } from "./types/Schema"
import { UpdatedAt } from "./types/UpdatedAt"
import { Published } from "./types/PublishedOn"


export type Document = Schema & UpdatedAt & Published & {
    name: string,
    description?: string,
    createdBy: CreatedBy | undefined,
    artifacts: Artifact[],
    tags: string[],
    additionalProperties?: {
        [key: string]: any
    }
}

export type RepositoryConfig = Schema & {

    /**
     * Path to the documents.
     * Usually something like "documents/*.json"
     */
    documents: string,
    indexes?: RepositoryIndex[]
}


