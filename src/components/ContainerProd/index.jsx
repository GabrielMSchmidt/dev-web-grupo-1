import { Button } from "../Button/index.jsx";
import {
  Titulo,
  DestaqueSpan,
  SubTitulo,
  ContainerButtons,
} from "./style";

export const ContainerProd = (props) => {
  return (
    <>
        <Titulo>
            {props.title || "Titulo Antes"}{" "}
            <DestaqueSpan>{props.destaque || "Destaque"}</DestaqueSpan>{" "}
            {props.title2 || "Titulo Depois"}
        </Titulo>
        <SubTitulo>
            {props.subtitle || "Subtitulo"}
        </SubTitulo>
        
        <ContainerButtons>
            <Button title="Ver Produtos"/>
            <Button title="Ofertas do Dia"/>
        </ContainerButtons>
    </>
  );
};