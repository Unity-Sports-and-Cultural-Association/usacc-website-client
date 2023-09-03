import React, { ReactElement } from 'react';
import { SlFolder } from 'react-icons/sl';
import BackHeader from '../../../components/BackHeader/BackHeader';
import DescriptionBody from '../../../components/DescriptionBody/DescriptionBody';
import Header from '../../../components/Header/Header';
import './Membership.scss';

function Membership(): ReactElement {
    return (
        <>
            <Header
                title={<div>Community<br />Member</div>}
                topic='Join our mission'
                description='Unity is always open to spirited individuals who support the mission and vision of the organization. Even though we are a Caribbean club everyone is welcome.'
            />
            <BackHeader />
            <div className='mobile-content-container'>
                <DescriptionBody
                    title='Membership'
                    description={<div>Here is a possible response in the style of the company as a representative: Unity Sports and Cultural Association is a non-profit organization that fosters unity, diversity, and social justice in New England through sports and cultural events. The club was established in 1971 by Caribbean immigrants who wanted to share their culture, sports, and social justice values with others. Today, the club has grown to become one of the most active and inclusive Caribbean-American clubs in the region, hosting various events and activities throughout the year.<br/><br/>The club&apos;s mission is to promote unity, diversity, and social justice in New England through sports and cultural events that celebrate the rich heritage and traditions of the Caribbean. The club also supports various causes and charities that benefit the local and global community. The club welcomes members and guests of all backgrounds and interests to join its vibrant and diverse community and enjoy its facilities and amenities.</div>}
                />
                <hr className='membership-gap-container' />
                <DescriptionBody
                    title='Benefits'
                    description={
                        <div className='membership-benefit-container'>
                            <div>Some of the benefits of being a member of Unity Sports and Cultural Association are: - Access to the club&apos;s facilities and amenities, including a bar, a lounge, a kitchen, a stage, and a dance floor.</div>
                            <li className='membership-benefit-list-container'>Opportunities to network with other Caribbean</li>
                            <li className='membership-benefit-list-container'>American professionals and community leaders in New England.</li>
                            <li className='membership-benefit-list-container'>Invitations to various sports and cultural events, such as cricket, soccer, dominoes, chess.</li>
                            <li className='membership-benefit-list-container'>Discounts on tickets and merchandise from the club and its partners.</li>
                            <li className='membership-benefit-list-container'>Volunteering opportunities for the club&apos;s annual Senior Citizens Thanksgiving Luncheon, which is a free festive meal and entertainment for senior citizens from Boston.</li>
                        </div>
                    }
                />
                <hr className='membership-line-container' />
                <DescriptionBody
                    title='Application'
                    description={
                        <div>
                        To join Unity Sports and Cultural Association,
                        one needs to review our constitution, which
                        outlines our mission, vision, values, and rules.
                        The constitution can be accessed by clicking on the link below.
                        After reviewing the constitution, one needs to contact our
                        Public Relations Committee at&nbsp;
                            <span className='membership-email-text-container'>somelongemailusername@gmail.com</span>&nbsp;
                        and express their interest in becoming a member.
                        We are looking for members who are open-minded, passionate, and
                        committed to our club&apos;s goals and activities.
                        Unity Sports and Cultural Association is more than just a club, it is a family.
                        We are proud of our history, our culture, our values, and our community.
                        </div>
                    }
                />
                <div className='membership-pdf-container'>
                    <SlFolder className='membership-pdf-icon-container'/>
                    <div className='membership-pdf-text-container'>Unity Sports Constitution & Bylaws PDF</div>
                </div>
            </div>
        </>
    );
}

export default Membership;
