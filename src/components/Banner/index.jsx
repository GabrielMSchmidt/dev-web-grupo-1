import { useState } from "react";
import { Banners, FallbackBanner } from "./style";
import Banner1 from "../../Assets/Banner1.png";

export const Banner = (props) => {
  const [imageError, setImageError] = useState(false);

  return (
    <>
      {!imageError ? (
        <Banners
          src={props.image || Banner1}
          alt="Banner da página"
          onError={() => setImageError(true)}
        />
      ) : (
        <FallbackBanner>
          <p>Não foi possível carregar o banner.</p>
        </FallbackBanner>
      )}
    </>
  );
};
