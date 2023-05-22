import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="Nav-container">
      <Link to="/home">Home</Link>
      <Link to="/about"> About</Link>
      <Link to="/dashboard"> Dashboard</Link>
      <Link to="/reviews">Reviews</Link>
    </nav>
  );
};

export default Header;
