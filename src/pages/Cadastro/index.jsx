import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  RegisterPage,
  RegisterBox,
  Title,
  Form,
  InputGroup,
  BtnRegister,
  LoginText,
  LinkLogin,
} from "./style.jsx";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import image from "../../Assets/Icon.png";

export const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Novo usuário:", { nome, email, senha });

    navigate("/login");
  };

  return (
    <RegisterPage>
      <RegisterBox>
        <img src={image} alt="Logo" />
        <Title>Criar Conta</Title>

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Senha"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </InputGroup>

          <BtnRegister type="submit">Cadastrar</BtnRegister>

          <LoginText>
            Já tem uma conta?{" "}
            <Link to="/login">
              <LinkLogin>Entrar</LinkLogin>
            </Link>
          </LoginText>
        </Form>
      </RegisterBox>
    </RegisterPage>
  );
};