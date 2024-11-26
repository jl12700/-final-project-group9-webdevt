import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const EquipmentContext = createContext();

const API_URL = 'http://localhost:5000/equipment';

const EquipmentProvider = ({ children }) => {
  const [equipmentList, setEquipmentList] = useState([]);

  // Fetch equipment from JSON server
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
        setEquipmentList([...equipmentList, response.data]);
      })
      .catch((error) => console.error('Error adding equipment:', error));
  };

  return (
    <EquipmentContext.Provider value={{ equipmentList, addEquipment }}>
      {children}
    </EquipmentContext.Provider>
  );
};

export { EquipmentContext, EquipmentProvider };
