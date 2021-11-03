import React from "react";
import Lottie from "lottie-react";
import {
  LandingPageCaptionText,
  LandingPageSearcHBox,
  LandingPageDescText,
  LandingPageWrapper,
} from "./LandingPageStyles";
import GradientButton from "../GradientButton";
import searchIcon from "../../assets/search.svg";
import Rider from "../../assets/header.json";
import Pattern from "../../assets/pattern-h.png";

const LandingPage = () => {
  return (
    <div className="details-wrapper">
      <div className="container">
        <LandingPageWrapper>
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
              <Lottie animationData={Rider} className="w-100" />
            </div>
          </div>
        </LandingPageWrapper>
      </div>
      <img src={Pattern} alt="" className="home-pattern" />
    </div>
  );
};

export default LandingPage;
