import {
    Botao
} from "./style";

export const Button = (props) => {
  return (
    <>
      <Botao
        background={props.background}
        color={props.color}
        border={props.border}
        backgroundHover={props.backgroundHover}
        colorHover={props.colorHover}
        borderHover={props.borderHover}
        padding={props.padding}
        fontSize={props.fontSize}
      >
        {props.title || "Entrar Aqui"}
      </Botao>
    </>
  )
}
