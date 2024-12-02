import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>VendiPro</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="#features">Funcionalidades</Link>
        </li>
        <li>
          <Link to="#about">Sobre</Link>
        </li>
        <li>
          <Link to="#contact">Contato</Link>
        </li>
      </ul>
      <div className="navbar-actions">
        {!isAuthenticated ? (
          <button className="login-button" onClick={() => navigate("/login")}>
            Acessar
          </button>
        ) : (
          <button
            className="login-button"
            onClick={() => navigate("/dashboard")}
          >
            Acessar
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
