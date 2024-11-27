import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Serve from './Serve.png';
import "./STYLES/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    studentNumber: "",
    email: "",
    name: "",
    password: "",
    username: "",
  });

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    setFormData({
      studentNumber: "",
      email: "",
      name: "",
      password: "",
      username: "",
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === "User" || role === "Admin") {
      console.log(`${role} Login Data:`, formData);
        if (role === "User"){
          navigate("/setpassword");
        }else if (role === "Admin"){
          navigate("/AdminPage")
        }
    } else {
      alert("Please select a role!");
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={Serve} alt="Logo" className="login-logo" />
      </div>
      <div className="role-selection">
        <label htmlFor="role">Select Role:</label>
        <select id="role" value={role} onChange={handleRoleChange}>
          <option value="">--Choose--</option>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
      </div>

      {role && (
        <form onSubmit={handleSubmit} className="login-form">
          {role === "User" && (
            <>
              <div className="form-group">
                <label htmlFor="studentNumber">Student Number:</label>
                <input
                  type="text"
                  id="studentNumber"
                  name="studentNumber"
                  value={formData.studentNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </>
          )}

          {role === "Admin" && (
            <>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </>
          )}

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;