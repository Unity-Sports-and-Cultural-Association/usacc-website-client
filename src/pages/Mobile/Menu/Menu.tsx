import React, { ReactElement } from 'react';
import Accordion from '../../../components/Accordion/Accordion';
import BackHeader from '../../../components/BackHeader/BackHeader';
import DescriptionBody from '../../../components/DescriptionBody/DescriptionBody';
import Header from '../../../components/Header';
import './Menu.scss';

function Menu(): ReactElement {
    const seafood = [
        [ 'Seafood (Fish & Shrimp w/ Fries)', '$25' ],
        [ 'Shrimp & Fries', '$16' ],
        [ 'Bake and Shark or SaltFish', '$12' ],
        [ 'Fish Sandwich', '$12' ],
        [ 'Haddock & Fries', '$18' ],
        [ 'Fry Fish w/ Fries', '$15 | Jerk $16' ],
        [ 'Haddock Only', '$16' ]
    ];
    const classicMenu = [
        [ 'Combo Chicken & Fish', '$16 | Jerk $17' ],
        [ 'Fry Chicken w/ Fries', '$12' ],
        [ 'Jerk Chicken Wings w/ Fries', '$14' ],
        [ 'Jerk Leg Quarters w/ Fries', '$13' ],
        [ 'Mix Chicken & Fries', '$13' ],
        [ 'Reg Chick 3PCs', '$5' ],
    ];
    const drinks = [
        [ 'Sorrek', '$4' ],
        [ 'Mauby', '$4' ],
        [ 'Snapple', '$3' ],
        [ 'Ting', '$3' ],
        [ 'Kola Champagne', '$3' ]
    ];
    const sides = [
        [ 'Fries Only', '$4' ],
        [ 'Reg Fish 1PC', '$6' ],
        [ 'Jerk Fish 1PC', '$7' ],
        [ 'Haddock 1PC', '$7' ]
    ];

    return (
        <div className='test-height'>
            <Header
                title='Menu'
                topic='Friday & Saturday Night Menu'
                description='Unity Sports & Cultural association has night life clubbing Friday and Saturday nights. Unity is known for it’s safe and relaxed clubbing expierence, offering affordable drinking and eating options.'
            />
            <BackHeader />
            <DescriptionBody
                title='Food Menu'
                description={
                    <div className='accordion-width-center-container'>
                        <div className='accordion-width-container'>
                            <Accordion
                                type='Seafood'
                                dishAndPrice={seafood}
                            />
                            <Accordion
                                type='Classic Menu'
                                dishAndPrice={classicMenu}
                            />
                            <Accordion
                                type='Drink'
                                dishAndPrice={drinks}
                            />
                            <Accordion
                                type='Sides'
                                dishAndPrice={sides}
                            />
                        </div>
                    </div>
                }
            />
            <DescriptionBody
                title='Bar Menu'
                description={<div>At our bar, we always keep our drinks in rotation to offer you the best price and drinking experience. Whether you prefer beer, wine, cocktails, or shots, you will find something to suit your taste and mood. Our drinks range from $6 to $12, and we also have an option to purchase bottles ranging from $150 to $200.</div>}
            />
            <div className='menu-bottom-spacing-container'/>
        </div>
    );
}

export default Menu;
