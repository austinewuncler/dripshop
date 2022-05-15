import React from 'react';

import { useAppDispatch } from '../app/hooks';
import { shopItemAddedToCart } from '../features/cart/cart.slice';
import { ShopItemType } from '../features/shop/shop.types';
import Button from './Button';

type ShopItemProps = { item: ShopItemType };

const ShopItem = ({ item }: ShopItemProps) => {
  const { imageUrl, name, price } = item;
  const dispatch = useAppDispatch();

  return (
    <article className="relative flex flex-col items-center h-80 shop-item">
      <div
        className="w-full mb-1 bg-center bg-cover image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="flex justify-between w-full footer">
        <span className="mb-4 name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button inverted onClick={() => dispatch(shopItemAddedToCart(item))}>
        Add To Cart
      </Button>
    </article>
  );
};

export default ShopItem;
