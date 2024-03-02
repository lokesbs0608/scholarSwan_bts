import React from "react";
import text_bg from "../../Images/text_bg.png";
import hero_section from "../../Images/hero_section.png";
import EnquiryForm from "../../components/EnquiryFrom";
import whiteArrow from "../../Images/arrow_white.png";

const HeroSection = () => {
  return (
    <div className="section1">
      <div className="hero-container">
        <div className="text">
          <img className="bg_img" src={text_bg} alt="arrow" />
          <h1 className="title_">
            An investment in <span>knowledge</span> pays the best interest.
          </h1>
        </div>
        <div className="people">
          <img className="girl-boy" src={hero_section} alt="girl-boy" />
        </div>
        <div className="form">
        <EnquiryForm heading="Signup for free<br/><b>scholarSWAN innoclasses</b>" />
        </div>
      </div>

      <div style={{position:'absolute',top:'5%'}} className="d-block  d-md-none d-lg-none">
        <div className="form-button">
          <span>
            <img className="" src={whiteArrow} alt="" srcset="" />
          </span>
          Enquiry Form
        </div>
        <div className="mob_form" >
        <EnquiryForm heading="Signup for free<br/><b>scholarSWAN innoclasses</b>" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
