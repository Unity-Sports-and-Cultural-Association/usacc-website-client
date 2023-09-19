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
    const gallary = [
        [ './assets/photo1.jpg' ],
        [ './assets/photo2.jpg' ],
        [ './assets/photo3.jpg' ],
        [ './assets/photo4.jpg' ],
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
                    relates={[ [ 'Volunteering','/volunteering' ], [ 'About us', '/about' ] ]}
                    others={[ [ 'Membership','/membership' ], [ 'Menu','/menu' ] ]}
                />
            }
        >
            <div className='article-extra-content'>
                <MobileContent>
                    <DescriptionBody
                        title='Booking a Hall'
                        description={<div>We offer our Venues for a vareity of events at an affordable price here in the Boston area.  These halls are good for birthday parties, funerals, weddings, and a place for you to host your classes. We have two spacious halls that can accommodate up to 200 people each, equipped with tables, chairs, projectors, sound systems, and catering services. You can also request bartenders to serve drinks at your event.</div>}
                    />
                    <Carousel
                        carouselRef={carouselRef}
                        onImageClick={setUserInteracted}
                        image={gallary}
                        title='Ballroom'
                        capacity='Capacity: 500 people'
                        description='Our main ballroom is a versatile and elegant space that can host any kind of event you have in mind. Whether you are planning a birthday party, a funeral, a wedding, or a class, our ballroom can accommodate up to 300 people comfortably. Our ballroom features a stage, an open wide area, and a bar area as a possible option. You can also add a DJ and an area for dancing if you want to create a lively atmosphere.'
                    />
                    <Carousel
                        carouselRef={carouselRef2}
                        onImageClick={setUserInteracted2}
                        image={gallary}
                        title='Long Hall'
                        capacity='Capacity: 200 people'
                        description='Our long hall is a cozy and charming space that can host smaller events with up to 200 people. Our long hall features a stage and an open wide area. You can also add a DJ and an area for dancing if you want to create a lively atmosphere. Our long hall is perfect for birthday parties, smaller gatherings, or any other occasion that requires a warm and friendly setting. Our long hall is designed to make your guests feel comfortable and welcome.'
                    />
                    <BookingContact
                        title='Get Your Quote'
                        description={'Over the phone allows you to check live available spots from our ledger. After the request a representitive will reach out to you on a later date.'}
                        phoneNumber='(617) 436-9550'
                    />
                </MobileContent>
            </div>

        </DesktopShell>
    );
}

export default Booking;
