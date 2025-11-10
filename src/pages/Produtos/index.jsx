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

export const Produtos = () => {
  const { addToCart } = useCart();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(null);

  const handleAddToCart = (produto) => {
    addToCart(produto);
    setSuccess(`${produto.nome} adicionado ao carrinho 🛒`);
    setTimeout(() => setSuccess(""), 2000);
  };

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await api.get("/produtos");
        setProdutos(response.data);
      } catch (err) {
        console.warn("⚠️ API offline — usando mock local.");
        setProdutos([
          {
            id: 1,
            nome: "Notebook Gamer ASUS TUF",
            descricao: "Ryzen 7, RTX 4060, 16GB RAM, SSD 1TB — desempenho extremo para jogos.",
            preco: 7899.90,
            imagem: "https://m.media-amazon.com/images/I/71tKZXsQz3L._AC_SL1500_.jpg"
          },
          {
            id: 2,
            nome: "Monitor Curvo Samsung Odyssey G5",
            descricao: "Monitor gamer 32'' QHD 165Hz 1ms, tela curva imersiva.",
            preco: 1999.00,
            imagem: "https://m.media-amazon.com/images/I/71RyH93-PEL._AC_SL1500_.jpg"
          },
          {
            id: 3,
            nome: "Headset HyperX Cloud Alpha",
            descricao: "Som imersivo e conforto premium para longas sessões.",
            preco: 699.99,
            imagem: "https://m.media-amazon.com/images/I/61CqYq+xwNL._AC_SL1000_.jpg"
          },
          {
            id: 4,
            nome: "Teclado Mecânico Redragon Kumara RGB",
            descricao: "Switch Blue, construção em aço, iluminação RGB personalizável.",
            preco: 299.90,
            imagem: "https://m.media-amazon.com/images/I/71qO+2ZrBCL._AC_SL1500_.jpg"
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
            imagem: "https://m.media-amazon.com/images/I/61w8H0qFPEL._AC_SL1500_.jpg"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <>
      <Navbar />
      <ProdutosContainer>
        <Titulo>🛍️ Produtos de Tecnologia</Titulo>

        {success && <SuccessMessage>{success}</SuccessMessage>}

        {loading ? (
          <Loading>Carregando produtos...</Loading>
        ) : error ? (
          <EmptyMessage>❌ {error}</EmptyMessage>
        ) : produtos.length === 0 ? (
          <EmptyMessage>Nenhum produto encontrado 😅</EmptyMessage>
        ) : (
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
            ))}
          </ListaProdutos>
        )}
      </ProdutosContainer>
    </>
  );
};
