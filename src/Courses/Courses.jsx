import React from "react";
import "./Courses.scss";
import Bharatanaatiyam from "../assets/Bharatanaatiyam.jpg";
import Mohiniyattam from "../assets/Mohiniyaatam.JPG";
import Thiruvathirakkali from "../assets/Thiruvathirakkali.jpg";
import SemiClassical from "../assets/Semiclassical.jpg";

const Courses = () => {
  const courses = [
    {
      title: "Bharatanatyam",
      description:
        "At Thapasya, we teach Bharatanatyam in a blend of Kalakshetra and Vazhavoor styles, grounding students in rich theory and authentic technique. We give individual attention to every dancer, nurturing confidence, precision, and grace.",
      image: Bharatanaatiyam,
      buttonText: "Enquire now",
    },
    {
        title: "Mohiniyattam",
        description:
          "At Thapasya, we uphold the authentic grace of Mohiniyattam in the Kerala Kalamandalam tradition, providing intensive training in eye exercises and body conditioning to nurture artistry.",
        buttonText: "Enquire now",
        image: Mohiniyattam, // Replace with your actual image path
      },
      {
        title: "Thiruvathirakkali",
        description:
          "At Thapasya, we preserve the authentic essence of Thiruvathirakkali, ensuring every movement reflects its true tradition. Our training offers a rare chance to connect with this cherished Kerala art form, even far from home.",
        buttonText: "Enquire now",
        image: Thiruvathirakkali, // Replace with your actual image path
      },
      {
        title: "Semi-Classical Dance",
        description:
          "This program blends classical dance with modern elements, giving students a creative outlet to explore contemporary choreography set to lively, modern music.",
        buttonText: "Enquire now",
        image: SemiClassical, // Replace with your actual image path
      },
  ];

  return (
    <section className="courses-section">
      <div className="container">
        <div className="cards-container-box d-flex align-items-center">
          {courses.map((course, index) => (
            <div key={index} className="course-cards">
              <div className="card">
                <img
                  src={course.image}
                  alt={course.title}
                  className="card-img-top"
                />
                {/* <div className="image-div"></div> */}
                <div className="card-body d-flex align-items-end flex-column justify-content-between">
                  <div>
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                  </div>
                  <div className="button-container d-flex align-items-center justify-content-end">
                  <button className="btn btn-primary">{course.buttonText}</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
