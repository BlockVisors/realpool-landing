import React from 'react';
import {Link} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap'

const DemoOtherPages = ({otherpages}) => {
    return (
        <div className="demo-section section-padding">
            <Container>
                <Row className="row">
                    <Col>
                        <div className="section-style">
                            <div className="section-title">
                                <h2>Other Pages</h2>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {otherpages.map(otherpage => (
                        <Col key={otherpage.id} md={6} lg={4}>
                            <div className="demo-item">
                                <Link to={`${process.env.PUBLIC_URL + otherpage.link}`}
                                      className="image"
                                      target="_blank">
                                    <img src={require('../../assets/images/demos/pages/' + otherpage.image)}
                                         alt={otherpage.title}/>
                                    <i className="fa fa-long-arrow-right"/>
                                </Link>
                                <h4 className="title">
                                    <a href={`${process.env.PUBLIC_URL + otherpage.link}`}
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        {otherpage.title}
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

export default DemoOtherPages;