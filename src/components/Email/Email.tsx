import React, { ReactElement, useRef, useState } from 'react';
import './Email.scss';


function Email(): ReactElement {
    const emailTest = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const emailValue = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
    const nameValue = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
    const [ hasEmailError, setHasEmailError ] = useState(false);
    const [ hasNameError, setHasNameError ] = useState(false);

    const handleNameVerification = (): boolean => {
        const isValid = nameValue.current?.value != '';
        setHasNameError(!isValid);
        return (isValid);
    };

    const handleEmailVerification = (): boolean => {
        if (emailValue.current?.value == null) {
            setHasEmailError(true);
            return false;
        }
        const isValid = emailTest.test(emailValue.current?.value ? emailValue.current?.value : 'examplegmail.com');
        setHasEmailError(!isValid);
        return (isValid);
    };

    const handleVerifications = (): void => {
        handleEmailVerification();
        handleNameVerification();
        if (handleEmailVerification() && handleNameVerification()) {
            const name = nameValue?.current?.value;
            const email = emailValue?.current?.value;

            // console.log(name, email);
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');

            // console.log(process.env.REACT_APP_SHEETS_API_KEY);
            fetch(`${process.env.REACT_APP_SHEETS_API_KEY}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify([ [ name, email ] ])
                }
            );
        }

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
                <input
                    className={hasNameError ? 'email-input-error-container' : 'email-input-container'}
                    type='text'
                    placeholder='First Last'
                    ref={nameValue as React.RefObject<HTMLInputElement>}
                />
                <div className={hasNameError ? 'email-error-container' : 'email-error-hide-container'} >The name field is required</div>
                <div className='email-label-container'>
                    <div className='email-label-text-container'>Email</div>
                    <div className='email-red-star-container'>*</div>
                </div>
                <input
                    className={hasEmailError ? 'email-input-error-container' : 'email-input-container'}
                    type='text'
                    placeholder='Example@gmail.com'
                    ref={emailValue as React.RefObject<HTMLInputElement>}
                />
                <div className={hasEmailError ? 'email-error-container' : 'email-error-hide-container'} >The email field is required</div>
                <div className='email-submit-button-container red-button' onClick={handleVerifications}>Submit</div>
            </div>
        </div>
    );
}

export default Email;
