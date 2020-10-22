import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

const DemoFooter = () => {
    return (
        <div className="footer-area bg-dark">
            <Container>
                <Row>
                    <Col>
                        <div className="footer-content text-center">
                            <h3>Make your website come to life quickly.</h3>
                            <a className="btn-outline"
                               href="https://hasthemes.com/"
                               target="_blank" rel="noreferrer noopener">
                                Buy Minumau
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DemoFooter;