import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';


import HeroBannerContainer from "../../../container/HeroBanner";
import bannerBg from '../../../assets/images/hero/cairo.jpg'
import Cairo from '../../../assets/images/hero/cairo.jpg'
import Bg3 from '../../../assets/images/hero/BG3.png'
// import EcoBG from '../../../assets/images/graphics/REALP-Eco.jpg'
import SectionTitle from '../../../components/SectionTitle';



import personalInfo from '../../../data/PersonalInfo'

const EcoBack = () => {
    return (
            
        <HeroBannerContainer bg={Bg3} overlay={false}>
           <div id="top-money">
                <Row>
                <Col>
                <SectionTitle
                title={"RealPool™ Token Ecosystem"}
                content={""}
                     />
                 </Col>
             </Row>
             </div> 
            {/* <div className="main-slider-content">
                <h2>RealPool™....DeFi + Real World Real Estate</h2>
                <h3>{personalInfo.name}</h3>
                <h5>{personalInfo.designation}</h5>
                <a href={`${process.env.PUBLIC_URL + personalInfo.resumeURL}`}>learn more</a>
            </div> */}
        </HeroBannerContainer>
    );
};

export default EcoBack;