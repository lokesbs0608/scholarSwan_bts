import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { IoCallOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import message from "../../Images/messg.png";
import google_play from "../../Images/google_play.png";

const Footer = () => {

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="footer_main">
      <div className="footer__">
        <div className="top">
          <div className="contact">
            <div className="w-50">
            <h2 className="yellow_line">Contact</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ad
              suscipit dignissimos soluta odio iusto vel. Odio error omnis
              corporis?
            </p>
            <div className="contact-msg">
              {/* <TiMail className="contact-icon" /> */}
              <h6>
                <img
                  className="messg "
                  src={message}
                  alt="arrow"
                />
                <Link to="mailto:info@scholarswan.com">info@scholarswan.com</Link>
              </h6>
            </div>
          </div>
          <div className="quick-links">
            <h2 className="line1">Quick Links</h2>
            <div className="different-links">
              <Link to="/">Home</Link> |
              <Link to="/about">About us</Link> | 
              <Link to="/program">Programs</Link> |
              <Link to="/services">Services</Link> |
              <Link to="/">Pricing</Link> |
              <br />
              <Link to="/">Products</Link> |
              <Link to="/contact">Contact us</Link> |
              <Link to="/">Admin login</Link>
            </div>
            <div className="quick-msg">
              <h6> <IoCallOutline className="quick-icon" /> <Link to="tel:+91 12345 6789">+91 12345 6789</Link> / <Link to="tel:+91 98765 43210">+91 98765 43210</Link></h6>
            </div>
          </div>
          <div className="social-links">
            <h2 className="line2">Social Links</h2>
            <div className="social-apps">
              <div className="apps">
                <IoLogoInstagram />
              </div>
              <div className="apps">
                <FaGooglePlusG />
              </div>
              <div className="apps">
                <FaFacebookF />
              </div>
              <div className="apps">
                <FaXTwitter />
              </div>
              <div className="apps">
                <FaYoutube />
              </div>
            </div>
            <br/>
            <h2 className="line3">Download App</h2>

            <img
              className="apps"
              src={google_play}
              alt="arrow"
            />
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-container">
            <Link to="">Disclaimer</Link> | <Link to="">Privacy policy</Link> | <Link to="">Terms & conditions</Link> | <Link to="">Sitemap</Link>
          </div>
          <div id="right">
            <h6>© {currentYear}, Scholar Swan. All rights reserved.</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
