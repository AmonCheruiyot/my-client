import React from 'react';
import { Link } from 'react-router-dom';

const RecipesNavbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/wishlist">Wishlist</Link>
    </nav>
  );
}

export default RecipesNavbar;
