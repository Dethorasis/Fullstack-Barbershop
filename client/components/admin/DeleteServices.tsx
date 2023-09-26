function DeleteServices({ service, onDelete, onCancel }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Delete Service</h2>
        <p>Are you sure you want to delete the service: {service.name}?</p>
        <button onClick={() => onDelete(service.id)}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    </div>
  )
}

export default DeleteServices
