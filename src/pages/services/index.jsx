import React from "react";
import "./services.scss";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import HoverImageNavLink from "../../components/CustomHoverButton";
import ServiceImage from "../../Images/service_mobile_BG2.png";
import OnlineFirstImage from "../../Images/onlineFirst.png";
import OnlineTuitionPng from "../../Images/onlineTution.png";
import HomeTution from "../../Images/homeTution.png";
import RightHomeImage from "../../Images/right-home.png";
import onLineRightImage from "../../Images/onlineright.png";
import RightOnlineImage from "../../Images/right-online.png";
import MobileArrowImage from '../../Images/mobile-arrow.png'

const Services = () => {
  const serviceObj = [
    {
      id: 0,
      title: "Online 3d live classes",
      description: `Our 3D Live Classes leverage advanced 3D technology, which creates a captivating learning environment that brings any subject to life.`,
      path: "/online-3d-live-classes",
      color: "#ff95bcf3",
      bg_image: OnlineFirstImage,
      right_image: onLineRightImage,
    },
    {
      id: 1,
      title: "/Online tuitions",
      description: ` Enjoy the flexibility of scheduling and engaging 3D
      animated classes, all of which are recorded for your ease.`,
      path: "/online-tution",
      color: "#8bc2de",
      bg_image: OnlineTuitionPng,
      right_image: RightHomeImage,
    },
    {
      id: 2,
      title: "Home tuitions",
      description: `We take immense pride in being a premier educational
      service provider of personalized home tuition and
      individual coaching services.`,
      path: "/home-tution",
      color: "#ffdb59",
      bg_image: HomeTution,
      right_image: RightOnlineImage,
    },
  ];
  return (
    <>
      <div className="service-main">
        <div id="section1-service" class="">
          <div class="service">
            <h1>Services</h1>
          </div>
          <img class="service_image" src={ServiceImage} alt="" />
        </div>
        <img src={ServiceImage} class=" mobile-image" alt="" />

        <div
          id="section2-service"
          className="px-4 mx-4 d-sm-none d-md-none d-lg-block"
        >
          <div id="swiper-program">
            <div className="swiper-container-program">
              {serviceObj.map((item) => {
                return (
                  <div
                    key={item?.id}
                    style={{
                      background: item?.color,
                      backgroundImage: item?.bg_image,
                    }}
                    className="swiper-program"
                  >
                    <img src={item?.bg_image} alt="services" />
                    <div className="over">
                      <div className="left">
                        <h4>{item?.title}</h4>
                        <p>{item?.description}</p>
                        <HoverImageNavLink
                          to={item?.path}
                          activeClassName="menu_active"
                          className="button"
                        >
                          Know More
                        </HoverImageNavLink>
                      </div>
                      <div className="right">
                        <img src={item?.right_image} alt="" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        
      
        </div>
        <div class="row align-items-center justify-content-center d-sm-block d-md-none d-lg-none">
              {serviceObj.map((item) => {
                return (
                    <div style={{backgroundImage:item?.bg_image,backgroundColor:item?.color}} className="d-flex align-items-center p-2 col-12">
                      <div className="left-side">
                        <h1 className="text-mobile-inner-div1">
                          {item?.title}
                        </h1>
                        <p className="text-mobile-inner-div2">
                          {item?.description}
                        </p>
                        <button className="text-mobile-inner-div-btn">
                          <NavLink to={item?.path}>
                            Know more <img src={MobileArrowImage} />
                          </NavLink>
                        </button>
                      </div>
                      <div className="img fluid w-100">
                        <img src={item?.right_image} alt="" />
                      </div>
                    </div>
              
                );
              })}
            </div>

        <div className="container py-2">
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
