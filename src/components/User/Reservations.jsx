import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/User.css";
import "../Styles/reservations.css";
import dash3 from "../Assets/dash3.png"; // Importing the logo image
import { ReservationListContext } from "../../context/ReservationListContext";
import ReservationModal from "./ReservationModal.jsx";
import ConfirmationDialog from "../ConfirmationDialog";
import { BiSolidDashboard } from "react-icons/bi";
import { FaBookmark } from "react-icons/fa";
import { BiSolidExit } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

const Reservations = () => {
  const navigate = useNavigate();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const { reservations, removeReservation, fetchReservations } = useContext(ReservationListContext);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [reservationToRemove, setReservationToRemove] = useState(null);

  const DashboardClick = () => {
    navigate("/dashboard");
  };
  const ReservationsClick = () => {
    navigate("/reservations");
  };
  const UserprofileClick = () => {
    navigate("/user-profile");
  };
  const LogOut = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirmLogout = () => {
    setShowConfirmDialog(false);
    navigate("/");
  };

  const handleCancelLogout = () => {
    setShowConfirmDialog(false);
  };

  useEffect(() => {
    fetchReservations(); // Fetch reservations when component mounts
  }, [fetchReservations]);

  const handleViewClick = (reservation) => {
    setSelectedReservation(reservation);
  };

  const closeModal = () => {
    setSelectedReservation(null);
  };

  const handleRemoveClick = (reservation) => {
    setReservationToRemove(reservation);
    setShowConfirmation(true);
  };

  const handleConfirmRemove = () => {
    if (reservationToRemove) {
      removeReservation(reservationToRemove.id);
      setShowConfirmation(false);
      setReservationToRemove(null);
    }
  };

  const handleCancelRemove = () => {
    setShowConfirmation(false);
    setReservationToRemove(null);
  };

  const currentReservations = reservations.filter(
    (reservation) => reservation.status !== "Returned"
  );
  const pastReservations = reservations.filter(
    (reservation) => reservation.status === "Returned"
  );

  return (
    <div>
      <div className="sidebar">
        <img src={dash3} alt="Dashboard Logo" className="sidebar-logo" />
        <ul>
          <li><BiSolidDashboard /> <a onClick={DashboardClick} className="item" href="#">Dashboard</a></li>
          <li id="active"> <FaBookmark /> <a onClick={ReservationsClick} className="item" href="#">Reservations</a></li>
          <li ><FaUser /> <a onClick={UserprofileClick} className="item" href="#">User Profile</a></li>
          <li><BiSolidExit /><a onClick={LogOut} className="item" href="#">Log Out</a></li>
        </ul>
      </div>
      {showConfirmDialog && (
        <ConfirmationDialog
          confirmText="want to log out"
          onConfirm={handleConfirmLogout}
          onCancel={handleCancelLogout}
        />
      )}
      <div>
        <h2>Current Reservations</h2>
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Index</th>
              <th>Reservation Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Return Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentReservations.map((reservation, index) => (
              <tr key={reservation.id}>
                <td>{index + 1}</td>
                <td>{reservation.reservationDate}</td>
                <td>{reservation.startTime}</td>
                <td>{reservation.endTime}</td>
                <td>{reservation.returnDate}</td>
                <td>{reservation.status}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    disabled={reservation.status !== "Pending"}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveClick(reservation);
                    }}
                  >
                    Remove
                  </button>
                  <button
                    className="btn btn-info ms-2"
                    onClick={() => handleViewClick(reservation)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Past Reservations</h2>
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Index</th>
              <th>Reservation Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Return Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pastReservations.map((reservation, index) => (
              <tr key={reservation.id}>
                <td>{index + 1}</td>
                <td>{reservation.reservationDate}</td>
                <td>{reservation.startTime}</td>
                <td>{reservation.endTime}</td>
                <td>{reservation.returnDate}</td>
                <td>{reservation.status}</td>
                <td>
                  {reservation.status === "Returned" && (
                    <span className="badge bg-success me-2">Returned</span>
                  )}
                  <button
                    className="btn btn-info"
                    onClick={() => handleViewClick(reservation)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedReservation && (
          <ReservationModal
            selectedReservation={selectedReservation}
            closeModal={closeModal}
          />
        )}

        {showConfirmation && (
          <ConfirmationDialog
            confirmText="want to remove this reservation"
            onConfirm={handleConfirmRemove}
            onCancel={handleCancelRemove}
          />
        )}
      </div>
    </div>
  );
};

export default Reservations;
