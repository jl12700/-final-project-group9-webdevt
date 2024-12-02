const ReservationModal = ({ selectedReservation, closeModal }) => {

  if (!selectedReservation) return null;

  return (
    <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Reserved Equipment</h5>
            <button className="btn-close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            <ul>
              {selectedReservation.equipment.map((equip, index) => (
                <li key={index}>
                  {equip.equipmentName} (Count: {equip.quantity})
                </li>
              ))}
            </ul>
            <p>
              <strong>Notes:</strong> {selectedReservation.notes}
            </p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;