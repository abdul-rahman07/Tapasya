import React from "react";
import "./Courses.scss";

const Courses = () => {
  const courses = [
    {
      title: "Bharatanatyam",
      description:
        "Students learn Bharatanatyam in the Kalakshetra style, mastering both the technical aspects and the expressive elements that bring confidence and grace to their performances.",
      buttonText: "Enroll now",
      image: "path_to_image", // Replace with your actual image path
    },
    {
        title: "Mohiniyattam",
        description:
          "The academy teaches Mohiniyattam in the Kerala Kalamandalam tradition, allowing students to experience the gentle, flowing grace of this dance form and develop a deeper artistic sensibility.",
        buttonText: "Enroll now",
        image: "path_to_image", // Replace with your actual image path
      },
      {
        title: "Thiruvathirakkali",
        description:
          "ThiruvathirakkaliThrough this traditional Kerala group dance, students connect with their cultural roots, embracing the flowing movements that define Thiruvathira.",
        buttonText: "Enroll now",
        image: "path_to_image", // Replace with your actual image path
      },
      {
        title: "Semi-Classical Dance",
        description:
          "This program blends classical dance with modern elements, giving students a creative outlet to explore contemporary choreography set to lively, modern music.",
        buttonText: "Enroll now",
        image: "path_to_image", // Replace with your actual image path
      },
  ];

  return (
    <section className="courses-section">
      <div className="container">
        <div className="cards-container-box d-flex align-items-center">
          {courses.map((course, index) => (
            <div key={index} className="course-cards">
              <div className="card">
                {/* <img
                  src={course.image}
                  alt={course.title}
                  className="card-img-top"
                /> */}
                <div className="image-div"></div>
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
