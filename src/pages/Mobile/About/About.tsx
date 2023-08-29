import React, { ReactElement } from 'react';
import Header from '../../../components/Header';
import './About.scss';

function About(): ReactElement {
    return (
        <div className='test-height'>
            <Header
                title='About us'
                topic='Caribbean-American non-profit'
                description='Unity Sports and Cultural Association is a vibrant and diverse community that celebrates and supports Caribbean culture, sports, and social justice in New England.'
            />
        </div>
    );
}

export default About;
