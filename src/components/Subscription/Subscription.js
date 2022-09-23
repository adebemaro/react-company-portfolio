import React from "react";
import "./subscription.css";

const Subscription = () => {
  return (
    <>
      <div id="subscription" className="container-fluid sub-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="sub-title">
                <h5>Subscribe To Our Newsletter</h5>
                <span className="line"></span>
              </div>
              <div className="sub-form">
                <input type="text" placeholder="Your E-mail" />
              </div>
              <div>
                <span className="sub-button" onClick="">
                  Submit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Subscription;
