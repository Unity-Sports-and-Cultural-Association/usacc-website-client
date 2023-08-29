import React, { ReactElement } from 'react';
import { SlArrowLeft } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import './BackNav.scss';

function BackNav(): ReactElement {
	const navigate = useNavigate();

	return (
		<div onClick={(): void => navigate(-1)} className='back-nav-container'>
			<SlArrowLeft />
			<div className='back-nav-link'>
                Back
			</div>
		</div>
	);
}

export default BackNav;
