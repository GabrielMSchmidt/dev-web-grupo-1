import { Button } from "../Button/index.jsx";
import { useNavigate } from "react-router-dom";

import {
  Titulo,
  DestaqueSpan,
  SubTitulo,
  ContainerButtons,
  ContainerComponentProd
} from "./style";

export const ContainerProd = (props) => {
  const navigate = useNavigate(); 

  return (
    <ContainerComponentProd>
      <Titulo>
        {props.title || "Titulo Antes"}{" "}
        <DestaqueSpan>{props.destaque || "Destaque"}</DestaqueSpan>{" "}
        {props.title2 || "Titulo Depois"}
      </Titulo>

      <SubTitulo>
        {props.subtitle || "Subtitulo"}
      </SubTitulo>

      <ContainerButtons>
        <Button 
          title="Ver Produtos" 
          background="#066BE0" 
          color="white"
          backgroundHover="#3794ff"
          onClick={() => navigate("/produtos")} 
        />
        <Button 
          title="Ofertas do Dia" 
          background="white" 
          color="#066BE0" 
          border="2px solid #FAFAFA"
          backgroundHover="#3794ff"
          colorHover="white"
          borderHover="none"
          heightNotebook={props.heightNotebook}
          paddingNotebook={props.paddingNotebook}
          fontSizeNotebook={props.fontSizeNotebook}
          onClick={() => navigate("/produtos")} 
        />
      </ContainerButtons>
    </ContainerComponentProd>
  );
};
