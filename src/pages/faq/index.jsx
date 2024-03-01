import React, { useState } from "react";
import "./Faq.scss";
import classNames from "classnames";

export default function Faq() {
  const [selected, setSelected] = useState("");

  const FaqObj = [
    {
      title: "FAQ'S ON FEES",
      questionAndAns: [
        {
          title: "1. What is the mode of payment that you accept?",
          content: "UPI, CREDIT CARD, DEBIT CARD, NET BANKING PAYMENT",
        },
        {
          title: "2. What are the yearly academic fees for this program?",
          content: "Depending on the course.",
        },
        {
          title: "3.Can we pay monthly or we have to pay yearly?",
          content: "Yes",
        },
        {
          title: "4. Can we withdraw from this program in the middle?",
          content: "Yes",
        },
        {
          title: "5.Do we get a refund?",
          content: "No",
        },
        {
          title: "6. Do we get a receipt of our Payments?",
          content: "yes",
        },
      ],
    },
    {
      title: "FAQ’S ON CUSTOMER RELATIONSHIP MANAGEMENT",
      questionAndAns: [
        {
          id: 7,
          title: "1. How do you communicate with parents?",
          content: "Communicate on call, Google Meet, Zoom meet.",
        },
        {
          id: 8,
          title: "2. Are there any PTMs conducted?",
          content: "yes",
        },
        {
          id: 9,
          title: "3. How often do you conduct PTMs with parents?",
          content: "on Requirement",
        },
        {
          id: 10,
          title: "4. Can parents book appointments if they need to?",
          content: "yes",
        },
      ],
    },
    {
      title: "FAQ’S ON LIVE ONLINE CLASSES",
      questionAndAns: [
        {
          id: 11,
          title: "1. What makes your 3D infrastructure outstanding?",
          content:
            "Our 3D infrastructure stands out by providing an immersive learning experience. It allows students to visualize complex concepts and engage with the content in a dynamic and visually compelling manner, enhancing their understanding and retention of the material.",
        },
      ],
    },
  ];

  return (
    <>
      <div className="faq-main ">
        {FaqObj.map((item, index) => {
          return (
            <div id="section1-faq" className="section-faq">
              <h1>{item?.title}</h1>
              <div className="wrapper">
                <div className="accordion">
                  {item?.questionAndAns.map((item, i) => (
                    <div key={item.id} className="item questions">
                      <div
                        className="title "
                        onClick={() => setSelected(item?.title)}
                      >
                        <h3> {item.title}</h3>
                        <span className="sign">
                          {selected === item?.title ? "-" : "+"}
                        </span>
                      </div>
                      <div
                        className={classNames("contents", {
                          showContent: selected === i,
                        })}
                      >
                        <p> {item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
