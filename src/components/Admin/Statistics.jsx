import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Bar } from "react-chartjs-2";
import { ReservationListContext } from "../../context/ReservationListContext";
import "../Styles/Admin.css";
import dash3 from "../Assets/dash3.png";
import { FaBookmark } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { BiSolidExit } from "react-icons/bi";
import ConfirmationDialog from "../ConfirmationDialog";



const Statistics = () => {
  const navigate = useNavigate();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

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
    setShowConfirmDialog(true);
  };

  const handleConfirmLogout = () => {
    setShowConfirmDialog(false);
    navigate("/");
  };

  const handleCancelLogout = () => {
    setShowConfirmDialog(false);
  };
  const { reservations } = useContext(ReservationListContext);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const equipmentCounts = {};

    reservations.forEach((reservation) => {
      reservation.equipment.forEach((equipment) => {
        const name = equipment.equipmentName;
        const quantity = equipment.quantity;
        if (equipmentCounts[name]) {
          equipmentCounts[name] += quantity;
        } else {
          equipmentCounts[name] = quantity;
        }
      });
    });

    const sortedEquipment = Object.entries(equipmentCounts).sort((a, b) => b[1] - a[1]);
    const equipmentNames = sortedEquipment.map((item) => item[0]);
    const counts = sortedEquipment.map((item) => item[1]);

    setChartData({
      labels: equipmentNames,
      datasets: [
        {
          label: "Number of Times Borrowed",
          data: counts,
          backgroundColor: "skyblue",
        },
      ],
    });
  }, [reservations]);

  return (
    <div className="main-container">
      <div className="sidebar">
        <img src={dash3} alt="Dashboard Logo" className="sidebar-logo" />
        <ul>
          <li>
            <FaBookmark />
            <a onClick={HandleReservationsClick} className="item" href="#">
              Handle Reservations
            </a>
          </li>
          <li>
            <MdManageAccounts size={"1.5em"} />
            <a onClick={ManageEquipmentClick} className="item" href="#">
              Manage Equipment
            </a>
          </li>
          <li id="active">
            <IoStatsChartSharp />
            <a onClick={StatisticsClick} className="item" href="#">
              Statistics
            </a>
          </li>
          <li>
            <BiSolidExit />
            <a onClick={LogOut} className="item" href="#">
              Log Out
            </a>
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
      <div className="content">
        <h2>Most and Least Borrowed Items</h2>
        {chartData.labels ? (
          <Bar data={chartData} options={{ indexAxis: 'y' }} />
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default Statistics;