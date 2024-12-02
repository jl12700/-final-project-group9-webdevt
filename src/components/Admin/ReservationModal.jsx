import React, { useState, useEffect } from "react";

const ReservationModal = ({ selectedReservation, closeModal, saveChanges }) => {
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (selectedReservation) {
      setStatus(selectedReservation.status);
      setNotes(selectedReservation.notes);
    }
  }, [selectedReservation]);

  const handleSave = () => {
    const updatedReservation = {
      ...selectedReservation,
      status,
      notes,
    };
    saveChanges(updatedReservation);
  };

  if (!selectedReservation) return null;

  return (
    <div
      className="modal show"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Reservation</h5>
            <button className="btn-close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            {/* Reservation User Details */}
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label me-2" style={{ width: "100px" }}>Username</label>
              <p>{selectedReservation.user.username}</p>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label me-2" style={{ width: "100px" }}>Email</label>
              <p>{selectedReservation.user.email}</p>
            </div>

            {/* Equipment List */}
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label me-2" style={{ width: "100px" }}>Equipment</label>
              <ul>
                {selectedReservation.equipment.map((item) => (
                  <li key={item.equipmentID}>
                    {item.equipmentName} (Quantity: {item.quantity})
                  </li>
                ))}
              </ul>
            </div>

            {/* Reservation and Time Details */}
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label me-2" style={{ width: "100px" }}>Reservation Date</label>
              <p>{selectedReservation.reservationDate}</p>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label me-2" style={{ width: "100px" }}>Start Time</label>
              <p>{selectedReservation.startTime}</p>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label me-2" style={{ width: "100px" }}>End Time</label>
              <p>{selectedReservation.endTime}</p>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label me-2" style={{ width: "100px" }}>Return Date</label>
              <p>{selectedReservation.returnDate}</p>
            </div>

            {/* Status and Notes */}
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select
                id="status"
                className="form-select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
                <option value="Reserved">Reserved</option>
                <option value="Returned">Returned</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="notes" className="form-label">
                Notes
              </label>
              <textarea
                id="notes"
                className="form-control"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={closeModal}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
