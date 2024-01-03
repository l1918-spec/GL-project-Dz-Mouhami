import React from "react";
import data from "../../utils/slider.json";
import { IoIosArrowForward } from "react-icons/io"
import { MdReviews } from "react-icons/md";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./matches.css";
import { sliderSettings } from "../../utils/common";
const matches = () => {
  return (
    <div id="matches" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Fetches</span>
          <span className="primaryText">Find your best lawyer match</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="lawyer"  />

                <span className="secondaryText r-review">
                  <span style={{ color: "green" }}><MdReviews /></span>
                  <span>{card.review} Positive Reviews</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
       
        <button className="button2">
              <a href="/lawyers">  Find your match </a>
            </button>
      </div>
    </div>
  );
};

export default matches;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
