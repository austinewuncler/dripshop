import React from 'react';

import { useAppDispatch } from '../app/hooks';
import { cartItemAdded } from '../features/cart/cart.slice';
import { CartItemType } from '../features/cart/cart.types';
import Button from './Button';

type CollectionItemProps = { item: CartItemType };

const CollectionItem = ({ item }: CollectionItemProps) => {
  const { imageUrl, name, price } = item;
  const dispatch = useAppDispatch();

  return (
    <article className="relative flex flex-col items-center h-80 collection-item">
      <div
        className="w-full mb-1 bg-center bg-cover image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="flex justify-between w-full footer">
        <span className="mb-4 name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button inverted onClick={() => dispatch(cartItemAdded(item))}>
        Add To Cart
      </Button>
    </article>
  );
};

export default CollectionItem;
