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
            blurb='Unity promotes coming together, offering a night life experience and activities for adults and children scattered throughout the calendar year. Make sure to sign up with our email to get notified about upcoming events.'
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
                At Unity, Friday and Saturday nights get live: Soca, Calypso, Hip-hop, Reggae, Compás, Zouk, and more vibrate the dance floor. We bring the Caribbean islands to the Boston spanning artists from Trinidad & Tobago, Jamaica, Barbados, to the Virgin Islands. Unity&rsquo;s club scene boasts an authentic Caribbean experience for socializing and meeting new people. Come and dance to the rhythm of the island vibes.

                </p>
                <Heading
                    styles={{ marginTop: '3rem' }}
                    type="h2"
                    text={'Rum Punch & Music'}
                />
                <p>
                Rum Punch and Music is a monthly concert series bringing in the hottest artists from the Caribbean. Rum Punch represents the Caribbean flavour that the islands share, representing unity no matter the origin or heritage—home is here.
                </p>
                <Heading
                    id={'article-section-3'}
                    type="ghost"
                    text={''}
                />
                <BookingContact title={'Contact US'}
                    description={'Host your own events and classes at Unity. Email or call us to arrange scheduling details. Unity will promote classes to its mailing list and members across social media platforms. Despite our Caribbean origins, all people are welcomed'}
                    phoneNumber={'(617) 436-9550'}
                    email={'UnityPublicRelationsCommittee@gmail.com'}/>
            </div>
        </DesktopShell>
    );
}

export default Events;
