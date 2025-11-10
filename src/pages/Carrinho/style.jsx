import styled from "styled-components";

export const Fundo = styled.div`
  min-height: 100vh;
  background-color: #F2F3F4;
`;

export const ContainerCarrinho = styled.div`
  min-height: 80vh;
  background-color: #FFFFFF;
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 16px;
  border: 1px solid #E1E7EF;
  font-family: "Poppins", sans-serif;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h1 {
    font-size: 1.9rem;
    color: #1f2937;
  }

  span {
    background: #007bff;
    color: white;
    padding: 6px 14px;
    border-radius: 20px;
    font-weight: 600;
  }
`;

export const ListaItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 16px;
  border-radius: 14px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  }
`;

export const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  object-fit: cover;
`;

export const Info = styled.div`
  flex: 1;
  margin-left: 16px;

  h3 {
    margin: 0;
    color: #111827;
  }

  p {
    margin: 6px 0;
    color: #6b7280;
    font-size: 0.95rem;
  }

  span {
    color: #10b981;
    font-weight: 700;
  }
`;

export const ButtonRemove = styled.button`
  background: #f87171;
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
  &:hover {
    background: #ef4444;
    transform: scale(1.05);
  }
`;

export const TotalBox = styled.div`
  margin-top: 24px;
  background: white;
  border-radius: 14px;
  padding: 22px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
    color: #6b7280;
  }

  h2 {
    margin: 0;
    color: #111827;
  }
`;

export const CheckoutButton = styled.button`
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  color: white;
  border: none;
  padding: 12px 22px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s;
  font-size: 1rem;

  &:hover {
    background: linear-gradient(135deg, #1d4ed8, #2563eb);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.3);
  }
`;

export const EmptyMessage = styled.div`
  text-align: center;
  color: #42464D;
  font-weight: 700;
  font-size: 1.5rem;
  margin-top: 60px;
  line-height: 1.6;

  span {
  font-size: 1rem;
    font-weight: 400;
  }

  a{
    color: blue;
    text-decoration: none;
  }

  a:hover{
    cursor: pointer;
  }
`;
