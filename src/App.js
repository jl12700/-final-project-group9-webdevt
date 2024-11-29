import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./COMPONENTS/Login";
import SetPass from "./COMPONENTS/SetPass";
import User from "./COMPONENTS/User";
import Dashboard from "./COMPONENTS/Dashboard";
import Reservations from "./COMPONENTS/reservations";
import UserProfile from "./COMPONENTS/UserProfile";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/setpassword" element={<SetPass />} />
        <Route path="/UserPage" element={<User />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
