import React, { ReactElement } from 'react';
import './Header.scss';

function Header(): ReactElement {
	return (
		<div className='header-container'>
			<div className='header-title-container'>Renting a <br/>Service</div>
			<div className='header-topic-container'>Booking Halls, Bartenders, & Catering</div>
			<div className='header-description-container'>Unity provides services for booking If you are looking for a space to host your next event or authentic Caribbean catering.</div>
		</div>
	);
}

export default Header;