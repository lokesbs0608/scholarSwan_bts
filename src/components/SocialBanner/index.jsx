import React from "react";
import "./Social.scss";
import Google from "../../Images/Google.png";
import Facebook from "../../Images/Facebook.png";
import Youtube from "../../Images/Youtube.png";
import Instagram from "../../Images/Instagram.png";
import twitter from "../../Images/twitter.png";
import GooglePlay from "../../Images/GooglePlay.png";

const SocialBanner = () => {
  return (
    <div className="social-media-main">
      <div className="google icon">
        <a href="">
          <img className="Google img-fluid w-100" src={Google} alt="arrow" />
        </a>
      </div>
      <div className="facebook icon">
        <a href="">
          <img
            className="Facebook img-fluid w-100"
            src={Facebook}
            alt="arrow"
          />
        </a>
      </div>
      <div className="youtube icon">
        <a href="">
          <img className="Youtube img-fluid w-100" src={Youtube} alt="arrow" />
        </a>
      </div>
      <div className="insta icon">
        <a href="">
          <img
            className="Instagram img-fluid w-100"
            src={Instagram}
            alt="arrow"
          />
        </a>
      </div>
      <div className="twitter icon">
        <a href="">
          <img className="twitter img-fluid w-100" src={twitter} alt="arrow" />
        </a>
      </div>
      <div className="play-store icon">
        <a href="">
          <img
            className="GooglePlay img-fluid w-100"
            src={GooglePlay}
            alt="arrow"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialBanner;
