import React, { ReactElement } from 'react';
import './HomeBooking.scss';
function HomeBooking(): ReactElement {
    return (
        <div className='home-booking-container'>
            <div className='home-booking-title-container'>Renting a Service</div>
            <div className='home-booking-topic-container'>Booking Halls, Bartenders, & Catering</div>
            <div className='home-booking-description-container'>Unity provides services for booking If you are looking for a space to host your next event or authentic Caribbean catering.</div>
            <a href='./Booking' className='home-booking-button-container'>Request a Quote</a>
        </div>
    );
}

export default HomeBooking;
