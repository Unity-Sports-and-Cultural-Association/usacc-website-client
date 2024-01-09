import React, { ReactElement, useState } from 'react';
import './Email.scss';

function Email(): ReactElement {

    const [ email, setEmail ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ hasEmailError, setHasEmailError ] = useState(false);
    const [ hasFirstNameError, setHasFirstNameError ] = useState(false);
    const [ hasLastNameError, setHasLastNameError ] = useState(false);
    const [ buttonText, setButtonText ] = useState('Submit');
    const [ isSubmitted, setIsSubmitted ] = useState(false);


    const emailTest = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setter(event.target.value);
            if (buttonText !== 'Submit') {
                setIsSubmitted(false); // Enable the button again when the user starts typing
                setButtonText('Submit');
            }
        };

    const handleVerifications = (): boolean => {
        const isFirstNameValid = firstName !== '';
        const isLastNameValid = lastName !== '';
        const isEmailValid = emailTest.test(email);

        setHasFirstNameError(!isFirstNameValid);
        setHasLastNameError(!isLastNameValid);
        setHasEmailError(!isEmailValid);

        return isFirstNameValid && isLastNameValid && isEmailValid;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (handleVerifications()) {
            setIsSubmitted(true);
            setButtonText('Submitted');

            // Assert the event.target as an HTMLFormElement
            const form = event.target as HTMLFormElement;
            const data = new FormData(form);
            data.append('form-name', 'contact');

            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                body: new URLSearchParams(data as any).toString(),
            })
                .then(() => {
                    setEmail('');
                    setFirstName('');
                    setLastName('');
                // Handle the success state here, such as showing a success message
                });
        }
    };



    return (

        <form name="contact" method="post" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div className='email-main-container'>
                <div className='email-container'>
                    <div className='email-title-container'>E-Mailing List</div>
                    <div className='email-subtext-container'>
                        <div className='email-warning-text-container'>Get Notified</div>
                    </div>
                    <div className='email-desc'>Come engage with the local community. Join the emailing list to be notified about upcoming events, sport outings, and volunteering opportunities. </div>
                    <div className='email-name-label-container'>
                        <div className='email-label-text-container'>First Name</div>
                        <div className='email-red-star-container'>*</div>
                    </div>
                    <div className='email-label-container'>
                        <div className='email-label-text-container'>First Name</div>
                        <div className='email-red-star-container'>*</div>
                    </div>
                    <input
                        className={hasFirstNameError ? 'email-input-error-container' : 'email-input-container'}
                        type='text'
                        placeholder='First Name'
                        name='first'
                        value={firstName}
                        onChange={handleInputChange(setFirstName)}
                    />
                    {hasFirstNameError && <div className='email-error-container'>The first name field is required.</div>}

                    <div className='email-label-container'>
                        <div className='email-label-text-container'>Last Name</div>
                        <div className='email-red-star-container'>*</div>
                    </div>
                    <input
                        className={hasLastNameError ? 'email-input-error-container' : 'email-input-container'}
                        type='text'
                        placeholder='Last Name'
                        value={lastName}
                        onChange={handleInputChange(setLastName)}
                        name='last'
                    />
                    {hasLastNameError && <div className='email-error-container'>The last name field is required.</div>}

                    <div className='email-label-container'>
                        <div className='email-label-text-container'>Email</div>
                        <div className='email-red-star-container'>*</div>
                    </div>
                    <input
                        className={hasEmailError ? 'email-input-error-container' : 'email-input-container'}
                        type='email'
                        placeholder='example@gmail.com'
                        name='email'
                        value={email}
                        onChange={handleInputChange(setEmail)}
                    />
                    {hasEmailError && <div className='email-error-container'>The email field is required.</div>}
                    <button
                        className={`email-submit-button-container red-button ${isSubmitted ? 'disabled' : ''}`}
                        type="submit"
                        disabled={isSubmitted}
                    >{buttonText}</button>
                </div>
            </div>
        </form>
    );
}

export default Email;
