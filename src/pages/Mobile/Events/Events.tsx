import React, { ReactElement } from 'react';
import BackHeader from '../../../components/BackHeader/BackHeader';
import BookingContact from '../../../components/BookingContact';
import DescriptionBody from '../../../components/DescriptionBody/DescriptionBody';
import EventBriteCard from '../../../components/EventBriteCard';
import Header from '../../../components/Header';
import MobileContent from '../../../components/MobileContent/MobileContent';
import './Events.scss';

function Events(): ReactElement {

    return (


        <MobileContent>
            <Header
                title='Events'
                topic='Enjoy The Night'
                description='Unity promotes coming together, offering a night life experience and activities for adults and children scattered throughout the calendar. Make sure to sign up with our email to get notified.'
            />
            <BackHeader />
            <div className='mobile-event-card-container'>

                <EventBriteCard/>
            </div>
            <DescriptionBody
                title='Events'
                description={
                    <div>At unity, Friday and Saturday nights get live: Soca, Calypso, Hip-hop, Reggae, Compás, Zouk, and more vibrate the dance floor. We bring the Caribbean islands to the Boston spanning artists from Trinidad & Tobago, Jamaica, to Barbados. Unitys club scene is an authenic Caribbean experince where there is lots of open space for people to socialize and dance to music we are accustomed to in our home islands.</div>
                }
            />

            <div className='h2-title'>
                <DescriptionBody
                    title='Rum Punch & Music'
                    description={
                        <div>
                        RumPunch and Music is a monthly concert series where import some of our favorite island artist. The rum punch represents the Caribbean as a popular drink most of the islands share it represents unity so no matter if you&rsquo;re Trini Haitian or Jamaica, home is here.
                        </div>}
                />
            </div>

            <div className='event-contact'>
                <BookingContact
                    title={'Contact US'}
                    description={'Host your own events and classes at Unity. Email or call us to arrange scheduling details. Well support and promote classes to our members. Despite Unity established Caribbean Origins, all are welcome.'}
                    phoneNumber={'(617) 436-9550'}
                    email={'UnityPublicRelationsCommittee@gmail.com'}
                />
            </div>


            <div className='Events-bottom-spacing-container'/>
        </MobileContent>

    );
}

export default Events;
