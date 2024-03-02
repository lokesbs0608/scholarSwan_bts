import React from "react";
import "./tutor.scss";
import Form from "./tutorFrom";
import tutorImage from "../../Images/tutor.png";
import tutuorHandsBg from "../../Images/tutorHandsBg.png";

const Tutor = () => {
  return (
    <div className="tutor-main">
      <div id="section1-tutor">
        <div className="tutor">
          <h1>
            ScholarSWAN <span>TUTOR</span>
          </h1>
        </div>
        <img className="img-fluid w-25" src={tutorImage} alt="" />
      </div>

      <div className="circle_bg">
        <div id="section2-tutor">
          <div className="form">
            <Form heading="Become a<br/><b>scholarSWAN TUTOR</b>" />
          </div>
        </div>
        <div>
          <img
            className="img-fluid w-100"
            src={tutuorHandsBg}
            alt="scholarswan"
          />
        </div>
      </div>
    </div>
  );
};

export default Tutor;
