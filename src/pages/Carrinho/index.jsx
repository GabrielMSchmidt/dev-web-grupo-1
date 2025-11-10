import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { useCart } from "../../context/CartContext";
import {
  ContainerCarrinho,
  Header,
  ListaItens,
  Item,
  ItemImage,
  Info,
  ButtonRemove,
  TotalBox,
  EmptyMessage,
  CheckoutButton,
} from "./style";

export const Carrinho = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const calcularTotal = () =>
    cartItems.reduce((acc, item) => acc + (item.preco || 0) * (item.quantidade || 1), 0);

  return (
    <>
      <Navbar />
      <ContainerCarrinho>
        <Header>
          <h1>🛍️ Meu Carrinho</h1>
          {cartItems.length > 0 && (
            <span>{cartItems.length} {cartItems.length === 1 ? "item" : "itens"}</span>
          )}
        </Header>

        {cartItems.length === 0 ? (
          <EmptyMessage>
            🫤 Seu carrinho está vazio!  
            <br />Adicione alguns produtos e volte aqui.
          </EmptyMessage>
        ) : (
          <>
            <ListaItens>
              {cartItems.map((item) => (
                <Item key={item.id}>
                  <ItemImage src={item.imagem} alt={item.nome} />
                  <Info>
                    <h3>{item.nome}</h3>
                    <p>{item.descricao}</p>
                    <span>R$ {item.preco.toFixed(2)}</span>
                  </Info>
                  <ButtonRemove onClick={() => removeFromCart(item.id)}>
                    Remover
                  </ButtonRemove>
                </Item>
              ))}
            </ListaItens>

            <TotalBox>
              <div>
                <p>Total</p>
                <h2>R$ {calcularTotal().toFixed(2)}</h2>
              </div>
              <CheckoutButton onClick={() => navigate("/checkout")}>
                Finalizar Compra 💳
              </CheckoutButton>
            </TotalBox>
          </>
        )}
      </ContainerCarrinho>
    </>
  );
};
