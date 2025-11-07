import { useState, useEffect } from 'react';
import { api } from '../../utils/Api';
import { Navbar } from '../../components/Navbar';

export const Produtos = () => {
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
        if (err.response) {
          setError(`Erro ${err.response.status}: ${err.response.data.message || 'Erro ao carregar produtos'}`);
        } else {
          setError('Erro ao carregar produtos. Verifique se a API está rodando.');
        }
        console.error('Detalhes do erro:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  if (loading) {
    return (
      <div>
        <Navbar />
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <p>Carregando produtos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Navbar />
        <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Produtos</h1>
        {produtos.length === 0 ? (
          <p>Nenhum produto encontrado.</p>
        ) : (
          <ul>
            {produtos.map((produto) => (
              <li key={produto.id} style={{ marginBottom: '15px' }}>
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <p>Preço: R$ {produto.preco ? produto.preco.toFixed(2) : '0.00'}</p>
                {produto.categoria && <p>Categoria: {produto.categoria.nome}</p>}
                <p>Estoque: {produto.quantidadeEstoque || 0}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
