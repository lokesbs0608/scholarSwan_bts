import { useState } from "react";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import SecondaryNav from "./components/SecondaryNav";
import Navbar from "./components/Navbar";
import SocialBanner from "./components/SocialBanner";
import Footer from "./components/Footer";
import Routers from "./routes";
function App() {
  return (
    <>
      <div>
        <SecondaryNav />
      </div>
      <Navbar />
      <SocialBanner />
      <Routers />
      <Footer />
    </>
  );
}

export default App;
