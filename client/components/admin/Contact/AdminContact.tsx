import React, { useState, useEffect } from 'react'
import { getContact, updateContact } from '../../../apis/contact'
import { ContactModelId } from '../../../../models/Contact'
import UpdateContact from './UpdateContact'

function AdminContact() {
  const [contact, setContact] = useState<ContactModelId[]>([])
  const [isUpdateContactOpen, setIsUpdateContactOpen] = useState(false)
  const [contactToUpdate, setContactToUpdate] = useState<ContactModelId | null>(
    null
  )

  useEffect(() => {
    fetchContact()
  }, [])

  const fetchContact = async () => {
    try {
      const contactData = await getContact()
      setContact(contactData)
    } catch (error) {
      console.error('Error fetching contact: ', error)
    }
  }

  const openUpdateContact = (contact: ContactModelId) => {
    setContactToUpdate(contact)
    setIsUpdateContactOpen(true)
  }

  const closeUpdateContact = () => {
    setContactToUpdate(null)
    setIsUpdateContactOpen(false)
  }

  // Function to handle the update of contact information
  const handleUpdateContact = async (updatedContact: ContactModelId) => {
    try {
      await updateContact(updatedContact)
      closeUpdateContact()
      fetchContact()
    } catch (error) {
      console.error('Error updating contact: ', error)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 rounded">
        <h2 className="text-5xl font-bold mb-4 text-center">Contact Us</h2>
        <ul className="text-2xl">
          {contact.map((contacts) => (
            <li
              key={contacts.id}
              className="border-b border-gray-400 py-2 last:border-none"
            >
              <p>
                <strong>Number:</strong> {contacts.number}
              </p>
              <br></br>
              <p>
                <strong>Email:</strong> {contacts.email}
              </p>
              <br></br>
              <p>
                <strong>Instagram:</strong> {contacts.instagram}
              </p>
              <br></br>
              <p>
                <strong>Address:</strong> {contacts.address}
              </p>
              <br></br>
              <button
                onClick={() => openUpdateContact(contacts)}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-2"
              >
                Update Contact Info
              </button>
            </li>
          ))}
        </ul>
      </div>
      {isUpdateContactOpen && (
        <UpdateContact
          contactData={contactToUpdate}
          onUpdate={handleUpdateContact}
          onCancel={closeUpdateContact}
        />
      )}
    </div>
  )
}

export default AdminContact
