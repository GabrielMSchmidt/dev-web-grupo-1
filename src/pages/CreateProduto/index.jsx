import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/Api';
import { Navbar } from '../../components/Navbar';
import { ProdutoForm } from '../../components/ProdutoForm';

export const CreateProduto = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (formDataToSend) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post('/produtos', formDataToSend);
      console.log('Produto criado:', response);
      navigate('/produtos');
    } catch (err) {
      console.error('Erro ao criar produto:', err);
      setError('Erro ao criar produto. Verifique os dados e tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <h1 style={{ padding: '20px', textAlign: 'center' }}>Criar Novo Produto</h1>
      <ProdutoForm
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
        submitButtonText="Criar Produto"
      />
    </div>
  );
};
