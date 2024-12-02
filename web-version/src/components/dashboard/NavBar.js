import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="brand">VendiPro</div>
      <div className="links-container">
        <a
          href="#"
          className="nav-item"
          onClick={(e) => {
            e.preventDefault();
            navigate("/dashboard");
          }}
        >
          Dashboard
        </a>
        <a
          href="#"
          className="nav-item"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Home
        </a>
        <a
          href="#"
          className="nav-item"
          onClick={(e) => {
            e.preventDefault();
            onLogout();
          }}
        >
          Logout
        </a>
      </div>
    </div>
  );
};

export default Navbar;
