import React, { useState, useContext } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext, UseID } from "../main.jsx";
import { baseURL } from "../services/baseURL.js";
import { Logo } from "../components/Logo.jsx";

const Login = () => {
  const [cnpj, setCnpj] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const { setId } = useContext(UseID);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!cnpj || !senha) {
      window.alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.get(`${baseURL}/ongs/filtrar-ongs/`);
      const ongs = response.data;

      const ong = ongs.find((ong) => ong.cnpj === cnpj && ong.senha === senha);

      if (ong) {
        login();
        setId(ong.id_ong);
        navigate(`/`);
      } else {
        window.alert("CNPJ ou senha incorretos.");
      }
    } catch (error) {
      console.error("Erro ao fazer login", error);
      window.alert("Erro ao fazer login. Por favor, tente novamente mais tarde.");
    }
  };

  return (
    <div className="backgroundLogin">
      <div className="login-container">
        <div className="welcome-section">
          <div className="imag-logo"></div>
          <div className="imag-logo-container">
            <Logo />
          </div>
          <h1 className="titleWelcome">BEM-VINDO</h1>

          <p>Faça seu login utilizando o CNPJ registrado</p>

        </div>
        <div className="form-section">
          <h1 className="titleWelcome">ENTRAR</h1>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              className="inputLogin"
              type="text"
              name="cep"
              placeholder="CNPJ"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
            <input
              className="inputLogin"
              type="password"
              name="senha"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button className="buttonLogin" type="submit" value="Entrar">Entrar</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
