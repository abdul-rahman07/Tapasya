import React from "react";
import Courses from "../Courses/Courses";
import AboutUs from "../About/About";
import Values from "../Values/Values";
import Gallery from "../Gallery/Gallery";
import Testimonials from "../Testimonials/Testimonials";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
import HeroImage from "../assets/HeroImage.jpg";
import AboutTapasya from "../About/AboutTapasya";

const Home = () => {
  return (
    <div style={{  backgroundColor: "#F2EDDD"}}>
      <div className="hero-image">
        <img src={HeroImage} alt="Hero" style={{width:'100%', height:'550px', objectFit:'cover'}}/>
      </div>
      <AboutTapasya/>
      <Courses />
      <AboutUs />
      <Values />
      <Gallery/>
      <Testimonials/>
      <Form/>
      <Footer />
    </div>
  );
};

export default Home;
