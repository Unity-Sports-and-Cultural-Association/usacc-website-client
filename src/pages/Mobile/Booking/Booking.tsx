import React, { ReactElement } from 'react';
import Header from '../../../components/Header';
import './Booking.scss';

function Booking(): ReactElement {
    return (
        <div className='test-height'>
            <Header
                title={<div>Renting a<br />Service</div>}
                topic='Booking Halls, Bartenders, & Catering'
                description='Unity provides services for booking If you are looking for a space to host your next event or authentic Caribbean catering.'
            />
        </div>
    );
}

export default Booking;
