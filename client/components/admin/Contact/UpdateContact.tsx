import React, { useState } from 'react'
import { updateContact } from '../../../apis/contact'

function UpdateContact({ contactData, onUpdate, onCancel }: any) {
  const [updatedContact, setUpdatedContact] = useState({ ...contactData })
  const [error, setError] = useState('')

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setUpdatedContact({
      ...updatedContact,
      [name]: value,
    })
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      // Call the API function to update the contact
      await updateContact(updatedContact)

      // Notify the parent component that the update was successful
      onUpdate(updatedContact)
    } catch (error) {
      setError('Error updating contact. Please try again later.')
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black opacity-50"></div>

      {/* UpdateContact popup */}
      <div className="bg-white p-4 rounded shadow-md max-w-lg z-10">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-white hover:text-gray-300"
          onClick={onCancel}
        >
          Close
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Update Contact</h2>
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            name="number"
            placeholder="Number"
            value={updatedContact.number}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={updatedContact.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="instagram"
            placeholder="Instagram"
            value={updatedContact.instagram}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="address"
            placeholder="Address"
            value={updatedContact.address}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
          >
            Update Contact
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

export default UpdateContact
