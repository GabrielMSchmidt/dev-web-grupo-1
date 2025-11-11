import styled from "styled-components";

export const LoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a, #1e3a8a);
  font-family: "Poppins", sans-serif;
`;

export const LoginBox = styled.div`
  width: 380px;
  padding: 36px 34px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: #fff;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0 0 18px 0;
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 0.3px;
`;

export const LoginForm = styled.form`
  display: block;
`;

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 16px;

  input {
    max-width: 100%;
    padding: 12px 44px 12px 16px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
    color: #fff;
    font-size: 15px;
    outline: none;
    transition: box-shadow 0.18s, background 0.18s;

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    &:focus {
      background: rgba(255, 255, 255, 0.06);
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
      border-color: rgba(255, 255, 255, 0.18);
    }
  }
`;

export const IconRight = styled.div`
  left: 15px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
`;

export const BtnLogin = styled.button`
  width: 70%;
  max-width: 260px;
  margin: 12px auto 0;
  display: block;
  padding: 10px 18px;
  border-radius: 999px;
  border: none;
  font-weight: 600;
  background: linear-gradient(90deg, #06b6d4, #3b82f6);
  color: #fff;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(59, 130, 246, 0.28);
  }
`;

export const SignupText = styled.p`
  margin-top: 14px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
`;

export const LinkRegister = styled.span`
  color: #7dd3fc;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
