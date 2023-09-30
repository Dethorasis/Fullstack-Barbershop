import { useState, useEffect } from 'react'
import { deleteServices, getServices } from '../../../apis/services'
import AddServices from './AddServices'
import UpdateService from './UpdateServices'
import { ServiceModel } from '../../../../models/Services'

function AdminServices() {
  const [services, setServices] = useState<ServiceModel[]>([])
  const [isAddServicePopupOpen, setIsAddServicePopupOpen] = useState(false)
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] =
    useState(false)
  const [serviceToDelete, setServiceToDelete] = useState<ServiceModel | null>(
    null
  )
  const [isUpdateServiceOpen, setIsUpdateServiceOpen] = useState(false)
  const [serviceToUpdate, setServiceToUpdate] = useState<ServiceModel | null>(
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

  const openUpdateService = (service: ServiceModel) => {
    setServiceToUpdate(service)
    setIsUpdateServiceOpen(true)
  }

  const closeUpdateService = () => {
    setServiceToUpdate(null)
    setIsUpdateServiceOpen(false)
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
  // Add a function to handle updates
  const handleUpdate = (updatedService: ServiceModel) => {
    // Update the service in the state
    const updatedServices = services.map((service) =>
      service.id === updatedService.id ? updatedService : service
    )
    setServices(updatedServices)

    // Close the update form
    closeUpdateService()
  }

  return (
    <div className="p-4 rounded my-10 mx-96">
      <h2 className="text-3xl font-bold mb-4 text-center">Services List</h2>

      {/* Services List */}
      <div className="grid grid-cols-2 gap-6 my-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="border border-gray-400 p-4 rounded my-1 flex flex-col"
          >
            <h3 className="text-3xl font-semibold mb-2 text-center">
              {service.name}
            </h3>
            <p className="text-center">{service.description}</p>

            <div className="flex justify-center mt-2">
              {/* Update button */}
              <button
                onClick={() => openUpdateService(service)}
                className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 mr-2"
              >
                Update
              </button>

              {/* Delete button */}
              <button
                onClick={() => openDeleteConfirmation(service)}
                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        {/* Add Service button */}
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          onClick={openAddServicePopup}
        >
          Add Service
        </button>
      </div>

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

      {/* Update Service Form */}
      {isUpdateServiceOpen && (
        <UpdateService
          serviceData={serviceToUpdate} // Pass the service data to update
          onUpdate={handleUpdate} // Callback for successful update
          onCancel={closeUpdateService} // Callback for canceling update
        />
      )}
    </div>
  )
}

export default AdminServices
