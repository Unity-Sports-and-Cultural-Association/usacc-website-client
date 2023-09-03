import React, { ReactElement } from 'react';
import { SlArrowLeft } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import './BackNav.scss';

type BackNavProps = {
	className: string;
}

function BackNav({ className }: BackNavProps): ReactElement {
    const navigate = useNavigate();

    return (
        <div onClick={(): void => navigate(-1)} className={`back back-nav-container ${className}`}>

            <SlArrowLeft className='back-nav-arrow'/>
            <div className='back-nav-link'>
                Back
            </div>
        </div>
    );
}

BackNav.defaultProps = {
    className: ''
};

export default BackNav;
