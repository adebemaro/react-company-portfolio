import React from "react";
import "./service.css";
import { FcOk } from "react-icons/fc";

const Service = () => {
  const servicedata = [
    {
      id: 1,
      service1: "Web Development",
      service2: "Mobile Development",
      service3: "UI/UX Designs",
      service4: "Digital Marketing",
    },
    {
      id: 2,
      service1: "Web Development",
      service2: "Mobile Development",
      service3: "UI/UX Designs",
      service4: "Digital Marketing",
    },
    {
      id: 3,
      service1: "Web Development",
      service2: "Mobile Development",
      service3: "UI/UX Designs",
      service4: "Digital Marketing",
    },
    {
      id: 4,
      service1: "Web Development",
      service2: "Mobile Development",
      service3: "UI/UX Designs",
      service4: "Digital Marketing",
    },
  ];

  const colors = ["#CD5C5C", "#6495ED", "#36FF25", "#E48C6F"];

  return (
    <>
      <div id="services" className="container-fluid service-section">
        <div className="service-title">
          <h5>Our Services</h5>
          <span className="line"></span>
        </div>
        <div className="row">
          {servicedata.map((items, i) => (
            <div className="col-lg-3 col-md-6 col-xs-12 col-sm-12 " key={i}>
              <div className="services">
                <span
                  className="service-number"
                  style={{ backgroundColor: colors[i] }}
                >
                  <p>{items.id}</p>
                </span>

                <div className="list-of-service">
                  <p>
                    <FcOk width={20} style={{ margin: "5px" }} />{" "}
                    {items.service1}
                  </p>
                  <span className="service-item-underline"></span>
                  <p>
                    <FcOk width={20} style={{ margin: "5px" }} />{" "}
                    {items.service2}
                  </p>
                  <span className="service-item-underline"></span>
                  <p>
                    <FcOk width={20} style={{ margin: "5px" }} />{" "}
                    {items.service3}
                  </p>
                  <span className="service-item-underline"></span>
                  <p>
                    <FcOk width={20} style={{ margin: "5px" }} />{" "}
                    {items.service4}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
