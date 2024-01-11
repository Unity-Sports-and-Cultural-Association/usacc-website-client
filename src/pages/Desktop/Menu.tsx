import React, { ReactElement } from 'react';
import ArticleNav from '../../components/ArticleNav/ArticleNav';
import DesktopShell from '../../components/DesktopShell/DesktopShell';
import Heading from '../../components/Heading/Heading';
import MenuDisplay from '../../components/Menu/MenuDisplay';

function Menu(): ReactElement {
    return (
        <DesktopShell
            title='Menu'
            header='Caribbean-American non-profit'
            blurb='Unity Sports and Cultural Association is a vibrant and diverse community that celebrates and supports Caribbean culture, sports, and social justice in New England.'
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
                Unity offers a diverse and delicious take-out menu that features authentic Caribbean cuisine. The options include fresh and flavorful seafood, classic chicken dishes, and a variety of sides to complement the meal. There are also regularly in-house specials like aloo pie, souce, and Pholourie.
                </p>
                <MenuDisplay />
                <p>
                    <div className='food-menu-description-subtext-container'>* Selection & Pricing may vary in house</div>
                </p>
                <p>
                    Unity cares about its customers and strives to provide the best take-out experience possible. The commitment to quality ingredients and expert preparation ensures that every dish is a culinary delight. Come to Unity and discover the many delicious options on the menu!
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
                    At our bar, we always strive to provide the best drinking experience for our customers. We keep our drinks in rotation to offer you the best price and selection. Whether you prefer beer, wine, cocktails, or shots, you will find something to suit your taste and mood. Our drinks range from $6 to $12, and we also have an option to purchase bottles ranging from $150 to $200.
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
