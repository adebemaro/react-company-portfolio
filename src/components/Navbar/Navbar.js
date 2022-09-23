import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  const [navBarScroll, setNavBarScroll] = useState(false);

  const onScrollNavBar = () => {
    if (window.scrollY > 100) {
      setNavBarScroll(true);
    } else {
      setNavBarScroll(false);
    }
  };
  window.addEventListener("scroll", onScrollNavBar);
  return (
    <>
      <nav className={navBarScroll ? "nav-main-scroll nav-main" : "nav-main"}>
        <ul>
          <Link to="home" spy={true} offset={-100} smooth={true} duration={100}>
            <li className="nav-item">Home</li>
          </Link>
          <Link
            to="about"
            spy={true}
            offset={-100}
            smooth={true}
            duration={100}
          >
            <li className="nav-item">About Us</li>
          </Link>
          <Link
            to="services"
            spy={true}
            offset={-100}
            smooth={true}
            duration={100}
          >
            <li className="nav-item">Services</li>
          </Link>
          <Link
            to="carrier"
            spy={true}
            offset={-100}
            smooth={true}
            duration={100}
          >
            <li className="nav-item">Carrier</li>
          </Link>
          <Link
            to="video"
            spy={true}
            offset={-100}
            smooth={true}
            duration={100}
          >
            <li className="nav-item">Video</li>
          </Link>
          <Link to="team" spy={true} offset={-100} smooth={true} duration={100}>
            <li className="nav-item">Team</li>
          </Link>
          <Link
            to="testimonial"
            spy={true}
            offset={-100}
            smooth={true}
            duration={100}
          >
            <li className="nav-item">Testimonial</li>
          </Link>
          <Link
            to="feedback"
            spy={true}
            offset={-100}
            smooth={true}
            duration={100}
          >
            <li className="nav-item">Feedback</li>
          </Link>
          <Link
            to="contact"
            spy={true}
            offset={-100}
            smooth={true}
            duration={100}
          >
            <li className="nav-item">Contact</li>
          </Link>
          <Link
            to="subscription"
            spy={true}
            offset={-100}
            smooth={true}
            duration={100}
          >
            <li className="nav-item">Subscription</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
