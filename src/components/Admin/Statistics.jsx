import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Bar } from "react-chartjs-2";
import { ReservationListContext } from "../../context/ReservationListContext";
import "../Styles/Admin.css";
import dash3 from "../Assets/dash3.png";

const Statistics = () => {
  const navigate = useNavigate();

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
            <a href="#" className="item" onClick={() => navigate("/handle-reservations")}>
              Handle Reservations
            </a>
          </li>
          <li>
            <a href="#" className="item" onClick={() => navigate("/manage-equipment")}>
              Manage Equipment
            </a>
          </li>
          <li>
            <a href="#" id="active" className="item" onClick={() => navigate("/statistics")}>
              Statistics
            </a>
          </li>
          <li>
            <a href="#" className="item" onClick={() => navigate("/")}>
              Log Out
            </a>
          </li>
        </ul>
      </div>
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