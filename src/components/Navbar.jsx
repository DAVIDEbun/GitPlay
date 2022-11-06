import React from "react";
import logo from "../icons/Logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar container">
      <div className="logo">
        <Link to="/">
        <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/error-boundaries">Boundary</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
