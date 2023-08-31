import React, { ReactElement } from 'react';
import Header from '../../../components/Header';
import './Menu.scss';
import BackHeader from '../../../components/BackHeader/BackHeader';
function Menu(): ReactElement {
    return (
        <div className='test-height'>
            <Header
                title='Menu'
                topic='Friday & Saturday Night Menu'
                description='Unity Sports & Cultural association has night life clubbing Friday and Saturday nights. Unity is known for it’s safe and relaxed clubbing expierence, offering affordable drinking and eating options.'
            />
            <BackHeader />
        </div>
    );
}

export default Menu;
