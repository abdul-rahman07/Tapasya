import React from "react";
import "./AboutUs.scss";
import AboutImage from "../assets/klipartz.com.png";

const About = () => {
  return (
    <section className="about-us-section">
     <div className="container-about d-md-flex justify-content-between align-items-center">
             <div className="left-end"></div>
             <div className="right-end"></div>
        <div className="image-container">
            <img src={AboutImage} alt="About Us" />
        </div>
        <div className="center-lines d-md-flex  align-items-center">
            <div className="center-line-1"></div>
            <div className="center-line-2"></div>
            <div className="center-line-3"></div>
            <div className="center-line-4"></div>
        </div>
        <div className="content-container d-flex flex-column justify-content-between">
            <div className="header">
                <h3>About Satheesh Moonnukandathil
                </h3>
                <div className="outer-round">
                    <div className="inner-round"></div>
                </div>
            </div>
            <div className="first-content-box d-flex align-items-start justify-content-between">
                <p className="mb-0">
                Satheesh’s dance journey began at just eight years old, learning Bharatanatyam from Guru Sri Sabu Sebastian. He later honed his craft under Dr. Vasant Kiran and developed his Mohiniyattam skills with Dr. Kalamandalam Danusha Sanyal and Dr. Methil Devika. A three-time Kalaprathibha title winner in Wayanad, Satheesh combines traditional techniques with modern, personalized methods that match each student’s abilities. Although he’s a healthcare professional by day, his passion for dance shines through in his dedication to teaching students of all ages.
                </p>
            </div>
            <div className="second-content-box d-flex align-items-center justify-content-between">
                <p className="mb-0">
                Classes in Berwick and Clyde North follow a structured format: warm-ups and conditioning, core movement training (adavus, gestures, eye exercises), and expressive practice to refine skills and artistry. Each session fosters discipline, precision, and emotional expression in every dancer. Have questions about our programs or classes? Connect with us today and take the first step on your dance journey.</p>
            </div>
        </div>
     </div>
    </section>
  );
};

export default About;
