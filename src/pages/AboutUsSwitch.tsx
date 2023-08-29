import React, { ReactElement } from 'react';
import ViewPortSwitch from '../components/ViewPortSwitch/ViewPortSwitch';
import AboutUs from './Desktop/AboutUs';
import About from './Mobile/About/About';

type AboutUsSwitchProps = {
    isMobile: boolean;
}

function AboutUsSwitch({ isMobile }: AboutUsSwitchProps): ReactElement {
    return (
        <ViewPortSwitch Desktop={<AboutUs />} Mobile={<About />} isMobile={isMobile} />
    );
}

export default AboutUsSwitch;
