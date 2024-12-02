import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Admin.css";
import dash3 from "../Assets/dash3.png";
import EquipmentForm from "./EquipmentForm"
import Equipments from "./Equipments"


const Admin = () => {
  const navigate = useNavigate();

  const HandleReservationsClick = () => {
    navigate("/handle-reservations")
  }
  const ManageEquipmentClick = () => {
    navigate("/manage-equipment")
  }
  const StatisticsClick = () => {
    navigate("/statistics")
  }
  const LogOut = () => {
    navigate("/")
  }



  return (
    <div className="main-container">
      <div className="sidebar">
        {/* Sidebar with image that stays fixed */}
        <img src={dash3} alt="Dashboard Logo" className="sidebar-logo" />
        <ul>
          <li>
            <a onClick={HandleReservationsClick} className="item" href="#">
              Handle Reservations
            </a>
          </li>
          <li>
            <a onClick={ManageEquipmentClick} id="active" className="item" href="#">
              Manage Equipment
            </a>
          </li>
          <li>
            <a onClick={StatisticsClick} className="item" href="#">
              Statistics
            </a>
          </li>
          <li>
            <a onClick={LogOut} className="item" href="#">
              Log Out
            </a>
          </li>
        </ul>
      </div>
      <h2>Manage Equipments</h2>
      <div className="content">
        <h3>Add Equipment</h3>
        <EquipmentForm />
        <h3>Equipment List</h3>
        <Equipments />
      </div>
    </div>
  );
};

export default Admin;