import React from 'react';

import './checkout-item.styles.scss';

export const CheckoutItem = ({cartItem:{ name,imageUrl,price,quanitity}}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt={name}/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quanitity}</span>
        <span className="price">{price}</span>
        <div className="remove-button">&#10005;</div>


    </div>
)

