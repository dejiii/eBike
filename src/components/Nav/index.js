import React from "react";
import { NavWrapper } from "./NavStyles";
import Logo from "../../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
// import { CgClose } from "react-icons/cg";
// import LargeScreenView from "../Footer/LargeScreenView";
// import SmallScreenView from "../Footer/SmallScreenView";

const Nav = () => {
  // const [click, setClick] = useState(false);

  // const handleClick = () => {
  //   setClick(!click);
  // };

  return (
    <div className="container">
      {/* <NavWrapper> */}
      <div className="row nav-wrapper">
        <div className="col-md-2" />
        <div className="col-md-8">
          <NavWrapper>
            <span>
              <img src={Logo} alt="ebike logo" />
            </span>
            <span className="nav-links web-nav">
              <span className="nav-link">Product</span>
              <span className="nav-link">Bike Type</span>
              <span className="nav-link">About us</span>
              <span className="nav-link">Testimonials</span>
              <span className="nav-link">Contact</span>
            </span>
            <div className="mobile-nav">
              {/* <span onClick={handleClick}>
                {click ? <CgClose /> : <GiHamburgerMenu />}
              </span> */}
              <GiHamburgerMenu size={24} />
            </div>
          </NavWrapper>
        </div>
        <div className="col-md-2" />
        {/* <div>{click ? <LargeScreenView /> : " "}</div> */}
      </div>
    </div>
  );
};

export default Nav;
