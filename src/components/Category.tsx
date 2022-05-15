import React from 'react';

import { ShopItemType } from '../features/shop/shop.types';
import ShopItem from './ShopItem';

type CategoryProps = { title: string; items: ShopItemType[] };

const Category = ({ title, items }: CategoryProps) => (
  <section className="flex flex-col gap-6 category">
    <h1 className="uppercase title">{title}</h1>
    <div className="flex justify-between">
      {items.slice(0, 4).map((item) => (
        <ShopItem key={item.id} item={item} />
      ))}
    </div>
  </section>
);

export default Category;
