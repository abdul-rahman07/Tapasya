import React from 'react';
import './AboutUs.scss';
import Logo from '../assets/logo.png';
import LogoText from '../assets/logoText.png';

const AboutTapasya = () => {
    return (
        <div className='aboutTapasyaContainer'>
            <div className="backgroundImageContainer">
<div className="contentDivContainer">
<div className="logoDiv">
                    <img src={Logo} alt="Logo" className="logoImage"/>
                    <img src={LogoText}
                    alt="LogoText"
                    className="logoTextImage"
                    />
                </div>
                <div className="contentDiv">
                Thapasya Academy of Dance in Clyde North, Melbourne, celebrates South Indian classical dance through Bharatanatyam, Mohiniyattam, and more. Led by Satheesh Moonnukandathil, it fosters artistic growth and cultural connection for all ages.
                </div>
</div>
            </div>
        </div>
    );
};

export default AboutTapasya;