import React, { ReactElement } from 'react';
import { SlPhone } from 'react-icons/sl';
import './BookingContact.scss';

type BookingContactProps = {title: string, description: string | ReactElement, phoneNumber: string};
function BookingContact({ title, description, phoneNumber }: BookingContactProps): ReactElement {
    return (
        <div className='booking-contact-container'>
            <div className='booking-contact-title-container'>{title}</div>
            <div className='booking-contact-body-container'>
                <div className='booking-contact-body-text'>
                    {description}
                </div>
                <div className='booking-contact-phone-number-container'>
                    <SlPhone className='booking-contact-phone-icon'/>
                    <div className='booking-contact-phone-number'><a href="tel:6174369550">{phoneNumber}</a></div>
                    <div className='booking-contact-sub-text'>- wait times may vary</div>
                </div>
            </div>
        </div>
    );
}

export default BookingContact;
