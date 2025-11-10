import { useState, useEffect } from 'react';
import { api } from '../../utils/Api';
import { Navbar } from '../../components/Navbar';
import ImagemPadrao from '../../Assets/ProdutoTeste.jpg';

export const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imagensCarregadas, setImagensCarregadas] = useState({});

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        setLoading(true);
        const data = await api.get('/produtos');
        setProdutos(data);
        setError(null);
        
        const imagePromises = data.map(async (produto) => {
          try {
            const response = await fetch(`http://localhost:8080/produtos/${produto.id}/foto`);
            if (response.ok) {
              const blob = await response.blob();
              return { id: produto.id, url: URL.createObjectURL(blob) };
            }
          } catch (err) {
            console.error(`Erro ao carregar imagem do produto ${produto.id}:`, err);
          }
          return { id: produto.id, url: null };
        });

        const imagens = await Promise.all(imagePromises);
        const imagensMap = {};
        imagens.forEach(img => {
          imagensMap[img.id] = img.url;
        });
        setImagensCarregadas(imagensMap);
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

    return () => {
      Object.values(imagensCarregadas).forEach(url => {
        if (url && url.startsWith('blob:')) {
          URL.revokeObjectURL(url);
        }
      });
    };
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
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {produtos.map((produto) => (
              <li key={produto.id} style={{ marginBottom: '30px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
                {imagensCarregadas[produto.id] && (
                  <img 
                    src={imagensCarregadas[produto.id] || ImagemPadrao} 
                    alt={produto.nome}
                    style={{ 
                      width: '200px', 
                      height: '200px', 
                      objectFit: 'cover', 
                      borderRadius: '8px',
                      marginBottom: '10px'
                    }}
                  />
                )}
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <p><strong>Preço:</strong> R$ {produto.preco ? produto.preco.toFixed(2) : '0.00'}</p>
                {produto.categoria && <p><strong>Categoria:</strong> {produto.categoria.nome}</p>}
                <p><strong>Estoque:</strong> {produto.quantidadeEstoque || 0}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
