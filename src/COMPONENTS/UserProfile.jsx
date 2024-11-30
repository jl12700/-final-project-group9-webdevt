import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import   "./STYLES/User.css";
import "./STYLES/UserProfile.css"
import dash3 from "./dash3.png"; // Importing the logo image


const UserProfile = () => {
    const navigate = useNavigate ();

    const DashboardClick = () => {
        navigate ("/dashboard")
    }
    const ReservationsClick = () => {
        navigate ("/reservations")
    }
    const UserprofileClick = () => {
        navigate ("/user-profile")
    }
    const LogOut = () => {
        navigate ("/")
    }

   return (
        <div>
            <div>
                <div class="sidebar">
                <img src={dash3} alt="Dashboard Logo" className="sidebar-logo" />
                    <ul>
                        <li><a onClick={DashboardClick} className="item" href="#">Dashboard</a></li>
                        <li><a onClick={ReservationsClick} className="item" href="#">Reservations</a></li>
                        <li><a onClick={UserprofileClick} id="active" className="item" href="#">User Profile</a></li>
                        <li><a onClick={LogOut} className="item" href="#">Log Out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}; export default UserProfile