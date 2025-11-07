import {
    ContainerCard,
    ImagemCard,
    TextoCard
} from "./style";
import ImagemTeste from "../../Assets/ProdutoTeste.jpg"

export const Card = (props) => {
  return (
    <>
      <ContainerCard>
        <ImagemCard src={ImagemTeste}/>
        <TextoCard>{props.title || "Notebook Gamer RGV Pro 15.6"}</TextoCard>
      </ContainerCard>
    </>
  )
}