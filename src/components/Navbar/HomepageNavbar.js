import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginPopup from '../LoginPopup';  // Adjust path as necessary
import RegisterPopup from '../RegisterPopup';  // Import RegisterPopup

const HomepageNavbar = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false); // State for login popup visibility
  const [showRegisterPopup, setShowRegisterPopup] = useState(false); // State for register popup visibility

  const handleOpenLogin = () => {
    setShowLoginPopup(true);
  };

  const handleCloseLogin = () => {
    setShowLoginPopup(false);
  };

  const handleOpenRegister = () => {
    setShowRegisterPopup(true);
  };

  const handleCloseRegister = () => {
    setShowRegisterPopup(false);
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <span onClick={handleOpenLogin} style={{ cursor: 'pointer' }}>Login</span>
      <span onClick={handleOpenRegister} style={{ cursor: 'pointer' }}>Register</span>{/* Button to open RegisterPopup */}
      {showLoginPopup && <LoginPopup onClose={handleCloseLogin} />}
      {showRegisterPopup && <RegisterPopup onClose={handleCloseRegister} />} {/* Render RegisterPopup if state is true */}
    </nav>
  );
}

export default HomepageNavbar;