import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <div id="home" className="container-fluid home">
        <div className="container home-content">
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Web Development",
                  "Mobile Development",
                  "UI/UX Design",
                  "Digital Marketing",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </h1>
          <p>
            lIrure minim ea in sunt proident consequat nisi. Mollit consequat
            elit et incididunt id incididunt ex eiusmod.
            <br /> Aliqua incididunt voluptate commodo sunt mollit aliquip ipsum
            incididunt duis sit irure exercitation.
          </p>
          <span className="view-details-home-button">View Details</span>
        </div>
      </div>
    </>
  );
};

export default Home;
