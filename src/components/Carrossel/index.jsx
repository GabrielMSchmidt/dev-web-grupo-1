import React, { useState, useEffect } from "react";
import { CarouselContainer, CarouselSlide, CarouselImage } from "./style";

export const Carrossel = ({ banners, interval = 4000 }) => {
  const [current, setCurrent] = useState(0);
  const length = banners.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, interval);
    return () => clearInterval(timer);
  }, [length, interval]);

  const handleClick = () => {
    const currentBanner = banners[current];
    if (currentBanner.link) {
      window.location.href = currentBanner.link;
    } else {
      window.location.href = "#";
    }
  };

  return (
    <CarouselContainer onClick={handleClick} style={{ cursor: "pointer" }}>
      <CarouselSlide
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <CarouselImage
            key={index}
            src={banner.image}
            alt={`Banner ${index + 1}`}
          />
        ))}
      </CarouselSlide>
    </CarouselContainer>
  );
};
