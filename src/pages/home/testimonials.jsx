import React from 'react';
import testimonial_img1 from "../../Images/testimonial_img1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../App.scss'

const Testimonials = () => {
  return (
    <div id="section4" className='pt-4 py-4'>
    <div className=" " id="pg4-content">
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
              <div className="gap-2" id="swiper-pg4">
                <div className="member ">
                  <p className=''>
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
  )
}

export default Testimonials