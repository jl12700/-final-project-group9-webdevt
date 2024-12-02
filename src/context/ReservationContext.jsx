import React, { createContext, useState } from 'react';
import axios from 'axios';

const ReservationContext = createContext();

const RESERVATION_API = 'http://localhost:5001/reservations';

const ReservationProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [reservations, setReservations] = useState([]);

  // Add to cart
  const addToCart = (equipment) => {
    setCart([...cart, equipment]);
  };

  // Remove from cart
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  // Confirm reservation
  const confirmReservation = (reservation) => {
    axios
      .post(RESERVATION_API, reservation)
      .then((response) => {
        setReservations([...reservations, response.data]);
        setCart([]); // Clear the cart
      })
      .catch((error) => console.error('Error saving reservation:', error));
  };

  return (
    <ReservationContext.Provider value={{ cart, addToCart, removeFromCart, confirmReservation }}>
      {children}
    </ReservationContext.Provider>
  );
};

export { ReservationContext, ReservationProvider };
