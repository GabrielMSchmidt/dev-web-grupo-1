import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/Api";
import {
  Container,
  TopBar,
  LogoText,
  MenuButton,
  HiddenMenu,
  SearchContainer,
  SearchBar,
  SearchIcon,
  IconsWrapper,
  CartIcon,
  ContainerCategorias,
  Categorias,
} from "./style";

import { FaUser, FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

export function Navbar({ propsPlaceHolder }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();
  const { cartItems } = useCart();

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const data = await api.get('/categorias');
        setCategorias(data);
      } catch (err) {
        console.error('Erro ao carregar categorias:', err);
      }
    };

    fetchCategorias();
  }, []);

  return (
    <>
      <Container>
        <TopBar>
          <LogoText href="/Home">Serra Tech</LogoText>
          <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </MenuButton>
        </TopBar>

        <HiddenMenu open={menuOpen}>
          <button onClick={() => navigate("/carrinho")}>
            <FaShoppingCart className="icon" /> Carrinho ({cartItems.length})
          </button>
          <button>
            <FaUser className="icon" /> Minha Conta
          </button>
        </HiddenMenu>

        <SearchContainer>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchBar placeholder={propsPlaceHolder || "Buscar produtos..."} />
        </SearchContainer>

        <IconsWrapper>
          <FaUser className="icon" onClick={() => navigate("/login")} />
          <CartIcon onClick={() => navigate("/carrinho")}>
            <FaShoppingCart className="icon" />
            <span className="cart-count">{cartItems.length}</span>
          </CartIcon>
        </IconsWrapper>
      </Container>

      <ContainerCategorias>
        <Categorias onClick={() => navigate('/produtos')}>
          Todos os produtos
        </Categorias>
        {categorias.map((categoria) => (
          <Categorias 
            key={categoria.id} 
            onClick={() => navigate(`/produtos?categoria=${categoria.id}`)}
          >
            {categoria.nome}
          </Categorias>
        ))}
        <Categorias onClick={() => navigate('/faq')}>
          FAQ
        </Categorias>
      </ContainerCategorias>
    </>
  );
}
