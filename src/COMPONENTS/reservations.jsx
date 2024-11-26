import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import   "./STYLES/User.css";
import "./STYLES/reservations.css"
import ReserveEquipment from './ReserveEquipment';
import { IoCart } from "react-icons/io5";



const Reservations = () => {
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
    const ReservationCart = () => {
        navigate ("/cart")
    }

   return (
        <div>
            <div>
                <div class="sidebar">
                    <ul>
                        <h2>La Serve</h2>
                        <li><a onClick={DashboardClick} className="item" href="#">Dashboard</a></li>
                        <li><a onClick={ReservationsClick} id="active" className="item" href="#">Reservations</a></li>
                        <li><a onClick={UserprofileClick} className="item" href="#">User Profile</a></li>
                        <li><a onClick={LogOut} className="item" href="#">Log Out</a></li>
                    </ul>
                </div>
                <div><button className="btn btn-secondary" onClick={ReservationCart}>
                <IoCart />
              </button>
                
                </div>
                <div className="content">
                    <ReserveEquipment />
                </div>
            </div>
        </div>
    )

}; export default Reservations
