import styled from "styled-components";

export const ContainerCard = styled.div`
  background-color: #ffffff;
  width: 95vw;
  height: 75vh;
  border: 2px solid #0000004b;
  border-radius: 15px;
  @media (min-width: 768px) {
    height: 85vh;
  }
`;

export const ImagemCard = styled.img`
  width: 95%;
  margin: 2% 2%;
  @media (min-width: 768px) {
    width: 70%;
    margin-left: 18%;
  }
`;

export const TextoCard = styled.h3`
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  margin-left: 5%;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const ContainerRating = styled.div`
  margin: 2% 5%;
`;

export const PrecoDesconto = styled.p`
  margin: 4% 5%;
  color: #333;
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  text-decoration: line-through;
  font-size: 15px;
`;

export const Preco = styled.p`
  margin: 4% 5%;
  color: #0D70E0;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 30px;
`;