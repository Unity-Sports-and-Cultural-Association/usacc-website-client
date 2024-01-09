import React, { ReactElement } from 'react';
import ArticleNav from '../../components/ArticleNav/ArticleNav';
import DesktopShell from '../../components/DesktopShell/DesktopShell';
import EventBriteCard from '../../components/EventBriteCard';
import Heading from '../../components/Heading/Heading';

function Events(): ReactElement {
    return (
        <DesktopShell
            title='Events'
            header='Enjoy The Night'
            blurb='Unity promotes coming together, offering a night life experience and activities for adults and children scattered throughout the calendar. Make sure to sign up with our email to get notified.'
            textFile='/pages/Events.txt'
            articleNav={
                <ArticleNav
                    items={[ 'Eventbrite','Events', 'Club' ]}
                    relates={[ [ 'Booking', '/booking' ], [ 'Volunteering','/volunteering' ] ]}
                    others={[ [ 'Membership','/membership' ],[ 'About us','/about' ] ]}
                />
            }
        >
            <div className='Events-desk-container'>
                <EventBriteCard/>
                <Heading
                    id={'article-section-1'}
                    type="ghost"
                    text={''}
                />
                <Heading
                    type="h1"
                    text={'Events'}
                />
                <Heading
                    id={'article-section-1'}
                    type="ghost"
                    text={''}
                />

                <p style={{ marginBottom: '2rem' }}>
                Unity offers a diverse and delicious take-out menu that features authentic Caribbean cuisine. The options include fresh and flavorful seafood, classic chicken dishes, and a variety of sides to complement the meal. There are also regularly in-house specials like aloo pie, souce, and Pholourie.
                </p>
                <p>
                    Unity cares about its customers and strives to provide the best take-out experience possible. The commitment to quality ingredients and expert preparation ensures that every dish is a culinary delight. Come to Unity and discover the many delicious options on the menu!
                </p>
                <Heading
                    styles={{ marginTop: '3rem' }}
                    type="h1"
                    text={'Clubs'}
                />
                <Heading
                    id={'article-section-2'}
                    type="ghost"
                    text={''}
                />
                <p>
                    At our bar, we always strive to provide the best drinking experience for our customers. We keep our drinks in rotation to offer you the best price and selection. Whether you prefer beer, wine, cocktails, or shots, you will find something to suit your taste and mood. Our drinks range from $6 to $12, and we also have an option to purchase bottles ranging from $150 to $200.
                </p>
            </div>
        </DesktopShell>
    );
}

export default Events;
