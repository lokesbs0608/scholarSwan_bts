import React, { useState, useEffect } from "react";
import "./home.scss";

import HeroSection from "./heroSection";
import Slider from "./slider";
import WhyScholarSwanSection from "../home/whyScholarSwansection";
import KWWRB from "./KWWRB.jsx";
import Subscription from "./subscription";
import Services from "./services";
import Testimonials from "./testimonials";
const Home = () => {
  return (
    <div className="main_home_page">
      {/* Section 1 */}
      <HeroSection />
      {/* Section 1 */}

      {/* slider*/}
      <Slider />
      {/* slider*/}

      {/* Section 2 */}
      <WhyScholarSwanSection />
      {/* Section 2 */}

      <KWWRB />

      <Testimonials />

      <Services />
      <Subscription />
    </div>
  );
};

export default Home;
