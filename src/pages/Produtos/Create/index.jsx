import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../utils/Api';
import { Navbar } from '../../../components/Navbar';

export const CreateProduto = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    preco: '',
    idCategoria: '',
    quantidadeEstoque: '',
    url: '',
  });

  const [foto, setFoto] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formDataToSend = new FormData();
      
      const produtoBlob = new Blob([JSON.stringify({
        nome: formData.nome,
        descricao: formData.descricao,
        preco: parseFloat(formData.preco),
        idCategoria: parseInt(formData.idCategoria),
        quantidadeEstoque: parseInt(formData.quantidadeEstoque),
        url: formData.url,
      })], { type: 'application/json' });
      
      formDataToSend.append('produto', produtoBlob);
      
      if (foto) {
        formDataToSend.append('foto', foto);
      }

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
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h1>Criar Novo Produto</h1>
        
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="nome">Nome:</label>
            <br />
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="descricao">Descrição:</label>
            <br />
            <textarea
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              required
              rows="4"
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="preco">Preço:</label>
            <br />
            <input
              type="number"
              id="preco"
              name="preco"
              value={formData.preco}
              onChange={handleChange}
              required
              step="0.01"
              min="0"
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="idCategoria">ID da Categoria:</label>
            <br />
            <input
              type="number"
              id="idCategoria"
              name="idCategoria"
              value={formData.idCategoria}
              onChange={handleChange}
              required
              min="1"
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="quantidadeEstoque">Quantidade em Estoque:</label>
            <br />
            <input
              type="number"
              id="quantidadeEstoque"
              name="quantidadeEstoque"
              value={formData.quantidadeEstoque}
              onChange={handleChange}
              required
              min="0"
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="url">URL da Imagem:</label>
            <br />
            <input
              type="text"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="foto">Upload de Foto (opcional):</label>
            <br />
            <input
              type="file"
              id="foto"
              name="foto"
              onChange={handleFileChange}
              accept="image/*"
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginTop: '20px' }}>
            <button
              type="submit"
              disabled={loading}
              style={{ padding: '10px 20px', marginRight: '10px' }}
            >
              {loading ? 'Criando...' : 'Criar Produto'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/produtos')}
              style={{ padding: '10px 20px' }}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
