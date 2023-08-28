import React, { ReactElement } from 'react';
import './Home.scss';
import Header from '../../components/Header/Header';
function Home(): ReactElement {
	return (
		<div className='test-height'>
            <Header />
        </div>
	);
}

export default Home;