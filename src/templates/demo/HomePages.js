import React from 'react';
import {Link} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap'

const DemoHomePages = ({homepages}) => {
    return (
        <div className="demo-section section-padding bg-grey" id="demo-area">
            <Container>
                <Row>
                    <Col>
                        <div className="section-style">
                            <div className="section-title">
                                <h2>Home Pages</h2>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {homepages.map(homepage => (
                        <Col key={homepage.id} md={6} lg={4}>
                            <div className="demo-item">
                                <Link to={`${process.env.PUBLIC_URL + homepage.link}`}
                                      className="image"
                                      target="_blank">
                                    <img src={require('../../assets/images/demos/pages/' + homepage.image)}
                                         alt={homepage.title}/>
                                    <i className="fa fa-long-arrow-right"/>
                                </Link>
                                <h4 className="title">
                                    <a href={`${process.env.PUBLIC_URL + homepage.link}`}
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        {homepage.title}
                                    </a>
                                </h4>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default DemoHomePages;