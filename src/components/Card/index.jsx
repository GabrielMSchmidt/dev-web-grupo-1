import { useState } from "react";
import { 
  ContainerCard, 
  ImagemCard, 
  TextoCard,
  ContainerRating
} from "./style";
import Rating from "@mui/material/Rating";
import ImagemTeste from "../../Assets/ProdutoTeste.jpg";
import Box from "@mui/material/Box";

const labels = {
  0.5: "(0.5)",
  1: "(1.0)",
  1.5: "(1.5)",
  2: "(2.0)",
  2.5: "(2.5)",
  3: "(3.0)",
  3.5: "(3.5)",
  4: "(4.0)",
  4.5: "(4.5)",
  5: "(5.0)",
};

export const Card = (props) => {
  const [value, setValue] = useState(2.5);

  return (
    <ContainerCard>
      <ImagemCard src={ImagemTeste} alt="Produto" />
      <TextoCard>{props.title || "Notebook Gamer RGV Pro 15.6"}</TextoCard>

      <ContainerRating style={{ display: "flex", alignItems: "center" }}>
        <Rating
          name="half-rating"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => setValue(newValue)}
        />
        <Box sx={{ ml: 1, fontSize: "14px", color: "#333" }}>
          {labels[value] || "(0.0)"}
        </Box>
      </ContainerRating>
    </ContainerCard>
  );
};
