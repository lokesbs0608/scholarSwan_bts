import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jyothi_img from "../../Images/jyothi_img.png";
import content_team from "../../Images/content_team.png";
import chandra_img from "../../Images/chandra_img.png";
import tech_stack from "../../Images/tech_stack.png";
import advertising from "../../Images/advertising.png";
import marketing from "../../Images/marketing.png";
import sales from "../../Images/sales.png";
import Tutors from "../../Images/Tutors.png";
import Parent from "../../Images/Parent.png";
import support from "../../Images/support.png";
import mission_icon from "../../Images/mission_icon.png";
import vision_icon from "../../Images/vision_icon.png";
import goals_icon from "../../Images/goals_icon.png";
import round_logo from "../../Images/Layer_1.png";
import round_logo1 from "../../Images/round_logo.png";

import Office_Team from "../../Images/Office_Team.png";
import about_us from "../../Images/about_us.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect } from "react";
import "swiper/css";

import "swiper/css/pagination";

export const card_details = [
  {
    id: 1,
    title: "Tech Stack",
    img: tech_stack,
  },
  {
    id: 2,
    title: "Tutors",
    img: Tutors,
  },
  {
    id: 3,
    title: "Student - parent management team",
    img: Parent,
  },
  {
    id: 4,
    title: "Office_Team",
    img: Office_Team,
  },
  {
    id: 5,
    title: "content team",
    img: content_team,
  },
  {
    id: 6,
    title: "advertising team",
    img: advertising,
  },
  {
    id: 7,
    title: "marketing team",
    img: marketing,
  },
  {
    id: 8,
    title: "sales team",
    img: sales,
  },
  {
    id: 9,
    title: "support team",
    img: support,
  },
];

const About = () => {
  const scrollToTop = () => {
    // window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const BulletPointsObj = [
    {
      icon: vision_icon,
      title: "Vision",
      description: `We go beyond the conventional way of teaching. We use new, modern, and innovative tools and techniques in our teaching. Our success comes from decades of valuable experience and our commitment to efficient teaching. Our goal is to give every student not just a fun learning experience, but to prepare them for competitive examination success and also to give them a lifetime of learning experience that goes beyond preparing for exams. Nurture their curiosity and passion, and develop a lifelong love for learning.`,
    },
    {
      icon: mission_icon,
      title: "Mission",
      description: `Our mission is to help every student succeed in their academic endeavours. In order to achieve this, we provide clear, comprehensive lessons, a nurturing environment, and problem-solving sessions with experienced mentors. We make learning fun and spark curiosity. Our aim is to encourage and inspire every student to improve their skills and competencies, enabling them to achieve higher exam scores.`,
    },
    {
      icon: goals_icon,
      title: "Goals and Aims",
      description: `Our goal is to give every student not just a fun learning experience, but to prepare them for competitive examination success and also to give them a lifetime of learn-ing experience that goes beyond preparing for exams. Nurture their curiosity and passion, and develop a lifelong love for learning.
    
    Our aim is to encourage and inspire every student to improve their skills and compe-tencies, enabling them to achieve higher exam scores. is the objective for mission`,
    },
  ];

  return (
    <>
      <div className="about_page">
        <div className="section_1">
          <div className="main_heading">
            <h3 class="header_title">
              About <span>Us</span>
            </h3>
            <p className="header_para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row py-4 my-4">
            <div className="col-sm-12 col-lg-5">
              <img className="img-fluid w-100" src={round_logo} alt="Round Logo" />
            </div>
            <div className="col-sm-12 col-lg-7">
              <h2 style={{ fontSize: "2rem", fontWeight: "400" }}>
                About{" "}
                <span style={{ fontWeight: "700" }} className="bold">
                  Scholar Swan
                </span>
              </h2>

              <p className="paragraph">
                Scholar Swan is more than a learning and educational platform.
                It is an active, dedicated, and engaging community of educators
                who aim to boost the intellectual curiosity and academic
                performance of students.
              </p>
              <p className="paragraph">
                We’re on a mission to teach students from grades 6 through 12 to
                expand their knowledge and hone their skills to achieve academic
                excellence.
              </p>
              <p className="paragraph">
                We teach beyond the regular textbooks. We encourage students to
                reach their full potential. This is done through personalized
                guidance and individualized attention.
              </p>
              <p className="paragraph">
                We know the significance of competitive examinations like JEE
                and NEET. These examinations are a stepping stone to admission
                into top-tier universities and future success. This is why we
                are here: to guide the students to tackle these examinations not
                only with confidence but also to excel in them.
              </p>
            </div>
          </div>

          <div className="section_para">
            <p className="paragraph">
              Though our primary goal is to prepare the students for JEE and
              NEET, we understand every student has diverse interests and
              individual aspirations. Keeping this in mind, we have expanded our
              expertise beyond JEE and NEET to help students prepare for other
              competitive examinations as well.
            </p>
            <p className="paragraph">
              We aim to provide end-to-end support to the students throughout
              their academic journey.
            </p>
            <p className="paragraph">
              Our commitment to academic pursuits sets us apart from our
              competitors. At Scholar Swan, we promise you a fulfilling and
              rewarding experience that not only nurtures your academic
              interests but also ignites your long-term passion for learning
            </p>
            <p className="paragraph">
              We commit to delivering high-quality education aligned with your
              individual goals. Come and join our lively community, where we not
              only teach but also empower you to discover your true potential.
              Become a part of Scholar Swan today!
            </p>
          </div>
        </div>

        <div className="container my-4 py-4">
          <div className="row align-items-start">
            {BulletPointsObj.map((item) => {
              return (
                <div className="col-sm-12 col-lg-4">
                  <h5 className="sub_heading">
                    <img className="vision_icon mx-2" src={item?.icon} />
                    {item?.title}
                  </h5>
                  <p className="paragraph">{item?.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="section_4">
          <div className="">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              loop={false}
              pagination={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                375: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                425: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },

                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },

                1440: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {card_details.map((data, index) => (
                <SwiperSlide key={data.id}>
                  <div className="card-main container">
                    <div className="card-img">
                      <img  style={{objectFit:'contain'}} src={data.img} />
                      <p className="title">{data.title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="container my-54 py-4">
        <div className="text-center">
            <h2>Founders</h2>
          </div>
        <div className="section_5">
       
          <div className="row align-items-center">
            <div className=" col-sm-12 col-lg-5">
              <img className="jyothi_img" src={jyothi_img} />
            </div>
            <div className=" col-sm-12 col-lg-7">
              <h4 className="founder_name">JYOTHI R </h4>
              <p className="profile">DIRECTOR , CO FOUNDER</p>
              <p className="paragraph">
                I taught by choice but soon found my passion for teaching. I
                realized this through my experiences in various educational
                programs. My academic background is a Master of Science degree
                from Bangalore University. Throughout my career, I’ve published
                many research papers in international Journals.. my current role
                at Scholar SWAN, I hold multifaceted roles and responsibilities.
                My role spans across some key areas of the organization.
              </p>
              <p className="paragraph">
                In Scholar Swan I am responsible for student academic
                performance management, tutor training, quality assurance
                content management and academic innovations in guiding product,
                process and deliver.
              </p>
            </div>
          </div>
        </div>
        <div className="section_6">
          <div   style={{textAlign:'right'}} className="row align-items-center" >
            <div className="col-7 col-lg-7 col-sm-12">
              <h4 className="founder_name">CHANDRA SHEKARA K V </h4>
              <p className="profile">CO FOUNDER</p>
              <p className="">
                I juggle variety of responsibilities as a consultant,
                researcher, and educator. I served my tenure as chemistry
                lecturer at Alliance University Bangalore. This experience
                helped me establish myself as a renowned expert in the field. my
                passion lies in teaching. In my career, I have had the privilege
                of mentoring hundreds of students. Through teaching, I am able
                to inspire them. This is the joy I derive from teaching .
              </p>
              <p className="paragraph">
                In Scholar SWAN, I am responsible for the strategic planning,
                marketing, branding, and financial initiatives. In this role, I
                am able to apply my unique skills and experiences. I am able to
                contribute to the organization’s ongoing success. My ultimate
                goal is to use my skills for the growth and success of the
                organization. At the same time empower students to reach their
                academic goals. By doing so, I can make a significant impact on
                the lives of students academic en-devours.
              </p>
            </div>
            <div className="col-4 col-lg-5 col-12">
              <img className="chandra_img" src={chandra_img} />
            </div>
          </div>
        </div>
        </div>
     
      </div>
    </>
  );
};

export default About;
