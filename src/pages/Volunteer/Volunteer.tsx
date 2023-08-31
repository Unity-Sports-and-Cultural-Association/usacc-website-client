import React, { ReactElement } from 'react';
import './Volunteer.scss';
import BackHeader from '../../components/BackHeader/BackHeader';
import Header from '../../components/Header/Header';
function Volunteer(): ReactElement {
    return (
        <div className='test-height'>
            <Header
                title='Volunteering'
                topic='Community Events'
                description='Unity Sports and Cultural Club offers a range of events and activities that give back to the community. Including opportunities for community service.'
            />
            <BackHeader />
        </div>
    );
}

export default Volunteer;
