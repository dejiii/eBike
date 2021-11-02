import React from "react";
import {
  DetailsCardWrapper,
  DetailsPrice,
  DetailsPriceTag,
} from "./DetailsStyles";
// import Rider from "../../assets/rider1.svg";
import GradientButton from "../GradientButton";

const DetailsCard = () => {
  return (
    <DetailsCardWrapper>
      {/* <img src={Rider} alt="" /> */}
      <hr />
      <div className="row">
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <DetailsPrice>Price</DetailsPrice>
            <DetailsPriceTag>$750.00</DetailsPriceTag>
          </span>
          <GradientButton text="Order" />
        </div>
      </div>
    </DetailsCardWrapper>
  );
};

export default DetailsCard;
