import React, { useState, useEffect } from "react";
import step1 from "./Images/step1.png";
import step2 from "./Images/step2.png";
import step3 from "./Images/step3.png";
import step4 from "./Images/step4.png";
import step5 from "./Images/step5.png";
import step6 from "./Images/step6.png";

import step1SVG from "../../svg/step1.svg";
import step2SVG from "../../svg/step2.svg";
import step3SVG from "../../svg/step3.svg";
import step4SVG from "../../svg/step4.svg";
import step5SVG from "../../svg/step5.svg";
import step6SVG from "../../svg/step6.svg";

import "./KWWRB.scss";

const KWWRB = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullContent(!showFullContent);
  };

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 6 ? prevProgress + 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [progress]);

  const stepsObj = [
    { title: "", icon: step1SVG },
    { title: "", icon: step2SVG },
    { title: "", icon: step3SVG },
    { title: "", icon: step4SVG },
    { title: "", icon: step4SVG },
    { title: "", icon: step5SVG },
  ];

  return (
    <>
      {/* web design */}
      <div id="section3" className="d-none  d-md-flex d-lg-flex">
        <div id="overlay-content">
          <h2>
            Know why we are <span>Best</span>
          </h2>

          <div id="steps">
            <div className="flex-center">
              <div className="card-box">
                <div className="card-header">
                  <h3 className={`${progress >= 1 ? "active" : ""}`}>01</h3>
                </div>
                <div className={`card-circle ${progress >= 1 ? "active" : ""}`}>
                  <img
                    src={step1}
                    className={`card-image ${progress >= 1 ? "active" : ""}`}
                    alt=""
                  />
                </div>
                <div className="card-footer">
                  <h4 className={`${progress >= 1 ? "active" : ""}`}>
                    Skill <br /> Refinement
                  </h4>
                </div>
              </div>

              <div
                className={`card-lines ${progress >= 2 ? "active" : ""}`}
              ></div>

              <div className="card-box">
                <div className="card-header">
                  <h3 className={`${progress >= 2 ? "active" : ""}`}>02</h3>
                </div>
                <div className={`card-circle ${progress >= 2 ? "active" : ""}`}>
                  <img src={step2} className="card-image" alt="" />
                </div>
                <div className="card-footer">
                  <h4 className={`${progress >= 2 ? "active" : ""}`}>
                    Motivational <br /> Support
                  </h4>
                </div>
              </div>

              <div
                className={`card-lines ${progress >= 3 ? "active" : ""}`}
              ></div>

              <div className="card-box">
                <div className="card-header">
                  <h3 className={`${progress >= 3 ? "active" : ""}`}>03</h3>
                </div>
                <div className={`card-circle ${progress >= 3 ? "active" : ""}`}>
                  <img src={step3} className="card-image" alt="" />
                </div>
                <div className="card-footer">
                  <h4 className={`${progress >= 3 ? "active" : ""}`}>
                    Parental <br /> Satisfaction
                  </h4>
                </div>
              </div>

              <div
                className={`card-lines ${progress >= 4 ? "active" : ""}`}
              ></div>

              <div className="card-box">
                <div className="card-header">
                  <h3 className={`${progress >= 4 ? "active" : ""}`}>04</h3>
                </div>
                <div className={`card-circle ${progress >= 4 ? "active" : ""}`}>
                  <img src={step4} className="card-image" alt="" />
                </div>
                <div className="card-footer">
                  <h4 className={`${progress >= 4 ? "active" : ""}`}>
                    Pre-Exam
                    <br />
                    Counseling
                  </h4>
                </div>
              </div>

              <div
                className={`card-lines ${progress >= 5 ? "active" : ""}`}
              ></div>

              <div className="card-box">
                <div className="card-header">
                  <h3 className={`${progress >= 5 ? "active" : ""}`}>05</h3>
                </div>
                <div className={`card-circle ${progress >= 5 ? "active" : ""}`}>
                  <img src={step5} className="card-image" alt="" />
                </div>
                <div className="card-footer">
                  <h4 className={`${progress >= 5 ? "active" : ""}`}>
                    Student
                    <br />
                    Mentoring
                  </h4>
                </div>
              </div>

              <div
                className={`card-lines ${progress >= 6 ? "active" : ""}`}
              ></div>

              <div className="card-box">
                <div className="card-header">
                  <h3 className={`${progress >= 6 ? "active" : ""}`}>06</h3>
                </div>
                <div className={`card-circle ${progress >= 6 ? "active" : ""}`}>
                  <img src={step6} className="card-image" alt="" />
                </div>
                <div className="card-footer">
                  <h4 className={`${progress >= 6 ? "active" : ""}`}>
                    Result
                    <br />
                    Commitment
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile design */}
      <div className="d-block  d-md-none d-lg-none mob_div ">
        <div className="gradient_bg">
          <div className="py-4 space-4 text-center heading">
            Know Why <br /> We are <strong> Best</strong>
          </div>
          {stepsObj.map((item, index) => {
            return (
              <div className="steps_container my-2 py-4">
                <div className="step_number w-25 text-start mx-2">
                  {index % 2 !== 0 ? `0${index + 1}` : ""}
                </div>

                <div className="mob_steps ">
                  <img
                    className="img-fluid w-50"
                    src={item?.icon}
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="step_number w-25 text-end mx-2">
                  {index % 2 === 0 ? `0${index + 1}` : ""}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default KWWRB;
