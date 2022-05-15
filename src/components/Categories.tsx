import React from 'react';

import { useAppSelector } from '../app/hooks';
import { selectCategories } from '../features/shop/shop.slice';
import Category from './Category';

const Categories = () => {
  const categories = useAppSelector(selectCategories);

  return (
    <div className="flex flex-col gap-6">
      {categories.map(({ id, title, items }) => (
        <Category key={id} title={title} items={items} />
      ))}
    </div>
  );
};

export default Categories;
