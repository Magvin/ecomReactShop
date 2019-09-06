import React from 'react';

// Redux
import { connect } from 'react-redux'

import CustomButton from '../reusable-components/button/custom-button';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
    <div className ="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.map(cartItem=> <CartItem key={cartItem.id} item={cartItem} /> )
        }    
        </div>
        <CustomButton text="GO TO CHECKOUT" />
    </div>
)

const mapStateToProps = ({cart:{ cartItems }}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)