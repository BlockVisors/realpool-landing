import React, { Component } from "react";
import PropTypes from 'prop-types'; // ES6
import {Container, Row, Col} from 'react-bootstrap'


// File imported
//import Header from "../../components/header/HeaderOne";
import HeaderRP from "../../components/header/HeaderRP";
import SideHeader from "../../components/SideHeader";
import BannerPersonalPortfolio from "../../components/HeroBanner/PersonalPortfolio";
import EcoBack from "../../components/HeroBanner/EcoPhoto";

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
            {/* <EcoBack /> */}
            <TokenEcosystem />
            <PersonalPortfolio/>
            <PersonalPortfolioTeam/>
        
            {/* <Faq data={data} styles={styles} config={config} /> */}
            <Container>
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
                        {/* {isOpen ? "Open " : "Close "} */}
                        <span>What is RealPool?</span>
                        </>
                    );
                    }}
                </FAQ.Question>
                <FAQ.Answer id="q1">RealPool is an Experimental Financial protocol that explores the concept of applying pooled funds from moderately aggressive yield farming of stable coins to Real Estate development and investment projects in the form Limited partnership participation.
</FAQ.Answer>
                </FAQ.QAItem>
                <FAQ.QAItem>
                <FAQ.Question answerId="q2">
                    {(isOpen, onToggle) => {
                    return (
                        <>
                        {/* {isOpen ? "Open " : "Close "} */}
                        <span>What are REALP tokens?</span>
                        </>
                    );
                    }}
                </FAQ.Question>
                <FAQ.Answer id="q2"> REALP are Real Pool’s native ERC20 tokens which are rewarded to investors in property pools. These can be traded or hodl’d on different exchanges. </FAQ.Answer>
                </FAQ.QAItem>
                <FAQ.QAItem>
                <FAQ.Question answerId="q3">
                    {(isOpen, onToggle) => {
                    return (
                        <>
                        {/* {isOpen ? "Open " : "Close "} */}
                        <span>What are Options tokens?</span>
                        </>
                    );
                    }}
                </FAQ.Question>
                <FAQ.Answer id="q3">Options tokens are unique ERC721 tokens which hold the underlying investment contract between the investor and the real estate sponsor.  </FAQ.Answer>
                </FAQ.QAItem>
                <FAQ.QAItem>
                <FAQ.Question answerId="q4">
                    {(isOpen, onToggle) => {
                     return (
                <>
                  {/* {isOpen ? "Open " : "Close "} */}
                  <span>How does the ecosystem function?</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q4">Real estate sponsors ask for a property pool to be created, Real pool platform facilitates the same, there is a pooling period when the investors are allowed to participate in the pool and there is a decision period which is a window for the sponsors to decide to accept the pooled funds or not. If accepted, the investors become limited partner in the deal with the Options token representing their stake, if rejected, the investors get their funds back added with interest for staking plus the forfeit fee charged to the sponsor</FAQ.Answer>
        </FAQ.QAItem>
        <FAQ.QAItem>
          <FAQ.Question answerId="q5">
            {(isOpen, onToggle) => {
              return (
                <>
                  {/* {isOpen ? "Open " : "Close "} */}
                  <span>How is the actual yield generated?</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q5">There are different strategies for different farms available on the Real Pool ecosystem, the REALP farm produces yields by staking user funds into best lending protocols such as Compound & Aave. There is a participation fee charged to the Sponsor which is distributed to the stakeholders of the pool in case the sponsor opts out of the deal, this adds up to the yield of the REALP farm. Yield is also enhanced slightly with fee share that is received from Uniswap.
            <br></br>The yield in the NFT Options staking farm is derived by the business of real estate directly.</FAQ.Answer>
        </FAQ.QAItem>
        <FAQ.QAItem>
          <FAQ.Question answerId="q6">
            {(isOpen, onToggle) => {
              return (
                <>
                  {/* {isOpen ? "Open " : "Close "} */}
                  <span>How do I decide which property pool to stake my funds into?</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q6">Every property has its own staking pool, information such as Property type, location, ARR etc., available on the pool can help investor decide whether to invest or not. </FAQ.Answer>
        </FAQ.QAItem>
        <FAQ.QAItem>
                <FAQ.Question answerId="q7">
                    {(isOpen, onToggle) => {
                    return (
                        <>
                        {/* {isOpen ? "Open " : "Close "} */}
                        <span>What is RPY token?</span>
                        </>
                    );
                    }}
                </FAQ.Question>
                <FAQ.Answer id="q7">RPY is the Real Pool’s governance token, which is rewarded to investors who stake their Options tokens back into the platform.</FAQ.Answer>
                </FAQ.QAItem>
                <FAQ.QAItem>
                <FAQ.Question answerId="q8">
                    {(isOpen, onToggle) => {
                     return (
                <>
                  {/* {isOpen ? "Open " : "Close "} */}
                  <span>What’s in it for Real Estate Sponsors?</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q8">Real estate sponsors will have an additional stream to raise capital, the pooled funds help to demonstrate interest and raise more funds from other sources such as banks, private equities etc.,</FAQ.Answer>
        </FAQ.QAItem>
        <FAQ.QAItem>
          <FAQ.Question answerId="q9">
            {(isOpen, onToggle) => {
              return (
                <>
                  {/* {isOpen ? "Open " : "Close "} */}
                  <span>What is the fee for participation on the Platform?</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q9">There is no fee for the investors apart from the gas fee they pay for the transactions, REALP plans to charge the sponsors an Asset management fee..</FAQ.Answer>
        </FAQ.QAItem>
        <FAQ.QAItem>
          <FAQ.Question answerId="q10">
            {(isOpen, onToggle) => {
              return (
                <>
                  {/* {isOpen ? "Open " : "Close "} */}
                  <span>When will the platform be live?</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q10">We are releasing the alpha version of the platform on Kovan test net by end of Oct, we intend to onboard the real estate sponsors, raise necessary funds, complete development through the rest of the year and go-live in early Jan’21.</FAQ.Answer>
        </FAQ.QAItem>
      </FAQ>
      </Container>
      </div>
            </Container>

            {/* <Contact/> */}
            <Footer position={'static'}/>
        </div>
    );
};

export default RPHome;
