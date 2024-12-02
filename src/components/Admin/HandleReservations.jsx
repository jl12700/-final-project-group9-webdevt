import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Admin.css";
import "../Styles/reservations.css";
import dash3 from "../Assets/dash3.png"; // Importing the logo image
import { ReservationListContext } from "../../context/ReservationListContext";
import ReservationModal from "./ReservationModal.jsx";
import { FaBookmark } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { BiSolidExit } from "react-icons/bi";
import ConfirmationDialog from "../ConfirmationDialog";

const HandleReservation = () => {
  const navigate = useNavigate();

  const HandleReservationsClick = () => {
    navigate("/handle-reservations");
  };
  const ManageEquipmentClick = () => {
    navigate("/manage-equipment");
  };
  const StatisticsClick = () => {
    navigate("/statistics");
  };
  const LogOut = () => {
    navigate("/");
  };

  const { reservations, removeReservation, fetchReservations, updateReservation } =
    useContext(ReservationListContext);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [reservationToRemove, setReservationToRemove] = useState(null);

  const availableReservations = reservations.filter(
    (reservation) => reservation.status !== "lol"
  );

  useEffect(() => {
    fetchReservations(); // Fetch reservations when component mounts
  }, [fetchReservations]);

  const handleRowClick = (reservation) => {
    setSelectedReservation(reservation);
  };

  const closeModal = () => {
    setSelectedReservation(null);
  };

  const saveChanges = (updatedReservation) => {
    const { id, status, notes } = updatedReservation;
    updateReservation(id, { status, notes }); // Pass id and update data separately
    closeModal();
  };

  const handleConfirmRemove = () => {
    removeReservation(reservationToRemove);
    setShowConfirmation(false);
    setReservationToRemove(null);
  };

  const handleCancelRemove = () => {
    setShowConfirmation(false);
    setReservationToRemove(null);
  };

  return (
    <div className="main-container">
      <div className="sidebar">
        <img src={dash3} alt="Dashboard Logo" className="sidebar-logo" />
        <ul>
          <li id="active">
            <FaBookmark/>
            <a onClick={HandleReservationsClick}  className="item" href="#">
              Handle Reservations
            </a>
          </li>
          <li>
            <MdManageAccounts size={"1.5em"}/>
            <a onClick={ManageEquipmentClick} className="item" href="#">
              Manage Equipment
            </a>
          </li>
          <li>
            <IoStatsChartSharp/>
            <a onClick={StatisticsClick} className="item" href="#">
              Statistics
            </a>
          </li>
          <li>
            <BiSolidExit/>
            <a onClick={LogOut} className="item" href="#">
              Log Out
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <div>
          <h2>Reservations</h2>
          <table className="table table-hover mt-3">
            <thead>
              <tr>
                <th>Index</th>
                <th>Reservation Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Return Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {availableReservations.map((reservation, index) => (
                <tr key={reservation.id}>
                  <td>{index + 1}</td>
                  <td>{reservation.reservationDate}</td>
                  <td>{reservation.startTime}</td>
                  <td>{reservation.endTime}</td>
                  <td>{reservation.returnDate}</td>
                  <td>{reservation.status}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleRowClick(reservation)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => {
                        e.stopPropagation();
                        setReservationToRemove(reservation.id);
                        setShowConfirmation(true);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <ReservationModal
            selectedReservation={selectedReservation}
            closeModal={closeModal}
            saveChanges={saveChanges}
          />

          {showConfirmation && (
            <ConfirmationDialog
              confirmText="want to remove this reservation"
              onConfirm={handleConfirmRemove}
              onCancel={handleCancelRemove}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HandleReservation;
