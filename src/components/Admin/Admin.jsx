import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Admin.css";
import dash3 from "../Assets/dash3.png"; 
import { FaBookmark } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { BiSolidExit } from "react-icons/bi";



const Admin= () => {
    const navigate = useNavigate ();

    const HandleReservationsClick = () => {
        navigate ("/handle-reservations")
    }
    const ManageEquipmentClick = () => {
        navigate ("/manage-equipment")
    }
    const StatisticsClick = () => {
        navigate ("/statistics")
    }
    const LogOut = () => {
        navigate ("/")
    }



  return (
    <div className="main-container">
      <div className="sidebar">
        {/* Sidebar with image that stays fixed */}
        <img src={dash3} alt="Dashboard Logo" className="sidebar-logo" />
        <ul>
          <li>
            <FaBookmark/>
            <a onClick={HandleReservationsClick} className="item" href="#">
              Handle Reservations
            </a>
          </li>
          <li>
            <MdManageAccounts/>
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
        {/* This will contain the dynamic content */}
        {/* You can use React Router here to render specific components */}
      </div>
    </div>
  );
};

export default Admin;