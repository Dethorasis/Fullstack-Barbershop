import React, { useState } from 'react'
import { addServices } from '../../apis/services'
// import { AdminServicesProps } from './AdminServices'

function AddServices({ onClose }) {
  const [serviceName, setServiceName] = useState('')
  const [servicePrice, setServicePrice] = useState(0)
  const [serviceDescription, setServiceDescription] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      // Call the API function to add the service
      const newService = {
        name: serviceName,
        price: servicePrice,
        description: serviceDescription,
      }
      await addServices(newService)

      // Close the popup
      onClose()
    } catch (error) {
      setError('Error adding service. Please try again later.')
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black opacity-50"></div>

      {/* AddServices popup */}
      <div className="bg-white p-4 rounded shadow-md max-w-lg z-10">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-white hover:text-gray-300"
          onClick={onClose}
        >
          Close
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Add New Service</h2>
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            placeholder="Service Name"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            placeholder="Service Price"
            value={servicePrice}
            onChange={(e) => setServicePrice(parseFloat(e.target.value))}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            placeholder="Service Description"
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddServices
