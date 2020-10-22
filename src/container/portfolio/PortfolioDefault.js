import React, {useRef, useImperativeHandle, forwardRef} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Portfolio from "../../components/portfolio";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.scss'
import portfolioData from '../../data/portfolio/PortfolioLongHeight'
import SectionTitle from "../../components/SectionTitle";
import greenBg from '../../assets/images/hero/green-bg.png';




let PortfolioDefault = (props, ref) => {
    const slider = useRef(null);

    useImperativeHandle(ref, () => ({
        slickNext: () => {
            slider.current.slickNext();
        },
        slickPrev: () => {
            slider.current.slickPrev();
        }
    }));

    const carouselSettings = {
        arrows: false,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                }
            }
        ]
    };

    return (
        // <div className="content-body section" style={{backgroundImage: `url(${greenBg})`}}>

        <div className="content-body section">
            <div className="section-wrap section" id="top-money">
                <Container fluid>
                <Row>
                    <Col>
                        <SectionTitle
                            title={'5 Ways to Make Money'}
                            content={'Earn Comp and BAL by staking your DAI in a RealPool™. Earn REALP from staking liquidity or your original REALP. Also, Earn RPY from staking your NFT Option from participating in a RealPool™.'}
                        />
                    </Col>
                </Row>
                    <Row>
                        <Col className={'p-0'}>
                            <Slider ref={slider} {...carouselSettings}>
                                {portfolioData.map(portfolio => (
                                    <div key={portfolio.id} className="col pl-5 pr-5">
                                        <Portfolio
                                            title={portfolio.title}
                                            thumb={portfolio.thumb}
                                            category={portfolio.category}
                                            classes={'portfolio-screen-height'}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default forwardRef(PortfolioDefault);
