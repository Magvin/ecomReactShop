import React from 'react';

import CustomButton from '../reusable-components/button/custom-button';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className ="cart-dropdown">
        <div className="cart-items"/>
        <CustomButton text="GO TO CHECKOUT" />
    </div>
)

export default CartDropdown