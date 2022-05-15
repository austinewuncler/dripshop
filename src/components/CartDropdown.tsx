import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { toggleVisible } from '../features/cart/cart.slice';
import Button from './Button';
import CartItem from './CartItem';

const CartDropdown = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
      <Button
        onClick={() => {
          navigate('/checkout');
          dispatch(toggleVisible());
        }}
      >
        Go To Checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
