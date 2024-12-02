import React, { useState, useContext } from "react";
import { EquipmentContext } from "../../context/EquipmentContext";
import EquipmentModal from "./EquipmentModal";
import { BiSolidDashboard } from "react-icons/bi";
import { FaBookmark } from "react-icons/fa";
import { BiSolidExit } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

const ReserveEquipment = () => {
  const { equipmentList } = useContext(EquipmentContext);
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  return (
    <div>
      <div><h2>Reserve Equipment</h2>
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Equipment ID</th>
              <th>Equipment Name</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {equipmentList.map((equipment, index) => (
              <tr
                key={index}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f0f8ff")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "")}
              >
                <td>{equipment.equipmentID}</td>
                <td>{equipment.equipmentName}</td>
                <td>{equipment.quantity}</td>
                <td>{equipment.status}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    disabled={equipment.status !== "Available"}
                    onClick={() => setSelectedEquipment(equipment)}
                    style={{
                      backgroundColor: equipment.status === "Available" ? "" : "grey",
                      border: "none",
                    }}
                  >
                    Reserve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedEquipment && (
          <EquipmentModal
            equipment={selectedEquipment}
            onClose={() => setSelectedEquipment(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ReserveEquipment;
