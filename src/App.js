import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './COMPONENTS/Login';
import SetPass from './COMPONENTS/SetPass';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/setpassword" element={<SetPass />} /> 
      </Routes>
    </Router>
  );
}

export default App;
