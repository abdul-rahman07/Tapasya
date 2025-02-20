import React from "react";
import pointsImage from "../assets/Image.svg";
import "./Values.scss";

const Values = () => {
    return (
        <div className="container-values">
            <div className="values-section position-relative">
                <div className="top-div">
                    <h4>Our Values</h4>
                </div>
                <div className="bottom-div">
                    <p>At Thapasya Academy, our mission is to help each dancer reach their full potential while staying true to the essence of classical dance. We uphold the following core values.</p>
                </div>
                <div className="gradient-outer-round position-absolute">
                    <div className="inner-normal-round"></div>
                </div>
            </div>
            <div className="values-point-list-container">
                <div className="point-1">
                   <div className="d-flex flex-column align-items-center">
                   <div className="headingImgcontainer">
                    <img className="heading-img" src={pointsImage} alt="heart-health" />
                   </div>
                    <p className="heading">Unlocking Potential</p>
                    <p className="content">We strive to unlock the full potential of every dancer by creating an environment that honors traditional dance forms.</p>
                   </div>
                    <div className="outer-round">
                        <div className="inner-round"></div>
                    </div>
                </div>
                <div className="point-2">
                   <div className="d-flex flex-column align-items-center">
                   <img className="heading-img" src={pointsImage} alt="heart-health" />
                    <p className="heading">Commitment to Excellence</p>
                    <p className="content">Our unwavering commitment to excellence drives us to achieve perfection and precision in technique.</p>
                   </div>
                    <div className="outer-round">
                        <div className="inner-round"></div>
                    </div>
                </div>
                <div className="point-3">
                    <div className="d-flex flex-column align-items-center">
                    <img className="heading-img" src={pointsImage} alt="heart-health" />
                    <p className="heading">Empowering Artists</p>
                    <p className="content">We empower our students to shine as exceptional artists, helping them reach their highest artistic potential.</p>
                    </div>
                    <div className="outer-round">
                        <div className="inner-round"></div>
                    </div>
                </div>
                <div className="point-4">
                    <div className="d-flex flex-column align-items-center">
                    <img className="heading-img" src={pointsImage} alt="heart-health" />
                    <p className="heading">Thriving for excellence</p>
                    <p className="content">We maintain a framework of high standards that ensures the growth and success of every dancer.</p>
                    </div>
                    <div className="outer-round">
                        <div className="inner-round"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Values;