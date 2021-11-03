import React from "react";
import { ButtonType } from "../OutlineButton/ButtonStyles";
import { DetailsWrapper, DetailsHeading, DetailText } from "./DetailsStyles";
import DetailsCard from "./DetailsCard";
import Blob from "../../assets/blob.png";

const Details = () => {
  return (
    <div className="details-wrapper">
      <div className="container">
        <DetailsWrapper>
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-4">
              <DetailsCard />
            </div>
            <div className="col-md-4 small-push">
              <DetailsHeading>Hybrid Bikes</DetailsHeading>
              <DetailText>
                Dummy Text progressive, and affordable healthcare, accessible on
                mobile and online for everyone. To us, it’s not just work. We
                take pride in the solutions we deliver
              </DetailText>
              <ButtonType>Learn More</ButtonType>
            </div>
          </div>
        </DetailsWrapper>
      </div>
      <img src={Blob} alt="" className="blob" />
    </div>
  );
};

export default Details;
