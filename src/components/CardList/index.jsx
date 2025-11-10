import { useState, useEffect } from "react";
import { api } from "../../utils/Api";
import { Card } from "../Card";
import { ContainerCards } from "./style";

export const CardList = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        setLoading(true);
        const data = await api.get('/produtos');
        setProdutos(data);
        setError(null);
      } catch (err) {
        console.error('Erro ao carregar produtos:', err);
        setError('Erro ao carregar produtos.');
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  if (loading) {
    return (
      <ContainerCards>
        <p>Carregando produtos...</p>
      </ContainerCards>
    );
  }

  if (error) {
    return (
      <ContainerCards>
        <p style={{ color: 'red' }}>{error}</p>
      </ContainerCards>
    );
  }

  return (
    <ContainerCards>
      {produtos.map((produto) => (
        <Card
          key={produto.id}
          produtoId={produto.id}
          title={produto.nome}
          precoOri={`R$ ${produto.preco?.toFixed(2)}`}
        />
      ))}
    </ContainerCards>
  );
};
