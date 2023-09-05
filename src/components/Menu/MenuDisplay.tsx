import React, { ReactElement } from 'react';
import menuData from '../../data/menuData';
import Accordion from '../Accordion/Accordion';

function MenuDisplay(): ReactElement {
    return (
        <div className='accordion-width-center-container'>
            <div className='accordion-width-container'>
                <Accordion
                    type='Seafood'
                    dishAndPrice={menuData.seafood}
                />
                <Accordion
                    type='Classic Menu'
                    dishAndPrice={menuData.classicMenu}
                />
                <Accordion
                    type='Drink'
                    dishAndPrice={menuData.drinks}
                />
                <Accordion
                    type='Sides'
                    dishAndPrice={menuData.sides}
                />
            </div>
        </div>
    );
}

export default MenuDisplay;
