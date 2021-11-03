import React from "react";
import {
  ReviewCard,
  ReviewCardHeader,
  ReviewerName,
  ReviewerRole,
  ReviewText,
} from "./CustomerReviewsStyles";
import Placeholder from "../../assets/placeholder.png";
import Pattern from "../../assets/pattern2.png";

const CustomerReviews = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2" />
        <div className="col-md-8">
          <div className="cr-relative">
            <ReviewCard>
              <ReviewCardHeader>What our customer are saying</ReviewCardHeader>
              <div className="row align-items-center">
                <div className="col-md-4">
                  <img src={Placeholder} alt="" className="d-flex m-auto" />
                  <ReviewerName>Edward Newgate</ReviewerName>
                  <ReviewerRole>Pro-Cycler</ReviewerRole>
                </div>
                <div className="col-md-8">
                  <ReviewText>
                    Dummy Text patient engagement app and web portal allow you
                    to access information instantaneously (no tedeous form, long
                    calls, or administrative hassle) and securely”
                  </ReviewText>
                </div>
              </div>
            </ReviewCard>
            <img src={Pattern} alt="" className="pattern-2" />
          </div>
        </div>
        <div className="col-md-2" />
      </div>
    </div>
  );
};

export default CustomerReviews;
