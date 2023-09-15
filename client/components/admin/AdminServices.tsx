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
      <div style={{ position: 'relative' }}>
        <Services services={services} />

        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          onClick={openAddServicePopup}
          style={{
            position: 'absolute',
            bottom: '-30px', // Adjust as needed to control the distance from the bottom
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          Add Service
        </button>
      </div>

      {isAddServicePopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <AddServices
            onClose={() => {
              closeAddServicePopup()
              fetchServices()
              onClose()
            }}
          />
        </div>
      )}
    </div>
  )
}

export default AdminServices
