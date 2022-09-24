import React from "react";
import "./about.css";
import about from "../images/about-img.png";
import { FcSlrBackSide, FcWorkflow, FcShop } from "react-icons/fc";

const About = () => {
  return (
    <>
      <div id="about" className="container about-session">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12">
            <div className="about-image">
              <img src={about} width="400px" alt="about-img" height="400px" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12">
            <div className="about-details">
              <div className="about-title">
                <h5>About Us</h5>
                <span className="line"></span>
              </div>
              <p>
                Eiusmod esse proident culpa reprehenderit nulla Lorem Lorem
                Consequat ullamco consequat consectetur cillum do proident.
              </p>
              <div className="card-details">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcSlrBackSide width={300} />
                    </p>
                  </div>
                  <div>
                    <h5>Perfect Day</h5>
                    <p>
                      Eiusmod esse proident culpa reprehenderit nulla Lorem
                      Lorem Consequat ullamco consequat consectetur cillum do
                      proident.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-details">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcWorkflow width={300} />
                    </p>
                  </div>
                  <div>
                    <h5>Perfect Day</h5>
                    <p>
                      Eiusmod esse proident culpa reprehenderit nulla Lorem
                      Lorem Consequat ullamco consequat consectetur cillum do
                      proident.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-details">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcShop width={300} />
                    </p>
                  </div>
                  <div>
                    <h5>Perfect Day</h5>
                    <p>
                      Eiusmod esse proident culpa reprehenderit nulla Lorem
                      Lorem Consequat ullamco consequat consectetur cillum do
                      proident.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
