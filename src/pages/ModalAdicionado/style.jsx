import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  background: #1f1f1f;
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  min-width: 300px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
`;

export const ModalButton = styled.button`
  margin-top: 1rem;
  background: #00b894;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #019875;
  }
`;
