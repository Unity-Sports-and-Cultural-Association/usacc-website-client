import React, { ReactElement, useContext } from 'react';
import ViewPortSwitch from '../components/ViewPortSwitch/ViewPortSwitch';
import IsMobileContext from '../utils/isMobileContext';
import Desktop from './Desktop/Membership';
import Mobile from './Mobile/Membership/Membership';


function VolunteeringSwitch(): ReactElement {
    const isMobile = useContext(IsMobileContext);
    return (
        <ViewPortSwitch Desktop={<Desktop />} Mobile={<Mobile />} isMobile={isMobile} />
    );
}

export default VolunteeringSwitch;
