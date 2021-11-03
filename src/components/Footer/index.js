import React from "react";
import LogoFooter from "../../assets/logo-footer.png";
import Pattern from "../../assets/element.png";

import {
  FooterHeader,
  FooterLinks,
  FooterDesc,
  FooterYear,
} from "./FooterStyles";

const Footer = () => {
  const companyLinks = [
    { id: 1, name: "Product" },
    { id: 2, name: "Bike Type" },
    { id: 3, name: "About us" },
    { id: 4, name: "Contact" },
  ];

  const helpLinks = [
    { id: 1, name: "Help center" },
    { id: 2, name: "Contact support" },
    { id: 3, name: "Instructions" },
    { id: 4, name: "How it works" },
  ];

  return (
    <div className="footer-wrapper">
      <div className="details-wrapper">
        <img src={Pattern} alt="" className="footer-left-pattern" />
        <div className="container">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-4 ttt">
              <FooterHeader>
                <img src={LogoFooter} alt="" />
              </FooterHeader>
              <FooterDesc>
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </FooterDesc>
              <FooterYear>©eBike 2021. All rights reserved</FooterYear>
            </div>
            <div className="col-md-2">
              <FooterHeader>Company</FooterHeader>
              {companyLinks.map((companyLinks, i) => (
                <FooterLinks key={i}>{companyLinks.name}</FooterLinks>
              ))}
            </div>
            <div className="col-md-2">
              <FooterHeader>Help</FooterHeader>
              {helpLinks.map((helpLinks, i) => (
                <FooterLinks key={i}>{helpLinks.name}</FooterLinks>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
