import React from "react";
import "./Secondarynav.scss";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import frame from "./Frame.png";
import { NavLink } from "react-router-dom";

const SecondaryNav = () => {
  return (
    <div className="header">
      <div className="d-flex align-items-center text-center justify-content-center py-2">
        <div className="d-flex  text-center justify-content-center">
          <IoIosMail className=" icon mx-1" />
          <h6 className="text-center mx-1" >info@scholarswan.com</h6>
        </div>

        <div className="text-white mx-3 font-semibold">|</div>

        <div className="d-flex  justify-content-center">
          <FaPhoneAlt className=" mx-1 icon" />
          <h6 className="text-center mx-1">+91 12345 6789 / +91 98765 43210</h6>
        </div>
      </div>

      <div className="right">
        <div className="tutor">
          <NavLink to="/tutor">
            <img className="frame" src={frame} alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNav;
