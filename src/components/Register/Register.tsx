import React, { ReactElement } from 'react';
import './Register.scss';
import Email from '../../components/Email/Email';
import HomeLearnMore from '../../components/HomeLearnMore/HomeLearnMore';

function Register(): ReactElement {
    return (
        <div className='Register-container'>
            <div className='Register-left-container'>
                <HomeLearnMore
                    image={'./assets/membership.png'}
                    title="Membership"
                    topic="Making a Difference"
                    description="Unity is always open to spirited individuals who support the mission and vision of the organization. Even though we are a Caribbean club everyone is welcome."
                    button='./membership'
                />
            </div>
            <div className='Register-right-container'><Email /></div>
        </div>
    );
}

export default Register;
