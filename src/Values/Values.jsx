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
                   <img className="heading-img" src={pointsImage} alt="heart-health" />
                    <p className="heading">Technical Precision</p>
                    <p className="content">Perfecting movements and gestures for flawless execution.</p>
                   </div>
                    <div className="outer-round">
                        <div className="inner-round"></div>
                    </div>
                </div>
                <div className="point-2">
                   <div className="d-flex flex-column align-items-center">
                   <img className="heading-img" src={pointsImage} alt="heart-health" />
                    <p className="heading">Artistic Expression</p>
                    <p className="content">Bringing stories and emotions to life through dance.</p>
                   </div>
                    <div className="outer-round">
                        <div className="inner-round"></div>
                    </div>
                </div>
                <div className="point-3">
                    <div className="d-flex flex-column align-items-center">
                    <img className="heading-img" src={pointsImage} alt="heart-health" />
                    <p className="heading">Cultural Preservation</p>
                    <p className="content">Upholding the beauty and traditions of South Indian classical dance.</p>
                    </div>
                    <div className="outer-round">
                        <div className="inner-round"></div>
                    </div>
                </div>
                <div className="point-4">
                    <div className="d-flex flex-column align-items-center">
                    <img className="heading-img" src={pointsImage} alt="heart-health" />
                    <p className="heading">Personal Growth</p>
                    <p className="content">Fostering self-confidence and discipline through dance.</p>
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