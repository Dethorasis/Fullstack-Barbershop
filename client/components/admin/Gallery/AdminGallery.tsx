import React, { useState, useEffect } from 'react'
import { GalleryModelId } from '../../../../models/Gallery'
import AddGallery from './AddGallery'
import { getGallery } from '../../../apis/gallery'
import Gallery from '../../Gallery'

function AdminGallery() {
  const [images, setImages] = useState<GalleryModelId[]>([])
  const [isAddGalleryOpen, setIsAddGalleryOpen] = useState(false)

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

  const openAddGalleryPopup = () => {
    setIsAddGalleryOpen(true)
  }

  return (
    <div>
      <Gallery />
      <div className="flex items-center justify-center">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          onClick={openAddGalleryPopup}
        >
          Add Image
        </button>
      </div>
      {isAddGalleryOpen && <AddGallery onAddImage={handleAddImage} />}
    </div>
  )
}

export default AdminGallery
