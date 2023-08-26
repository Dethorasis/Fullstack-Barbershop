import request from 'superagent'

const galleryURL = '/api/v1/galleryroutes'

export async function getGallery() {
  const response = await request.get(galleryURL)
  return response.body
}
