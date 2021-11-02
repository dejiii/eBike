import React from "react";
import {
  LandingPageCaptionText,
  LandingPageSearcHBox,
  LandingPageDescText,
} from "./LandingPageStyles";
import GradientButton from "../GradientButton";
import searchIcon from "../../assets/search.svg";
import Rider from "../../assets/rider.gif";
// import Rider2 from "../../assets/header.json";

const LandingPage = () => {
  return (
    <div className="homepage-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-4">
            <LandingPageCaptionText>
              Your Bike <br />
              Electric Update
            </LandingPageCaptionText>
            <LandingPageDescText>
              Dummy text progressive, and affordable healthcare, accessible on
              mobile and online for everyone
            </LandingPageDescText>
            <LandingPageSearcHBox>
              <span>
                <img src={searchIcon} alt="" className="hompage-icon" />
                <input
                  type="text"
                  placeholder="Search Bike or anything"
                  className="hompage-search"
                />
              </span>
              <GradientButton text="Find" />
            </LandingPageSearcHBox>
          </div>
          <div className="col-md-4">
            <img src={Rider} alt="rider" className="w-100" />
            {/* <img src={Rider2} alt="rider" className="w-100" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
