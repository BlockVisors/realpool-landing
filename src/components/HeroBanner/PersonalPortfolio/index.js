import React from 'react';
import HeroBannerContainer from "../../../container/HeroBanner";
import bannerBg from '../../../assets/images/hero/cairo.jpg'
import Cairo from '../../../assets/images/hero/cairo.jpg'
import Bg3 from '../../../assets/images/hero/BG3.png'


import personalInfo from '../../../data/PersonalInfo'

const BannerPersonalPortfolio = () => {
    return (
        <HeroBannerContainer bg={Bg3} overlay={false}>
            <div className="main-slider-content">
                <h2>RealPool™....DeFi + Real World Real Estate</h2>
                <h3>{personalInfo.name}</h3>
                <h5>{personalInfo.designation}</h5>
                <a href={`${process.env.PUBLIC_URL + personalInfo.resumeURL}`}>learn more</a>
            </div>
        </HeroBannerContainer>
    );
};

export default BannerPersonalPortfolio;