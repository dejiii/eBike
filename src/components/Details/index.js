import React from "react";
import { ButtonType } from "../OutlineButton/ButtonStyles";
import { DetailsWrapper, DetailsHeading, DetailText } from "./DetailsStyles";
import DetailsCard from "./DetailsCard";

const Details = () => {
  return (
    <DetailsWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-4">
            <DetailsCard />
          </div>
          {/* <div className="col-md-1" /> */}
          <div className="col-md-4">
            <DetailsHeading>Hybrid Bikes</DetailsHeading>
            <DetailText>
              Dummy Text progressive, and affordable healthcare,
              {/* <br /> */}
              accessible on mobile and online for everyone. To us, it’s
              {/* <br />  */}
              not just work. We take pride
              {/* <br /> */}
              in the solutions we deliver
            </DetailText>
            <ButtonType>Learn More</ButtonType>
          </div>
        </div>
      </div>
    </DetailsWrapper>
  );
};

export default Details;
