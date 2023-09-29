import React, { useState } from 'react'
import { updateServices } from '../../apis/services'

function UpdateServices({ onClose, fetchServices, serviceData }: any) {
  const [updatedServiceName, setUpdatedServiceName] = useState(serviceData.name)
  const [updatedServicePrice, setUpdatedServicePrice] = useState(
    serviceData.price
  )
  const [updatedServiceDescription, setUpdatedServiceDescription] = useState(
    serviceData.description
  )
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      // Call the API function to update the service
      const updatedService = {
        id: serviceData.id, // Include the service ID in the update data
        name: updatedServiceName,
        price: updatedServicePrice,
        description: updatedServiceDescription,
      }
      await updateServices(updatedService)

      // Close the popup
      onClose()
      fetchServices()
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
          onClick={onClose}
        >
          Close
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Update Service</h2>
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            placeholder="Service Name"
            value={updatedServiceName}
            onChange={(e) => setUpdatedServiceName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            placeholder="Service Price"
            value={updatedServicePrice}
            onChange={(e) => setUpdatedServicePrice(parseFloat(e.target.value))}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            placeholder="Service Description"
            value={updatedServiceDescription}
            onChange={(e) => setUpdatedServiceDescription(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
          >
            Update Service
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateServices
