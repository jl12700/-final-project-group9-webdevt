import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './STYLES/SetPass.css'; 

const SetPass = (role) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSetPassword = (e) => {
    if (newPassword.length < 8) {
      setErrorMessage('***PASSWORD MUST BE AT LEAST 8 CHARACTERS LONG***');
    } else if (newPassword !== confirmPassword) {
      setErrorMessage('***PASSWORDS DO NOT MATCH***');
    } else {
      alert('Password set successfully!');
      setErrorMessage('');
      navigate("/UserPage");
    }
  };

  const handleInputChange = (e) => {
    if (errorMessage) {
      setErrorMessage('');
    }
    const { name, value } = e.target;
    if (name === 'newPassword') {
      setNewPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  return (
    <div className="set-password-container">
      <h2>Set Your Password</h2>
      <p>In order to keep your account safe, you need to create a strong password.</p>

      <form className="set-password-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="newPassword">Enter a new password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="Enter a new password (min 8 characters)"
            value={newPassword}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm your password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <button type="submit" onClick={handleSetPassword} className="set-password-button">
          Next
        </button>
      </form>
    </div>
  );
};

export default SetPass;