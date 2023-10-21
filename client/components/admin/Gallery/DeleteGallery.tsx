import React from 'react'

interface DeleteGalleryProps {
  onCancel: () => void
  onDelete: () => void
}

function DeleteGallery({ onCancel, onDelete }: DeleteGalleryProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="modal relative bg-white p-4 rounded shadow-md max-w-lg z-10">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Confirm Deletion
        </h2>
        <p className="text-center mb-4">
          Are you sure you want to delete this image?
        </p>
        <div className="flex justify-center">
          <button
            onClick={onDelete}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mr-4"
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteGallery
