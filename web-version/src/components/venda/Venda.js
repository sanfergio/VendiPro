import React, { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import axios from "axios";

import Footer from "/src/components/dashboard/Footer";
import NavBar from "/src/components/dashboard/NavBar";

const Venda = ({ produtos, onFecharVenda }) => {
  const [codigo, setCodigo] = useState("");
  const [carrinho, setCarrinho] = useState([]);
  const [total, setTotal] = useState(0);
  const [isScanning, setIsScanning] = useState(false); // Para controlar o scanner

  // Função para adicionar o produto ao carrinho
  const adicionarProduto = () => {
    const produto = produtos.find((p) => p.codigo === codigo);
    if (produto) {
      setCarrinho((prev) => [
        ...prev,
        { ...produto, quantidade: 1, subtotal: produto.preco },
      ]);
      setTotal((prev) => prev + produto.preco);
    } else {
      alert("Produto não encontrado");
    }
    setCodigo(""); // Limpar o campo após adicionar
  };

  // Função para gerar a nota fiscal
  const gerarNotaFiscal = async () => {
    try {
      const data = {
        // Dados da venda, você precisa adaptar de acordo com a sua API de NF-e
        cliente: {
          nome: "Cliente Exemplo",
          cpf_cnpj: "12345678901234", // CNPJ ou CPF do cliente
          endereco: "Rua Exemplo, 123",
        },
        itens: carrinho.map((item) => ({
          descricao: item.nome,
          quantidade: item.quantidade,
          valor_unitario: item.preco,
          total: item.subtotal,
        })),
        total,
        chave_acesso: "SUA_CHAVE_DE_ACESSO", // Chave de acesso à API de NF-e
        // Mais campos conforme a API utilizada
      };

      // Chamada à API de NF-e para emissão
      const response = await axios.post("https://api.nfe.io/emissao", data, {
        headers: {
          Authorization: `Bearer SUA_CHAVE_DE_API`, // Chave da API (token)
        },
      });

      if (response.data.status === "sucesso") {
        alert("Nota Fiscal gerada com sucesso!");
        console.log("Link para a nota fiscal:", response.data.link);
      } else {
        alert("Erro ao gerar a nota fiscal");
        console.log(response.data);
      }
    } catch (error) {
      console.error("Erro ao chamar a API de NF-e:", error);
      alert("Ocorreu um erro ao tentar gerar a nota fiscal.");
    }
  };

  // Função para finalizar a venda
  const finalizarVenda = () => {
    console.log("Carrinho:", carrinho);
    onFecharVenda(carrinho);
    gerarNotaFiscal(); // Chama a função para gerar a nota fiscal
  };

  return (
    <div className="venda-container">
      <NavBar />
      <div className="venda-pai">
        <h2>Sistema de Venda</h2>

        {/* Exibição do scanner de código de barras */}
        {isScanning && (
          <div className="scanner-container">
            <div className="camera">
              <BarcodeScannerComponent
                width={500}
                height={300}
                onUpdate={(err, result) => {
                  if (result) {
                    setCodigo(result.text); // Captura o código
                    setIsScanning(false); // Desativa o scanner após capturar
                  }
                }}
              />
            </div>
            <br />
            <div className="venda-botaos2">
              <button onClick={() => setIsScanning(false)} className="cancelar">
                Cancelar Scanner
              </button>
            </div>
          </div>
        )}

        {/* Se não estiver escaneando, exibe o campo de entrada do código */}
        {!isScanning && (
          <div className="venda-input-container">
            <div className="venda-input">
              <input
                type="text"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                placeholder="Digite o código ou escaneie"
              />
            </div>
            <br />
            <div className="venda-botaos">
              <button onClick={adicionarProduto}>Adicionar Produto</button>

              <button
                onClick={() => setIsScanning(true)}
                className="scanner-button"
              >
                Usar Scanner
              </button>
            </div>
          </div>
        )}

        {/* Carrinho de Compras */}
        <div className="carrinho">
          <h3>Carrinho de Compras:</h3>
          <ul id="ul">
            {carrinho.map((item, index) => (
              <li class="li" key={index}>
                {item.nome} - {item.quantidade} x R$ {item.preco} = R${" "}
                {item.subtotal}
              </li>
            ))}
          </ul>

          <h3>
            Total: <span id="total"> R$ {total.toFixed(2)}</span>
          </h3>
        </div>

        {/* Botões */}
        <div className="venda-buttons">
          <button id="finish" onClick={finalizarVenda}>
            Finalizar Venda
          </button>
          <button id="cancel" onClick={() => setCarrinho([])}>
            Cancelar
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Venda;
