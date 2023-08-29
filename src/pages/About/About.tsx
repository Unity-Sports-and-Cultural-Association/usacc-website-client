import React, { ReactElement } from 'react';
import './About.scss';
import Header from '../../components/Header/Header';
function About(): ReactElement {
	return (
		<div className='test-height'>
			<Header
				title='About us'
				topic='Caribbean-American non-profit'
				description='Unity Sports and Cultural Association is a vibrant and diverse community that celebrates and supports Caribbean culture, sports, and social justice in New England.'
			/>
		</div>
	);
}

export default About;