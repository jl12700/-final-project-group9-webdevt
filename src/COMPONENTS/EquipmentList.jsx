import React, { useContext } from 'react';
import { EquipmentContext } from '../CONTEXT/EquipmentContext';

const EquipmentList = () => {
  const { equipmentList } = useContext(EquipmentContext);

  return (
    <div>
      <h2>Equipment List</h2>
      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>Equipment ID</th>
            <th>Equipment Name</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {equipmentList.map((equipment, index) => (
            <tr key={index}>
              <td>{equipment.equipmentID}</td>
              <td>{equipment.equipmentName}</td>
              <td>{equipment.quantity}</td>
              <td>{equipment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentList;
