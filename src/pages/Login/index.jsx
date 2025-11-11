import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados de Login:", { username, password });
    // aqui você pode adicionar chamada à API
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="title">Serra Tech</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="E-mail"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon-right" />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon-right" />
          </div>

          <button type="submit" className="btn-login">
            Entrar
          </button>

          <p className="signup-text">
            Não tem uma conta?{" "}
            <Link to="/register" className="link-register">
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
