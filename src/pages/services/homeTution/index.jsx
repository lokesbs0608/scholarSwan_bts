import React, { useEffect } from "react";
import Service from '../layout'
import background from "../../../Images/service-banner-3.png";
import service_img3 from "../../../Images/service_img3.png";
import bag_pack from "../../../Images/bag-pack.png";
import book_iamge from "../../../Images/book_img.png";
import hand_icon from "../../../Images/hand-icon.png";


export const section_details = [
  {
    id: 1,
    image: bag_pack,
    content: `<p><img src=${hand_icon} alt='hand-icon' /> <b>Individual Focus :</b> Home tuition provides individual attention. It enables the tutor to focus on the unique learning needs and speed of the student. Tutors can tackle specific learning problems.</p><p><img src=${hand_icon} alt='hand-icon' /> <b>Adapted Learning :</b> Tutors can alter the teaching techniques and resources as per the student's needs. This enables a more individualized approach and an efficient learning experience.</p><p><img src=${hand_icon} alt='hand-icon' /> <b>Personalized Help :</b> Home tuition is great for students who struggle with certain subjects. Tutors can strengthen the concepts taught in school. They can assist the students in maintaining school progress.</p><p><img src=${hand_icon} alt='hand-icon' /> <b>Test Preparation :</b> A large number of students seek home tuition for exam preparation. Whether it is for school examinations or entrance exams, tutors can focus on strategies to address them. They can help students revisit particular concepts to improve their performance.</p>`,
  },
  {
    id: 2,
    image: book_iamge,
    content: `<p><img src=${hand_icon} alt='hand-icon' /> <b>Progressive Learning :</b> Some students use home tuition to go ahead of the school syllabus. Tutors can address more complex topics or delve deeper into particular subjects.</p><p><img src=${hand_icon} alt='hand-icon' /> <b>Homework Support :</b> Tutors can ensure that students grasp the concepts well and complete assignments on time.” “This extra aid can reinforce what students have learned in the classroom.”</p><p><img src=${hand_icon} alt='hand-icon' /> <b>Develop skills :</b> Home tuition can extend beyond academic subjects. They can assist students in developing vital skills. Time management, study strategies, critical thinking, and problem-solving are all crucial skills for development.</p><p><img src=${hand_icon} alt='hand-icon' /> <b>Learning languages :</b> Tutors can help students learn a language and improve pronunciation. They can provide extra practice on the subject. This can enhance a student's language learning skills.</p>`,
  },
];

export const online_details = {
  main_heading: "Home Tuitions",
  image: service_img3,
  text_color: "#363636",
  content1:
    "<p>We take immense pride in being a premier educational service provider of personalized home tuition and individual coaching services.</p><p>Our extensive network of qualified private tutors’ spreads across major cities. We are the preferred choice of students in both metropolitan areas and 2-tier and 3-tier cities.</p><p>Whether you seek a professional home tutor or prefer online tutoring, we've got you covered. We have comprehensive solutions for your needs.</p><p>Our primary focus centres on the K–12 segment of the Indian educational sector. This includes the boards and curriculum of CBSE, ICSE, IGCSE and all state boards.  We recognize the diverse educational landscape. We aim to cater to the specific requirements of students across different boards.</p><p>We are on the cusp of introducing a customized coaching program. “We have crafted this program for NEET and JEE aspirants.” </p><p>“We commit to providing specialized guidance and support to students aspiring to take competitive exams.”",
  sub_heading: "Home Tuitions",
  content2: false,
};

export default function HomeTution() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <Service
        main_heading={online_details.main_heading}
        backgroundImage={background}
        image={online_details.image}
        text_color={online_details.text_color}
        content1={online_details.content1}
        sub_heading={online_details.sub_heading}
        content2={online_details.content2}
        sub_section={section_details}
      />
    </div>
  );
}
