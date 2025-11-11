import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate(); 

  return (
    <LoginPage>
      <LoginBox>
        <img src={image} alt="Logo" />
        <Title>Serra Tech</Title>

        <LoginForm>
          <InputGroup>
            <input type="email" placeholder="E-mail" />
            <IconRight>
              <FaUser />
            </IconRight>
          </InputGroup>

          <InputGroup>
            <input type="password" placeholder="Senha" />
            <IconRight>
              <FaLock />
            </IconRight>
          </InputGroup>

          <BtnLogin type="button" onClick={() => navigate("/home")}>
            Entrar
          </BtnLogin>

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
