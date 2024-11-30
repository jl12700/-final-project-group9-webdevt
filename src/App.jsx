import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './COMPONENTS/Login';
import SetPass from './COMPONENTS/SetPass';
import User from './COMPONENTS/User';
import Dashboard from './COMPONENTS/Dashboard';
import Reservations from './COMPONENTS/reservations';
import UserProfile from './COMPONENTS/UserProfile';
import ReservationCart from './COMPONENTS/ReservationCart';
import Admin from './COMPONENTS/Admin';
import HandleReservations from './COMPONENTS/HandleReservations';
import ManageEquipment from './COMPONENTS/ManageEquipment';
import Statistics from './COMPONENTS/Statistics';

import { EquipmentProvider } from './CONTEXT/EquipmentContext';
import { ReservationProvider } from './CONTEXT/ReservationContext';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <EquipmentProvider>
        <ReservationProvider>
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
        </ReservationProvider>
      </EquipmentProvider>
    </Router>
  );
}

export default App;
