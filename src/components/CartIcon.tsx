import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';

const CartIcon = () => (
  <div className="relative flex items-center justify-center cursor-pointer w-11 h-11">
    <AiOutlineShopping className="w-full h-full font-thin" />
    <div className="absolute bottom-1.5 font-bold">0</div>
  </div>
);

export default CartIcon;
