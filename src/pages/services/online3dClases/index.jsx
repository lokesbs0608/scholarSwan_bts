import React from 'react'
import service_img1 from '../../../Images/service_img1.png'
import bag_pack from '../../../Images/bag-pack.png'
import background from '../../../Images/service-banner-1.png'
import Service from '../layout'
import { useEffect } from 'react';

export const section_details = [
    {
        id: 1,
        image: bag_pack,
        content: "<p>Step into a unique learning experience with 3D technology. With Scholar Swan, you have smart classes and seamless access right at your fingertips. Smart classes make learning not only effortless but also fun. Online education gives flexibility. This means that you can tailor your schedule to fit your needs.</p><p>As you go through the curriculum, you will come across practical methods. These methods emphasize productivity in your academic path. You will become part of a vibrant learning community. Engage in real-time interactions with faculty.</p><p>The classes will be dynamic. They will offer live explanations, which will make learning more informative and engaging.</p><p>You will hone your time-management skills. Draw inspiration from dedicated sessions that will resolve doubts. Reap the benefits of a cost-effective structure that guarantees personalized attention.</p>"
    }
]

export const online_details = {
    main_heading: "Online 3D live Classes",
    image: service_img1,
    text_color: "#fff",
    content1: "<p>Dive into the realm of online education with 3D live classes. Our 3D Live Classes leverage advanced 3D technology, which creates a captivating learning environment that brings any subject to life.</p><p>In our 3D live classes, we use animated elements, making learning more engaging and enjoyable. Besides live sessions, we also provide recorded classes, giving you the freedom to revisit lessons at your convenience.</p><p>The online live classes offer flexible schedules. You can learn in the comfort of your own home at any time, at your convenience. This efficient and time-saving approach to learning offers the adaptability needed in today’s fast-paced world.</p><p>Our focus is on time efficiency, motivation, and personalized attention. Coupled with cost-effectiveness, we guarantee a holistic learning journey.</p><p>We conduct regular mock tests to check your understanding and track your progress. These tests offer valuable feedback. The feedback helps in identifying areas of weakness that may need more attention. Our problem-solving sessions address challenging concepts, fostering critical thinking and problem-solving skills. They are interactive, allowing you to ask questions and receive immediate feedback.</p><p>Cost should not be a barrier to learning, so our services are affordable and accessible with high-quality content. We strive to provide value for money with our comprehensive educational offerings.</p>",
    sub_heading: "3D Live Classes",
    content2: "<p>With comprehensive study materials, regular mock tests, and problem-solving sessions, you will have all the resources you need to succeed in your academic endeavours.</p><p>Come embark on a transformative educational journey.</p><p>Enroll in Scholar Swan’s online live classes today and take the first step towards enhancing your learning experience.</p>",
}


export default function Online() {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };

        useEffect(() => {
          scrollToTop();
        }, []);
    return (
        <div>
            <Service
                main_heading = {online_details.main_heading}
                backgroundImage = {background}
                image = {online_details.image}
                text_color = {online_details.text_color}
                content1 = {online_details.content1}
                sub_heading = {online_details.sub_heading}
                content2 = {online_details.content2}
                sub_section = {section_details}
            />
        </div>
    )
}
