import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 16px;
  background-color: #ffffff;
  color: black;
  gap: 10px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding: 0 10%; 
    gap: 20px;
  }
`;

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    width: auto;
    justify-content: flex-start;
  }
`;

export const LogoText = styled.a`
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  color: #000000;
  letter-spacing: 1px;
  font-family: "Poppins", sans-serif;
  transition: 0.2s;
  &:hover{
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const MenuButton = styled.div`
  font-size: 22px;
  cursor: pointer;
  color: #000;
  padding: 6px;
  border-radius: 8px;
  transition: 0.2s;

  &:hover {
    background-color: #008cff33;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HiddenMenu = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 10px;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  gap: 8px;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  button {
    background: none;
    border: none;
    color: #000000;
    font-size: 15px;
    font-weight: 500;
    text-align: left;
    cursor: pointer;
    padding: 6px 0;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: 0.2s;

    &:hover {
      color: #007bff;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    width: 40%;
    margin: 0 auto;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  color: #aaa;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 8px 10px 8px 34px;
  border: 1px solid #ccc;
  border-radius: 12px;
  outline: none;
  font-size: 14px;
  color: #333;
  background-color: #f9f9f9;
  transition: all 0.1s ease;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border: 2px solid #0077ff;
    background-color: #fff;
  }
`;

export const IconsWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
  }

  .icon {
    font-size: 22px;
    cursor: pointer;
    color: #000000;
    transition: 0.2s;
    padding: 6px;
    border-radius: 8px;

    &:hover {
      background-color: #007bff;
      transform: scale(1.05);
    }
  }
`;

export const CartIcon = styled.div`
  position: relative;

  .cart-count {
    position: absolute;
    top: -6px;
    right: -8px;
    background-color: #007bff;
    color: white;
    font-size: 12px;
    font-weight: bold;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerCategorias = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  background-color: #F7F9FB;
  box-shadow: #F7F9FB 3px 4px 14px;
  font-size: 19px;
  margin-top: 5px;
  padding: 10px 5%;
  font-family: "Poppins", sans-serif;

  overflow-x: auto;
  scrollbar-width: thin; 
  scrollbar-color: #ccc transparent; 

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const Categorias = styled.a`
  flex-shrink: 0;
  cursor: pointer;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    color: #0077ff;
  }

  &:last-child {
    margin-right: 50px; 
  }
`;