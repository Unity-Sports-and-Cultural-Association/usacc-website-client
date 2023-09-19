import React, { ReactElement, useContext } from 'react';
import ViewPortSwitch from '../components/ViewPortSwitch/ViewPortSwitch';
import IsMobileContext from '../utils/isMobileContext';
import Booking from './Desktop/Booking';
import MobileBooking from './Mobile/Booking/Booking';

function BookingSwitch(): ReactElement {
    const isMobile = useContext(IsMobileContext);
    return (
        <ViewPortSwitch Desktop={<Booking />} Mobile={<MobileBooking />} isMobile={isMobile} />
    );
}

export default BookingSwitch;
