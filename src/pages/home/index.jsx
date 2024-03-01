import React, { useState, useEffect } from "react";
import "./home.scss";
import web from "./Images/pg2-ig.png";
import bgimg from "./Images/image-from-rawpixel-id-9030551-original 1.png";
import hero_section from "../../Images/hero_section.png";
import know_why_we_are_best from "../../Images/know-why-we-are-best.png";
import step1 from "./Images/step1.png";
import step2 from "./Images/step2.png";
import step3 from "./Images/step3.png";
import step4 from "./Images/step4.png";
import step5 from "./Images/step5.png";
import step6 from "./Images/step6.png";
import card4 from "./Images/card4.png";
import card5 from "./Images/card5.png";
import card6 from "./Images/card6.png";
import { FaCaretDown } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
// import Form from "../Form/Form";
import arrow_white from "../../Images/arrow_white.png";
import slider_left from "../../Images/slider_left.png";
import slider_right from "../../Images/slider_right.png";
import text_bg from "../../Images/text_bg.png";
import Floating_books from "../../Images/Floating_books.png";
import testimonial_img1 from "../../Images/testimonial_img1.png";
import testimonial_img2 from "../../Images/testimonial_img2.png";
import testimonial_img3 from "../../Images/testimonial_img3.png";
import live_class from "../../Images/live_class.png";
import yoga_img from "../../Images/yoga_img.png";
import home_laptop from "../../Images/home_laptop.png";
import Floating_astronaut from "../../Images/Floating_astronaut.png";
import service_1 from "../../Images/service_1.png";
import service_2 from "../../Images/service_2.png";
import service_3 from "../../Images/service_3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSection from "./heroSection";
import Slider from "./slider";
import WhyScholarSwanSection from "../home/whyScholarSwansection";
import KWWRB from "./KWWRB.jsx";

const Home = () => {
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

      <div id="section4">
        <div id="pg4-content">
          <h2>
            What Our Students <span>Have To Say</span>
          </h2>
          <Swiper
            navigation={true}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              375: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              425: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((items) => {
              return (
                <SwiperSlide>
                  <div id="swiper-pg4">
                    <div className="member">
                      <p>
                        <span>
                          <svg
                            width="60"
                            height="60"
                            viewBox="0 0 60 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.22759 15.73C12.7351 11.9275 18.0426 10 25.0001 10H27.5001V17.0475L25.4901 17.45C22.0651 18.135 19.6826 19.4825 18.4076 21.46C17.7423 22.5253 17.365 23.7451 17.3126 25H25.0001C25.6631 25 26.299 25.2634 26.7679 25.7322C27.2367 26.2011 27.5001 26.837 27.5001 27.5V45C27.5001 47.7575 25.2576 50 22.5001 50H7.50009C6.83705 50 6.20117 49.7366 5.73233 49.2678C5.26349 48.7989 5.00009 48.163 5.00009 47.5V35L5.00759 27.7025C4.98509 27.425 4.51009 20.85 9.22759 15.73ZM50.0001 50H35.0001C34.3371 50 33.7012 49.7366 33.2323 49.2678C32.7635 48.7989 32.5001 48.163 32.5001 47.5V35L32.5076 27.7025C32.4851 27.425 32.0101 20.85 36.7276 15.73C40.2351 11.9275 45.5426 10 52.5001 10H55.0001V17.0475L52.9901 17.45C49.5651 18.135 47.1826 19.4825 45.9076 21.46C45.2423 22.5253 44.865 23.7451 44.8126 25H52.5001C53.1631 25 53.799 25.2634 54.2679 25.7322C54.7367 26.2011 55.0001 26.837 55.0001 27.5V45C55.0001 47.7575 52.7576 50 50.0001 50Z"
                              fill="#FFC335"
                            />
                          </svg>
                        </span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Deserunt fugit laboriosam labore tenetur hic
                        commodi nihil inventore. Harum doloremque error eveniet
                        adipisci, iusto odit, non molestiae officiis est nihil
                        recusandae?
                      </p>
                      <div className="bottom">
                        <div className="profiles">
                          <img
                            className="testimonial_img1 "
                            src={testimonial_img1}
                            alt="arrow"
                          />
                        </div>
                        <div>
                          <h4>Sunita Pandit</h4>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className="section5">
        <div className="section5-header">
          <h2>Services</h2>
        </div>

        <div className="section5-container">
          <div className="section5-grid">
            <div class="card">
              <div class="card_header">
                <img className="" src={live_class} alt="arrow" />

                <h5>Online 3D live classes </h5>
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
              <div className="card_footer">
                <Link to="/online-3d-live-classes">
                  Learn more
                  <img className="arrow_white " src={arrow_white} alt="arrow" />
                </Link>
              </div>
            </div>

            <div class="card">
              <div class="card_header">
                <img className="" src={yoga_img} alt="arrow" />

                <h5>Online Tutions</h5>
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="card_footer">
                <Link to="/online-tution">
                  Learn more
                  <img className="arrow_white " src={arrow_white} alt="arrow" />
                </Link>
              </div>
            </div>

            <div class="card">
              <div class="card_header">
                <img className="" src={home_laptop} alt="arrow" />

                <h5>Home Tutions</h5>
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do.
                </p>
              </div>
              <div className="card_footer">
                <Link to="/home-tution">
                  Learn more
                  <img className="arrow_white " src={arrow_white} alt="arrow" />
                </Link>
              </div>
            </div>

            <div class="card card-grey">
              <div className="card-container">
                <img src={service_1} alt="service_1" />
              </div>
            </div>
            <div class="card card-teal">
              <div className="card-container">
                <img src={service_2} alt="service_2" />
              </div>
            </div>
            <div class="card card-maroon">
              <div className="card-container">
                <img src={service_3} alt="service_3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="section6">
        <div id="bg-p6">
          <div id="circle1-pg6"></div>
          <div id="circle2-pg6"></div>
          <div id="circle3-pg6"></div>
          <div id="circle4-pg6"></div>
          <div id="circle5-pg6"></div>
          <div id="circle6-pg6"></div>
        </div>
        <div id="content-p6">
          <h2>
            Subscribe to our <span>newsletter</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div
            id="mail"
            className="d-flex align-items-center justify-content-center"
          >
            <input
              className="text-black"
              type="text"
              placeholder="Enter your email address"
            />
            <button>
              <i class="ri-send-plane-fill"></i> Subscribe
            </button>
          </div>
        </div>
        {/* <img
          src="https://s3-alpha-sig.figma.com/img/ef2f/0396/a4d1a952a55a912f0159023397da1488?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qMoNT1wnSZcU~thBLlpun0DEfyY88T98E1lkzJ4~u0FuFsBbV2v7ViW9ZOpPVX5jMslGkUhHN20rgEV5LxjgGNOp8RWWjeHc~6OJIJKQ-OFT~tdo9qpW3diAvdRX0zgAHNgdYef2MNOosmp3RbmbiD5Zvb0WHjWGxNrY6lDzOlTeshKocZiMXThJXKcrbmC95qWtDEoCfE8sTZUVJ0GDa-4kin8xQzoM7WywF5Zn3etAh55lRbU~3aSwKdYvLivXzlMbZZXJrne6m7ZnlTlnvWHl~SF~IRmBV5~BfOao73YBO6zMpDF3YjEhKHRK7RJt2PtVFt9iOFg~lUJxbLbqhA__"
          alt=""
        /> */}
        <img
          className="Floating_astronaut "
          src={Floating_astronaut}
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default Home;
