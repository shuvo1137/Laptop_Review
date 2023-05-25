import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    // <nav className="Nav-container">
    //   <Link to="/home">Home</Link>
    //   <Link to="/about"> About</Link>
    //   <Link to="/dashboard"> Dashboard</Link>
    //   <Link to="/reviews">Reviews</Link>
    // </nav>
    <nav>
      <div className="logo">Logo</div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <ul className="navigation-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about"> About</Link>
        </li>
        <li>
          <Link to="/dashboard"> Dashboard</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
