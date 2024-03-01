import React, { useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import bgImg from "../Navbar/bg-img.png";
import { MdSegment } from "react-icons/md";
import logo from "../../Images/logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);

  const navObj = [
    { path: "/", title: "Home" },
    { path: "/program", title: "Program" },
    { path: "/services", title: "Services" },
    { path: "/about", title: "About Us" },
    { path: "/contact", title: "Contact Us" },
    { path: "faq", title: "Faq's" },
  ];

  return (
    <div className="header_container">
      <div className="header_section">
        <div className="logo">
          <a href="/">
            <img className="logo " src={logo} alt="arrow" />
          </a>
        </div>
        <div className="links__">
          <div id="links_menu" className={showMenu ? "links_menu" : ""}>
            {navObj.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  activeClassName="menu_active"
                  exact
                  className="nav_link links__-a links_menu"
                  onClick={() => setShowMenu(!showMenu)}
                  to={item?.path}
                >
                  {item?.title}
                </NavLink>
              );
            })}
          </div>

          <div className="menu">
            <NavLink to="#">
              <MdSegment
                onClick={() => setShowMenu(!showMenu)}
                className="icon-menu"
              />
            </NavLink>
          </div>
        </div>
      </div>
      {/* <a href='/tutor' >
        <img className="mobile-board" src="/mobile-board.png" alt="" />
      </a> */}
      <NavLink
        activeClassName="menu_active"
        exact
        className="nav_link links__-a"
        to="/tutor"
      >
        <img className="mobile-board" src="/mobile-board.png" alt="" />
      </NavLink>
      <div className="side-menu"></div>
    </div>
  );
};

export default Navbar;
