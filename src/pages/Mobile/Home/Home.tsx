import React, { ReactElement } from 'react';
import HomeHeader from '../../../components/HomeHeader';
import './Home.scss';

function Home(): ReactElement {
    return (
        <div className='test-height'>
            <HomeHeader />
        </div>
    );
}

export default Home;
