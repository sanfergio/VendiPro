import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Summary from "./Summary";

import { useNavigate } from "react-router-dom";

import "./Dashboard.css";

const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <NavBar onLogout={onLogout} />

      <div className="dashboard-content">
        {/* Mensagem de boas-vindas */}
        <div className="greeting-message">
          <h1>Bem-vindo (Cliente)!</h1>
        </div>

        {/* Componente de Resumo de Relatório */}
        <Summary />

        {/* Botões de navegação */}
        <div className="button-column">
          <button
            className="dashboard-button"
            onClick={() => navigate("/Venda")}
          >
            Iniciar Venda
          </button>
          <button
            className="dashboard-button"
            onClick={() => navigate("/Estoque")}
          >
            Gerenciar Estoque
          </button>
          <button
            className="dashboard-button"
            onClick={() => navigate("/Relatorio")}
          >
            Relatório completo
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
