import React, { ReactElement } from 'react';
import './Booking.scss';
import Header from '../../components/Header/Header';
function Booking(): ReactElement {
	return (
		<div className='test-height'>
			<Header
				title='Renting a&#13;&#10;Service'
				topic='Booking Halls, Bartenders, & Catering'
				description='Unity provides services for booking If you are looking for a space to host your next event or authentic Caribbean catering.'
			/>
		</div>
	);
}

export default Booking;