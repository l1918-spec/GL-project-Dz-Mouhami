import React from 'react';

import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import R from "../components/matches/matches";
import Value from "../components/Value/Value";

function Landing() {
    return (
      
        <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
      
        <R/>
        <Value/>
        <Contact/>
        <GetStarted/>
        <Footer/>
      </div>
    );
  }
  
  export default Landing;