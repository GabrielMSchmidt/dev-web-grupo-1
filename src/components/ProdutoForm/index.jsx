import { useState, useEffect } from 'react';

export const ProdutoForm = ({ 
  initialData = {}, 
  onSubmit, 
  loading = false, 
  submitButtonText = 'Salvar',
  error = null,
  isEdit = false 
}) => {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    preco: '',
    idCategoria: '',
    quantidadeEstoque: '',
    url: '',
  });

  const [foto, setFoto] = useState(null);

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData({
        nome: initialData.nome || '',
        descricao: initialData.descricao || '',
        preco: initialData.preco || '',
        idCategoria: initialData.categoria?.id || '',
        quantidadeEstoque: initialData.quantidadeEstoque || '',
        url: initialData.url || '',
      });
    }
  }, [initialData]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEdit) {
      const produtoData = {
        nome: formData.nome,
        descricao: formData.descricao,
        preco: parseFloat(formData.preco),
        idCategoria: parseInt(formData.idCategoria),
        quantidadeEstoque: parseInt(formData.quantidadeEstoque),
        url: formData.url,
      };
      onSubmit(produtoData);
    } else {
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
      
      onSubmit(formDataToSend);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
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

        {!isEdit && (
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
        )}

        <div style={{ marginTop: '20px' }}>
          <button
            type="submit"
            disabled={loading}
            style={{ padding: '10px 20px', marginRight: '10px' }}
          >
            {loading ? 'Salvando...' : submitButtonText}
          </button>
        </div>
      </form>
    </div>
  );
};
