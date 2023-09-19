import React, { ReactElement } from 'react';
import BackHeader from '../../../components/BackHeader/BackHeader';
import BodyText from '../../../components/BodyText';
import Header from '../../../components/Header';
import MobileContent from '../../../components/MobileContent/MobileContent';
import './About.scss';

function About(): ReactElement {
    return (
        <MobileContent>
            <Header
                title='About us'
                topic='Caribbean-American non-profit'
                description='Unity Sports and Cultural Association is a vibrant and diverse community that celebrates and supports Caribbean culture, sports, and social justice in New England.'
            />
            <BackHeader />
            <BodyText textFile={'/pages/AboutUs.txt'} />
        </MobileContent>
    );
}

export default About;
