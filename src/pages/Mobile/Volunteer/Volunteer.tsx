import React, { ReactElement } from 'react';
import { SlEnvolope } from 'react-icons/sl';
import BackHeader from '../../../components/BackHeader/BackHeader';
import BodyText from '../../../components/BodyText';
import Header from '../../../components/Header/Header';
import './Volunteer.scss';

function Volunteer(): ReactElement {

    return (
        <>
            <Header
                title='Volunteering'
                topic='Community Events'
                description='Unity Sports and Cultural Club offers a range of events and activities that give back to the community. Including opportunities for community service.'
            />
            <BackHeader />
            <div className='mobile-content-container'>
                <BodyText textFile={'/pages/Volunteering.txt'} />
                <div className='volunteer-pdf-container'>
                    <SlEnvolope className='volunteer-pdf-icon-container'/>
                    <div className='volunteer-pdf-text-container'>UnityPublicRelationsCommittee@gmail.com</div>
                </div>
            </div>
        </>
    );
}

export default Volunteer;
