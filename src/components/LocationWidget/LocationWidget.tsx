import React, { ReactElement } from 'react';
import Iframe from 'react-iframe';
import './LocationWidget.scss';

function index(): ReactElement {
    return (
        <div className='location-widget'>
            <Iframe
                width="100%"
                height="450"
                styles={{ border: 0, marginTop: '3rem' }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                url={'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11806.552243097292!2d-71.0719149!3d42.2862489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b8d184859d9%3A0x840825e410ec1d4c!2sUnity%20Sports%20%26%20Cultural%20Club!5e0!3m2!1sen!2sus!4v1693675958997!5m2!1sen!2sus'}/>
        </div>
    );
}

export default index;
