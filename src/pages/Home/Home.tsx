import React, { ReactElement } from 'react';
import './Home.scss';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
function Home(): ReactElement {
    return (
        <div className='test-height'>
            <HomeHeader />
        </div>
    );
}

export default Home;
