import React, { ReactElement } from 'react';
import { SlEnvolope } from 'react-icons/sl';
import BackHeader from '../../../components/BackHeader/BackHeader';
import DescriptionBody from '../../../components/DescriptionBody/DescriptionBody';
import Header from '../../../components/Header/Header';
import './Volunteer.scss';

function Volunteer(): ReactElement {
    return (
        <div className='test-height'>
            <Header
                title='Volunteering'
                topic='Community Events'
                description='Unity Sports and Cultural Club offers a range of events and activities that give back to the community. Including opportunities for community service.'
            />
            <BackHeader />
            <DescriptionBody
                title='Annual Events'
                description={
                    <div className='volunteer-annual-event-container'>
                        <div className='volunteer-annual-event-item-container'>
                            <div className='volunteer-annual-event-item-title-container'>Senior Citizens Thanksgiving </div>
                            <div className='volunteer-annual-event-item-body-container'>This event takes place every year on a Sunday in November, usually the week before Thanksgiving. The club invites senior citizens from Boston to enjoy a free festive meal and entertainment. Volunteers are needed to help with serving, cleaning, and interacting with the guests.</div>
                        </div>
                        <div className='volunteer-annual-event-item-spacer-container'/>
                        <div className='volunteer-annual-event-item-container'>
                            <div className='volunteer-annual-event-item-title-container'>Caribbean-American Cultural Expo</div>
                            <div className='volunteer-annual-event-item-body-container'>Caribbean-American Cultural Expo: This event is held every year on a Sunday in October. The club showcases the rich and diverse culture of the Caribbean through music, dance, art, food, and more. Volunteers are needed to help with setting up, managing booths, performing, and promoting the event.</div>
                        </div>
                    </div>
                }
            />
            <DescriptionBody
                title='Contact Us'
                description={<div>Due to the COVID-19 pandemic, some of our past opportunities may not be available at the moment. However, we are working hard to bring them back as soon as possible. If you are interested in any of our programs or services, please reach out to us via email. We appreciate your patience and understanding. Thank you.</div>}
            />
            <div className='volunteer-pdf-container'>
                <SlEnvolope className='volunteer-pdf-icon-container'/>
                <div className='volunteer-pdf-text-container'>someLongEmailName@gmail.com</div>
            </div>
        </div>
    );
}

export default Volunteer;
