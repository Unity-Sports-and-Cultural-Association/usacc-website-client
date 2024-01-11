import React, { ReactElement } from 'react';
import ArticleNav from '../../components/ArticleNav/ArticleNav';
import BookingContact from '../../components/BookingContact';
import DesktopShell from '../../components/DesktopShell/DesktopShell';
import EventBriteCard from '../../components/EventBriteCard';
import Heading from '../../components/Heading/Heading';
import './desktops.scss';

function Events(): ReactElement {
    return (
        <DesktopShell
            title='Events'
            header='Enjoy The Night'
            blurb='Unity promotes coming together, offering a night life experience and activities for adults and children scattered throughout the calendar. Make sure to sign up with our email to get notified.'
            textFile='/pages/Events.txt'
            articleNav={
                <ArticleNav
                    items={[ 'Eventbrite','Events', 'Contact' ]}
                    relates={[ [ 'Booking', '/booking' ], [ 'Volunteering','/volunteering' ] ]}
                    others={[ [ 'Membership','/membership' ],[ 'About us','/about' ], [ 'Menu','/menu' ] ]}
                />
            }
        >
            <div className='Events-desk-container'>
                <Heading
                    id={'article-section-1'}
                    type="ghost"
                    text={''}
                />
                <EventBriteCard/>
                <Heading
                    id={'article-section-1'}
                    type="ghost"
                    text={''}
                />
                <Heading
                    id={'article-section-2'}
                    type="ghost"
                    text={''}
                />
                <Heading
                    type="h1"
                    text={'Events'}
                />
                <p style={{ marginBottom: '2rem' }}>
                At unity, Friday and Saturday nights get live: Soca, Calypso, Hip-hop, Reggae, Compás, Zouk, and more vibrate the dance floor. We bring the Caribbean islands to the Boston spanning artists from Trinidad & Tobago, Jamaica, to Barbados. Unitys club scene is an authenic Caribbean experince where there is lots of open space for people to socialize and dance to music we are accustomed to in our home islands.

                </p>
                <Heading
                    styles={{ marginTop: '3rem' }}
                    type="h2"
                    text={'Rum Punch & Music'}
                />
                <p>
                RumPunch and Music is a monthly concert series where import some of our favorite island artist. The rum punch represents the Caribbean as a popular drink most of the islands share it represents unity so no matter if you&rsquo;re trini Haitian Jamaica  you can come feel at home.
                </p>
                <Heading
                    id={'article-section-3'}
                    type="ghost"
                    text={''}
                />
                <BookingContact title={'Contact US'} description={'Host your own events and classes at Unity. Email or call us to arrange scheduling details. Well support and promote classes to our members. Despite Unity established Caribbean Origins, all are welcome.'} phoneNumber={'(617) 436-9550'} email={'UnityPublicRelationsCommittee@gmail.com'}/>
            </div>
        </DesktopShell>
    );
}

export default Events;
