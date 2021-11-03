import React from "react";
import { CarouselCard, CarouselText } from "./BikeCarouselStyles";

const BikeCarouselCard = ({ text, caption }) => {
  return (
    <>
      <CarouselCard className="test">{text}</CarouselCard>
      <CarouselText className="test">{caption}</CarouselText>
    </>
  );
};

export default BikeCarouselCard;
