import React from 'react';

import { useAppDispatch } from '../app/hooks';
import { clearItemFromCart } from '../features/cart/cart.slice';
import { Item } from '../Item';

type CheckoutItemProps = { item: Item };

const CheckoutItem = ({ item }: CheckoutItemProps) => {
  const { imageUrl, name, quantity, price } = item;
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center w-full px-0 py-4 checkout-item">
      <div className="pr-4 image-container">
        <img className="w-full h-full" src={imageUrl.toString()} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="pl-5 quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
        className="pl-3 cursor-pointer"
        onClick={() => dispatch(clearItemFromCart(item))}
      >
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
