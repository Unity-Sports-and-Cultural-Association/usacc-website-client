import React, { ReactElement } from 'react';
import './HomeBooking.scss';
import { Link } from 'react-router-dom';
function HomeBooking(): ReactElement {
    return (
        <div className='home-widget-booking-container'>
            <div className='home-booking-container'>
                <div className='home-booking-title-container'>Renting a Service</div>
                <div className='home-booking-topic-container'>Booking Halls, Bartenders, & Catering</div>
                <div className='home-booking-description-container'>Unity provides services for booking If you are looking for a space to host your next event or authentic Caribbean catering.</div>
                <Link to="/booking" className='home-booking-button-container red-button'>Request a Quote</Link>
            </div>
        </div>
    );
}

export default HomeBooking;
