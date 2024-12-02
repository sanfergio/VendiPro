import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "GGG@admin.com" && password === "1234") {
      onLogin();
      setErrorMessage("");
      navigate("/dashboard");
    } else {
      setErrorMessage("Email ou senha incorretos.");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Faça Login para acessar à página.</h2>
      <input
        className="login-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="login-input"
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      <button className="return-button" onClick={handleBack}>
        Voltar
      </button>
    </div>
  );
};

export default Login;
