import React from "react";
import "./Program.scss";
import bgImg from "./INFOGRAPHY.png";
import hand_tap from "../../Images/hand_tap.png";
import MeetingImage from "../../Images/program-left.png.png";
import { useEffect } from "react";

const Program = () => {
  const scrollToTop = () => {
    // window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const bulletPointsObj = [
    {
      title: "Plan: Personalized Approach ",
      description: `<span> Scholar Swan, conducts a comprehensive analysis of each student’s abilities, skills, and interests. This helps us to tailor a Personalized plan to teach them as per their individual needs.</span>`,
    },
    {
      title: "In-depth Teaching for Grades 6-12 ",
      description: `<span> Scholar Swan, conducts a comprehensive analysis of each student’s abilities, skills, and interests. This helps us to tailor a Personalized plan to teach them as per their individual needs. </span>`,
    },
    {
      title: "Specialized Curriculum for Competitive Exams  ",
      description: `<span> For students preparing for competitive entrance examinations like JEE or NEET, we offer a specialized curriculum. The curriculum involves a deep exploration of mathematical concepts. </span>`,
    },
    {
      title: "Tailored Instruction ",
      description: `<span>Our teaching method is unique to each student. This fosters an environment that encourages academic growth and success.</span>`,
    },
    {
      title: "Online Class ",
      description: `<span>At Scholar Swan, we design our study plans to cater to the unique earning needs of each student. <br> <br> Our expert tutors, who bring decades of experience to the table, conduct online classes. They deliver engaging and effective lessons. They ensure that every student gets the most out of each session. <br> <br> We provide the best-curated inclusive study material, designed by Scholar Swan. These materials serve as a valuable resource. Students refer to this study material during their self-study time. </span>`,
    },
    {
      title: "Assignments ",
      description: `<span> Our assignments include a range of questions. From easy to difficult, we ensure that we challenge students of all skill levels. We provide detailed feedback on these assignments. This helps students understand and analyse their mistakes. We also highlight their strengths and weaknesses.</span>`,
    },
    {
      title: "Revision and Recall",
      description: `<span>As students learn new concepts, we encourage them to revise and recall a learned topic.</span>`,
    },
    {
      title: "Experiments",
      description: `<span>  We conduct daily tests based on various concepts and applications. These time-bound tests strengthen the student’s knowledge of the subject and assess what they have learned. Regular practice through these tests not only improves their knowledge of the subject but also enhances their performance. As the saying goes, practice makes perfect. </span>`,
    },
    {
      title: "Score",
      description: `<span>We conduct an online examination to test the students’ abilities. These examinations help us determine if the students have learned and grasped the concepts taught.</span>`,
    },
    {
      title: "Certification",
      description: `<span>Upon successful completion of the course, students receive a certified scientific report about their performance. This certification serves as a testament to their hard work and dedication throughout the course. </span>`,
    },
  ];

  return (
    <div className="program-main">
      <div id="section1-program">
        <div className="program">
          <h1>Program</h1>
        </div>
      </div>

      <div className="d-flex p-1 flex-sm-row-reverse flex-row flex-wrap align-items-center container py-4 mt-4">
        <div className="col-sm-12 col-lg-7 p-3 ">
          <p>The Program is planned for the entire academic year.</p>
          <p>
            The Program, teaches everything about subject & concepts. Deep dive
            into each concept whether it is chapter wise or single concept wise
            or as a group concept.
          </p>
          <p>
            This creates interest in the mind of the students. Focus on any
            topic that you want to improve in specific area. The modules are
            well designed keeping the conceptual learning goals in mind.
          </p>
        </div>
        <div className="col-sm-12 col-lg-5 p-3 ">
          <img src={MeetingImage} className="img-fluid w-100" alt="" />
        </div>
      </div>

      <div>
        <img src={bgImg} alt="" className="program-image-bg" />
      </div>

      <div className="container my-4">
        {bulletPointsObj.map((item) => {
          return (
            <div className="p-4 ">
              <img className="hand_tap " src={hand_tap} alt="arrow" />{" "}
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#444444",
                }}
              >
                {item?.title} :
              </span>{" "}
              <span dangerouslySetInnerHTML={{ __html: item?.description }} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Program;
