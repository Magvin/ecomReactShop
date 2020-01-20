import React from 'react';
import './cart-items.style.scss'

const CartItem = ({item: {imageUrl,price,name, quanitity}}) => (
    <div className="cart-item">
        <img src={ imageUrl } alt={ name }/>
        <div className="item-details">
            <span className="name">{ name }</span>
            <span className="price">${ price }</span>
            { quanitity } x ${ price }
        </div>
    </div>
)

export default CartItem