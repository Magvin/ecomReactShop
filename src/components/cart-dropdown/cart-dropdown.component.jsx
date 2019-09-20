import React from 'react';

// Redux
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';


import CustomButton from '../reusable-components/button/custom-button';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className ="cart-dropdown">
        {cartItems.length  ?         <div className="cart-items">
        {
            cartItems.map(cartItem=> <CartItem key={cartItem.id} item={cartItem} /> )
        }    
        </div> : <div className="empty-message">Your cart is empty</div>}

        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }} text="GO TO CHECKOUT" />
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));