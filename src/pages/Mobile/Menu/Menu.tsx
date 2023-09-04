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
        <>
            <Header
                title='Menu'
                topic='Friday & Saturday Night Menu'
                description='Unity Sports & Cultural association has night life clubbing Friday and Saturday nights. Unity is known for it’s safe and relaxed clubbing expierence, offering affordable drinking and eating options.'
            />
            <BackHeader />
            <div className='mobile-content-container'>
                <DescriptionBody
                    title='Food Menu'
                    description={
                        <div>Unity offers a diverse and delicious take-out menu that features authentic Caribbean cuisine. The options include fresh and flavorful seafood, classic chicken dishes, and a variety of sides to complement the meal. There are also regularly in-house specials like aloo pie, souce, and Pholourie.</div>
                    }
                />
                <DescriptionBody
                    title=''
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
                <div className='food-menu-description-subtext-container'>* Selection & Pricing may vary in house</div>
                <DescriptionBody
                    title=''
                    description={
                        <div>
                            Unity cares about its customers and strives to provide the best take-out experience possible. The commitment to quality ingredients and expert preparation ensures that every dish is a culinary delight. Come to Unity and discover the many delicious options on the menu!
                        </div>}
                />
                <DescriptionBody
                    title='Bar Menu'
                    description={
                        <div>
                        At our bar, we always strive to provide the best drinking experience for our customers. We keep our drinks in rotation to offer you the best price and selection. Whether you prefer beer, wine, cocktails, or shots, you will find something to suit your taste and mood. Our drinks range from $6 to $12, and we also have an option to purchase bottles ranging from $150 to $200.
                        </div>}
                />
                <DescriptionBody
                    title=''
                    description={
                        <div>
                        We care about our customers and want to create a welcoming environment that is different from other clubbing environments in the Boston area. Our commitment to quality service and a friendly atmosphere ensures that every visit is a memorable one. Come to our bar and discover the many delicious options on our menu!
                        </div>}
                />
                <div className='menu-bottom-spacing-container'/>
            </div>
        </>
    );
}

export default Menu;
