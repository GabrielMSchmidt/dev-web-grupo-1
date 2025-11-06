import {
    Botao
} from "./style";

export const Button = (props) => {
  return (
    <>
      <Botao>{props.title || "Entrar Aqui"}</Botao>
    </>
  )
}
