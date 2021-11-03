import React from "react";
// import BikeCarouselCard from "./BikeCarouselCard";
import { CarouselHeader } from "./BikeCarouselStyles";
import Slider from "react-slick";
import bike from "../../assets/bike2.png";
import BikeCardCarousel from "./BikeCardCarousel";

const BikeCarousels = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };

  const bikes = [
    { id: 1, name: "Hybrid Bikes" },
    { id: 2, name: "Fixie Bikes" },
    { id: 3, name: "Folding Bikes" },
    { id: 4, name: "Mount Bikes" },
    { id: 5, name: "City Bikes" },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          <BikeCardCarousel />
        </div>
        <div className="col-md-2" />
      </div>
      <div className="row test">
        <div className="col-md-2" />
        <div className="col-md-8">
          <CarouselHeader>Other Type Of Bikes</CarouselHeader>
          <div>
            <Slider {...settings}>
              {bikes.map((bikes, i) => (
                <div key={i} className="bike-carousel-image">
                  <img src={bike} alt="" className="img" />
                  <div className="bike-carousel-text text-center">
                    {bikes.name}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="col-md-2" />
      </div>
    </div>
  );
};

export default BikeCarousels;
