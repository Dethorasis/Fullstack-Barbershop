import React, { useState, useEffect } from 'react'
import { GalleryModelId } from '../../../../models/Gallery'
import AddGallery from './AddGallery'
import { getGallery, deleteServices } from '../../../apis/gallery'
import DeleteGallery from './DeleteGallery'

function AdminGallery() {
  const [images, setImages] = useState<GalleryModelId[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

  useEffect(() => {
    fetchGalleryImages()
  }, [])

  const fetchGalleryImages = async () => {
    try {
      const galleryData = await getGallery()
      setImages(galleryData)
    } catch (error) {
      console.error('Error fetching gallery data: ', error)
    }
  }

  const handleAddImage = (newImage: GalleryModelId) => {
    setImages((prevImages) => [...prevImages, newImage])
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const deleteImage = async (imageId: number) => {
    try {
      await deleteServices(imageId)
      // Refresh the image list after deletion
      fetchGalleryImages()
    } catch (error) {
      console.error('Error deleting image: ', error)
    }
    setShowDeleteConfirmation(false)
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center max-h-screen bg-gray-100">
        <div className="relative">
          <img
            src={images[currentIndex]?.url}
            alt={`Gallery Image ${currentIndex}`}
            className="max-h-screen mx-auto w-[85%] mt-0 mb-0 rounded"
          />
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl px-4 py-2 bg-white opacity-50 hover:opacity-75 focus:outline-none"
          >
            &#8249;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl px-4 py-2 bg-white opacity-50 hover:opacity-75 focus:outline-none"
          >
            &#8250;
          </button>
        </div>
      </div>

      <AddGallery onAddImage={handleAddImage} />

      <button onClick={() => setShowDeleteConfirmation(true)}>
        Delete Image
      </button>

      {showDeleteConfirmation && (
        <DeleteGallery
          onCancel={() => setShowDeleteConfirmation(false)}
          onDelete={() => deleteImage(images[currentIndex].id)}
        />
      )}
    </div>
  )
}

export default AdminGallery
