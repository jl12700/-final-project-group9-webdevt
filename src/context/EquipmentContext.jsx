import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const EquipmentContext = createContext();

const API_URL = 'http://localhost:5000/equipment';

const EquipmentProvider = ({ children }) => {
  const [equipmentList, setEquipmentList] = useState([]);

  // Fetch equipment from the server
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setEquipmentList(response.data))
      .catch((error) => console.error('Error fetching equipment:', error));
  }, []);

  // Add equipment to the server
  const addEquipment = (equipment) => {
    axios
      .post(API_URL, equipment)
      .then((response) => {
        setEquipmentList((prevList) => [...prevList, response.data]);
      })
      .catch((error) => console.error('Error adding equipment:', error));
  };

  // Update equipment on the server
  const updateEquipment = (index, updatedEquipment) => {
    const equipmentId = equipmentList[index].id; // Assuming each equipment has a unique `id` field
    axios
      .put(`${API_URL}/${equipmentId}`, updatedEquipment)
      .then((response) => {
        setEquipmentList((prevList) => {
          const updatedList = [...prevList];
          updatedList[index] = response.data;
          return updatedList;
        });
      })
      .catch((error) => console.error('Error updating equipment:', error));
  };

  // Remove equipment from the server
  const removeEquipment = (index) => {
    const equipmentId = equipmentList[index].id;
    axios
      .delete(`${API_URL}/${equipmentId}`)
      .then(() => {
        setEquipmentList((prevList) => prevList.filter((_, idx) => idx !== index));
      })
      .catch((error) => console.error('Error removing equipment:', error));
  };

  return (
    <EquipmentContext.Provider
      value={{ equipmentList, addEquipment, updateEquipment, removeEquipment }}
    >
      {children}
    </EquipmentContext.Provider>
  );
};

export { EquipmentContext, EquipmentProvider };
