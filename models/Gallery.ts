export interface GalleryModel {
  url: string
  title: string
  description: string
}

export interface GalleryModelId extends GalleryModel{
  id: number
}
