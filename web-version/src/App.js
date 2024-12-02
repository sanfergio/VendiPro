// src/App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PublicPage from "./components/public/PublicPage";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Venda from "./components/venda/Venda";
import Estoque from "./components/estoque/Estoque";
import Relatorio from "./components/relatorio/Relatorio";

import "./styles.css";
import "./responsivo.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [produtos, setProdutos] = useState([]);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const onFecharVenda = (carrinho) => {
    console.log("Venda finalizada com os seguintes produtos:", carrinho);
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Página pública */}
          <Route
            path="/"
            element={<PublicPage isAuthenticated={isAuthenticated} />}
          />

          {/* Página de login */}
          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <Login onLogin={handleLogin} />
              ) : (
                <Navigate to="/dashboard" replace />
              )
            }
          />

          {/* Página privada (Dashboard) */}
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <Dashboard onLogout={handleLogout} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          {/* Página de vendas */}
          <Route
            path="/venda"
            element={
              isAuthenticated ? (
                <Venda produtos={produtos} onFecharVenda={onFecharVenda} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/estoque"
            element={
              isAuthenticated ? (
                <Estoque produtos={produtos} setProdutos={setProdutos} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/relatorio"
            element={
              isAuthenticated ? <Relatorio /> : <Navigate to="/login" replace />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
