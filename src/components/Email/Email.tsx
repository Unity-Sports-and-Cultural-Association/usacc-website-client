import React, { ReactElement, useRef, useState } from 'react';
import './Email.scss';

function Email(): ReactElement {

    const emailRef = useRef<HTMLInputElement>(null);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);

    const [ hasEmailError, setHasEmailError ] = useState(false);
    const [ hasFirstNameError, setHasFirstNameError ] = useState(false);
    const [ hasLastNameError, setHasLastNameError ] = useState(false);

    const emailTest = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);

    const handleVerifications = (): boolean | null => {
        const isFirstNameValid = firstNameRef.current && firstNameRef.current.value !== '';
        const isLastNameValid = lastNameRef.current && lastNameRef.current.value !== '';
        const isEmailValid = emailRef.current && emailTest.test(emailRef.current.value);

        setHasFirstNameError(!isFirstNameValid);
        setHasLastNameError(!isLastNameValid);
        setHasEmailError(!isEmailValid);

        return isFirstNameValid && isLastNameValid && isEmailValid;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (handleVerifications()) {
            // Since Netlify is handling the form submission, you don't need to do anything else here.
            // The form will be submitted naturally after this function completes.
        }
    };


    return (

        <form name="contact" method="post" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div className='email-main-container'>
                <div className='email-container'>
                    <div className='email-title-container'>E-Mailing List</div>
                    <div className='email-subtext-container'>
                        <div className='email-red-star-container'>*</div>
                        <div className='email-warning-text-container'>means the field is required</div>
                    </div>
                    <div className='email-label-container'>
                        <div className='email-label-text-container'>First Name</div>
                        <div className='email-red-star-container'>*</div>
                    </div>
                    <input
                        required
                        className={hasFirstNameError ? 'email-input-error-container' : 'email-input-container'}
                        type='text'
                        placeholder='First Name'
                        ref={firstNameRef}
                        name='first'
                    />
                    {hasFirstNameError && <div className='email-error-container'>The first name field is required.</div>}

                    <div className='email-label-container'>
                        <div className='email-label-text-container'>Last Name</div>
                        <div className='email-red-star-container'>*</div>
                    </div>
                    <input
                        required
                        className={hasLastNameError ? 'email-input-error-container' : 'email-input-container'}
                        type='text'
                        placeholder='Last Name'
                        ref={lastNameRef}
                        name='last'
                    />
                    {hasLastNameError && <div className='email-error-container'>The last name field is required.</div>}

                    <div className='email-label-container'>
                        <div className='email-label-text-container'>Email</div>
                        <div className='email-red-star-container'>*</div>
                    </div>
                    <input
                        required
                        className={hasEmailError ? 'email-input-error-container' : 'email-input-container'}
                        type='email'
                        placeholder='example@gmail.com'
                        name='email'
                        ref={emailRef}
                    />
                    {hasEmailError && <div className='email-error-container'>The email field is required.</div>}
                    <button className='email-submit-button-container red-button' type="submit">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default Email;
