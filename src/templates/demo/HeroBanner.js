import React from 'react';
import heroBg from '../../assets/images/demos/hero-bg.jpg'

const DemoHeroBanner = () => {
    return (
        <div className="hero-section" style={{backgroundImage: `url(${heroBg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 m-auto">
                        <div className="hero-content-wrap">
                            <div className="hero-content text-center">
                                <h1><strong>Minimau</strong> React Minimal Portfolio Template</h1>
                                <h4>Minimal Portfolio React Template.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoHeroBanner;