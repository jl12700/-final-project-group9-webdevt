import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import   "./STYLES/User.css";
import "./STYLES/Dashboard.css"




const Dashboard = () => {
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
                    <ul>
                        <h2>La Serve</h2>
                        <li><a onClick={DashboardClick} id="active" className="item" href="#">Dashboard</a></li>
                        <li><a onClick={ReservationsClick} className="item" href="#">Reservations</a></li>
                        <li><a onClick={UserprofileClick} className="item" href="#">User Profile</a></li>
                        <li><a onClick={LogOut} className="item" href="#">Log Out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}; export default Dashboard
