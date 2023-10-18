import React, { useState } from 'react'
import { addGalleryImage } from '../../../apis/gallery'

function AddGallery({ onAddImage }) {
  const [isOpen, setIsOpen] = useState(false)
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  const openPopup = () => {
    setIsOpen(true)
  }

  const closePopup = () => {
    setIsOpen(false)
    // Clear the form fields when closing the popup
    setImage(null)
    setTitle('')
    setDescription('')
    setError('')
  }

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0]
    setImage(selectedImage)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (image && title && description) {
      const formData = new FormData()
      formData.append('image', image)
      formData.append('title', title)
      formData.append('description', description)

      try {
        const newImage = await addGalleryImage(formData)
        if (newImage) {
          onAddImage(newImage)
          closePopup()
        } else {
          setError('Failed to add image')
        }
      } catch (error) {
        setError('Error adding image. Please try again later.')
      }
    }
  }

  return (
    <div>
      <button
        onClick={openPopup}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Add Image
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="modal relative bg-white p-4 rounded shadow-md max-w-lg z-10">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Add New Image
            </h2>
            {error && <p className="text-red-500 text-center mb-2">{error}</p>}
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input type="file" onChange={handleImageChange} required />
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={closePopup}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddGallery
