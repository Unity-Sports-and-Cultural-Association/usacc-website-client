import React, { ReactElement, useContext } from 'react';
import ViewPortSwitch from '../components/ViewPortSwitch/ViewPortSwitch';
import IsMobileContext from '../utils/isMobileContext';
import Desktop from './Desktop/Events';
import Mobile from './Mobile/Events/Events';


function MenuSwitch(): ReactElement {
    const isMobile = useContext(IsMobileContext);
    return (
        <ViewPortSwitch Desktop={<Desktop />} Mobile={<Mobile />} isMobile={isMobile} />
    );
}

export default MenuSwitch;
