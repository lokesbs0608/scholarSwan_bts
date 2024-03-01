import React from "react";
import "./services.scss";
import { NavLink } from "react-router-dom";

import HoverImageNavLink from "../../components/CustomHoverButton";

const Services = () => {
  return (
    <>
      <div className="service-main">
        <div id="section1-service" class="">
          <div class="service">
            <h1>Services</h1>
          </div>
          <img class="service_image" src="/services.png" alt="" />
        </div>
        <img src="/service_mobile_BG2.svg" class=" mobile-image" alt="" />

        <div id="section2-service">
          <div id="swiper-program">
            <div className="swiper-container-program">
              <div className="swiper-program">
                <img src="/onlineFirst.png" alt="" />
                <div className="over">
                  <div className="left">
                    <h4>Online 3D live classes</h4>
                    <p>
                      Our 3D Live Classes leverage advanced 3D technology, which
                      creates a captivating learning environment that brings any
                      subject to life.
                    </p>
                    <HoverImageNavLink
                      to={"/online-3d-live-classes"}
                      activeClassName="menu_active"
                      className="button"
                    >
                      Know More
                    </HoverImageNavLink>
                  </div>
                  <div className="right">
                    <img src="/onlineright.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="swiper-program">
                <img src="/onlineTution.png" alt="" />
                <div className="over">
                  <div className="left">
                    <h4>Online tuitions</h4>
                    <p>
                      Enjoy the flexibility of scheduling and engaging 3D
                      animated classes, all of which are recorded for your ease.
                    </p>

                    <HoverImageNavLink
                      to={"/online-tution"}
                      activeClassName="menu_active"
                      className="button"
                    >
                      Know More
                    </HoverImageNavLink>
                  </div>
                  <div className="right">
                    <img src="/right-home.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="swiper-program">
                <img src="/homeTution.png" alt="" />
                <div className="over">
                  <div className="left">
                    <h4>Home tuitions</h4>
                    <p>
                      We take immense pride in being a premier educational
                      service provider of personalized home tuition and
                      individual coaching services.
                    </p>

                    <HoverImageNavLink
                      to={"/home-tution"}
                      activeClassName="menu_active"
                      className="button"
                    >
                      Know More
                    </HoverImageNavLink>
                  </div>
                  <div className="right">
                    <img src="/right-online.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-service-cards">
              <div class="row">
                <div class="column">
                  <div class="card card_service1">
                    <div className="inner-div">
                      <div className="left-side">
                        <h1 className="text-mobile-inner-div1">
                          Online 3D Live Classes
                        </h1>
                        <p className="text-mobile-inner-div2">
                          Our 3D Live Classes leverage advanced 3D technology,
                          which creates a captivating learning environment that
                          brings any subject to life.
                        </p>
                        <button className="text-mobile-inner-div-btn">
                          <NavLink to="/online-3d-live-classes">
                            Know more <img src="/mobile-arrow.png" />
                          </NavLink>
                        </button>
                        {/* <NavLink
                      className="button text-mobile-inner-div-btn"
                      activeClassName="menu_active"
                      to="/online-3d"
                    >
                      Know More <img src="/mobile-arrow.png"/>
                      </NavLink> */}
                      </div>
                      <div className="right-side">
                        <img src="/mobile-first-div.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="column">
                  <div class="card card_service2">
                    <div className="inner-div">
                      <div className="left-side">
                        <h1 className="text-mobile-inner-div1">
                          Online tuitions
                        </h1>
                        <p className="text-mobile-inner-div2">
                          We take immense pride in being a premier educational
                          service provider of personalized home tuition and
                          individual coaching services.
                        </p>
                        <button className="text-mobile-inner-div-btn button">
                          <NavLink to="/online-tution">
                            Know more <img src="/mobile-arrow.png" />
                          </NavLink>
                        </button>
                      </div>
                      <div className="right-side">
                        <img src="/mobile-second-div.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="column">
                  <div class="card card_service3">
                    <div className="inner-div">
                      <div className="left-side">
                        <h1 className="text-mobile-inner-div1">
                          Home tuitions
                        </h1>
                        <p className="text-mobile-inner-div2">
                          We take immense pride in being a premier educational
                          service provider of personalized home tuition and
                          individual coaching services.
                        </p>
                        <button className="text-mobile-inner-div-btn">
                          <NavLink to="/home-tution">
                            Know more <img src="/mobile-arrow.png" />
                          </NavLink>
                        </button>
                      </div>
                      <div className="right-side">
                        <img src="/mobile-third-div.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="section3-service">
          <h1>ONLINE 3D LIVE CLASSES</h1>
          <p>
            Explore the world of interactive online live classes with 3D
            technology. The state-of-the-art 3D technology fosters a deep,
            engaging learning atmosphere. Our smart classes have flexible
            timetables, saving valuable time. 3D Technology allows real-time
            dialogue between parents and tutors. Attend live classes enriched
            with animated elements. You can gain access to recorded sessions
            24/7. Enjoy individual attention at a reasonable price. Enrich your
            educational journey with certified teachers.
          </p>
          <p>
            We provide inclusive study resources, regular mock examinations, and
            problem-solving sessions. Our study material provides a
            comprehensive learning experience.
          </p>

          <h1>ONLINE TUTORIALS</h1>
          <p>
            Scholar Swan offers a holistic online learning experience. We merge
            conventional teaching techniques with modern technology. Our
            certified tutors ensure that your child receives the right guidance
            and support.
          </p>
          <p>
            Dive into a smooth, interactive virtual classroom experience. Our
            courses are available 24/7, on any device, from any location. We
            offer a smooth and engaging experience in our interactive virtual
            classrooms.
          </p>

          <h1 className="bottom-text">
            HOME TUITIONS/ONE ON ONE PERSONALIZED COACHING
          </h1>
          <p className="">
            If you need individual attention, then home tuition is the solution
            for you. Our experienced home tutors have decades of experience.
            They will enhance your learning experience. They can tackle specific
            academic hurdles. They can cater to your unique learning needs. With
            home tuition, you will experience personalized interactions. We
            provide a customized curriculum that addresses your individual
            academic problems.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
