import React, { useState, useContext } from 'react';
import { EquipmentContext } from '../../context/EquipmentContext';
import EquipmentModal from './EquipmentModal';

const ReserveEquipment = () => {
  const { equipmentList } = useContext(EquipmentContext);
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  // Filter available equipment
  const availableEquipment = equipmentList.filter((equipment) => equipment.status === 'Available');

  return (
    <div>
      <h2>Reserve Equipment</h2>
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th>Equipment ID</th>
            <th>Equipment Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {availableEquipment.map((equipment, index) => (
            <tr
              key={index}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f0f8ff')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
              onClick={() => setSelectedEquipment(equipment)}
            >
              <td>{equipment.equipmentID}</td>
              <td>{equipment.equipmentName}</td>
              <td>{equipment.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedEquipment && (
        <EquipmentModal equipment={selectedEquipment} onClose={() => setSelectedEquipment(null)} />
      )}
    </div>
  );
};

export default ReserveEquipment;
