import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <h2>ADMIN PAGE</h2>
      <Link to="/admin/support_tickets">Support</Link>
    </nav>
  );
}

export default AdminNavbar;
