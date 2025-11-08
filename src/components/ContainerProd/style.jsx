import styled from "styled-components";

export const ContainerComponentProd =styled.div`
  display: flex;
  flex-direction: column;
`;

export const Titulo = styled.h1`
  font-size: 40px;
  font-family: "Poppins", sans-serif;
  color: black;
  margin: 0;
  margin-top: 10%;
  max-width: 80%;
  @media (min-width: 768px) {
    max-width: 100%;
  }
  @media (min-width: 1024px) {
    font-size: 70px;
    margin: 0 5%;
    margin-top: 20%;
  }
`;

export const DestaqueSpan = styled.span`
  color: #003cff;
`;

export const SubTitulo = styled.p`
  color: #4a5e7a;
  margin: 5% 2%;
  font-size: 17px;
  max-width: 80%;
  font-family: "Poppins", sans-serif;
  @media (min-width: 768px) {
    max-width: 100%;
  }
  @media (min-width: 1024px) {
    margin: 2% 7%;
    font-size: 20px;
  }
`;

export const ContainerButtons = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;

  &{
      width: 50%;
      gap: 20px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    margin-left: 5%;
    flex-direction: column;
  }
`;