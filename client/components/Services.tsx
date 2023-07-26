import { useEffect, useState } from 'react'
import { getServices } from '../apis/services'
import { ServiceModel } from '../../models/Services'

function Services() {
  const [services, setServices] = useState<ServiceModel[]>([])

  useEffect(() => {
    // Fetch services data from the backend API when the component mounts
    async function fetchServices() {
      try {
        const data = await getServices()
        setServices(data) // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching services')
      }
    }

    fetchServices()
  }, [])

  return (
    <div>
      <h2>Services List</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.name} - {service.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Services
