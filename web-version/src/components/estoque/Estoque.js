import React, { useState } from "react";
import Footer from "/src/components/dashboard/Footer";
import NavBar from "/src/components/dashboard/NavBar";

const Estoque = ({ produtos, setProdutos }) => {
  const [novoProduto, setNovoProduto] = useState({
    codigo: "",
    nome: "",
    preco: 0,
  });

  // Função para adicionar um novo produto
  const adicionarProduto = () => {
    const produto = { ...novoProduto }; // Cria um novo objeto produto
    setProdutos((prevProdutos) => [...prevProdutos, produto]); // Passa a lista para o App.js
    setNovoProduto({ codigo: "", nome: "", preco: 0 }); // Limpa o formulário
  };

  return (
    <div className="estoque-container">
      <NavBar />
      <h2>Estoque de Produtos</h2>

      {/* Exibindo a lista de produtos */}
      <ul>
        {produtos.length > 0 ? (
          produtos.map((produto, index) => (
            <li key={index}>
              {produto.codigo} - {produto.nome} - R$ {produto.preco.toFixed(2)}
            </li>
          ))
        ) : (
          <li>Nenhum produto cadastrado</li>
        )}
      </ul>

      {/* Formulário para adicionar novo produto */}
      <div>
        <input
          type="text"
          placeholder="Código"
          value={novoProduto.codigo}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, codigo: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Nome"
          value={novoProduto.nome}
          onChange={(e) =>
            setNovoProduto({ ...novoProduto, nome: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Preço"
          value={novoProduto.preco}
          onChange={(e) =>
            setNovoProduto({
              ...novoProduto,
              preco: parseFloat(e.target.value),
            })
          }
        />
        <button onClick={adicionarProduto}>Adicionar Produto</button>
      </div>
      <Footer />
    </div>
  );
};

export default Estoque;
