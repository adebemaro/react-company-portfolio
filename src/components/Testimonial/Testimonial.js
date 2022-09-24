import React, { useState } from "react";
import "./testimonial.css";
import img from "../images/about-img.png";

const Testimonial = () => {
  const data = [
    {
      img: "C:/Users/City Digital Consult/Pictures/passport",
      content:
        "Sint nisi ullamco dolore aliquip duis eiusmod commodo cupidatat pariatur.",
      name: "John Doe",
      position: "Front End Dev.",
    },
    {
      img: "",
      content:
        "Sint nisi ullamco dolore aliquip duis eiusmod commodo cupidatat pariatur.",
      name: "Matthew Mullgan",
      position: "Python Expert",
    },

    {
      img: "",
      content:
        "Sint nisi ullamco dolore aliquip duis eiusmod commodo cupidatat pariatur.",
      name: "Bryan James",
      position: "Mobile App Developer",
    },

    {
      img: "",
      content:
        "Sint nisi ullamco dolore aliquip duis eiusmod commodo cupidatat pariatur.",
      name: "Adebe Okeoghenemaro",
      position: "Web Developer",
    },

    {
      img: "",
      content:
        "Sint nisi ullamco dolore aliquip duis eiusmod commodo cupidatat pariatur.",
      name: "Adebe Okeoghenemaro",
      position: "Web Developer",
    },

    {
      img: "",
      content:
        "Sint nisi ullamco dolore aliquip duis eiusmod commodo cupidatat pariatur.",
      name: "Adebe Okeoghenemaro",
      position: "Web Developer",
    },

    {
      img: "",
      content:
        "Sint nisi ullamco dolore aliquip duis eiusmod commodo cupidatat pariatur.",
      name: "Adebe Okeoghenemaro",
      position: "Web Developer",
    },

    {
      img: "",
      content:
        "Sint nisi ullamco dolore aliquip duis eiusmod commodo cupidatat pariatur.",
      name: "Adebe Okeoghenemaro",
      position: "Web Developer",
    },

    {
      img: "",
      content:
        "Sint nisi ullamco dolore aliquip duis eiusmod commodo cupidatat pariatur.",
      name: "Adebe Okeoghenemaro",
      position: "Web Developer",
    },

    {
      img: "",
      content:
        "Sint nisi ullamco dolore aliquip duis eiusmod commodo cupidatat pariatur.",
      name: "Adebe Okeoghenemaro",
      position: "Web Developer",
    },

    {
      img: "",
      content:
        "Sint nisi ullamco dolore aliquip duis eiusmod commodo cupidatat pariatur.",
      name: "Games Bug",
      position: "UI/UX Design",
    },

    {
      img: "",
      content:
        "Sint nisi ullamco dolore aliquip duis eiusmod commodo cupidatat pariatur.",
      name: "Hiro shima",
      position: "Digital Marketing",
    },
  ];
  const [showPost, setShowPost] = useState(6);
  const loadpost = () => {
    setShowPost((prev) => prev + 3);
  };
  return (
    <>
      <div id="testimonial" className="container testimonial-section">
        <div className="testimonial-title">
          <h5>Testimonial</h5>
          <span className="line"></span>
        </div>

        <div className="row">
          {data.slice(0, showPost).map((item, index) => {
            return (
              <>
                <div className="col-md-4 col-lg-4 col-sm-12" key={index}>
                  <div
                    className={
                      index === 0 ? "marked-content-card" : "content-card"
                    }
                  >
                    <img src={img} alt={item.name} />
                    <p>{item.content}</p>
                    <p>
                      <span className="name">{item.name}</span>
                    </p>
                    <p>{item.position}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        {showPost >= data.length ? null : (
          <span className="load-more-button" onClick={loadpost}>
            Load More
          </span>
        )}
      </div>
    </>
  );
};

export default Testimonial;
