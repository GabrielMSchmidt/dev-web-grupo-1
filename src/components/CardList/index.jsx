import { useState, useEffect, useMemo } from "react";
import { api } from "../../utils/Api";
import { Card } from "../Card";
import { ContainerCards } from "./style";

export const CardList = ({ filtro = "", faixaPreco = [0, 5000], ordenar = "destaques" }) => {
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

  const produtosFiltrados = useMemo(() => {
    let resultado = [...produtos];

    if (filtro) {
      resultado = resultado.filter(p => p.categoria?.id === parseInt(filtro));
    }

    resultado = resultado.filter(p => {
      const preco = p.preco || 0;
      return preco >= faixaPreco[0] && preco <= faixaPreco[1];
    });

    if (ordenar === "preco_asc") {
      resultado.sort((a, b) => (a.preco || 0) - (b.preco || 0));
    } else if (ordenar === "preco_desc") {
      resultado.sort((a, b) => (b.preco || 0) - (a.preco || 0));
    }

    return resultado;
  }, [produtos, filtro, faixaPreco, ordenar]);

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
      {produtosFiltrados.length === 0 ? (
        <p>Nenhum produto encontrado com os filtros selecionados.</p>
      ) : (
        produtosFiltrados.map((produto) => (
          <Card
            key={produto.id}
            produtoId={produto.id}
            title={produto.nome}
            precoOri={`R$ ${produto.preco?.toFixed(2)}`}
          />
        ))
      )}
    </ContainerCards>
  );
};
