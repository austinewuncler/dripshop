import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectCartItemsCount, toggled } from '../features/cart/cart.slice';

const CartIcon = () => {
  const dispatch = useAppDispatch();
  const itemsCount = useAppSelector(selectCartItemsCount);

  return (
    <div
      role="button"
      tabIndex={0}
      className="relative flex items-center justify-center cursor-pointer w-11 h-11"
      onClick={() => dispatch(toggled())}
      onKeyDown={() => {}}
    >
      <AiOutlineShopping className="w-full h-full font-thin" />
      <div className="absolute bottom-1.5 font-bold">{itemsCount}</div>
    </div>
  );
};

export default CartIcon;
