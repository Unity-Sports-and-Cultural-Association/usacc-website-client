import React, { ReactElement } from 'react';
import './Heading.scss';

type HeadingProps = {
    type: string;
    text: string;
    id: string;
    className: string;
    styles: React.CSSProperties | undefined;
}

function Heading({ type, text, id, className, styles }: HeadingProps): ReactElement {

    return (
        <div style={ styles} id={id} className={`heading-text-${type} ${className}`}>{text}</div>
    );
}

Heading.defaultProps = {
    styles: undefined,
    id: '',
    className: ''
};

export default Heading;
