import React, { useState } from "react";
import Select from "react-select";
import "./Form.scss";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    phone: "",
    enrollmentDate: null,
    danceClass: null,
  });

  const danceClassOptions = [
    { value: "bharatanaatiyam", label: "Bharatanaatiyam" },
    { value: "mohiniyaatam", label: "Mohiniyaatam" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
   <div className="container-form">
     <h1 className="form-title">Enquiry Form</h1>
        <div className="form-container">
      <form className="d-flex flex-column" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

<div className="d-lg-flex align-items-center justify-content-between">
<div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
            className="age-input"
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="age-input"
          />
        </div>
</div>



<div className="d-lg-flex align-items-center justify-content-between">
<div className="form-group">
          <label>Enrollment Date</label>
          <input
        type="date"
        id="date-picker"
        value={formData.enrollmentDate}
        onChange={(date) => setFormData({ ...formData, enrollmentDate: date })}
        className="age-input"
      />
        </div>

        <div className="form-group">
          <label>Dance Class</label>
          <Select
            options={danceClassOptions}
            value={formData.danceClass}
            onChange={(option) => setFormData({ ...formData, danceClass: option })}
            placeholder="Select Dance Class"
            required
            className="age-input"
          />
        </div>
</div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
   </div>
  );
};

export default EnquiryForm;
