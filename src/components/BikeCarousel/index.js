import React from "react";
import BikeCarouselCard from "./BikeCarouselCard";
import { CarouselHeader } from "./BikeCarouselStyles";

const BikeCarousels = () => {
  return (
    <div className="container">
      <CarouselHeader>Other Type Of Bikes</CarouselHeader>
      <div className="row">
        {/* <BikeCarouselCard
          className="col-md-3"
          text="Test"
          caption="Hybrid Bikes"
        /> */}
        {/* <BikeCarouselCard className="col-md-3" text="lorem" />
        <BikeCarouselCard className="col-md-3" text="Test" />
        <BikeCarouselCard className="col-md-3" text="Test" />
        <BikeCarouselCard className="col-md-3" text="Test" /> */}
      </div>
      <div className="row">
        <div className="col-md-3 test-x">
          {" "}
          <BikeCarouselCard
            className="col-md-3"
            text="Test"
            caption="Hybrid Bikes"
          />
        </div>
        <div className="col-md-3 test-x">
          {" "}
          <BikeCarouselCard
            className="col-md-3"
            text="Test"
            caption="Hybrid Bikes"
          />
        </div>
        <div className="col-md-3 test-x">
          {" "}
          <BikeCarouselCard
            className="col-md-3"
            text="Test"
            caption="Hybrid Bikes"
          />
        </div>
        <div className="col-md-3 test-x">
          {" "}
          <BikeCarouselCard
            className="col-md-3"
            text="Test"
            caption="Hybrid Bikes"
          />
        </div>
      </div>
    </div>
  );
};

export default BikeCarousels;
