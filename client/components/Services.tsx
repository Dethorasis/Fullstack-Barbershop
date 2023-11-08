import { useEffect, useState } from 'react'
import { getServices } from '../apis/services'
import { ServiceModel } from '../../models/Services'

function Services() {
  const [services, setServices] = useState<ServiceModel[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchServices() {
      try {
        const data = await getServices()
        setServices(data)
      } catch (error) {
        setError('Error fetching services')
      }
    }

    fetchServices()
  }, [])

  return (
    <div className="p-4 rounded my-10 mx-96">
      <h2 className="text-3xl font-bold mb-4 text-center">Services List</h2>
      <div className="grid grid-cols-2 gap-6 my-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="border border-gray-400 p-4 rounded my-1"
          >
            <h3 className="text-3xl font-semibold mb-2 text-center">
              {service.name}
            </h3>
            <p className="text-center">{service.description}</p>
            <p className="text-center">Price: ${service.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
