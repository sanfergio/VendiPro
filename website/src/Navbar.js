import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>VendiPro</h1>
      <ul>
        <li>
          <a href="#features">Funcionalidades</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
