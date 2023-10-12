import request from 'superagent'
import { GalleryModel } from '../../models/Gallery'

const galleryURL = '/api/v1/galleryroutes'

export async function getGallery() {
  const response = await request.get(galleryURL)
  return response.body
}

export async function addGalleryImage(gallery: GalleryModel) {
  try {
    const response = await request.post(galleryURL).send(gallery)
    if (response.status === 200) {
      return response.body
    } else {
      throw new Error('Failed to add image')
    }
  } catch (error) {
    console.error('Error adding image:')
  }
}
