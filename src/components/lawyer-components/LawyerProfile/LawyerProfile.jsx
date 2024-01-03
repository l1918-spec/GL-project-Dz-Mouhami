import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { AiFillStar } from 'react-icons/ai';
import 'react-calendar/dist/Calendar.css'; // Import the styles (adjust the path as needed)
import './LawyerProfile.css'; // Import your CSS file for styling
import data from '../../../utils/reviews.json';

const LawyerProfile = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  
  return (

    
    <div className="lawyer-profile-container">
      <div className="profile-info">
        <div className="profile-left">
          <img className="profile-pic" src="/public/r1.png" alt="Lawyer" />
          <div className="rating">⭐⭐⭐⭐⭐</div>
          <div className="speciality">Family Law Attorney</div>
          <div className="information">
            John Doe is an experienced family law attorney with a passion for helping clients.
          </div>
          <div className='info'>
          <div className="contact-info-container">
            <div className="phone">Phone: <div className="ph"> 123-456-7890</div></div>
            <div className="phone">Email: <div className="ph"> john.doe@example.com</div></div>
           
          </div>
          <div className="contact-info-container">
            <div className="phone">Specialities: <div className="ph">  <ul>
              <li>Family Law</li>
              <li>Criminal Defense</li>
            </ul></div></div>
           
           
          </div>
          </div>
         
          <div className="buttons">
            <button className="reserve-btn">Reserve Now</button>
            <button className="chat-btn">Start a Chat</button>
          </div>
        </div>
        <div className="calendar-section">
        <h4>Schedule an Appointment</h4>
        <Calendar onChange={onChange} value={date} />
      </div>
      <div className="lo">
                <h3 className="text-lg font-semibold mb-4">Location</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.906372501606!2d5.0631039751432665!3d36.748818372261844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f2ccb1f1f0dcc1%3A0xbd727704da411695!2sAvocat%20Bejaia!5e0!3m2!1sfr!2sdz!4v1702419803406!5m2!1sfr!2sdz" >

                </iframe>
            </div>
      </div>
      {/* <div className="reviews-section">
        <h2>Client Reviews</h2>
        <ul>
          <li>
            <div className="review-author">Client 1</div>
            <div className="review-rating">⭐⭐⭐⭐⭐</div>
            <div className="review-comment">Great lawyer!</div>
          </li>
          <li>
            <div className="review-author">Client 2</div>
            <div className="review-rating">⭐⭐⭐⭐</div>
            <div className="review-comment">Very knowledgeable.</div>
          </li>
        </ul>
      </div> */}
     
      <div className="work-section-wrapper"> 
      <div className="work-section-top"> 

        <h1 className="primary-heading">What They Are Saying ?</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="coments d-flex">
    <div className="testimonial-section-bottom">
          <img  className="profile-pic" src="public/r1.png" alt="" />
           <p>
              Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                elit. 
             </p>
          <div className="testimonials-stars-container">
           <AiFillStar />
           <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        <h4>John Doe</h4>
      </div>


      <div className="testimonial-section-bottom">
          <img  className="profile-pic" src="public/r1.png" alt="" />
           <p>
              Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                elit. 
             </p>
          <div className="testimonials-stars-container">
           <AiFillStar />
           <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h4>John Doe</h4>
      </div>

      <div className="testimonial-section-bottom">
          <img  className="profile-pic" src="public/r1.png" alt="" />
           <p>
              Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                elit. 
             </p>
          <div className="testimonials-stars-container">
           <AiFillStar />
           <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h4>John Doe</h4>
      </div>
      </div>

      
      </div>

     
      
    </div>







  );
};

export default LawyerProfile;
