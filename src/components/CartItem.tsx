import React from 'react';

import { CartItemType } from '../features/cart/cart.types';

type CartItemProps = { cartItem: CartItemType };

const CartItem = ({
  cartItem: { imageUrl, name, price, quantity },
}: CartItemProps) => (
  <div className="flex w-full h-20 mb-4 cart-item">
    <img className="cart-item-image" src={imageUrl.toString()} alt={name} />
    <div className="cart-item-details flex flex-col items-start justify-center py-2.5 px-5">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x Ksh. {price}
      </span>
    </div>
  </div>
);

export default CartItem;
