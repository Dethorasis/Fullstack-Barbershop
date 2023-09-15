import { useState, useEffect } from 'react'
import AddServices from './AddServices'
import Services from '../Services'
import { getServices } from '../../apis/services'

interface AdminServicesProps {
  onClose: () => void
}

function AdminServices({ onClose }: AdminServicesProps) {
  const [isAddServicePopupOpen, setIsAddServicePopupOpen] = useState(false)
  const [services, setServices] = useState([])

  const openAddServicePopup = () => {
    setIsAddServicePopupOpen(true)
  }

  const closeAddServicePopup = () => {
    setIsAddServicePopupOpen(false)
  }

  const fetchServices = async () => {
    try {
      const data = await getServices()
      setServices(data)
    } catch (error) {
      console.error('Error fetching services')
    }
  }

  useEffect(() => {
    fetchServices()
  }, [])

  return (
    <div>
      <Services services={services} />

      <button
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        onClick={openAddServicePopup}
      >
        Add Service
      </button>

      {isAddServicePopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <AddServices
            onClose={() => {
              closeAddServicePopup()
              fetchServices()
              onClose() // Call the onClose prop from the parent component when you want to close the popup
            }}
          />
        </div>
      )}
    </div>
  )
}

export default AdminServices
