import React from "react";
import Footer from "/src/components/dashboard/Footer";
import NavBar from "/src/components/dashboard/NavBar";

const Relatorio = () => {
  const vendasPorCategoria = [
    { categoria: "Eletrônicos", quantidade: 450 },
    { categoria: "Roupas", quantidade: 300 },
    { categoria: "Alimentos", quantidade: 250 },
    { categoria: "Outros", quantidade: 200 },
  ];

  const produtosMaisVendidos = [
    { nome: "Smartphone X", quantidade: 120, receita: 48000 },
    { nome: "Camisa Polo", quantidade: 85, receita: 8500 },
    { nome: "Fone Bluetooth", quantidade: 60, receita: 9000 },
    { nome: "Notebook Pro", quantidade: 40, receita: 80000 },
  ];

  const resumoFinanceiro = {
    vendasTotais: 1850,
    lucroBruto: 15500,
    despesas: 5000,
    lucroLiquido: 10500,
  };

  const chartUrl = `https://quickchart.io/chart?c=${encodeURIComponent(
    JSON.stringify({
      type: "bar",
      data: {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
        datasets: [
          {
            label: "Vendas em R$",
            data: [5000, 7000, 8000, 6000, 7500],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
          {
            label: "Lucro em R$",
            data: [2000, 3000, 4000, 2500, 3500],
            backgroundColor: "rgba(153, 102, 255, 0.6)",
          },
        ],
      },
    })
  )}&width=300&height=200`;

  return (
    <div className="relatorio-container">
      <NavBar />
      <h2>Relatório de Desempenho</h2>

      {/* Resumo Financeiro */}
      <div className="relatorio-resumo">
        <h3>Resumo Financeiro</h3>
        <div className="resumo-item">
          <strong>Vendas Totais:</strong> R$ {resumoFinanceiro.vendasTotais}
        </div>
        <div className="resumo-item">
          <strong>Lucro Bruto:</strong> R$ {resumoFinanceiro.lucroBruto}
        </div>
        <div className="resumo-item">
          <strong>Despesas:</strong> R$ {resumoFinanceiro.despesas}
        </div>
        <div className="resumo-item">
          <strong>Lucro Líquido:</strong> R$ {resumoFinanceiro.lucroLiquido}
        </div>
      </div>

      {/* Vendas por Categoria */}
      <div className="relatorio-categorias">
        <h3>Vendas por Categoria</h3>
        <ul>
          {vendasPorCategoria.map((item, index) => (
            <li key={index}>
              {item.categoria}: {item.quantidade} vendas
            </li>
          ))}
        </ul>
      </div>

      {/* Produtos Mais Vendidos */}
      <div className="relatorio-produtos">
        <h3>Produtos Mais Vendidos</h3>
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Receita (R$)</th>
            </tr>
          </thead>
          <tbody>
            {produtosMaisVendidos.map((produto, index) => (
              <tr key={index}>
                <td>{produto.nome}</td>
                <td>{produto.quantidade}</td>
                <td>{produto.receita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Gráficos */}
      <div className="relatorio-graficos">
        <h3>Indicadores Visuais</h3>
        <img src={chartUrl} alt="Gráfico de vendas" />
      </div>
      <Footer />
    </div>
  );
};

export default Relatorio;
