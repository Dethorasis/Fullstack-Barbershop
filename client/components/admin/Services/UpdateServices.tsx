import { useState } from 'react'
import { updateServices } from '../../../apis/services'

function UpdateService({ serviceData, onUpdate, onCancel }: any) {
  const [updatedService, setUpdatedService] = useState({ ...serviceData })
  const [error, setError] = useState('')

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setUpdatedService({
      ...updatedService,
      [name]: value,
    })
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    try {
      // Call the API function to update the service
      const updatedServiceData = {
        id: serviceData.id, // Make sure you include the ID in the updated data
        ...updatedService,
      }

      await updateServices(updatedServiceData)

      // Notify the parent component that the update was successful
      onUpdate(updatedServiceData)
    } catch (error) {
      setError('Error updating service. Please try again later.')
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black opacity-50"></div>

      {/* UpdateServices popup */}
      <div className="bg-white p-4 rounded shadow-md max-w-lg z-10">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-white hover:text-gray-300"
          onClick={onCancel}
        >
          Close
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Update Service</h2>
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Service Name"
            value={updatedService.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Service Price"
            value={updatedService.price}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Service Description"
            value={updatedService.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
          >
            Update Service
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateService
