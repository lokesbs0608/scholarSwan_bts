import React from "react";
import Service from "../layout";
import service_img2 from "../../../Images/service_img2.png";
import bag_pack from "../../../Images/bag-pack.png";
import background from "../../../Images/service-banner-2.png";
import { useEffect } from "react";

export const section_details = [
  {
    id: 1,
    image: bag_pack,
    content:
      "<p>Imagine a learning experience that comes to your home. Our online tuition offers a high-quality education in the comfort of your surroundings. You get the advantage of online tutoring in a virtual home setting.</p><p>Our certified tutors provide personalized attention to meet your unique learning needs.</p><p>You have easy access to high-quality educational content with pre-recorded video lectures. This makes learning more fun. The course offers convenient schedules, enabling you to learn at your preferred speed.</p><p>One of the key aspects of our online tutorials is real-time parental involvement. Parents can stay involved in their child’s educational progress. We update parents on a regular basis.</p><p>We believe that education should be accessible and affordable to all. Hence, we provide cost-effective options that deliver a high-quality education that fits your budget.</p>",
  },
];

export const online_details = {
  main_heading: "Online Tuitions",
  image: service_img2,
  text_color: "#fff",
  content1:
    "<p>Scholar Swan is committed to revolutionizing student learning experiences. Our platform is tailored to meet the distinct requirements of each student, cultivating an engaging and accessible learning atmosphere.</p><p>Scholar Swan, with its team of dedicated tutors, ensures your child gets the needed guidance for a successful academic journey.</p><p>Enroll in our educational program, guided by a highly qualified and certified team of educators. Enjoy the flexibility of scheduling and engaging 3D animated classes, all of which are recorded for your ease. </p><p>In these online tuitions, you can utilize our extensive study materials to boost your technical abilities through interactive sessions, examination papers, and a self-guided learning approach. </p><p>You can delve into a wealth of course videos, readings, and a digital library readily available to you. Take advantage of assignments evaluated by peers, coupled with downloadable resources, for a fulfilling and enriching learning journey.</p>",
  sub_heading: "Online Tuitions",
  content2:
    "<p>With online tuition, learning is continuous. You can attend the online sessions on your mobile device or tablet. We offer convenient accessibility, regardless of your location. </p><p>Our learning approach is practical. We use applied learning through practical examples. This helps the students prepare for real-world challenges.</p><p>Our comprehensive learning package includes study resources, animated clips, and weekly tests. We ensure that students have all the necessary resources to achieve success.</p><p>We commit to your academic success. We promise to prepare you for an incredible educational journey that will shape your future.</p><p>Enroll now for our online live classes. Take the first step towards enhancing your learning experience.</p>",
};

export default function OnlineTution() {
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
