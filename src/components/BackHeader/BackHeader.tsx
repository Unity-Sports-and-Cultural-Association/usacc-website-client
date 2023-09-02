import React, { ReactElement } from 'react';
import { SlArrowLeft } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import './BackHeader.scss';

function BackHeader(): ReactElement {
    const navigate = useNavigate();

    return (
        <div onClick={(): void => navigate(-1)} className='back-header-container'>
            <SlArrowLeft className='back-header-left-arrow-container'/>
            <div className='back-header-back-text'>Back</div>
        </div>
    );
}

export default BackHeader;
