import React from "react";
import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="container-fluid footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-sm-12 col-md-12">
              <div class="footer-about-section">
                <h6 style={{ color: "white", marginTop: "20px" }}>About Us</h6>
                <p>
                  Culpa non anim occaecat id et dolore reprehenderit et deserunt
                  sunt magna qui. Nulla qui sint ex deserunt deserunt laboris
                  aliquip laborum pariatur. Velit nisi nisi cupidatat officia
                  ipsum consequat anim ex excepteur quis deserunt. Consectetur
                  ex aute non elit consectetur aliquip aliquip sint dolore.
                </p>
                <span className="social-icons">
                  <p>
                    <FaFacebookSquare size={30} />
                  </p>
                  <p>
                    <BsTwitter size={30} />
                  </p>
                  <p>
                    <FaInstagram size={30} />
                  </p>
                  <p>
                    <BsLinkedin size={30} />
                  </p>
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-12 col-md-12">
              <div className="footer-service">
                <h6 style={{ color: "white", marginTop: "20px" }}>
                  Our Services
                </h6>
                <div className="footer-item">
                  <li>Digital Marketing</li>
                  <li>Web Design</li>
                  <li>UI/UX Design</li>
                  <li>Mobile App Dev</li>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-12 col-md-12">
              <div className="footer-service">
                <h6 style={{ color: "white", marginTop: "20px" }}>
                  Customer Care
                </h6>
                <div className="footer-item">
                  <li>Log In</li>
                  <li>My Account</li>
                  <li>Wish List</li>
                  <li>FAQ</li>
                  <li>Contact Us</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
