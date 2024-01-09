import React, { ReactElement } from 'react';
// import Email from '../../../components/Email/Email';
// import FacebookWidget from '../../../components/FacebookWidget/FacebookWidget';
// import HomeBooking from '../../../components/HomeBooking/HomeBooking';
import HomeEvents from '../../../components/HomeEvents';
import HomeHeader from '../../../components/HomeHeader/HomeHeader';
// import HomeLearnMore from '../../../components/HomeLearnMore/HomeLearnMore';
import LocationWidget from '../../../components/LocationWidget';
import './Home.scss';
import Register from '../../../components/Register';
// import Membership from '../Membership/Membership';
// import MobileContent from '../../../components/MobileContent/MobileContent';

function Home(): ReactElement {
    return (
        <>
            <HomeHeader />
            <HomeEvents />
            <Register />
            <LocationWidget />
        </>
    );
}

export default Home;

{/* <HomeBooking /> */}
{/* <div className='home-content-container'>
    <MobileContent>
        <HomeLearnMore
            image={'./assets/volunteering.png'}
            title="Volunteering"
            topic="Community Events"
            description="Unity Sports and Cultural Club offers a range of events and activities that give back to the community. Including opportunities for community service."
            button='./volunteering'
        />
        <HomeLearnMore
            image={'./assets/events.png'}
            title="Events"
            topic="Come Together"
            description="Our club hosts a variety kinds of events, from arts and crafts to DJs on stage. Unity provides an open space where there’s always something for everyone here at Unity."
            button='./membership'
        />
        <HomeLearnMore
            image={'./assets/membership.png'}
            title="Membership"
            topic="Making a Difference"
            description="Unity is always open to spirited individuals who support the mission and vision of the organization. Even though we are a Caribbean club everyone is welcome."
            button='./membership'
        />
        <FacebookWidget />
    </MobileContent>
</div> */}
