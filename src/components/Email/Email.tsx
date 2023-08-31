import React, { ReactElement } from 'react';
import './Email.scss';

function Email(): ReactElement {
    return (
        <div className='email-container'>
            <div className='email-title-container'>E-Mailing List</div>
            <div className='email-subtext-container'>
                <div className='email-red-star-container'>*</div>
                <div className='email-warning-text-container'>means the field is required</div>
            </div>
            <div className='email-label-container'>
                <div className='email-label-text-container'>Name</div>
                <div className='email-red-star-container'>*</div>
            </div>
            <input className='email-input-container'/>
            <div className='email-label-container'>
                <div className='email-label-text-container'>Email</div>
                <div className='email-red-star-container'>*</div>
            </div>
            <input className='email-input-container'/>
            <div className='email-submit-button-container'>Submit</div>
        </div>
    );
}

export default Email;
