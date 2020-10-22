import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import HeroBannerContainer from "../../../container/HeroBanner";
import bannerBg from '../../../assets/images/hero/cairo.jpg'
import Cairo from '../../../assets/images/hero/cairo.jpg'
import Bg3 from '../../../assets/images/hero/BG3.png'


import personalInfo from '../../../data/PersonalInfo'
import tokenInfo from '../../../data/TokenInfo'
import SectionTitle from '../../../components/SectionTitle';



const TokenEcosystem = () => {
    return (
        <div className="bg-grey section service-bg">
     
        <HeroBannerContainer overlay={false}>
            <Container>
             <div id="top-money2">
                <Row>
                <Col>
                <SectionTitle
                title={"RealPool™ Token Ecosystem"}
                content={"3 Token Ecosystem - 3 Tokens "}
                     />
                 </Col>
             </Row>
             </div>
            {/* <div className="main-slider-content">
                <h2>RealPool= REALP + RPY + NFT Options</h2>
                <h3>{tokenInfo.name}</h3>
                <h5>{tokenInfo.designation}</h5>
                
            </div> */}
            <div className="eco-content">
                <Row>
                    <h3>REALP - 88888 - Token Supply - Real Pool Utility/Governance</h3>
                    <h5>REALP is the on platform reward for staking. It is to obtained staking REALP brought elsewhere on our site or
                    by staking REALP and ETH as a pair on UniSwap. Available in sale and uniswap
                    </h5>
                    <div>
                    <a href={`${process.env.PUBLIC_URL + tokenInfo.resumeURL}`}>learn more</a>
                    </div>
                </Row>
            </div>
            <div className="eco-content">
                <Row>
                    <h3>RPY - 8888 - Token Supply  - Real Pool Yield Token</h3>
                        <h5>Only achieved from staking Real Options NFT
                    RPY is the ultimate reward for using our ecosystem. It all comes full circle with staking of the property option.
                    Staking of the NFTs helps keep value because they are tradable and unique but less likely to be dumped.
                    </h5>
                    <div>
                     <a href={`${process.env.PUBLIC_URL + tokenInfo.resumeURL}`}>learn more</a>
                    </div>
            </Row>
                </div>
                <div className="eco-content">
                <Row>
                    <h3>RealPool Option NFT - </h3>
                        <h5>Achieved by participating RealPools 
                    Thesee are unique series NFT (Non-Fungible Tokens) awarded to those who participate in RealPools.These represent
                    future Limited partnership options in real estate invesment and development projects.
                    </h5>
                    <div>
                    <a href={`${process.env.PUBLIC_URL + tokenInfo.resumeURL}`}>learn more</a>
                    </div>
            </Row>
                </div>
                
                </Container>
                
        
        </HeroBannerContainer>
     
         </div>
        
    );
};

export default TokenEcosystem;