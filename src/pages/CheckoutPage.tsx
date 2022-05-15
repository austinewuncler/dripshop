import React from 'react';

import { useAppSelector } from '../app/hooks';
import CheckoutItem from '../components/CheckoutItem';

const CheckoutPage = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (prev, curr) => prev + curr.quantity * curr.price,
    0
  );

  return (
    <div className="flex flex-col items-center mx-auto checkout-page">
      <div className="w-full header py-2.5 flex justify-between">
        <div className="capitalize header-block">Product</div>
        <div className="capitalize header-block">Description</div>
        <div className="capitalize header-block">Quantity</div>
        <div className="capitalize header-block">Price</div>
        <div className="capitalize header-block">Remove</div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="ml-auto uppercase total mt-7">Total: Ksh. {total}</div>
    </div>
  );
};

export default CheckoutPage;
