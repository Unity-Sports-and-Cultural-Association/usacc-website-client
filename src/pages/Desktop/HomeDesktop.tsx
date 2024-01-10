import React, { ReactElement } from 'react';
import HomeEvents from '../../components/HomeEvents';
import HomeHeaderDesktop from '../../components/HomeHeader/HomeHeaderDesktop';
import LocationWidget from '../../components/LocationWidget';
import Register from '../../components/Register';
import VolunteeringDesktop from '../../components/VolunteeringDesktop';

function HomeDesktop(): ReactElement {
    return (
        <>
            <HomeHeaderDesktop />
            <VolunteeringDesktop />
            <HomeEvents />
            <Register />
            <LocationWidget />
        </>
    );
}

export default HomeDesktop;
