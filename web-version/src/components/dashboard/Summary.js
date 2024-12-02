import React from "react";
import "./Summary.css";

const Summary = () => {
  return (
    <div className="summary-container">
      <div className="summary-item">
        <h3>Total de Vendas:</h3>
        <p className="summary-number">1,200</p>
      </div>
      <div className="summary-item">
        <h3>Lucro Bruto:</h3>
        <p className="summary-number">R$ 15,500</p>
      </div>
      <div className="summary-item">
        <h3>Clientes Ativos:</h3>
        <p className="summary-number">350</p>
      </div>
      <div className="summary-item">
        <h3>Produtos Vendidos:</h3>
        <p className="summary-number">1,850</p>
      </div>
      <div className="summary-item">
        <h3>Estoque Restante:</h3>
        <p className="summary-number">2,300</p>
      </div>
    </div>
  );
};

export default Summary;
