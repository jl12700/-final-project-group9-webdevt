import React, { useState, useContext } from 'react';
import { ReservationContext } from '../CONTEXT/ReservationContext';
import { FaPlus, FaMinus } from 'react-icons/fa';

const EquipmentModal = ({ equipment, onClose }) => {
  const { addToCart } = useContext(ReservationContext);
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < equipment.quantity) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const confirm = () => {
    addToCart({ ...equipment, quantity });
    onClose();
  };

  return (
    <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Reserve {equipment.equipmentName}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>
              <strong>Equipment Name:</strong> {equipment.equipmentName}
            </p>
            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-secondary" onClick={decrement}>
                <FaMinus />
              </button>
              <span>{quantity}</span>
              <button className="btn btn-secondary" onClick={increment}>
                <FaPlus />
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={confirm}>
              Confirm
            </button>
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentModal;
