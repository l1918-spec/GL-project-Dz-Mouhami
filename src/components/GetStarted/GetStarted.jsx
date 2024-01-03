import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter iner-container">
          <span className="primaryText">Contact Us</span>
          <span className="secondaryText">
          Get started with our legal services by creating an account. Enjoy the benefits of personalized legal assistance,
            <br />
            case tracking, and seamless communication with our experienced legal professionals. 
          </span>
          <button className="button" href>
            <a href="mailto:zainkeepscode@gmail.com">Contact Us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
