import React, { ReactElement, useEffect } from 'react';
import BackHeader from '../../../components/BackHeader/BackHeader';
import DescriptionBody from '../../../components/DescriptionBody/DescriptionBody';
import Header from '../../../components/Header';
import './About.scss';

function About(): ReactElement {
    useEffect(() => {
        document.title = 'Unity Sports: About Us';
    }, []);
    return (
        <>
            <Header
                title='About us'
                topic='Caribbean-American non-profit'
                description='Unity Sports and Cultural Association is a vibrant and diverse community that celebrates and supports Caribbean culture, sports, and social justice in New England.'
            />
            <BackHeader />
            <div className='mobile-content-container'>
                <DescriptionBody
                    title='Our Story'
                    description={<div>Unity Sports and Cultural Association is a non-profit organization that has been serving the New England community since 1971. The club was founded by a group of Caribbean immigrants who wanted to share their culture, sports, and social justice values with others.<br/><br/> Today, the club has grown to become one of the most active and inclusive Caribbean-American clubs in the region, hosting various events and activities throughout the year. The club’s mission is to promote unity, diversity, and social justice in New England through sports and cultural events that celebrate the rich heritage and traditions of the Caribbean.<br/><br/>The club also supports various causes and charities that benefit the local and global community. The club welcomes members and guests of all backgrounds and interests to join its vibrant and diverse community and enjoy its facilities and amenities. Unity Sports and Cultural Association is more than just a club, it is a family.</div>}
                />
            </div>
        </>
    );
}

export default About;
