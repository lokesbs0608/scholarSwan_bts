import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Program from "../pages/program";
import Services from "../pages/services";
import About from "../pages/about";
import ContactUs from "../pages/Contactus";
import FAQ from "../pages/faq";
import Online3DClassService from "../pages/services/online3dClases";
import OnlineTutionClassService from "../pages/services/onlineTution";
import HomeTutionService from "../pages/services/homeTution";
import Tutor from "../pages/tutor";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/program" Component={Program} />
        <Route path="/services" Component={Services}/>
        <Route
          path="/online-3d-live-classes"
          Component={Online3DClassService}
        />
        <Route path="/online-tution" Component={OnlineTutionClassService} />
        <Route path="/home-tution" Component={HomeTutionService} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={ContactUs} />
        <Route path="/faq" Component={FAQ} />
        <Route path="/tutor" Component={Tutor} />
      </Routes>
    </div>
  );
};

export default Routers;
