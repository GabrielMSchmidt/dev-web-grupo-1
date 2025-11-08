import {
  FooterContainer,
  FooterDescription,
  FooterTitle,
  FooterCredits,
} from "./style.jsx";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>Sobre o Projeto</FooterTitle>
      <FooterDescription>
        Este site foi desenvolvido como parte do projeto de criação web do curso
        de Desenvolvimento Web do <strong>Serratec</strong>. Nosso objetivo foi
        aplicar conceitos modernos de design, usabilidade e responsividade em uma
        experiência visual completa.
      </FooterDescription>

      <FooterCredits>
        Projeto criado por{" "}
        <a href="https://github.com/oRimuu" >
          Fernando H
        </a>
        ,{" "}
        <a href="https://github.com/Nathan-Cristino" >
          Nathan C
        </a>
        ,{" "}
        <a href="https://github.com/GabrielMSchmidt">
          Gabriel M
        </a>
        ,{" "}
        <a href="https://github.com/gelversontiago256">
          G. Thiago
        </a>
        ,{" "}
        <a href="https://github.com/joaomarins-sys" >
          João Vitor
        </a>{" "}
        e{" "}
        <a href="https://github.com/smulkkkkk" >
          Samuel A
        </a>
        .
      </FooterCredits>
    </FooterContainer>
  );
};
