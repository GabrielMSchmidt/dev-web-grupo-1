import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./Register.css";

export const Cadastro = ( ) =>  {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados de Cadastro:", formData);
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h1>Crie sua conta</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              name="name"
              placeholder="Nome completo"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn-register">
            Cadastrar
          </button>

          <p className="login-text">
            Já tem uma conta? <a href="/login">Entrar</a>
          </p>
        </form>
      </div>
    </div>
  );
}
