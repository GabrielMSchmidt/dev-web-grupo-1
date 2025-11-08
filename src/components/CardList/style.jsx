import styled from "styled-components";

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  box-sizing: border-box;

  @media (min-width: 480px) {
    gap: 25px;
  }

  @media (min-width: 768px) {
    gap: 30px;
    padding: 40px;
  }
`;
