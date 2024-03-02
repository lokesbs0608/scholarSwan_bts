import React from "react";

import live_class from "../../Images/live_class.png";
import yoga_img from "../../Images/yoga_img.png";
import home_laptop from "../../Images/home_laptop.png";
import service_1 from "../../Images/service_1.png";
import service_2 from "../../Images/service_2.png";
import service_3 from "../../Images/service_3.png";
import { Link } from "react-router-dom";
import arrow_white from "../../Images/arrow_white.png";

const Services = () => {
  return (
    <div className="section5">
      <div className="section5-header">
        <h2>Services</h2>
      </div>

      <div className="row my-4 py-4  justify-content-center">
        <div className="card_ col-sm-12 col-md-3">
          <div class="card_header">
            <img className="" src={live_class} alt="arrow" />

            <h5>Online 3D live classes </h5>
          </div>
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
          <div className="card_footer">
            <Link to="/online-3d-live-classes">
              Learn more
              <img className="arrow_white " src={arrow_white} alt="arrow" />
            </Link>
          </div>
        </div>

        <div className="card_ col-sm-12 col-md-3">
          <div class="card_header">
            <img className="" src={yoga_img} alt="arrow" />

            <h5>Online Tutions</h5>
          </div>
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="card_footer">
            <Link to="/online-tution">
              Learn more
              <img className="arrow_white " src={arrow_white} alt="arrow" />
            </Link>
          </div>
        </div>

        <div className="card_ col-sm-12 col-md-3">
          <div class="card_header">
            <img className="" src={home_laptop} alt="arrow" />

            <h5>Home Tutions</h5>
          </div>
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
          <div className="card_footer">
            <Link to="/home-tution">
              Learn more
              <img className="arrow_white " src={arrow_white} alt="arrow" />
            </Link>
          </div>
        </div>

        <div className="card_ card-grey col-sm-12 col-md-3">
          <div className="card-container">
            <img src={service_1} alt="service_1" />
          </div>
        </div>
        <div className="card_ card-teal col-sm-12 col-md-3">
          <div className="card-container">
            <img src={service_2} alt="service_2" />
          </div>
        </div>

        <div className="card_ card-maroon col-sm-12 col-md-3">
          <div className="card-container">
            <img src={service_3} alt="service_3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
