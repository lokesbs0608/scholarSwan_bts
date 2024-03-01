import React from "react";
import "./index.scss";
import image from "../../Images/contact-us-1.png";
import phone from "../../Images/phnoe_icon.png";
import email from "../../Images/email_icon.png";
import location from "../../Images/location_icon.png";
import contact_icon from "../../Images/contact-icon.png";
import EnquiryForm from "../../components/EnquiryFrom";

const ContactUs = () => {
  return (
    <>
      <div className="contact">
        <section className="contact-banner">
          <div className="contact-container container">
            <div className="section">
              <h2>
                Contact <b>Us</b>
              </h2>
              <p style={{ fontSize: "1rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <img src={image} alt="contact_image" className="" />
          </div>
        </section>
        <section className="contact-section p-20">
          <div className="container">
            <div className="grid-section">
              <div className="element p-20">
                <img src={phone} alt="phone" />
                <h4>Contact Number</h4>
                <div className="content">
                  <a href="tel:+91 12345 67890">+91 12345 67890</a>
                  <a href="tel:+91 98765 43210 ">+91 98765 43210 </a>
                </div>
              </div>
              <div className="element p-20">
                <img src={email} alt="email" />
                <h4>Email</h4>
                <div className="content">
                  <a href="mailto:info@scholarswan.com">info@scholarswan.com</a>
                  <a href="mailto:contact@scholarswan.com">
                    contact@scholarswan.com
                  </a>
                </div>
              </div>
              <div className="element p-20">
                <img src={location} alt="email" />
                <h4>Location</h4>
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="images-section">
          <div className="image-box">
            <div className="image-container">
              <img src={contact_icon} alt="contact" />
            </div>
            <div className="iframe-section">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.519938356291!2d77.62516897454606!3d12.938546715603174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1461dca982a3%3A0x1e94e6c7800a8eb2!2sHoneycomb-%20Video%20Production%20Bangalore%2C%20Graphic%20Designing%2C%20Web%20Design%2C%20SEO!5e0!3m2!1sen!2sin!4v1708714915513!5m2!1sen!2sin"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
          <div className="form-section">
            <EnquiryForm heading="<b>Contact</b> Form" />
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
