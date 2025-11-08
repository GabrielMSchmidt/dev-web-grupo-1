// src/components/CardList/style.js
import styled from "styled-components";

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 40px;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    gap: 20px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;
