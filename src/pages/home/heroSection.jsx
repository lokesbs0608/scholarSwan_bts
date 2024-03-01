import React from 'react';
import text_bg from "../../Images/text_bg.png";
import hero_section from "../../Images/hero_section.png";

const HeroSection = () => {
  return (
    <div className="section1">
        <div className="hero-container">
          <div className="text">
            <img
              className="text_bg bg_img "
              src={text_bg}
              alt="arrow"
            />
            <h1 className="left-h1">
              An investment in <span>knowledge</span> pays the best interest.
            </h1>
          </div>
          <div className="people">
            <img className="girl-boy" src={hero_section} alt="girl-boy" />
          </div>
          <div className="form">
            {/* <Form heading="Signup for free<br/><b>scholarSWAN innoclasses</b>" /> */}
          </div>
        </div>
      </div>
  )
}

export default HeroSection
