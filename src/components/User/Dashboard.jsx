import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/User.css";
import dash3 from "../Assets/dash3.png"; // Importing the logo image
import ReserveEquipment from './ReserveEquipment';
import { IoCart } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { FaBookmark } from "react-icons/fa";
import { BiSolidExit } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import ReservationCart from './ReservationCart';
import ConfirmationDialog from "../ConfirmationDialog";


const Dashboard = () => {
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);

    const DashboardClick = () => {
        navigate("/dashboard")
    }
    const ReservationsClick = () => {
        navigate("/reservations")
    }
    const UserprofileClick = () => {
        navigate("/user-profile")
    }
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

    return (
        <div>
            <div>
                <div className="sidebar">
                    <img src={dash3} alt="Dashboard Logo" className="sidebar-logo" />
                    <ul>
                        <li id="active"> <BiSolidDashboard /> <a onClick={DashboardClick} className="item" href="#">Dashboard</a></li>
                        <li><FaBookmark /> <a onClick={ReservationsClick} className="item" href="#">Reservations</a></li>
                        <li><FaUser /> <a onClick={UserprofileClick} className="item" href="#">User Profile</a></li>
                        <li><BiSolidExit /><a onClick={LogOut} className="item" href="#">Log Out</a>
                        </li>
                    </ul>
                </div>
                {showConfirmDialog && (
                    <ConfirmationDialog
                        confirmText="want to log out"
                        onConfirm={handleConfirmLogout}
                        onCancel={handleCancelLogout}
                    />
                )}
            </div>
            <div className="content">
                <div className="top-right-container">
                <h2>Reserve Equipment</h2>
                    <button className="btn btn-secondary cart-button" onClick={() => setModalIsOpen(true)}>
                        <IoCart />
                    </button>
                </div>
                
                <ReserveEquipment />
            </div>
            <ReservationCart
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
            />
        </div>
    )
};

export default Dashboard;
