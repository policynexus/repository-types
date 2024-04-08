
export interface RepositoryIndex {
    
    /**
     * The url of the index file.
     * The file should be a text file with one line per document.
     * Each line should be a document hash, that uniquely identifies a JSON file.
     * @format uri-reference
     */

    file: string,

    /**
     * The field to sort the documents by and the order.
     */
    sortBy: {
        field: "published" | "name",
        order: "asc" | "desc"
    }
    
    /**
     * Date and time when the index was last updated.
     * @format date-time
     */
    updatedAt: string
} 