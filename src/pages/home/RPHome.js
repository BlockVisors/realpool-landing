import React, { Component } from "react";
import PropTypes from 'prop-types'; // ES6
import {Container, Row, Col} from 'react-bootstrap'


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
import TokenEcosystem from "../../components/HeroBanner/TokenEcosystem";
// import Faq from "react-faq-component";
import FAQ from "../../components/faq";
import SectionTitle from '../../components/SectionTitle';






const RPHome = () => {

    const slider  = React.useRef(null);

    const SlideNext = ()=>{
        slider.current.slickNext();
    };

    const SlidePrev = ()=>{
        slider.current.slickPrev();
    };

    // const data = {
    //     title: "FAQ (How it works)",
    //     rows: [
    //         {
    //             title: "Lorem ipsum dolor sit amet,",
    //             content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
    //               ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
    //               In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
    //               Fusce sed commodo purus, at tempus turpis.`,
    //         },
    //         {
    //             title: "Nunc maximus, magna at ultricies elementum",
    //             content:
    //                 "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    //         },
    //         {
    //             title: "Curabitur laoreet, mauris vel blandit fringilla",
    //             content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
    //             Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
    //             Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
    //             Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    //         },
    //         {
    //             title: "What is the package version",
    //             content: <p>current version is 1.2.1</p>,
    //         },
    //     ],
    // };
     
    // const styles = {
    //     // bgColor: 'white',
    //     titleTextColor: "blue",
    //     rowTitleColor: "blue",
    //     // rowContentColor: 'grey',
    //     // arrowColor: "red",
    // };
     
    // const config = {
    //         animate: true,
    //     // arrowIcon: "V",
    //     tabFocus: true
    // };
     

    return (
        <div className={'main-wrapper p-0'}>
            <HeaderRP classes={'position-static'}/>
            <SideHeader mobile={true}/>
            <BannerPersonalPortfolio/>
            <PortfolioDefault ref={slider}/>
            <PersonalPortfolioService/>
            <TokenEcosystem />
            <PersonalPortfolio/>
            <PersonalPortfolioTeam/>
        
            {/* <Faq data={data} styles={styles} config={config} /> */}
            <div className="section-wrap section">
                <Container>
                <div id="faq-title">
                <Row>
                    <Col>
                    <SectionTitle
                    title={"Faq"}
                    content={"Frequently Asked Questions"}
                     />
                     </Col>
                </Row>
             </div>
            <FAQ>
                <FAQ.QAItem>
                <FAQ.Question answerId="q1">
                    {(isOpen, onToggle) => {
                     return (
                <>
                  {isOpen ? "Open " : "Close "}
                  <span>What is your question?</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q1"> Knock Knock! </FAQ.Answer>
        </FAQ.QAItem>
        <FAQ.QAItem>
          <FAQ.Question answerId="q2">
            {(isOpen, onToggle) => {
              return (
                <>
                  {isOpen ? "Open " : "Close "}
                  <span>Why do you ask such stupid questions?</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q2"> 42 is the answer. </FAQ.Answer>
        </FAQ.QAItem>
        <FAQ.QAItem>
          <FAQ.Question answerId="q3">
            {(isOpen, onToggle) => {
              return (
                <>
                  {isOpen ? "Open " : "Close "}
                  <span>Any other questions?</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q3"> Seek and you shall find. </FAQ.Answer>
        </FAQ.QAItem>
      </FAQ>
      </Container>
      </div>
            {/* <Contact/> */}
            <Footer position={'static'}/>
        </div>
    );
};

export default RPHome;
