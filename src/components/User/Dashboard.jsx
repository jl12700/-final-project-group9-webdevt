import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/User.css";
import dash3 from "../Assets/dash3.png"; // Importing the logo image
import EquipmentList from "./EquipmentList";
import ReserveEquipment from './ReserveEquipment';
import { IoCart } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { FaBookmark } from "react-icons/fa";
import { BiSolidExit } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

const Dashboard = () => {
    const navigate = useNavigate();

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
        navigate("/")
    }
    const ReservationCart = () => {
        navigate ("/cart")
    }

    return (
        <div>
            <div>
                <div className="sidebar">
                    <img src={dash3} alt="Dashboard Logo" className="sidebar-logo" />
                    <ul>
                        <li id="active" > <BiSolidDashboard/> <a onClick={DashboardClick}  className="item" href="#">Dashboard</a></li>
                        <li><FaBookmark/> <a onClick={ReservationsClick} className="item" href="#">Reservations</a></li>
                        <li><FaUser/> <a onClick={UserprofileClick} className="item" href="#">User Profile</a></li>
                        <li><BiSolidExit/> <a onClick={LogOut} className="item" href="#">Log Out</a></li>
                    </ul>
                </div>
            </div>
            <div className="content">
                <EquipmentList />
                <div>
                    <button className="btn btn-secondary" onClick={ReservationCart}>
                        <IoCart />
                    </button>
                </div>
                <ReserveEquipment />
            </div>
        </div>
    )

}; export default Dashboard