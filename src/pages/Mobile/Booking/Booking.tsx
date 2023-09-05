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
        <MobileContent>
            <Header
                title={<div>Renting a<br />Service</div>}
                topic='Booking Halls, Bartenders, & Catering'
                description='Unity provides services for booking If you are looking for a space to host your next event or authentic Caribbean catering.'
            />
            <BackHeader />
            <DescriptionBody
                title='Booking a Hall'
                description={<div>Unity offers two halls, options for catering and bartenders may be available upon request.</div>}
            />
            <Carousel
                carouselRef={carouselRef}
                onImageClick={setUserInteracted}
                image={gallary}
                title='Ballroom'
                capacity='Capacity: 500 people'
                description='Provides a stage, open wide area, and a bar area as a possible option. This space is great for large events that intend to have djs and an area for dancing. A great option for hosting weddings and funeral ceremonies.'
            />
            <Carousel
                carouselRef={carouselRef2}
                onImageClick={setUserInteracted2}
                image={gallary}
                title='Long Hall'
                capacity='Capacity: 200 people'
                description='This space is perfect for birthday parties and smaller gatherings'
            />
            <BookingContact
                title='Over the Phone'
                description={'Over the phone allows you to check live available spots from our ledger. After the request a representitive will reach out to you on a later date.'}
                phoneNumber='(617) 436-9550'
            />
        </MobileContent>
    );
}

export default Booking;
