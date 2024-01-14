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
                description='Unity is known for its safe and relaxed clubbing experience, offering affordable drinking and authentic Caribbean food in the Boston area.'
            />
            <BackHeader />
            <DescriptionBody
                title='Food Menu'
                description={
                    <p>Unity brings fresh and flavorful Caribbean dishes, seafood and classic chicken dishes with our own special sauces. Round year, our specials range from Aloo Pie, Souse, Pholourie, Corn Soup, and more.</p>
                }
            />
            <DescriptionBody
                title=''
                description={
                    <MenuDisplay />
                }
            />
            <div className='food-menu-description-subtext-container'>* Selection & Pricing may vary in house</div>

            <img src={'./assets/bar.jpg'} className="unity-photo" alt="barimage" />
            <DescriptionBody
                title='Bar Menu'
                description={
                    <p>
                        At our bar, we provide a professional drinking experience for our customers. We keep our drinks in rotation to offer you the best price and selection. Whether you prefer beer, wine, cocktails, or shots, you will find something to suit your taste and mood. Our drinks range from $6 to $12, with faithful pours with options to purchase bottles.
                    </p>}
            />



            <DescriptionBody
                title=''
                description={
                    <p>
                        We care about our customers and want to create a welcoming environment that is different from other clubbing environments in the Boston area. Our commitment to quality service and a friendly atmosphere ensures that every visit is a memorable one. Come to our bar and discover the many delicious options on our menu!
                    </p>}
            />
            <div className='menu-bottom-spacing-container'/>
        </MobileContent>
    );
}

export default Menu;
