import React from "react";
import web from "./Images/pg2-ig.png";
import HoverImageNavLink from "../../components/CustomHoverButton";
import Floating_books from "../../Images/Floating_books.png";

const WhyScholarSwanSection = () => {
  return (
    <div id="section2" className="container py-4 mt-4">
      <div className="row align-items-center justify-content-between">
        <div className=" p-2 col-sm-12 col-md-5">
          <div >
            <div id="img-fluid w-100">
              <img src={web} alt="boy-img" />
            </div>
          </div>
        </div>
        <div className="p-2 col-sm-12 col-md-5">
          <div >
            <h1>
              Why<span>scholarSWAN</span>
            </h1>
            <div className="text_">
              <p>
                At Scholar Swan, we're proud to offer a unique education
                approach. Unlike other institutes, we provide both traditional
                and modern support because we know every student is different.
                Our goal is to improve learning by using innovative strategies,
                providing great motivation, and offering expert counselling. We
                also have well-designed tests for guaranteed results and
                parental satisfaction. Our experienced mentors are here to guide
                you to success. Choosing Scholar Swan means choosing an
                educational journey where your hard work leads to exceptional
                results.
              </p>
              <div id="blur"></div>
            </div>

            <HoverImageNavLink
              to={"/online-tution"}
              activeClassName="menu_active"
              className="hover_arrow_btn"
              sameColor={true}
            >
              Read More
            </HoverImageNavLink>
          </div>
        </div>
      </div>

      <img
        className="Floating_books "
        id="books"
        src={Floating_books}
        alt="arrow"
      />
    </div>
  );
};

export default WhyScholarSwanSection;
