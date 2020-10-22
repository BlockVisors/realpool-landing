import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import LogoLight from "../../assets/images/light-logo.png";
import LogoDark from "../../assets/images/logo.png";

const DemoHeader = () => {
    return (
        <div className="header-area section fixed-top">
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col xs={6}>
                        <div className="logo">
                            <img className={'logo-light'} src={LogoLight} alt="logo"/>
                            <img className={'logo-dark'} src={LogoDark} alt="Stikcy Logo"/>
                        </div>
                    </Col>

                    <Col xs={6}>
                        <div className="buy-btn-area text-right">
                            <a className="btn-outline d-inline-block" href="https://hasthemes.com/"
                               target="_blank" rel="noopener noreferrer">Buy Minimau</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DemoHeader;