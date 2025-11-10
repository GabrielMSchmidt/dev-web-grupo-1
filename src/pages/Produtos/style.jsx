import styled from "styled-components";

export const ProdutosContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const Titulo = styled.h1`
  color: #fff;
  margin-bottom: 1.5rem;
`;

export const ListaProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

export const ProdutoCard = styled.div`
  background: #1f2937;
  color: white;
  border-radius: 12px;
  width: 280px;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImagemProduto = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ButtonAdd = styled.button`
  background: #10b981;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #059669;
  }
`;

export const Loading = styled.p`
  color: white;
`;

export const EmptyMessage = styled.p`
  color: gray;
`;

export const SuccessMessage = styled.div`
  background: #16a34a;
  color: white;
  padding: 10px;
  margin-bottom: 1rem;
  border-radius: 8px;
`;
