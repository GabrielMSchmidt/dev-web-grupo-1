import styled from "styled-components";

export const CarouselContainer = styled.div`
  margin-top: 10%;
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
  border-radius: 12px;
  @media (min-width: 768px) {
    height: 768px;
    max-width: 100vw;
  }
  @media (min-width: 1024px) {
    height: 600px;
  }
  @media (min-width: 1400px) {
    height: 800px;
  }
`;

export const CarouselSlide = styled.div`
  display: flex;
  transition: transform 1s ease-in-out;
  width: 100%;
  height: 100%;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
  @media (min-width: 1024px) {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    border-radius: 20px;
  } 
`;
