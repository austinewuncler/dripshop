import React from 'react';

import { useAppDispatch } from '../app/hooks';
import {
  cartItemAdded,
  cartItemCleared,
  cartItemRemoved,
} from '../features/cart/cart.slice';
import { CartItemType } from '../features/cart/cart.types';

type CheckoutItemProps = { cartItem: CartItemType };

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const { id, imageUrl, name, quantity, price } = cartItem;
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center w-full px-0 py-4 checkout-item">
      <div className="pr-4 image-container">
        <img className="w-full h-full" src={imageUrl.toString()} alt={name} />
      </div>
      <span className="name">{name}</span>

      <span className="flex pl-5 quantity">
        <div
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
          className="cursor-pointer"
          onClick={() => dispatch(cartItemRemoved(id))}
        >
          &#10094;
        </div>
        <span className="my-0 mx-2.5">{quantity}</span>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
          className="cursor-pointer"
          onClick={() => dispatch(cartItemAdded(cartItem))}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>

      <span
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
        className="pl-3 cursor-pointer"
        onClick={() => dispatch(cartItemCleared(id))}
      >
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
