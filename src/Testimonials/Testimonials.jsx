import React from "react";
import "./Testimonials.scss";
import AboutImage from "../assets/klipartz.com.png";

const Testimonials = () => {
    return (
        <div className="container-testimonials position-relative overflow-hidden">
            <div className="top-right-circle"></div>
            <div className="bottom-left-circle"></div>
             <div className="card-container">
             <div className="heading">Testimonials</div>

                <div className="cards-box d-flex justify-content-center align-items-center flex-wrap" style={{gap: "50px"}}>

                <div class="testimonial-card position-relative overflow-hidden">

<div class="circle-right">
    <div className="inner-circle-right">
        <div className="small-inner-circle"></div>
    </div>
</div>

<div className="circle-left"></div>
<div className="small-right-circle"></div>
<div className="bottom-circle"></div>
<div className="bottom-blur-circle"></div>

<div class="circle small"></div>

<div className="d-flex flex-column align-items-center justify-content-center">
<div className="outer-profile-circle">
    <div className="inner-profile-circle">
        <img src={AboutImage} alt="Profile" />
    </div>
</div>
<h1 class="title">Testimonials</h1>
<p class="description">
  This is a placeholder text for testimonials. The design is elegant, minimalistic, and centered on user feedback.
</p>
<div class="stars">
  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
</div>
<div class="selector">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
</div>

                </div>
                
                <div class="testimonial-card position-relative overflow-hidden">

<div class="circle-right">
    <div className="inner-circle-right">
        <div className="small-inner-circle"></div>
    </div>
</div>

<div className="circle-left"></div>
<div className="small-right-circle"></div>
<div className="bottom-circle"></div>
<div className="bottom-blur-circle"></div>

<div class="circle small"></div>

<div className="d-flex flex-column align-items-center justify-content-center">
<div className="outer-profile-circle">
    <div className="inner-profile-circle">
        <img src={AboutImage} alt="Profile" />
    </div>
</div>
<h1 class="title">Testimonials</h1>
<p class="description">
  This is a placeholder text for testimonials. The design is elegant, minimalistic, and centered on user feedback.
</p>
<div class="stars">
  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
</div>
<div class="selector">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
</div>

                </div>

                <div class="testimonial-card position-relative overflow-hidden">

<div class="circle-right">
    <div className="inner-circle-right">
        <div className="small-inner-circle"></div>
    </div>
</div>

<div className="circle-left"></div>
<div className="small-right-circle"></div>
<div className="bottom-circle"></div>
<div className="bottom-blur-circle"></div>

<div class="circle small"></div>

<div className="d-flex flex-column align-items-center justify-content-center">
<div className="outer-profile-circle">
    <div className="inner-profile-circle">
        <img src={AboutImage} alt="Profile" />
    </div>
</div>
<h1 class="title">Testimonials</h1>
<p class="description">
  This is a placeholder text for testimonials. The design is elegant, minimalistic, and centered on user feedback.
</p>
<div class="stars">
  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
</div>
<div class="selector">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
</div>

                </div>

             </div>
             </div>
        </div>
    );
    };

export default Testimonials;