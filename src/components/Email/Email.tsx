import React, { ReactElement, useState } from 'react';
import './Email.scss';

function Email(): ReactElement {
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ hasEmailError, setHasEmailError ] = useState(false);
    const [ hasNameError, setHasNameError ] = useState(false);

    const emailTest = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);

    const handleNameVerification = (): boolean => {
        const isValid = name !== '';
        setHasNameError(!isValid);
        return isValid;
    };

    const handleEmailVerification = (): boolean => {
        const isValid = emailTest.test(email);
        setHasEmailError(!isValid);
        return isValid;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const isEmailValid = handleEmailVerification();
        const isNameValid = handleNameVerification();

        if (isEmailValid && isNameValid) {
            const formData = {
                'form-name': 'contact',
                name,
                email,
            };

            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString(),
            })
                .then(() => window.alert('Form successfully submitted'))
                .catch((error) => window.alert(`Error:, ${error}`));
        }
    };

    return (
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {hasNameError && <div className='email-error-container'>The name field is required</div>}
                    <div className='email-label-container'>
                        <div className='email-label-text-container'>Email</div>
                        <div className='email-red-star-container'>*</div>
                    </div>
                    <input
                        className={hasEmailError ? 'email-input-error-container' : 'email-input-container'}
                        type='text'
                        placeholder='example@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {hasEmailError && <div className='email-error-container'>The email field is required</div>}
                    <button className='email-submit-button-container red-button' type="submit">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default Email;
