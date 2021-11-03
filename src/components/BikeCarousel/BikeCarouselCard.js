import React from "react";
import { CarouselCard, CarouselText } from "./BikeCarouselStyles";

const BikeCarouselCard = ({ text, caption }) => {
  return (
    <div className="bike-cards">
      <CarouselCard className="test">{text}</CarouselCard>
      <CarouselText className="test">{caption}</CarouselText>
    </div>
  );
};

export default BikeCarouselCard;
