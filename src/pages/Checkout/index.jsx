import React, { useState, useMemo } from "react";
import { Navbar } from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import {
  Container,
  CheckoutCard,
  Title,
  TotalBox,
  MethodBox,
  PixBox,
  QRImage,
  CardInputs,
  Button,
  Divider,
} from "./style";

export const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [metodo, setMetodo] = useState("");
  const [qrPix, setQrPix] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const total = useMemo(
    () => cartItems.reduce((acc, item) => acc + (item.preco || 0), 0),
    [cartItems]
  );

  const gerarQrPix = () => {
    const qr = `00020126360014BR.GOV.BCB.PIX0114+55619999999950214CompraEcom5405${total
      .toFixed(2)
      .replace(".", "")}5802BR5920Loja Samuel Ltda6009BRASILIA62070503***6304ABCD`;
    setQrPix(qr);
  };

  const finalizarCompra = () => {
    setIsLoading(true);
    setTimeout(() => {
      clearCart();
      alert("✅ Compra finalizada com sucesso!");
      navigate("/home");
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <Container>
        <CheckoutCard>
          <Title>Finalizar Compra 💳</Title>

          <TotalBox>
            <span>Total:</span>
            <h2>R$ {total.toFixed(2)}</h2>
          </TotalBox>

          <MethodBox>
            <label>Selecione o método de pagamento:</label>
            <select value={metodo} onChange={(e) => setMetodo(e.target.value)}>
              <option value="">Selecione...</option>
              <option value="pix">Pix</option>
              <option value="cartao">Cartão</option>
            </select>
          </MethodBox>

          {metodo === "pix" && (
            <PixBox>
              <Button onClick={gerarQrPix}>Gerar QR Code PIX</Button>
              {qrPix && (
                <>
                  <QRImage
                    src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
                      qrPix
                    )}&size=230x230`}
                    alt="QR Pix"
                  />
                  <small>Escaneie o QR Code com seu app bancário 📱</small>
                  <Divider />
                  <Button onClick={finalizarCompra} disabled={isLoading}>
                    {isLoading ? "Processando..." : "Finalizar Compra"}
                  </Button>
                </>
              )}
            </PixBox>
          )}

          {metodo === "cartao" && (
            <CardInputs>
              <input placeholder="Número do cartão" />
              <div className="flex">
                <input placeholder="MM/AA" />
                <input placeholder="CVV" />
              </div>
              <Divider />
              <Button onClick={finalizarCompra} disabled={isLoading}>
                {isLoading ? "Processando..." : "Pagar Agora"}
              </Button>
            </CardInputs>
          )}
        </CheckoutCard>
      </Container>
    </>
  );
};
