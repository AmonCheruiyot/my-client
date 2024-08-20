import React from 'react';
import AdminNavbar from '../components/Navbar/AdminNavbar';
import AdminRecipeList from '../components/AdminRecipeList';

const AdminPage = () => {
  return (
    <div>
      <AdminNavbar />
      <AdminRecipeList />
    </div>
  );
}

export default AdminPage;
