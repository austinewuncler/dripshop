import React from 'react';

import { useAppSelector } from '../app/hooks';
import { selectAllCategories } from '../features/shop/shop.slice';
import Category from './Category';

const Categories = () => {
  const categories = useAppSelector(selectAllCategories);
  console.log(categories);

  return (
    <div className="flex flex-col gap-6">
      {categories.map(({ id, title, items }) => (
        <Category key={id} title={title} items={items} />
      ))}
    </div>
  );
};

export default Categories;
