import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

export function Navbar({ propsPlaceHolder }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
            <FaShoppingCart className="icon" /> Carrinho (0)
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
          <FaUser className="icon" />
          <CartIcon onClick={() => navigate("/carrinho")}>
            <FaShoppingCart className="icon" />
            <span className="cart-count">0</span>
          </CartIcon>
        </IconsWrapper>
      </Container>

      <ContainerCategorias>
        <Categorias href="/Home">Todos os produtos</Categorias>
        <Categorias href="/categoria/cat2">Notebooks</Categorias>
        <Categorias href="/categoria/cat3">Computadores</Categorias>
        <Categorias href="/categoria/cat4">Monitores</Categorias>
        <Categorias href="/categoria/cat5">Mouses</Categorias>
        <Categorias href="/categoria/cat6">Teclados</Categorias>
        <Categorias href="/faq">FAQ</Categorias>
      </ContainerCategorias>
    </>
  );
}
