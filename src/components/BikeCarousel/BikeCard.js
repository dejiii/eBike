import React from "react";
import {
  DetailsCardWrapper,
  DetailsPrice,
  DetailsPriceTag,
} from "../Details/DetailsStyles";
import GradientButton from "../GradientButton";
import BigBikes from "../../assets/bigbikes.png";

const BikeCard = ({ title, price }) => {
  return (
    <DetailsCardWrapper>
      <p>{title}</p>
      <img src={BigBikes} alt="" className="w-80 text-center" />
      <hr />
      <div className="row">
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <DetailsPrice>Price</DetailsPrice>
            <DetailsPriceTag>${price}</DetailsPriceTag>
          </span>
          <GradientButton text="Order" />
        </div>
      </div>
    </DetailsCardWrapper>
  );
};

export default BikeCard;
