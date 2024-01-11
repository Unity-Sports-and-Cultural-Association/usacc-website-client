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
                        description={<div>We offer our Venues for a variety of events at an affordable price in the Boston area. These halls are good for birthday parties, funerals, weddings, and a place for you to host your classes. We provide two spacious halls, Bartenders are available for events upon request, chairs and tables are included, with speakers available for rent.</div>}
                    />
                    <Carousel
                        carouselRef={carouselRef}
                        onImageClick={setUserInteracted}
                        image={bigHall}
                        title='Ballroom'
                        capacity='Capacity: 500 people'
                        description='Our main ballroom is a versatile and elegant space that can host any kind of event you have in mind. Whether you are planning a birthday party, a funeral, a wedding, or a class, our ballroom can accommodate up to 300 people comfortably. Our ballroom features a stage, an open wide area, and a bar area as a possible option. You can also add a DJ and an area for dancing if you want to create a lively atmosphere.'
                    />
                    <Carousel
                        carouselRef={carouselRef2}
                        onImageClick={setUserInteracted2}
                        image={longHall}
                        title='Long Hall'
                        capacity='Capacity: 200 people'
                        description='The perfect space to host smaller events, bring your own speakers or rent  You can also add a DJ and an area for dancing if you want to create a lively atmosphere. Our long hall is perfect for birthday parties, smaller gatherings, or any other occasion that requires a warm and friendly setting. Our long hall is designed to make your guests feel comfortable and welcome.'
                    />
                    <BookingContact
                        title='Get Your Quote'
                        description={'Over the phone allows you to check live available spots from our ledger. After the request a representative will reach out to you on a later date.'}
                        phoneNumber='(617) 436-9550'
                        email='UnityRentalCommittee@gmail.com'
                    />
                </MobileContent>
            </div>

        </DesktopShell>
    );
}

export default Booking;
