import { UpdatedAt } from "./UpdatedAt"


type CreatedByBasic = UpdatedAt & {
    author?: string

    /**
     * @format email
     */
    email?: string
    website?: string
}


type CreatedByAuthor = {
    type: "person"
}

type CreatedByScraper = {
    type: "scraper"
    scraperURL?: string
    sourceURL: string
}


export type CreatedBy = CreatedByBasic & (CreatedByAuthor | CreatedByScraper)