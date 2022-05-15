import React from 'react';

import { Item } from '../Item';

type CartItemProps = { item: Item };

const CartItem = ({ item }: CartItemProps) => {
  const { imageUrl, name, quantity, price } = item;
  return (
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
};

export default CartItem;
