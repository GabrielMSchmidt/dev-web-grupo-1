import { Navbar } from "../../components/Navbar/index.jsx"
import { ContainerProd } from "../../components/ContainerProd/index.jsx"
import Banner1 from "../../Assets/Banner1.png"
import Banner2 from "../../Assets/Banner2.png"

import {
    ContainerHome,
    ContainerTitulos,
    ContainerTiLeft,
    Titulo,
    SubTitulo,
    ContainerTiRight,
    ContainerCards,
    ConatainerToProduct,
    ContainerToLeft,
    ContainerToRight
} from "./style.jsx";
import { Carrossel } from "../../components/Carrossel/index.jsx";
import { Button } from "../../components/Button/index.jsx";

import { Footer } from "../../components/Footer/Index.jsx";
import { CardList } from "../../components/CardList/index.jsx";

const banners = [
  { image: Banner1, link: "/Produtos" },
  { image: Banner2, link: "/Produtos" },
];

export const Home = () => {
    return (
        <>
            <ContainerHome>
                <Navbar />
                <ConatainerToProduct>
                    <ContainerToLeft>
                        <ContainerProd 
                            title="Os Melhores " 
                            title2="Para Você" 
                            destaque="Produtos" 
                            subtitle="Encontre notebooks, smartphones, periféricos e componentes com os melhores preços e condições."
                        />
                    </ContainerToLeft>
                    <ContainerToRight>
                        <Carrossel banners={banners} interval={10000}/>
                    </ContainerToRight>
                </ConatainerToProduct>

                <ContainerTitulos>
                    <ContainerTiLeft>
                        <Titulo> Produtos em Destaque</Titulo>
                        <SubTitulo>Os mais vendidos da semana</SubTitulo>
                    </ContainerTiLeft>
                    <ContainerTiRight>
                        <Button 
                            title="Ver Todos"
                            border="1px solid gray" 
                            padding="0 20%"
                            fontSize="20px"
                            backgroundHover="black"
                            colorHover="white"
                            borderHover="none"
                            paddingTablet="0 10%"
                            fontSizeTablet="15px"
                            heightTablet="50px"
                            height="50px"
                        />
                    </ContainerTiRight>
                </ContainerTitulos>
                <ContainerCards>
                        <CardList/>
                </ContainerCards>
                
            </ContainerHome>
            <Footer />
            </>
    )
}