import React from "react";
import "./Program.scss";
import bgImg from "./INFOGRAPHY.png";
import hand_tap from "../../Images/hand_tap.png";
import MeetingImage from "../../Images/program-left.png.png";
import { useEffect } from "react";

const Program = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };




    useEffect(() => {
      scrollToTop();
    }, []);
  return (
    <div className="program-main">
      <div id="section1-program">
        <div className="program">
          <h1>Program</h1>
        </div>
        {/* <img src="/program-bg.png" className="program-bg" alt="" /> */}
      </div>
      <div id="section2-program">
        <div className="left1">
          <img src={MeetingImage} className="program-left" alt="" />
        </div>

        <div className="right1">
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
      </div>
      <div id="section3-program">
        <div id="program">
          <img src={bgImg} alt="" className="program-image-bg" />
        </div>
      </div>
      <div id="section4-program">
        <div className="hand1">
          <p className="handpoint">
            <img className="hand_tap " src={hand_tap} alt="arrow" />
            <span>Plan: Personalized Approach :</span> Scholar Swan, conducts a
            comprehensive analysis of each student’s abilities, skills, and
            interests. This helps us to tailor a Personalized plan to teach them
            as per their individual needs.
          </p>
        </div>
        <div className="hand2">
          <p className="handpoint">
            <img className="hand_tap " src={hand_tap} alt="arrow" />
            <span>In-depth Teaching for Grades 6-12 :</span> Scholar Swan,
            conducts a comprehensive analysis of each student’s abilities,
            skills, and interests. This helps us to tailor a Personalized plan
            to teach them as per their individual needs.
          </p>
        </div>
        <div className="hand3">
          <p className="handpoint">
            <img className="hand_tap " src={hand_tap} alt="arrow" />
            <span>Specialized Curriculum for Competitive Exams :</span> For
            students preparing for competitive entrance examinations like JEE or
            NEET, we offer a specialized curriculum. The curriculum involves a
            deep exploration of mathematical concepts.
          </p>
        </div>
        <div className="hand4">
          <p className="handpoint">
            <img className="hand_tap " src={hand_tap} alt="arrow" />
            <span>Tailored Instruction :</span> Our teaching method is unique to
            each student. This fosters an environment that encourages academic
            growth and success.
          </p>
        </div>
        <div className="hand5">
          <p className="handpoint">
            <img className="hand_tap " src={hand_tap} alt="arrow" />
            <span>Online Class :</span> At Scholar Swan, we design our study
            plans to cater to the unique earning needs of each student.
          </p>
          <p>
            Our expert tutors, who bring decades of experience to the table,
            conduct online classes. They deliver engaging and effective lessons.
            They ensure that every student gets the most out of each session.
          </p>
          <p>
            Study and Reference Material: We provide the best-curated inclusive
            study material, designed by Scholar Swan. These materials serve as a
            valuable resource. Students refer to this study material during
            their self-study time.
          </p>
        </div>
        <div className="hand6">
          <p className="handpoint">
            <img className="hand_tap " src={hand_tap} alt="arrow" />
            <span>Assignments :</span> Our assignments include a range of
            questions. From easy to difficult, we ensure that we challenge
            students of all skill levels. We provide detailed feedback on these
            assignments. This helps students understand and analyse their
            mistakes. We also highlight their strengths and weaknesses.
          </p>
        </div>
        <div className="hand7">
          <p className="handpoint">
            <img className="hand_tap " src={hand_tap} alt="arrow" />
            <span>Revision and Recall :</span>As students learn new concepts, we
            encourage them to revise and recall a learned topic.
          </p>
        </div>
        <div className="hand8">
          <p className="handpoint">
            <img className="hand_tap " src={hand_tap} alt="arrow" />
            <span>Experiments :</span> We conduct daily tests based on various
            concepts and applications. These time-bound tests strengthen the
            student’s knowledge of the subject and assess what they have
            learned. Regular practice through these tests not only improves
            their knowledge of the subject but also enhances their performance.
            As the saying goes, practice makes perfect.
          </p>
        </div>
        <div className="hand9">
          <p className="handpoint">
            <img className="hand_tap " src={hand_tap} alt="arrow" />
            <span>Score :</span> We conduct an online examination to test the
            students’ abilities. These examinations help us determine if the
            students have learned and grasped the concepts taught.
          </p>
        </div>
        <div className="hand10">
          <p className="handpoint">
            <img className="hand_tap" src={hand_tap} alt="arrow" />
            <span>Certification :</span>Upon successful completion of the
            course, students receive a certified scientific report about their
            performance. This certification serves as a testament to their hard
            work and dedication throughout the course.
          </p>
        </div>
      </div>
    </div>

    // <>
    //    <Chain2/>
    // </>
  );
};

export default Program;
