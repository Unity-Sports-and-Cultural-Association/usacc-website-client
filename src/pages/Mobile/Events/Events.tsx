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
                description='Unity promotes coming together, offering a night life experience and activities for adults and children scattered throughout the calendar year. Make sure to sign up with our email to get notified about upcoming events.'
            />
            <BackHeader />
            <div className='mobile-event-card-container'>

                <EventBriteCard/>
            </div>
            <DescriptionBody
                title='Events'
                description={
                    <div>At Unity, Friday and Saturday nights get live: Soca, Calypso, Hip-hop, Reggae, Compás, Zouk, and more vibrate the dance floor. We bring the Caribbean islands to the Boston spanning artists from Trinidad & Tobago, Jamaica, Barbados, to the Virgin Islands. Unity&rsquo;s club scene boasts an authentic Caribbean experience for socializing and meeting new people. Come and dance to the rhythm of the island vibes.</div>
                }
            />

            <div className='h2-title'>
                <DescriptionBody
                    title='Rum Punch & Music'
                    description={
                        <div>
                        Rum Punch and Music is a monthly concert series bringing in the hottest artists from the Caribbean. Rum Punch represents the Caribbean flavour that the islands share, representing unity no matter the origin or heritage—home is here.
                        </div>}
                />
            </div>

            <div className='event-contact'>
                <BookingContact
                    title={'Contact US'}
                    description={'Host your own events and classes at Unity. Email or call us to arrange scheduling details. Unity will promote classes to its mailing list and members across social media platforms. Despite our Caribbean origins, all people are welcomed.'}
                    phoneNumber={'(617) 436-9550'}
                    email={'UnityPublicRelationsCommittee@gmail.com'}
                />
            </div>


            <div className='Events-bottom-spacing-container'/>
        </MobileContent>

    );
}

export default Events;
