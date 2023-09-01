import React, { ReactElement } from 'react';
import './DescriptionBody.scss';
type DescriptionBody = {title: string, description: string | ReactElement};
function DescriptionBody({ title, description }: DescriptionBody): ReactElement {
    return (
        <div className='description-body-container'>
            <div className='description-body-title-container'>{title}</div>
            <div className='description-body-text-container'>{description}</div>
        </div>
    );
}

export default DescriptionBody;
