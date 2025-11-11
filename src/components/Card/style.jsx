import styled from "styled-components";

export const ContainerCard = styled.div`
  background-color: #ffffff;
  width: 90vw;
  height: 85vh;
  border: 2px solid #0000004b;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

    @media (min-width: 540px) {
    height: 105vh;
  }
  
  @media (min-width: 768px) {
    height: 110vh;
  }

  @media (min-width: 768px) and (min-height: 1100px) {
    height: 80vh;
  }

  @media (min-width: 1024px) {
    width: 20vw;
    height: 70vh;
  }

  @media (min-width: 1024px) and (min-height: 1300px) {
    height: 50%;
  }

  @media (min-width: 1500px) {
    height: 70vh;
  }
`;

export const ImagemCard = styled.img`
  width: 300px;
  margin: 2% 2%;
  align-self: center;
  object-fit: contain;

  @media (min-width: 768px) {
    width: 450px;
    height: 300px;
  }

  @media (min-width: 1024px) {
    width: 260px;
    height: 200px;
  }
`;

export const TextoCard = styled.h3`
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  margin: 2% 5%;
  height: 48px; 
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 30px;
    height: 65px;
  }
`;

export const ContainerRating = styled.div`
  margin: 2% 5%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 1024px) {
    margin: 8% 5%;
  }
`;

export const PrecoDesconto = styled.p`
  margin: 4% 5%;
  color: #333;
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  text-decoration: line-through;
  font-size: 15px;
  text-align: left;
`;

export const Preco = styled.p`
  margin: 4% 5%;
  color: #0d70e0;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 30px;
  text-align: left;
`;

export const ContainerButton = styled.div`
  margin-bottom: 4%; 
  display: flex;
  width: 100%;
  justify-content: center; 
`;