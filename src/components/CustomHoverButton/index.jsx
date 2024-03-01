import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import arrow_button_black from "../../Images/ep_arrow_up.png";
import arrow_button_white from "../../Images/arrow_white.png";

function HoverImageNavLink({ sameColor, activeClassName, to, children,className }) {
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    if (imageRef.current) {
      imageRef.current.src = arrow_button_white;
    }
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.src = sameColor
        ? arrow_button_white
        : arrow_button_black;
    }
  };

  return (
    <NavLink
      className={className}
      activeClassName={activeClassName}
      to={to}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>{children}</div>

      <img
        ref={imageRef}
        src={sameColor ? arrow_button_white : arrow_button_black}
        alt="Know More Icon"
      />
    </NavLink>
  );
}

export default HoverImageNavLink;
