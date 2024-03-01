import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Program from "../pages/program";
import Services from "../pages/services";
import About from "../pages/about";
import ContactUs from "../pages/Contactus";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/program" Component={Program} />
        <Route path="/services" Component={Services} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={ContactUs} />
      </Routes>
    </div>
  );
};

export default Routers;
