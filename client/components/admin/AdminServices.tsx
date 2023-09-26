import { useState, useEffect } from 'react'
import { addServices, deleteServices, getServices } from '../../apis/services'
import AddServices from './AddServices'
import { ServiceModel } from '../../../models/Services'

function AdminServices() {
  const [services, setServices] = useState<ServiceModel[]>([])
  const [isAddServicePopupOpen, setIsAddServicePopupOpen] = useState(false)
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false)
  const [serviceToDelete, setServiceToDelete] = useState<ServiceModel | null>(
    null
  )

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const servicesData = await getServices()
      setServices(servicesData)
    } catch (error) {
      console.error('Error fetching services: ', error)
    }
  }

  const openAddServicePopup = () => {
    setIsAddServicePopupOpen(true)
  }
  const closeAddServicePopup = () => {
    setIsAddServicePopupOpen(false)
  }
  const openDeleteConfirmation = (service: ServiceModel) => {
    setServiceToDelete(service)
    setIsDeleteConfirmationOpen(true)
  }
  const closeDeleteConfirmation = () => {
    setServiceToDelete(null)
    setIsDeleteConfirmationOpen(false)
  }

  const handleDelete = async () => {
    if (!serviceToDelete) {
      return
    }

    try {
      await deleteServices(serviceToDelete.id)
      closeDeleteConfirmation()
      fetchServices()
    } catch (error) {
      console.error('Error deleting service: ', error)
    }
  }

  return (
    <div className="p-4 rounded my-10 mx-96">
      <h2 className="text-3xl font-bold mb-4 text-center">Services List</h2>

      {/* Services List */}
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

            {/* Delete button */}
            <button
              onClick={() => openDeleteConfirmation(service)}
              className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Add Service button */}
      <button
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        onClick={openAddServicePopup}
      >
        Add Service
      </button>

      {/* Add Service Popup */}
      {isAddServicePopupOpen && (
        <AddServices
          onClose={closeAddServicePopup}
          fetchServices={fetchServices}
        />
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteConfirmationOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeDeleteConfirmation} // Close confirmation on backdrop click
          ></div>

          <div className="bg-white p-4 rounded shadow-md max-w-lg z-10">
            <div className="modal-content">
              <h2>Are you sure you want to delete this service?</h2>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
              >
                Yes
              </button>
              <button
                onClick={closeDeleteConfirmation}
                className="bg-gray-500 text-white py-1 px-2 rounded hover:bg-gray-600"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminServices
