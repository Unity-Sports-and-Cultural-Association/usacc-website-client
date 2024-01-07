import React, { ReactElement } from 'react';
import BackHeader from '../../../components/BackHeader/BackHeader';
import DescriptionBody from '../../../components/DescriptionBody/DescriptionBody';
import Header from '../../../components/Header';
import MenuDisplay from '../../../components/Menu/MenuDisplay';
import MobileContent from '../../../components/MobileContent/MobileContent';
import './Menu.scss';

function Menu(): ReactElement {

    return (
        <MobileContent>
            <Header
                title='Menu'
                topic='Friday & Saturday Night Menu'
                description='Unity Sports & Cultural association has night life clubbing Friday and Saturday nights. Unity is known for it’s safe and relaxed clubbing expierence, offering affordable drinking and eating options.'
            />
            <BackHeader />
            <DescriptionBody
                title='Food Menu'
                description={
                    <div>Unity offers a diverse and delicious take-out menu that features authentic Caribbean cuisine. The options include fresh and flavorful seafood, classic chicken dishes, and a variety of sides to complement the meal. There are also regularly in-house specials like aloo pie, souce, and Pholourie.</div>
                }
            />
            <DescriptionBody
                title=''
                description={
                    <MenuDisplay />
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
            <img src={'./assets/bar.jpg'} className="unity-photo" alt="barimage" />
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
        </MobileContent>
    );
}

export default Menu;
