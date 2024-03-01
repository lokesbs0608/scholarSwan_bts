import React from "react";
import "./Social.scss";
import Google from "../../Images/Google.png";
import Facebook from "../../Images/Facebook.png";
import Youtube from "../../Images/Youtube.png";
import Instagram from "../../Images/Instagram.png";
import twitter from "../../Images/twitter.png";
import GooglePlay from "../../Images/GooglePlay.png";

const SocialBanner = () => {
  const SocialObj = [
    { path: "", icon: Google, name: "google" },
    { path: "", icon: Facebook, name: "facebook" },
    { path: "", icon: Youtube, name: "Youtube" },
    { path: "", icon: Instagram, name: "Instagram" },
    { path: "", icon: twitter, name: "Twiter" },
    { path: "", icon: GooglePlay, name: "GooglePlay" },
  ];

  return (
    <div className="social-media-main">
      {SocialObj.map((item) => {
        return (
          <div>
            <a href="">
              <img style={{objectFit:'cover'}} className="img-fluid w-100" src={item?.icon} alt="arrow" />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default SocialBanner;
