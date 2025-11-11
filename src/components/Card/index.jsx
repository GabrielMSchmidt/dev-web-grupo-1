import { useState, useEffect } from "react";
import { 
  ContainerCard, 
  ImagemCard, 
  TextoCard,
  ContainerRating,
  PrecoDesconto,
  Preco,
  ContainerButton 
} from "./style";
import Rating from "@mui/material/Rating";
import ImagemTeste from "../../Assets/ProdutoTeste.jpg";
import Box from "@mui/material/Box";
import { Button } from "../Button";
import { useCart } from "../../context/CartContext"; 


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
  const { addToCart } = useCart();
  const [value, setValue] = useState(2.5);
  const [imageSrc, setImageSrc] = useState(ImagemTeste);

  useEffect(() => {
    if (!props.produtoId) return;

    const loadImage = async () => {
      try {
        const response = await fetch(`http://localhost:8080/produtos/${props.produtoId}/foto`);
        
        if (response.ok) {
          const blob = await response.blob();
          const objectUrl = URL.createObjectURL(blob);
          setImageSrc(objectUrl);
        }
      } catch (error) {
        console.error('Erro ao carregar imagem do produto:', error);
      }
    };

    loadImage();

    return () => {
      if (imageSrc !== ImagemTeste && imageSrc.startsWith('blob:')) {
        URL.revokeObjectURL(imageSrc);
      }
    };
  }, [props.produtoId]);

  return (
    <ContainerCard>
      <ImagemCard 
        src={imageSrc} 
        alt={props.title || "Produto"} 
      />
      <TextoCard>{props.title || "Notebook Gamer RGV Pro 15.6"}</TextoCard>

      <ContainerRating style={{ display: "flex", alignItems: "center" }}>
        <Rating
          name="half-rating"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => setValue(newValue)}
          sx={{
            fontSize: "24px", 
            "@media (min-width: 768px)": {
              fontSize: "40px", 
            },
            "@media (min-width: 1024px)": {
              fontSize: "25px"
            },
          }}
        />
        <Box sx={{ ml: 1, fontSize: "14px", color: "#333" }}>
          {labels[value] || "(0.0)"}
        </Box>
      </ContainerRating>

      <PrecoDesconto>
        {`R$ ${(parseFloat(props.precoOri?.replace("R$", "").replace(",", ".") || 0) * 1.1).toFixed(2)}`}
      </PrecoDesconto>

      <Preco>{props.precoOri || "R$ 4899.99"}</Preco>

      <ContainerButton>
        <Button
          onClick={() =>
            addToCart({
              id: props.produtoId,
              nome: props.title,
              preco: parseFloat(
                props.precoOri?.replace("R$", "").replace(",", ".") || 0
              ),
              precoDesconto: parseFloat(
                (parseFloat(
                  props.precoOri?.replace("R$", "").replace(",", ".") || 0
                ) * 1.1).toFixed(2)
              ),
            })
          }
          title="Adicionar"
          background="#0D70E0"
          color="white"
          backgroundHover="white"
          colorHover="#0D70E0"
          padding="3% 30%"
          margin="0 5%"
          width="90%"
          fontSize="18px"
          widthNotebook="90%"
        />
      </ContainerButton>
    </ContainerCard>
  );
};
