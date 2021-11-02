import React from "react";
import {
  DetailsCardWrapper,
  DetailsPrice,
  DetailsPriceTag,
} from "./DetailsStyles";
import Rider from "../../assets/rider.gif";
import GradientButton from "../GradientButton";

const DetailsCard = () => {
  return (
    <DetailsCardWrapper>
      <img src={Rider} alt="loading" className="rider-gif" />
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minima,
        porro at deleniti, error tempora magnam necessitatibus aut ipsa ex,
        doloremque quis nemo quibusdam commodi! Hic animi veritatis in sit?
        error tempora magnam necessitatibus aut ipsa ex, doloremque quis nemo
        quibusdam error tempora magnam necessitatibus aut ipsa ex, doloremque
        quis nemo quibusdam
      </p> */}
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
