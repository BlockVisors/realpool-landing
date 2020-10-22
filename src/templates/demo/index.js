import React, {useEffect, Fragment} from 'react';
import '../../assets/scss/demo.scss'
import DemoHeader from "./Header";
import DemoHeroBanner from "./HeroBanner";
import DemoHomePages from "./HomePages";
import DemoOtherPages from "./OtherPages";
import DemoFeatures from "./Features";
import DemoFooter from "./Footer";
import demos from '../../data/demo';


const TemplateDemo = () => {
    const isSticky = e => {
        const header = document.querySelector('.header-area');
        const scrollTop = window.scrollY;
        scrollTop >= 200 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };

    useEffect(() => {
        window.addEventListener('scroll', isSticky);

        return () => {
            window.removeEventListener('scroll', isSticky);
        }
    }, []);

    return (
        <Fragment>
            <DemoHeader/>
            <DemoHeroBanner/>
            <DemoHomePages homepages={demos.homepages}/>
            <DemoOtherPages otherpages={demos.otherpages} />
            <DemoFeatures features={demos.features}/>
            <DemoFooter/>
        </Fragment>
    );
};

export default TemplateDemo;