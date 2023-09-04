import React, { ReactElement } from 'react';
import Email from '../../../components/Email/Email';
import HomeBooking from '../../../components/HomeBooking/HomeBooking';
import HomeHeader from '../../../components/HomeHeader/HomeHeader';
import HomeLearnMore from '../../../components/HomeLearnMore/HomeLearnMore';
import LocationWidget from '../../../components/LocationWidget';
import './Home.scss';

function Home(): ReactElement {
    return (
        <>
            <HomeHeader />
            <HomeBooking />
            <HomeLearnMore
                image={'./assets/volunteering.png'}
                title="Volunteering"
                topic="Community Events"
                description="Unity Sports and Cultural Club offers a range of events and activities that give back to the community. Including opportunities for community service."
                button='./volunteering'
            />
            <HomeLearnMore
                image={'./assets/membership.png'}
                title="Membership"
                topic="Making a Difference"
                description="Unity is always open to spirited individuals who support the mission and vision of the organization. Even though we are a Caribbean club everyone is welcome."
                button='./membership'
            />
            <LocationWidget />
            <Email />
        </>
    );
}

export default Home;
