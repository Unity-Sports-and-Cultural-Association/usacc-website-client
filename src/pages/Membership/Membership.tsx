import React, { ReactElement } from 'react';
import './Membership.scss';
import Header from '../../components/Header/Header';
function Membership(): ReactElement {
	return (
		<div className='test-height'>
			<Header
				title='Community&#13;&#10;Member'
				topic='Join our mission'
				description='Unity is always open to spirited individuals who support the mission and vision of the organization. Even though we are a Caribbean club everyone is welcome.'
			/>
		</div>
	);
}

export default Membership;