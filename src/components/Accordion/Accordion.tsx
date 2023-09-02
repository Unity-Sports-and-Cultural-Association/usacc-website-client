import React, { ReactElement, useState } from 'react';
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';
import './Accordion.scss';

type menuInputs = {type: string, dishAndPrice: string[][]};
function Accordion({ type, dishAndPrice }: menuInputs): ReactElement {
    const [ open, setOpen ] = useState(false);

    const handleTabOpen = (): void => {
        setOpen(!open);
    };

    return (
        <div className='accordion-container'>
            <div className='accordion-title-container' onClick={handleTabOpen}>
                {type}{open ? <SlArrowUp className='accordion-menu-arrow-container'/> : <SlArrowDown className='accordion-menu-arrow-container'/>}</div>
            <div className={open ? 'accordion-menu-item-container' : 'accordion-menu-item-container closed'}>
                {
                    dishAndPrice.map((key, index) =>
                        <div key={index} className='accordion-menu-item-row-container'>
                            <div className='accordion-menu-item-name-container'>{key[0]}</div>
                            <div className='accordion-menu-item-price-container'>{key[1]}</div>
                        </div>
                    )
                }
            </div>
            <hr className='menu-line-container' />
        </div>
    );
}

export default Accordion;
