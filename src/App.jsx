import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SetPass from './components/SetPass';
import User from './components/User/User';
import Dashboard from './components/User/Dashboard';
import Reservations from './components/User/Reservations';
import UserProfile from './components/User/UserProfile';
import ReservationCart from './components/User/ReservationCart';
import Admin from './components/Admin/Admin';
import HandleReservations from './components/Admin/HandleReservations';
import ManageEquipment from './components/Admin/ManageEquipment';
import Statistics from './components/Admin/Statistics';

import { EquipmentProvider } from './context/EquipmentContext';
import { ReservationProvider } from './context/ReservationContext';
import { ReservationListProvider } from './context/ReservationListContext';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <EquipmentProvider>
        <ReservationProvider>
          <ReservationListProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/setpassword" element={<SetPass />} />
              <Route path="/UserPage" element={<User />} />

              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/user-profile" element={<UserProfile />} />
              <Route path="/cart" element={<ReservationCart />} />

              <Route path="/AdminPage" element={<Admin />} />
              <Route path="/handle-reservations" element={<HandleReservations />} />
              <Route path="/manage-equipment" element={<ManageEquipment />} />
              <Route path="/statistics" element={<Statistics />} />
            </Routes>
          </ReservationListProvider>
        </ReservationProvider>
      </EquipmentProvider>
    </Router>
  );
}

export default App;