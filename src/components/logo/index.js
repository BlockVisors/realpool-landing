import React,{Fragment} from 'react';
// Logo
import LogoDark from '../../assets/images/graphics/realpool-logo.png'
import LogoLight from '../../assets/images/graphics/realpool-logo-white-trans.png'

const Logo = ({sideHeader}) => {
    return (
        <Fragment>
            {sideHeader?(
                <a href={`${process.env.PUBLIC_URL + '/'}`}>
                    <img src={LogoDark} alt="logo"/>
                    <img src={LogoLight} className="light-logo" alt="logo"/>
                </a>
            ):(
                <div className="header-logo col-lg-2 col-6 mt-40 mb-40">
                    <a href={`${process.env.PUBLIC_URL + '/'}`}>
                        <img src={LogoDark} alt="logo"/>
                        <img src={LogoLight} className="light-logo" alt="logo"/>
                    </a>
                </div>
            )}
        </Fragment>
    );
};

export default Logo;
