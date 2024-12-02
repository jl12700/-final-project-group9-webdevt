import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { ReservationContext } from '../../context/ReservationContext';
import ConfirmationDialog from '../ConfirmationDialog';

const ReservationCart = ({ isOpen, onRequestClose }) => {
  const { cart, removeFromCart, confirmReservation } = useContext(ReservationContext);
  const [formData, setFormData] = useState({
    reservationDate: '',
    startTime: '',
    endTime: '',
    returnDate: '',
    notes: '',
  });
  const [showDialog, setShowDialog] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleConfirm = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add some equipment before confirming.');
      return;
    }

    if (Object.values(formData).some((value) => value === '')) {
      alert('All fields must be filled out.');
      return;
    }

    const reservation = {
      reservationID: Date.now(),
      user: { userid: '12345', username: 'John Doe', email: 'johndoe@example.com' },
      equipment: cart.map((item) => ({
        equipmentID: item.equipmentID,
        equipmentName: item.equipmentName,
        quantity: item.quantity,
      })),
      ...formData,
      status: 'Pending',
    };

    confirmReservation(reservation);
    setFormData({ reservationDate: '', startTime: '', endTime: '', returnDate: '', notes: '' });
    onRequestClose();
  };

  const handleRemoveClick = (index) => {
    setItemToRemove(index);
    setShowDialog(true);
  };

  const handleConfirmRemove = () => {
    removeFromCart(itemToRemove);
    setShowDialog(false);
    setItemToRemove(null);
  };

  const handleCancelRemove = () => {
    setShowDialog(false);
    setItemToRemove(null);
    
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Reservation Cart"
    >
      <h2>Reservation Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Equipment Name</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.equipmentName}</td>
              <td>{item.quantity}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleRemoveClick(index)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showDialog && (
        <ConfirmationDialog
          confirmText="want to remove this item"
          onConfirm={handleConfirmRemove}
          onCancel={handleCancelRemove}
        />
      )}

      <form className="mt-3">
        <div className="mb-3">
          <label className="form-label">Reservation Date</label>
          <input type="date" name="reservationDate" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Start Time</label>
          <input type="time" name="startTime" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">End Time</label>
          <input type="time" name="endTime" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Return Date</label>
          <input type="date" name="returnDate" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Notes</label>
          <textarea name="notes" className="form-control" onChange={handleChange}></textarea>
        </div>
        <button type="button" className="btn btn-success me-2" onClick={handleConfirm}>
          Confirm Selection
        </button>
        <button type="button" className="btn btn-secondary" onClick={onRequestClose}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default ReservationCart;