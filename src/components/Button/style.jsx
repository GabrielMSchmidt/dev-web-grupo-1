import styled from "styled-components";

export const Botao = styled.button`
  font-family: "Poppins", sans-serif;
  border: ${(props) => props.border || "none"};
  border-radius: 12px;
  padding: ${(props) => props.padding || "5% 20%"};
  box-shadow: #1a1a1a53 1px 4px 10px;
  cursor: pointer;
  font-size: ${(props) => props.fontSize };
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  background-color: ${(props) => props.background || "#ffffff"};
  color: ${(props) => props.color || "#000000"};

  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => props.backgroundHover };
    color: ${(props) => props.colorHover };
    border: ${(props) => props.borderHover}
  }
`;

