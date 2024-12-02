import React from "react";

const Features = () => {
  return (
    <section id="features" className="features">
      <div
        className="feature-item"
        onClick={() =>
          document.getElementById("stock-management").scrollIntoView()
        }
      >
        <h2>Gestão de Estoque</h2>
        <p>Acompanhe seus produtos e movimentações em tempo real.</p>
      </div>
      <div
        className="feature-item"
        onClick={() =>
          document.getElementById("invoice-generation").scrollIntoView()
        }
      >
        <h2>Fechamento de Caixa Online</h2>
        <p>
          Finalize as vendas e emita suas notas fiscais com agilidade seguindo
          as normas fiscais.
        </p>
      </div>
      <div
        className="feature-item"
        onClick={() =>
          document.getElementById("automatic-alerts").scrollIntoView()
        }
      >
        <h2>Alertas automáticos</h2>
        <p>
          Você receberá alertas de acordo com a quantidade de produtos no
          estoque.
        </p>
      </div>
    </section>
  );
};

export default Features;
