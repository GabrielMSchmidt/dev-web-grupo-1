import React, { useEffect, useState } from "react";
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
  Fundo,
  CheckoutButton,
} from "./style";

export const Carrinho = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [imagens, setImagens] = useState({}); // guarda imagens por ID do produto

  const calcularTotal = () =>
    cartItems.reduce(
      (acc, item) => acc + (item.preco || 0) * (item.quantidade || 1),
      0
    );

  useEffect(() => {
    const carregarImagens = async () => {
      const novasImagens = {};

      for (const item of cartItems) {
        try {
          const response = await fetch(`http://localhost:8080/produtos/${item.id}/foto`);
          if (response.ok) {
            const blob = await response.blob();
            const objectUrl = URL.createObjectURL(blob);
            novasImagens[item.id] = objectUrl;
          }
        } catch (error) {
          console.error(`Erro ao carregar imagem do produto ${item.id}:`, error);
        }
      }

      setImagens(novasImagens);
    };

    if (cartItems.length > 0) {
      carregarImagens();
    }
  }, [cartItems]);

  return (
    <>
      <Navbar />
      <Fundo>
        <ContainerCarrinho>
          <Header>
            <h1>Meu Carrinho</h1>
            {cartItems.length > 0 && (
              <span>
                {cartItems.length} {cartItems.length === 1 ? "item" : "itens"}
              </span>
            )}
          </Header>

          {cartItems.length === 0 ? (
            <EmptyMessage>
              O seu carrinho está vazio.<br />
              <span>
                Deseja olhar outros <a href="/produtos">Produtos</a> similares?
              </span>
            </EmptyMessage>
          ) : (
            <>
              <ListaItens>
                {cartItems.map((item) => (
                  <Item key={item.id}>
                    <ItemImage
                      src={imagens[item.id] || "/fallback-image.png"}
                      alt={item.nome}
                    />
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
                  Finalizar Compra
                </CheckoutButton>
              </TotalBox>
            </>
          )}
        </ContainerCarrinho>
      </Fundo>
    </>
  );
};
