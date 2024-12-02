import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/User.css";
import "../Styles/reservations.css";
import dash3 from "../Assets/dash3.png"; // Importing the logo image
import { ReservationListContext } from "../../context/ReservationListContext";
import ReservationModal from "./ReservationModal.jsx";

const Reservations = () => {
    const navigate = useNavigate();
    const { reservations, removeReservation, fetchReservations } = useContext(ReservationListContext);
    const [selectedReservation, setSelectedReservation] = useState(null);

    const availableReservations = reservations.filter((reservation) => reservation.status != 'Returned' || 'Reserved');

    useEffect(() => {
        fetchReservations(); // Fetch reservations when component mounts
    }, [fetchReservations]);

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
        navigate("/");
    };
    const handleRowClick = (reservation) => {
        setSelectedReservation(reservation);
    };

    const closeModal = () => {
        setSelectedReservation(null);
    };

    return (
        <div>
            <div>
                <div className="sidebar">
                    <img src={dash3} alt="Dashboard Logo" className="sidebar-logo" />
                    <ul>
                        <li><a onClick={DashboardClick} className="item" href="#">Dashboard</a></li>
                        <li><a onClick={ReservationsClick} id="active" className="item" href="#">Reservations</a></li>
                        <li><a onClick={UserprofileClick} className="item" href="#">User Profile</a></li>
                        <li><a onClick={LogOut} className="item" href="#">Log Out</a></li>
                    </ul>
                </div>
            </div>
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
                            <tr
                                key={reservation.id}
                                onClick={() => handleRowClick(reservation)}
                            >
                                <td>{index + 1}</td>
                                <td>{reservation.reservationDate}</td>
                                <td>{reservation.startTime}</td>
                                <td>{reservation.endTime}</td>
                                <td>{reservation.returnDate}</td>
                                <td>{reservation.status}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent modal from opening when removing
                                            removeReservation(reservation.id);
                                        }}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <ReservationModal selectedReservation={selectedReservation} closeModal={closeModal} />
            </div>
        </div>
    );
};

export default Reservations;
