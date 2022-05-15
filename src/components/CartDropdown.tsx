import React from 'react';

import { useAppSelector } from '../app/hooks';
import Button from './Button';
import CartItem from './CartItem';

const CartDropdown = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <div className="absolute z-10 flex flex-col p-5 h-80 cart-dropdown w-60 top-20 right-10">
      <div className="flex flex-col overflow-scroll h-60">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
