import styled from "styled-components";

export const Banners = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    
  }
`;

export const FallbackBanner = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f2f2f2;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;
