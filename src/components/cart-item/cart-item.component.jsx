import React from 'react';

import {
    CartItemContainer, 
    ItemDetailsContainer, 
    CartItemImage } from './cart-item.styles';

const CartItem = ({ item: {imageUrl, price, name, quantity} }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item'></CartItemImage>
        <ItemDetailsContainer>
            <span>{name}</span>
            <span>
                {quantity} * ${price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;