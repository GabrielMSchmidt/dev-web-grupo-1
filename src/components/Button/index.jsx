import {
    Botao
} from "./style";


export const Button = (props) => {
  return (
    <>
      <Botao
        onClick={props.onClick}
        background={props.background}
        color={props.color}
        border={props.border}
        backgroundHover={props.backgroundHover}
        colorHover={props.colorHover}
        borderHover={props.borderHover}
        padding={props.padding}
        fontSize={props.fontSize}
        margin={props.margin}
        width={props.width}
        heightTablet={props.heightTablet}
        fontSizeTablet={props.fontSizeTablet}
        paddingTablet={props.paddingTablet}
        height={props.height}
        heightNotebook={props.heightNotebook}
        paddingNotebook={props.paddingNotebook}
        fontSizeNotebook={props.fontSizeNotebook}
        widthNotebook={props.widthNotebook}
      >
        {props.title || "Entrar Aqui"}
      </Botao>
    </>
  )
}
