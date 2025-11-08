import { Card } from "../Card";
import { ContainerCards } from "./style"; // container pra organizar os cards

const produtos = [
  {
    id: 1,
    title: "Pc Bomba Slk n roda nem LoL",
    precoOri: "R$ 01,00",
    precoDes: "R$ 9.999,99"
  },
  {
    id: 2,
    title: "Notebook Gamer XYZ",
    precoOri: "R$ 5.999,99",
    precoDes: "R$ 4.799,99"
  },
  {
    id: 3,
    title: "Headset Ultra Surround",
    precoOri: "R$ 499,99",
    precoDes: "R$ 299,99"
  },
  {
    id: 4,
    title: "Monitor UltraWide 34'' Curvo",
    precoOri: "R$ 2.999,99",
    precoDes: "R$ 2.399,99"
  },
  {
    id: 5,
    title: "Teclado Mecânico RGB Blue Switch",
    precoOri: "R$ 599,99",
    precoDes: "R$ 399,99"
  },
  {
    id: 6,
    title: "Mouse Gamer 16000 DPI RGB",
    precoOri: "R$ 299,99",
    precoDes: "R$ 179,99"
  },
  {
    id: 7,
    title: "Cadeira Gamer Comfort Pro",
    precoOri: "R$ 1.499,99",
    precoDes: "R$ 1.099,99"
  },
  {
    id: 8,
    title: "Webcam Full HD 1080p com Microfone",
    precoOri: "R$ 499,99",
    precoDes: "R$ 349,99"
  }
];

export const CardList = () => {
  return (
    <ContainerCards>
      {produtos.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          precoOri={item.precoOri}
          precoDes={item.precoDes}
          image={item.image}
        />
      ))}
    </ContainerCards>
  );
};
