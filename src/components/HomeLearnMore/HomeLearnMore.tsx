import React, { ReactElement } from 'react';
import './HomeLearnMore.scss';
import { SlArrowRight } from 'react-icons/sl';
type HomeLearnMore = {image: string, title: string, topic: string, description: string, button: string};
function HomeLearnMore({ image, title, topic, description, button }: HomeLearnMore): ReactElement {
    return (
        <div className='home-learn-more-main-container'>
            <div className='home-learn-more-container'>
                <img src={image} className='home-learn-more-image-container'/>
                <div className='home-learn-more-bottom-container'>
                    <div className='home-learn-more-title-container'>{title}</div>
                    <div className='home-learn-more-topic-container'>{topic}</div>
                    <div className='home-learn-more-description-container'>{description}</div>
                    <a href={button} className='home-learn-more-buttom-container'>Learn More<SlArrowRight className='home-learn-more-right-arrow-container' /></a>
                </div>
            </div>
        </div>
    );
}

export default HomeLearnMore;
