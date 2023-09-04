import React, { ReactElement, useContext } from 'react';
import ViewPortSwitch from '../components/ViewPortSwitch/ViewPortSwitch';
import IsMobileContext from '../utils/isMobileContext';
import AboutUs from './Desktop/AboutUs';
import About from './Mobile/About/About';

function AboutUsSwitch(): ReactElement {
    const isMobile = useContext(IsMobileContext);
    return (
        <ViewPortSwitch Desktop={<AboutUs />} Mobile={<About />} isMobile={isMobile} />
    );
}

export default AboutUsSwitch;
