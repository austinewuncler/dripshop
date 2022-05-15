import React from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../app/hooks';
import ShopItem from '../components/ShopItem';
import { selectCategoryByName } from '../features/shop/shop.slice';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const category = useAppSelector(selectCategoryByName(categoryName as string));

  return (
    <main className="flex flex-col gap-7">
      <h2 className="mx-auto category-title">{category?.title}</h2>
      <div className="grid grid-cols-4 gap-2.5 shop-items">
        {category?.items.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};
export default CategoryPage;
