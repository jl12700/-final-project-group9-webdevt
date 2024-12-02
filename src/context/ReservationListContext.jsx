import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

const ReservationListContext = createContext();

const RESERVATION_API = "http://localhost:5001/reservations";

const ReservationListProvider = ({ children }) => {
  const [reservations, setReservations] = useState([]);

  // Fetch reservations from the API
  const fetchReservations = useCallback(() => {
    axios
      .get(RESERVATION_API)
      .then((response) => setReservations(response.data))
      .catch((error) => console.error("Error fetching reservations:", error));
  }, []);

  useEffect(() => {
    fetchReservations();
  }, [fetchReservations]);

  // Remove a reservation by its ID
  const removeReservation = (id) => {
    axios
      .delete(`${RESERVATION_API}/${id}`)
      .then(() => setReservations((prev) => prev.filter((res) => res.id !== id)))
      .catch((error) => console.error("Error deleting reservation:", error));
  };

  // Update reservation data
  const updateReservation = (id, updateData) => {
    axios
      .patch(`${RESERVATION_API}/${id}`, updateData)
      .then((response) => {
        setReservations((prev) =>
          prev.map((reservation) =>
            reservation.id === id ? { ...reservation, ...response.data } : reservation
          )
        );
      })
      .catch((error) => console.error("Error updating reservation:", error));
  };

  return (
    <ReservationListContext.Provider
      value={{ reservations, fetchReservations, removeReservation, updateReservation }}
    >
      {children}
    </ReservationListContext.Provider>
  );
};

export { ReservationListContext, ReservationListProvider };
