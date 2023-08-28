import { useEffect, useState } from 'react'
import { getContact } from '../apis/contact'
import { ContactModel } from '../../models/Contact'

function Contact() {
  const [contact, setContact] = useState<ContactModel[]>([])

  useEffect(() => {
    // Fetch contact data from the backend API when the component mounts
    async function fetchContact() {
      try {
        const data = await getContact()
        setContact(data) // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching contact')
      }
    }

    fetchContact()
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 rounded">
        <h2 className="text-5xl font-bold mb-4 text-center">Contact Us</h2>
        <ul className="text-2xl">
          {contact.map((contact) => (
            <li
              key={contact.id}
              className="border-b border-gray-400 py-2 last:border-none"
            >
              <p>
                <strong>Number:</strong> {contact.number}
              </p>
              <br></br>
              <p>
                <strong>Email:</strong> {contact.email}
              </p>
              <br></br>
              <p>
                <strong>Instagram:</strong> {contact.instagram}
              </p>
              <br></br>
              <p>
                <strong>Address:</strong> {contact.address}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Contact
