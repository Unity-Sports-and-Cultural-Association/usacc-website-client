import React, { ReactElement, useEffect, useRef, useState } from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ArticleNav from '../../components/ArticleNav/ArticleNav';
import BookingContact from '../../components/BookingContact';
import Carousel from '../../components/Carousel';
import DescriptionBody from '../../components/DescriptionBody';
import DesktopShell from '../../components/DesktopShell/DesktopShell';
import './desktops.scss';
import MobileContent from '../../components/MobileContent';

function Booking(): ReactElement {
    const bigHall = [
        [ './assets/bighall/big_hall2.png' ],
        [ './assets/bighall/big_hall1.png' ],
        [ './assets/bighall/big_hall3.png' ],
        [ './assets/bighall/big_hall4.png' ],
    ];
    const longHall = [
        [ './assets/longhall/long_hall5.jpg' ],
        [ './assets/longhall/long_hall3.jpg' ],
        [ './assets/longhall/long_hall4.jpg' ],
        [ './assets/longhall/long_hall1.jpg' ],
        [ './assets/longhall/long_hall2.jpg' ],
    ];


    const carouselRef = useRef<HTMLDivElement | null>(null);
    const carouselRef2 = useRef<HTMLDivElement | null>(null);
    const [ userInteracted, setUserInteracted ] = useState(false);
    const [ userInteracted2, setUserInteracted2 ] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (carouselRef.current && !userInteracted) {
                ReactTestUtils.Simulate.click(carouselRef.current);
            }
        }, 5000);

        return () => clearInterval(intervalId);
    }, [ userInteracted ]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (carouselRef2.current && !userInteracted2) {
                ReactTestUtils.Simulate.click(carouselRef2.current);
            }
        }, 5000);

        return () => clearInterval(intervalId);
    }, [ userInteracted2 ]);

    return (
        <DesktopShell
            title='Booking'
            header='Booking Halls, Bartenders, & Catering'
            blurb='Unity provides services for booking If you are looking for a space to host your next event or authentic Caribbean catering.'
            textFile='/pages/Booking.txt'
            articleNav={
                <ArticleNav
                    items={[ 'Venues' ]}
                    relates={[ [ 'Events','/events' ], [ 'About us', '/about' ] ]}
                    others={[ [ 'Membership','/membership' ], [ 'Menu','/menu' ], [ 'Volunteering','/volunteering' ] ]}
                />
            }
        >
            <div className='article-extra-content'>
                <MobileContent>
                    <DescriptionBody
                        title='Booking a Hall'
                        description={<div>We offer our Venues for a variety of events at an affordable price here in the Boston area. These halls are good for birthday parties, funeral receptions (repasts), weddings, or to host classes. We have two spacious halls that can accommodate up to 200-500 persons. Rentals include, tables, chairs, projectors, sound systems, and cleanup for the event.</div>}
                    />
                    <Carousel
                        carouselRef={carouselRef}
                        onImageClick={setUserInteracted}
                        image={bigHall}
                        title='Ballroom'
                        capacity='Capacity: 500 people'
                        description='A versatile and elegant space to host any kind of event. Commonly utilized for birthday parties, a funeral receptions (repast), weddings, or to host a class. This space features a stage, a open wide area, and a bar area upon the request for a bartender, while speakers are available for rent.'
                    />
                    <Carousel
                        carouselRef={carouselRef2}
                        onImageClick={setUserInteracted2}
                        image={longHall}
                        title='Long Hall'
                        capacity='Capacity: 200 people'
                        description='Our long hall brings a charming space to host smaller events, connecting to our main lounge for bartending services upon request. Perfect for birthday parties, and close-knit parties or classes.'
                    />
                    <BookingContact
                        title='Get Your Quote'
                        description={'Check live available spots from our ledger over the phone or reach out over email. After the request a representative will reach out to you on a later date.'}
                        phoneNumber='(617) 436-9550'
                        email='UnityRentalCommittee@gmail.com'
                    />
                </MobileContent>
            </div>

        </DesktopShell>
    );
}

export default Booking;
