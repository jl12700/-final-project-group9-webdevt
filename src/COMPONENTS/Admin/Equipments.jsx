import React, { useContext, useState } from 'react';
import { EquipmentContext } from '../../context/EquipmentContext';

const Equipments = () => {
  const { equipmentList, updateEquipment, removeEquipment } = useContext(EquipmentContext);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({
    equipmentID: '',
    equipmentName: '',
    quantity: '',
    status: 'Available',
  });

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData({ ...equipmentList[index] });
  };

  const handleSave = () => {
    // Validation
    if (!editData.equipmentID || !editData.equipmentName || editData.quantity === '') {
      alert('All fields are required.');
      return;
    }

    if (equipmentList.some((eq, idx) => eq.equipmentID === editData.equipmentID && idx !== editIndex)) {
      alert('Equipment ID must be unique.');
      return;
    }

    if (editData.quantity < 0) {
      alert('Quantity must be non-negative.');
      return;
    }

    // Update the equipment list
    updateEquipment(editIndex, {
      ...editData,
      quantity: Number(editData.quantity),
    });

    setEditIndex(null);
  };

  const handleRemove = (index) => {
    if (window.confirm('Are you sure you want to remove this item?')) {
      removeEquipment(index);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>Equipment ID</th>
            <th>Equipment Name</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {equipmentList.map((equipment, index) => (
            <tr key={index}>
              {editIndex === index ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="equipmentID"
                      value={editData.equipmentID}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="equipmentName"
                      value={editData.equipmentName}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name="quantity"
                      value={editData.quantity}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <select
                      name="status"
                      value={editData.status}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option>Available</option>
                      <option>Reserved</option>
                      <option>Unavailable</option>
                      <option>Decommissioned</option>
                    </select>
                  </td>
                  <td>
                    <button onClick={handleSave} className="btn btn-success btn-sm">Save</button>
                    <button onClick={() => setEditIndex(null)} className="btn btn-secondary btn-sm">Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{equipment.equipmentID}</td>
                  <td>{equipment.equipmentName}</td>
                  <td>{equipment.quantity}</td>
                  <td>{equipment.status}</td>
                  <td>
                    <button onClick={() => handleEdit(index)} className="btn btn-primary btn-sm">Edit</button>
                    <button onClick={() => handleRemove(index)} className="btn btn-danger btn-sm">Remove</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Equipments;
