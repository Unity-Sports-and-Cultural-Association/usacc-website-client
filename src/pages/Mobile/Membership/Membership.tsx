import React, { ReactElement } from 'react';
import BackHeader from '../../../components/BackHeader/BackHeader';
import BodyText from '../../../components/BodyText';
import BookingContact from '../../../components/BookingContact';
import Header from '../../../components/Header/Header';
import './Membership.scss';
import MobileContent from '../../../components/MobileContent/MobileContent';

function Membership(): ReactElement {

    return (
        <MobileContent>
            <Header
                title={<div>Community<br />Member</div>}
                topic='Join our mission'
                description='Unity is always open to spirited individuals who support the mission and vision of the organization. Even though we are a Caribbean club everyone is welcome.'
            />
            <BackHeader />
            <div className='mobile-content-container'>
                <BodyText textFile={'/pages/Membership.txt'} />
                <div className='membership-pdf-container'>
                    <BookingContact
                        title={'Contact Us'}
                        description={''}
                        phoneNumber={'(617) 436-9550'}
                        email={'UnityPublicRelationsCommittee@gmail.com'}
                    />
                </div>
            </div>
        </MobileContent>
    );
}

export default Membership;
