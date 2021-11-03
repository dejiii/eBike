import React from "react";
import Slider from "react-slick";
import BikeCard from "./BikeCard";

const BikeCardCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings} className="large-slider">
        <div className="slider-child">
          <BikeCard title="Universal eBike Kit" price="750" />
        </div>
        <div className="slider-child">
          <BikeCard title="Brampoton eBike Kit" price="750" />
        </div>
        <div className="slider-child">
          <BikeCard title="Additional eBike Kit" price="750" />
        </div>
        <div className="slider-child">
          <BikeCard title="Universal eBike Kit" price="750" />
        </div>
        <div className="slider-child">
          <BikeCard title="Brampoton eBike Kit" price="750" />
        </div>
        <div className="slider-child">
          <BikeCard title="Additional eBike Kit" price="750" />
        </div>
      </Slider>
      <div className="slick-arrow slick-prev"></div>
    </div>
  );
};

export default BikeCardCarousel;
