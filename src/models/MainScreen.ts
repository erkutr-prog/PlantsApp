export interface IQuestions {
    id: number,
    title: string,
    subtitle: string,
    image_uri: string,
    uri: string,
    order: number
}

export interface IPlants {
    id: number,
    name: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    title: string,
    rank: number,
    image: Image
}

export type Image = {
    id: number,
    name: string,
    alternativeText: any,
    caption: any,
    width: number,
    height: number,
    formats: any,
    hash: string,
    ext: string,
    mime: string,
    size: number,
    url: string,
    previewUrl: any,
    provider: string,
    provider_metadata: any,
    createdAt: string,
    updatedAt: string
}