import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../app/hooks';
import Button from './Button';
import CartItem from './CartItem';

const CartDropdown = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const navigate = useNavigate();

  return (
    <div className="absolute z-10 flex flex-col p-5 h-80 cart-dropdown w-60 top-20 right-10">
      <div className="flex flex-col overflow-scroll h-60">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="mx-auto my-12 empty-message">
            Your cart is empty
          </span>
        )}
      </div>
      <Button onClick={() => navigate('/checkout')}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
