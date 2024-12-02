import React, { useState } from 'react';

const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmLogout = () => {
    // Logic to handle logout
    localStorage.removeItem('login_access_token'); // Example token removal
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={openModal}>Confirm Logout</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Are you sure you want to logout?</h2>
            <button onClick={confirmLogout}>Yes</button>
            <button onClick={closeModal}>No</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;