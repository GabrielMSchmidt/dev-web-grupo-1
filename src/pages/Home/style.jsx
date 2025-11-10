import styled from "styled-components";

export const ContainerHome = styled.div`
    height: 220vh;
`;

export const ContainerTitulos = styled.div`
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: space-between;
    @media (min-width: 768px) {
        margin-top: 20%;
    }
    @media (min-width: 1024px) {
        margin: 2% 0;
    }
`;

export const ContainerTiLeft = styled.div`
    max-width: 62%;
`;

export const Titulo = styled.h1`
    font-size: 35px;
`;

export const SubTitulo = styled.h2`
    font-size: 15px;
    color: #5f5f5f;
`;

export const ContainerTiRight = styled.div`
    margin-top: 12%;
    width: 38%;
    display: flex;
    @media (min-width: 768px) {
        margin-top: 5%;
        justify-content: flex-end;
    }
    @media (min-width: 1024px) {
        margin-top: 3.5%;
    }
`;

export const ContainerCards = styled.div`
    display: flex;
    flex-direction: column;
    gap:2vh;
    min-width: 80%;
    min-height: 60%;
    @media (min-width: 1024px) {
        flex-direction: row;
        min-height: 10%;
    }
`;

export const ConatainerToProduct = styled.div`
    @media (min-width: 1024px) {
        display: flex;
    }
`;

export const ContainerToLeft = styled.div`
    @media (min-width: 1024px) {
        max-width: 50%;
    }
`;

export const ContainerToRight = styled.div`
    @media (min-width: 1024px) {
        max-width: 50%;
    }
`;