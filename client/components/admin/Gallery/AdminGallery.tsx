import React, { useState, useEffect } from 'react'
import { GalleryModelId } from '../../../../models/Gallery'
import AddGallery from './AddGallery'
import { getGallery } from '../../../apis/gallery'
import Gallery from '../../Gallery'

function AdminGallery() {
  const [images, setImages] = useState<GalleryModelId[]>([])

  useEffect(() => {
    fetchGalleryImages()
  }, [])

  const fetchGalleryImages = async () => {
    // Implement the logic to fetch and set the gallery images (images) using an API function
    try {
      const galleryData = await getGallery()
      setImages(galleryData)
    } catch (error) {
      console.error('Error fetching gallery data: ', error)
    }
  }

  const handleAddImage = (newImage) => {
    setImages((prevImages) => [...prevImages, newImage])
  }

  return (
    <div>
      <Gallery />
      <div className="flex items-center justify-center"></div>
      {<AddGallery onAddImage={handleAddImage} />}
    </div>
  )
}

export default AdminGallery
