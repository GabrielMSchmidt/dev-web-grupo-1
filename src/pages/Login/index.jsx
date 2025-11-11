import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  LoginPage,
  LoginBox,
  Title,
  LoginForm,
  InputGroup,
  IconRight,
  BtnLogin,
  SignupText,
  LinkRegister,
} from "./style.jsx";
import image from "../../Assets/Icon.png";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados de Login:", { username, password });
  };

  return (
    <LoginPage>
      <LoginBox>
        <img src={image} />
        <Title>Serra Tech</Title>

        <LoginForm onSubmit={handleSubmit}>
          <InputGroup>
            <input
              type="email"
              placeholder="E-mail"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <IconRight>
              <FaUser />
            </IconRight>
          </InputGroup>

          <InputGroup>
            <input
              type="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <IconRight>
              <FaLock />
            </IconRight>
          </InputGroup>

          <BtnLogin type="submit">Entrar</BtnLogin>

          <SignupText>
            Não tem uma conta?{" "}
            <Link to="/cadastro">
              <LinkRegister>Cadastre-se</LinkRegister>
            </Link>
          </SignupText>
        </LoginForm>
      </LoginBox>
    </LoginPage>
  );
};
