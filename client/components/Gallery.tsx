import { useState, useEffect } from 'react'
import { getGallery } from '../apis/gallery'
import { GalleryModel } from '../../models/Gallery'

function Gallery() {
  const [images, setImages] = useState<GalleryModel[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    async function fetchGallery() {
      try {
        const galleryData = await getGallery()
        setImages(galleryData)
      } catch (error) {
        // Handle error
      }
    }

    fetchGallery()
  }, [])

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

  return (
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
  )
}

export default Gallery
