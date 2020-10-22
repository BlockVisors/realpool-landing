import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SectionTitle from "../../components/SectionTitle";
import Portfolio from "../../components/portfolio";
//import portfolios from '../../data/portfolio/index';
import portfolios from '../../data/portfolio/realpoolcopy';
import personalInfo from '../../data/PersonalInfo'



const PersonalPortfolio = () => {
    return (
        <div className="section pt-120 pt-lg-80 pt-md-80 pt-sm-80 pt-xs-50 pb-120 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50">
            <Container>
                <Row id="port-row">
                    <Col>
                        <SectionTitle
                            title={'RealPools'}
                            content={'See Our Current and Upcoming RealPools.'}
                        />
                    </Col>
                </Row>

                <Row className={'portfolio-column-four mbn-30'}>
                    {portfolios.slice(0, 9).map(portfolio => (
                        <Col key={portfolio.id} lg={4} md={6} className={'mb-30'}>
                            <Portfolio
                                title={portfolio.title}
                                thumb={portfolio.thumb}
                                category={portfolio.category}
                                variant={'column'}
                            />
                        </Col>
                    ))}
                </Row>

                <div>
                <Row>
                    <Col>
                   <a href={`${process.env.PUBLIC_URL + personalInfo.resumeURL}`}>See More Pools</a>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    );
};

export default PersonalPortfolio;