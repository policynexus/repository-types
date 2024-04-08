type ArtifactPDF = {
    uri: string,
    type: "pdf"
}

type ArtifactMP3 = {
    uri: string,
    type: "mp3",
}


export type Artifact = ArtifactPDF | ArtifactMP3