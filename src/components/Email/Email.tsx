import React, { ReactElement, useRef, useState } from 'react';
import './Email.scss';


function Email(): ReactElement {
    const emailTest = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const value = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
    const nameValue = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
    const [ emailError, setEmailError ] = useState(false);
    const [ firstLastName, setFirstLastName ] = useState(false);

    const handleNameVerification = (): void => {
        if (nameValue.current?.value != '') {
            setFirstLastName(false);
        } else {
            setFirstLastName(true);
        }
    };

    const handleEmailVerification = (): void => {
        if (value.current?.value == null) {
            setEmailError(true);
        }
        if ((emailTest.test(value.current?.value ? value.current?.value : 'examplegmail.com'))) {
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    };

    const handleVerifications = (): void => {
        handleEmailVerification();
        handleNameVerification();
    };

    return (
        <div className='email-main-container'>
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
                <input className={firstLastName ? 'email-input-error-container' : 'email-input-container'} type='text' placeholder='First Last' ref={nameValue as React.RefObject<HTMLInputElement>}/>
                <div className={firstLastName ? 'email-error-container' : 'email-error-hide-container'} >The name field is required</div>
                <div className='email-label-container'>
                    <div className='email-label-text-container'>Email</div>
                    <div className='email-red-star-container'>*</div>
                </div>
                <input className={emailError ? 'email-input-error-container' : 'email-input-container'} type='text' placeholder='Example@gmail.com' ref={value as React.RefObject<HTMLInputElement>}/>
                <div className={emailError ? 'email-error-container' : 'email-error-hide-container'} >The email field is required</div>
                <div className='email-submit-button-container' onClick={handleVerifications}>Submit</div>
            </div>
        </div>
    );
}

export default Email;
