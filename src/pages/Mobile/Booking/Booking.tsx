import React, { ReactElement, useRef, useEffect, useState } from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import BackHeader from '../../../components/BackHeader/BackHeader';
import BookingContact from '../../../components/BookingContact/BookingContact';
import Carousel from '../../../components/Carousel/Carousel';
import DescriptionBody from '../../../components/DescriptionBody/DescriptionBody';
import Header from '../../../components/Header';
import MobileContent from '../../../components/MobileContent/MobileContent';
import './Booking.scss';

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
        <MobileContent>
            <Header
                title={<div>Renting a<br />Service</div>}
                topic='Booking Halls, Bartenders, & Catering'
                description='Unity provides services for booking If you are looking for a space to host your next event or authentic Caribbean catering.'
            />
            <BackHeader/>
            <DescriptionBody
                title='Booking a Hall'
                description={<div>We offer our Venues for a vareity of events at an affordable price here in the Boston area.  These halls are good for birthday parties, funerals, weddings, and a place for you to host your classes. We have two spacious halls that can accommodate up to 200 people each, equipped with tables, chairs, projectors, sound systems, and catering services. You can also request bartenders to serve drinks at your event.</div>}
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
                description='Our long hall is a cozy and charming space that can host smaller events with up to 200 people. Our long hall features a stage and an open wide area. You can also add a DJ and an area for dancing if you want to create a lively atmosphere. Our long hall is perfect for birthday parties, smaller gatherings, or any other occasion that requires a warm and friendly setting. Our long hall is designed to make your guests feel comfortable and welcome.'
            />
            <BookingContact
                title='Get Your Quote'
                description={'Check live available spots from our ledger over the phone or through email. After the request a representative will reach out to you on a later date.'}
                phoneNumber='(617) 436-9550'
                email='UnityRentalCommittee@gmail.com'
            />
        </MobileContent>
    );
}

export default Booking;
