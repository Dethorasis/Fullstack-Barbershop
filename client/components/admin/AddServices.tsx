import React, { useState } from 'react'
import { addServices } from '../../apis/services' // Import your API function

function AddServices() {
  const [serviceName, setServiceName] = useState('')
  const [servicePrice, setServicePrice] = useState(0)
  const [serviceDescription, setServiceDescription] = useState('')

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

      // Clear form fields after successful submission
      setServiceName('')
      setServicePrice(0)
      setServiceDescription('')
    } catch (error) {
      console.error('Error adding service:', error)
    }
  }

return (
    <div className="p-4 flex items-center justify-center min-h-screen">
      <div className="bg-white p-4 rounded shadow-md max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Service</h2>
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
