import React, { ReactElement } from 'react';
import './Home.scss';
import Membershipimg from '../../../components/data/membership.png.png';
import Volunteerimg from '../../../components/data/volunteering.png.png';
import Email from '../../../components/Email/Email';
import HomeBooking from '../../../components/HomeBooking/HomeBooking';
import HomeHeader from '../../../components/HomeHeader/HomeHeader';
import HomeLearnMore from '../../../components/HomeLearnMore/HomeLearnMore';
function Home(): ReactElement {
    return (
        <div className='test-height'>
            <HomeHeader />
            <HomeBooking />
            <HomeLearnMore
                image={Volunteerimg}
                title="Volunteering"
                topic="Community Events"
                description="Unity Sports and Cultural Club offers a range of events and activities that give back to the community. Including opportunities for community service."
                button='./volunteering'
            />
            <HomeLearnMore
                image={Membershipimg}
                title="Membership"
                topic="Making a Difference"
                description="Unity is always open to spirited individuals who support the mission and vision of the organization. Even though we are a Caribbean club everyone is welcome."
                button='./membership'
            />
            <Email />
        </div>
    );
}

export default Home;
