import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import serviceBg from '../../assets/images/bg/service-bg.png';
import greenBg from '../../assets/images/hero/green-bg.png';

import SectionTitle from "../../components/SectionTitle";
import Service from "../../components/service";
import services from '../../data/service'
import personalInfo from '../../data/PersonalInfo'


const PersonalPortfolioService = () => {
    return (
        <div className="bg-grey section service-bg" id="top-money4" style={{backgroundImage: `url(${greenBg})`}}>
            <div className="section-wrap section pt-120 pt-lg-80 pt-md-80 pt-sm-80 pt-xs-50 pb-120 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50">
                <Container>
                    <Row>
                        <Col>
                            <SectionTitle
                                title={"How it Works"}
                                content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, aliquam."}
                            />
                        </Col>
                    </Row>

                    <Row>
                        {services.map(service => (
                            <Col key={service.id} md={6} className={'mb-40 mb-xs-30'}>
                                <Service
                                    title={service.title}
                                    content={service.content}
                                />
                            </Col>
                        ))}
                    </Row>
                    <div>
                    <Row>
                    <Col>
                   <a href={`${process.env.PUBLIC_URL + personalInfo.resumeURL}`}>See WhitePaper</a>
                    </Col>
                </Row>
                </div>
                </Container>
            </div>
        </div>
    );
};

export default PersonalPortfolioService;