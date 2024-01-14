import React, { ReactElement } from 'react';
import ArticleNav from '../../components/ArticleNav/ArticleNav';
import DesktopShell from '../../components/DesktopShell/DesktopShell';
import Heading from '../../components/Heading/Heading';
import MenuDisplay from '../../components/Menu/MenuDisplay';

function Menu(): ReactElement {
    return (
        <DesktopShell
            title='Menu'
            header='Friday & Saturday Night Menu'
            blurb='Unity is known for its safe and relaxed clubbing experience, offering affordable drinking and authentic Caribbean food in the Boston area.'
            textFile='/pages/Menu.txt'
            articleNav={
                <ArticleNav
                    items={[ 'Food Menu', 'Bar Menu' ]}
                    relates={[ [ 'Events','/events' ] ]}
                    others={[ [ 'Membership','/membership' ],[ 'About us','/about' ], [ 'Volunteering','/volunteering' ], [ 'Booking', '/booking' ] ]}
                />
            }
        >
            <div className='menu-desk-container'>
                <Heading
                    type="h1"
                    text={'Food Menu'}
                />
                <Heading
                    id={'article-section-1'}
                    type="ghost"
                    text={''}
                />
                <p style={{ marginBottom: '2rem' }}>
                Unity brings fresh and flavorful Caribbean dishes, seafood and classic chicken dishes with our own special sauces. Round year, our specials range from Aloo Pie, Souse, Pholourie, Corn Soup, and more.
                </p>
                <MenuDisplay />
                <p>
                    <div className='food-menu-description-subtext-container'>* Selection & Pricing may vary in house</div>
                </p>

                <Heading
                    styles={{ marginTop: '3rem' }}
                    type="h1"
                    text={'Bar Menu'}
                />
                <Heading
                    id={'article-section-2'}
                    type="ghost"
                    text={''}
                />
                <p>
                At our bar, we provide a professional drinking experience for our customers. We keep our drinks in rotation to offer you the best price and selection. Whether you prefer beer, wine, cocktails, or shots, you will find something to suit your taste and mood. Our drinks range from $6 to $12, with faithful pours with options to purchase bottles.
                </p>
                <img src={'./assets/bar.jpg'} className="unity-photo" alt="barimage" />
                <p>
                    We care about our customers and want to create a welcoming environment that is different from other clubbing environments in the Boston area. Our commitment to quality service and a friendly atmosphere ensures that every visit is a memorable one. Come to our bar and discover the many delicious options on our menu!
                </p>
            </div>
        </DesktopShell>
    );
}

export default Menu;
