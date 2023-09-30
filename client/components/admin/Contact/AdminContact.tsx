import { useState, useEffect } from 'react'
import { getContact } from '../../../apis/contact'
import { ContactModel } from '../../../../models/Contact'

function AdminContact() {
  const [contact, setContact] = useState<ContactModel[]>([])

  useEffect(() => {
    fetchContact()
  }, [])

  const fetchContact = async () => {
    try {
      const contactData = await getContact()
      setContact(contactData)
    } catch (error) {
      console.error('Error fetching services: ', error)
    }
  }

  // Function to handle updates
  // const handleUpdate = (updatedService: ServiceModel) => {
  //   // Update the service in the state
  //   const updatedServices = services.map((service) =>
  //     service.id === updatedService.id ? updatedService : service
  //   )
  //   setServices(updatedServices)

  //   // Close the update form
  //   closeUpdateService()
  // }

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
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AdminContact
