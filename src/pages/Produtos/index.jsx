<<<<<<< HEAD
import { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { useCart } from "../../context/CartContext";
import { api } from "../../utils/Api";
import { 
  ProdutosContainer, 
  Titulo, 
  ListaProdutos, 
  ProdutoCard, 
  ButtonAdd, 
  Loading, 
  EmptyMessage, 
  ImagemProduto,
  SuccessMessage
} from "./style";
=======
import { useState, useEffect } from 'react';
import { api } from '../../utils/Api';
import { Navbar } from '../../components/Navbar';
import ImagemPadrao from '../../Assets/ProdutoTeste.jpg';
>>>>>>> efedf84ccfb80430e7e1871b4e9d740f3b465df7

export const Produtos = () => {
  const { addToCart } = useCart();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(null);
  const [imagensCarregadas, setImagensCarregadas] = useState({});

  const handleAddToCart = (produto) => {
    addToCart(produto);
    setSuccess(`${produto.nome} adicionado ao carrinho 🛒`);
    setTimeout(() => setSuccess(""), 2000);
  };

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
<<<<<<< HEAD
        const response = await api.get("/produtos");
        setProdutos(response.data);
=======
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
>>>>>>> efedf84ccfb80430e7e1871b4e9d740f3b465df7
      } catch (err) {
        console.warn("⚠️ API offline — usando mock local.");
        setProdutos([
          {
            id: 1,
            nome: "Notebook Gamer ASUS TUF",
            descricao: "Ryzen 7, RTX 4060, 16GB RAM, SSD 1TB — desempenho extremo para jogos.",
            preco: 7899.90,
            imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/473710/xlarge/Notebook-Gamer-Asus-Tuf-Gaming-F15-Intel-Core-i7-RAM-8GB-Nvidia-Geforce-RTX-3050-SSD-512GB-Linux-Keepos-Cinza_1762172020.jpg"
          },
          {
            id: 2,
            nome: "Monitor Curvo Samsung Odyssey G5",
            descricao: "Monitor gamer 32'' QHD 165Hz 1ms, tela curva imersiva.",
            preco: 1999.00,
            imagem: "https://img.terabyteshop.com.br/produto/g/monitor-gamer-samsung-odyssey-g5-34-pol-va-curvo-ultrawide-wqhd-1ms-165hz-hdr10-freesync-premium-hdmidp-lc34g55twwlmzd_212434.jpg"
          },
          {
            id: 3,
            nome: "Headset HyperX Cloud Alpha",
            descricao: "Som imersivo e conforto premium para longas sessões.",
            preco: 699.99,
            imagem: "https://m.media-amazon.com/images/I/61e8vriJUtL._AC_UF894,1000_QL80_.jpg"
          },
          {
            id: 4,
            nome: "Teclado Mecânico Redragon Kumara RGB",
            descricao: "Switch Blue, construção em aço, iluminação RGB personalizável.",
            preco: 299.90,
            imagem: "https://m.media-amazon.com/images/I/51i08RGoXZL._AC_UF894,1000_QL80_.jpg"
          },
          {
            id: 5,
            nome: "Mouse Gamer Logitech G502 HERO",
            descricao: "Sensor de 16.000 DPI, 11 botões programáveis, RGB LIGHTSYNC.",
            preco: 349.90,
            imagem: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg"
          },
          {
            id: 6,
            nome: "Cadeira Gamer ThunderX3 TGC12",
            descricao: "Design ergonômico, couro sintético premium, ajuste total.",
            preco: 1299.00,
            imagem: "https://m.media-amazon.com/images/I/71VqjPlOJAL._AC_UF894,1000_QL80_.jpg"
          }
        ]);
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

  return (
    <>
      <Navbar />
      <ProdutosContainer>
        <Titulo>🛍️ Todos os produtos</Titulo>

        {success && <SuccessMessage>{success}</SuccessMessage>}

        {loading ? (
          <Loading>Carregando produtos...</Loading>
        ) : error ? (
          <EmptyMessage>❌ {error}</EmptyMessage>
        ) : produtos.length === 0 ? (
          <EmptyMessage>Nenhum produto encontrado 😅</EmptyMessage>
        ) : (
<<<<<<< HEAD
          <ListaProdutos>
            {produtos.map((produto) => (
              <ProdutoCard key={produto.id}>
                <ImagemProduto src={produto.imagem} alt={produto.nome} />
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <span>💰 R$ {produto.preco.toFixed(2)}</span>
                <ButtonAdd onClick={() => handleAddToCart(produto)}>
                  Adicionar ao Carrinho 🛒
                </ButtonAdd>
              </ProdutoCard>
=======
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
>>>>>>> efedf84ccfb80430e7e1871b4e9d740f3b465df7
            ))}
          </ListaProdutos>
        )}
      </ProdutosContainer>
    </>
  );
};
