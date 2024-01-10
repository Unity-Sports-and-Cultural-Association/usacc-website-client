import React, { ReactElement, useContext } from 'react';
import ViewPortSwitch from '../components/ViewPortSwitch/ViewPortSwitch';
import IsMobileContext from '../utils/isMobileContext';
import HomeDesktop from './Desktop/HomeDesktop';
import Home from './Mobile/Home/Home';



function LandingSwitch(): ReactElement {
    const isMobile = useContext(IsMobileContext);
    return (
        <ViewPortSwitch Desktop={<HomeDesktop />} Mobile={<Home />} isMobile={isMobile} />
    );
}

export default LandingSwitch;
