import React, { useState } from 'react'
import { addGalleryImage } from '../../../apis/gallery'

function AddGallery({ onAddImage }) {
  const [isOpen, setIsOpen] = useState(false)
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const openPopup = () => {
    setIsOpen(true)
  }

  const closePopup = () => {
    setIsOpen(false)
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
        // Call the onAddImage function to send the data to the server
        const newImage = await addGalleryImage(formData)
        if (newImage) {
          // If the addition is successful, call the callback to update the UI
          onAddImage(newImage)
        } else {
          console.error('Failed to add image')
        }
      } catch (error) {
        console.error('Error adding image:', error)
      }

      // Close the popup
      closePopup()
    }
  }

  return (
    <div>
      <button onClick={openPopup}>Add Image</button>
      {isOpen && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleImageChange} />
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default AddGallery
