import React, { ReactElement } from 'react';
import './BackHeader.scss';
import { SlArrowLeft } from 'react-icons/sl';
function BackHeader(): ReactElement {
    return (
        <div className='back-header-container'>
            <SlArrowLeft className='back-header-left-arrow-container'/>
            <a href='./' className='back-header-back-text'>Back</a>
        </div>
    );
}

export default BackHeader;
