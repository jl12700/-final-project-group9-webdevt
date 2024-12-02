import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/User.css";
import "../Styles/UserProfile.css"
import dash3 from "../Assets/dash3.png"; // Importing the logo image
import { BiSolidDashboard } from "react-icons/bi";
import { FaBookmark } from "react-icons/fa";
import { BiSolidExit } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import ConfirmationDialog from "../ConfirmationDialog";


const UserProfile = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);


  // Sample user data (replace this with dynamic data if necessary)
  const userData = {
    studentNumber: "12345678",
    name: "John Doe",
    email: "johndoe@dlsl.edu.ph",
    password: "password123"
  };

  const DashboardClick = () => {
    navigate("/dashboard");
  };
  const ReservationsClick = () => {
    navigate("/reservations");
  };
  const UserprofileClick = () => {
    navigate("/user-profile");
  };
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="d-flex">
      <div className="sidebar">
        <img src={dash3} alt="Dashboard Logo" className="sidebar-logo" />
        <ul>
          <li><BiSolidDashboard /> <a onClick={DashboardClick} className="item" href="#">Dashboard</a></li>
          <li> <FaBookmark /> <a onClick={ReservationsClick} className="item" href="#">Reservations</a></li>
          <li id="active"><FaUser /> <a onClick={UserprofileClick} className="item" href="#">User Profile</a></li>
          <li><BiSolidExit /><a onClick={LogOut} className="item" href="#">Log Out</a></li>
        </ul>
      </div>
      {showConfirmDialog && (
        <ConfirmationDialog
          confirmText="want to log out"
          onConfirm={handleConfirmLogout}
          onCancel={handleCancelLogout}
        />
      )}

      <div className="container-fluid p-5" style={{ marginLeft: "250px" }}>
        <h2>User Profile</h2>
        <div className="card mt-4 p-4">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Student Number</label>
                <p>{userData.studentNumber}</p>
              </div>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <p>{userData.name}</p>
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <p>{userData.email}</p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    value={userData.password}
                    readOnly
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
