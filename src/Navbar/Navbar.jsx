import React from "react";
import "./Navbar.scss"; // Add custom styles here if needed
import logo from "../logo.svg"; // Replace with your logo's path

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#4b1f1f" }}>
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="Logo" style={{ height: "40px" }} />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#training">Training</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#blogs">Blogs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>

              {/* Login and Signup buttons */}
          <div className="d-flex">
            <button className="btn btn-light me-2 btn-login">Log in</button>
            <button className="btn btn-outline-light btn-signup">Sign up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
