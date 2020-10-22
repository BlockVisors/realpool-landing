import React from 'react';


// File imported
//import Header from "../../components/header/HeaderOne";
import HeaderRP from "../../components/header/HeaderRP";
import SideHeader from "../../components/SideHeader";
import BannerPersonalPortfolio from "../../components/HeroBanner/PersonalPortfolio";
import PersonalPortfolio from "../../container/portfolio/PersonalPortfolio";
import PortfolioDefault from "../../container/portfolio/PortfolioDefault";

import PersonalPortfolioService from "../../container/service";
import PersonalPortfolioTeam from "../../container/team";
import Contact from "../../container/contact";
import Footer from "../../components/footer/FooterThree";

const RPHome = () => {

    const slider  = React.useRef(null);

    const SlideNext = ()=>{
        slider.current.slickNext();
    };

    const SlidePrev = ()=>{
        slider.current.slickPrev();
    };
    return (
        <div className={'main-wrapper p-0'}>
            <HeaderRP classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <BannerPersonalPortfolio/>
            <PortfolioDefault ref={slider}/>

            <PersonalPortfolio/>
            <PersonalPortfolioService/>
            <PersonalPortfolioTeam/>
           
            {/* <Contact/> */}
            <Footer position={'static'}/>
        </div>
    );
};

export default RPHome;
