import React, { ReactElement, useContext } from 'react';
import ViewPortSwitch from '../components/ViewPortSwitch/ViewPortSwitch';
import IsMobileContext from '../utils/isMobileContext';
import Volunteering from './Desktop/Volunteering';
import Volunteer from './Mobile/Volunteer/Volunteer';

function VolunteeringSwitch(): ReactElement {
    const isMobile = useContext(IsMobileContext);
    return (
        <ViewPortSwitch Desktop={<Volunteering />} Mobile={<Volunteer />} isMobile={isMobile} />
    );
}

export default VolunteeringSwitch;
