import request from 'superagent'

const galleryURL = '/api/v1/galleryroutes'

export async function getGallery() {
  const response = await request.get(galleryURL)
  return response.body
}

export async function addGalleryImage(gallery: FormData) {
  try {
    const response = await request.post(galleryURL).send(gallery);
    if (response.status === 200) {
      return response.body;
    } else {
      throw new Error('Failed to add image');
    }
  } catch (error) {
    console.error('Error adding image:', error);
  }
}

export async function deleteServices(imageId: number) {
  try {
    const response = await request.delete(`${galleryURL}/${imageId}`)
    if (response.status === 200) {
      return response.body
    } else {
      throw new Error('Failed to delete image')
    }
  } catch (error) {
    console.error('Error deleting image:')
  }
}

