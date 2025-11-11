import React from "react";
import { ModalBox } from "./style";

export const ModalAdicionado = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <ModalContainer onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <h2>✅ Produto adicionado ao carrinho!</h2>
      </ModalBox>
    </ModalContainer>
  );
};
