import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

const DemoFeatures = ({features}) => {
    return (
        <div className="bg-grey sp-y section-padding" id="core-feature">
            <Container>
                <Row>
                    <Col md={6} className={'m-auto'}>
                        <div className="section-title text-center">
                            <h2>Minimau Core Feature</h2>
                            <p>Minimau comes with some Powerful features that make easily customizable and scalable.</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {features.map(feature => (
                        <Col key={feature.id} sm={6} md={4} lg={3}>
                            <div className="feature-item">
                                <img src={require("../../assets/images/demos/" + feature.logo)}
                                     alt={feature.name}
                                     style={{width: 60}}
                                />
                                <h4>{feature.name}</h4>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default DemoFeatures;