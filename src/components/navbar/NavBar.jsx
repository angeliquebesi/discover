import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";

export default function NavBar() {
  return (
    <div>
      <ul className="container-nav">
        <Link to="/">
          <img src={Logo} alt="logo" className="nav-logo" />
        </Link>
        <Link to="/genre" className="nav-item">
          Genre
        </Link>
      </ul>
    </div>
  );
}
