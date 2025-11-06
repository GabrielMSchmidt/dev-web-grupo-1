import { Navbar } from "../../components/Navbar/index.jsx"
import { ContainerProd } from "../../components/ContainerProd/index.jsx"
import './style.css'

export const Home = () => {
    return (
        <>
            <Navbar />
            <ContainerProd 
                title="Os Melhores " 
                title2="Para Você" 
                destaque="Produtos" 
                subtitle="Encontre notebooks, smartphones, periféricos e componentes com os melhores preços e condições."
            />
        
        </>
    )
}