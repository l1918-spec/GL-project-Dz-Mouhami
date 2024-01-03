import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Consultation</span>
          <span className="primaryText">Easy to contact a Specialist</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good law consulation can make your life better{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
           

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat via email</span>
                    <span className="secondaryText">Send a mail to a specelised lawyer</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Or, make a reservation now</span>
                    <span className="secondaryText">Get a specified reservation </span>
                  </div>
                </div>
                <div className="flexCenter button">Reserve now </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
