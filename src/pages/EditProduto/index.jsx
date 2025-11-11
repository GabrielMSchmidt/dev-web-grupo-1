import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../utils/Api';
import { Navbar } from '../../components/Navbar';
import { ProdutoForm } from '../../components/ProdutoForm';

export const EditProduto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [produto, setProduto] = useState(null);
  const [loadingProduto, setLoadingProduto] = useState(true);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        setLoadingProduto(true);
        const data = await api.get(`/produtos/${id}`);
        setProduto(data);
      } catch (err) {
        console.error('Erro ao carregar produto:', err);
        setError('Erro ao carregar produto.');
      } finally {
        setLoadingProduto(false);
      }
    };

    fetchProduto();
  }, [id]);

  const handleSubmit = async (produtoData) => {
    setLoading(true);
    setError(null);

    try {
      // PUT envia JSON diretamente
      const response = await api.put(`/produtos/${id}`, produtoData);
      console.log('Produto atualizado:', response);
      navigate('/produtos');
    } catch (err) {
      console.error('Erro ao atualizar produto:', err);
      setError('Erro ao atualizar produto. Verifique os dados e tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (loadingProduto) {
    return (
      <div>
        <Navbar />
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <p>Carregando produto...</p>
        </div>
      </div>
    );
  }

  if (!produto) {
    return (
      <div>
        <Navbar />
        <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
          <p>Produto não encontrado.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h1 style={{ padding: '20px', textAlign: 'center' }}>Editar Produto</h1>
      <ProdutoForm
        initialData={produto}
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
        submitButtonText="Salvar Alterações"
        isEdit={true}
      />
    </div>
  );
};
