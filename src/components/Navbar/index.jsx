import { useState } from "react";
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
} from "./style";

import { FaUser, FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";

export function Navbar({ propsPlaceHolder }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
        <Container>
        <TopBar>
            <LogoText>Serra Tek</LogoText>
            <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
            </MenuButton>
        </TopBar>

        <HiddenMenu open={menuOpen}>
            <button>
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
            <CartIcon>
            <FaShoppingCart className="icon" />
            <span className="cart-count">0</span>
            </CartIcon>
        </IconsWrapper>
        
        </Container>
        <ContainerCategorias>
            <span>cat1</span>
            <span>cat2</span>
            <span>cat3</span>
        </ContainerCategorias>
    </>
  );
}
