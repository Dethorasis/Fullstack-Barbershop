import { useState } from 'react'
import AddServices from './AddServices'
import Services from '../Services'

export interface AdminServicesProps {
  onClose: () => void
}

function AdminServices({ onClose }: AdminServicesProps) {
  const [isAddServicePopupOpen, setIsAddServicePopupOpen] = useState(false)

  const openAddServicePopup = () => {
    setIsAddServicePopupOpen(true)
  }

  const closeAddServicePopup = () => {
    setIsAddServicePopupOpen(false)
  }

  return (
    <div>
      <div style={{ position: 'relative' }}>
        <Services />

        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          onClick={openAddServicePopup}
          style={{
            position: 'absolute',
            bottom: '-30px',
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
              onClose()
            }}
          />
        </div>
      )}
    </div>
  )
}

export default AdminServices
