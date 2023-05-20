import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about"> About</Link>
      <Link to="/dashboard"> Dashboard</Link>
      <Link to="/reviews">Reviews</Link>
    </nav>
  );
};

export default Header;
