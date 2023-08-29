import React, { ReactElement } from 'react';
import './Volunteer.scss';
import Header from '../../../components/Header';

function Volunteer(): ReactElement {
    return (
        <div className='test-height'>
            <Header
                title='Volunteering'
                topic='Community Events'
                description='Unity Sports and Cultural Club offers a range of events and activities that give back to the community. Including opportunities for community service.'
            />
        </div>
    );
}

export default Volunteer;
