import React from 'react'
import './index.scss'
import date_icon1 from '../../Images/card-date-1.svg'
import date_icon2 from '../../Images/card-date-2.svg'
import date_icon3 from '../../Images/card-date-3.svg'
import date_icon4 from '../../Images/card-date-4.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const pricing_details = [
    {
        id: 1,
        title: "Monthly",
        image: date_icon1,
        price: "1200 <span>INR</span>",
        link: "",
        background_circle:"#C4FE96",
        linear_gradient: "334.14deg, rgba(163, 255, 188, 0.71) -18.24%, #FFFFFF 81.3%"
    },
    {
        id: 2,
        title: "Quarterly",
        image: date_icon2,
        price: "3500 <span>INR</span>",
        link: "",
        background_circle:"#FFD0D0",
        linear_gradient: "334.14deg, rgba(255, 71, 159, 0.6) -18.24%, #FFFFFF 81.3%"
    },
    {
        id: 3,
        title: "Semi-Annually",
        image: date_icon3,
        price: "6800 <span>INR</span>",
        link: "",
        background_circle:"#C8F5FB",
        linear_gradient: "334.14deg, rgba(153, 191, 249, 0.71) -18.24%, #FFFFFF 81.3%"
    },
    {
        id: 4,
        title: "Annually",
        image: date_icon4,
        price: "12000 <span>INR</span>",
        link: "",
        background_circle:"#FFF495",
        linear_gradient: "334.14deg, rgba(255, 239, 92, 0.71) -18.24%, #FFFFFF 81.3%"
    }
]

const Pricing = ({main_heading}) => {
    return (
        <>
            <section className="pricing p-20">
                <div className="pricing-header p-20">
                    <h2>Packages <span>&</span> Pricing</h2>
                </div>
                <div className="pricing-section container p-20">
                    <Swiper
                        slidesPerView={4}
                        // spaceBetween={0}
                        navigation={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 50,
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
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1440: {
                                slidesPerView: 4,
                                spaceBetween: 5,
                            },
                        }}
                        modules={[Navigation, Autoplay]}
                        className="pricing-swiper"
                    >
                        {
                            pricing_details.map((data) => (
                                <SwiperSlide key={data.id}>
                                    <div className="pricing-card">
                                        <div className="card_header">
                                            <div className="heading">
                                                <h3>{data.title}</h3>
                                            </div>
                                        </div>
                                        <div className="card-body flex-center" style={{"--linear": data.linear_gradient}}>
                                            <div className="card-body-top flex-center">
                                                <div className="section section-circle" style={{"--bg": data.background_circle}}>
                                                    <img src={data.image} alt="date-icon" />
                                                </div>
                                                <div className="section">
                                                    <h4>{main_heading}</h4>
                                                </div>
                                            </div>
                                            <div className="card-body-bottom flex-center pt-4 mt-4">
                                                <div className="section">
                                                    <h3 dangerouslySetInnerHTML={{ __html: data.price }} />
                                                </div>
                                                <div className="section mt-4">
                                                    <a className='card-button'>Enroll now <div className="btn-icon"></div> </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Pricing
