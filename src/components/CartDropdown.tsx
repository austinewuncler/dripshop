import React from 'react';

import Button from './Button';

const CartDropdown = () => (
  <div className="absolute z-10 flex flex-col p-5 h-80 cart-dropdown w-60 top-20 right-10">
    <div className="flex flex-col overflow-scroll h-60" />
    <Button>Go To Checkout</Button>
  </div>
);

export default CartDropdown;
