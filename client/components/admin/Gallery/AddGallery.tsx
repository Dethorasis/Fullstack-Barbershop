import { useState } from 'react'

function AddGallery({ onAddImage, onClose }: any) {
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleImageChange = (e:any) => {
    // Handle image selection
    const selectedImage = e.target.files[0]
    setImage(selectedImage)
  }

  const handleAddImage = () => {
    // Handle the addition of the image, title, and description
    // Use the onAddImage function to pass the data to the parent component
    onAddImage(image, title, description)
    onClose() // Close the AddGallery popup
  }

  return (
    <div className="popup">
      <h2>Add Gallery Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddImage}>Add Image</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  )
}

export default AddGallery
