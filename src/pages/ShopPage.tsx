import React from 'react';

import { useAppSelector } from '../app/hooks';
import Collection from '../components/Collection';
import { selectCollections } from '../features/shop/shop.slice';

const ShopPage = () => {
  const collections = useAppSelector(selectCollections);
  return (
    <main className="flex flex-col gap-7">
      {collections.map(({ id, title, items }) => (
        <Collection key={id} title={title} items={items} />
      ))}
    </main>
  );
};

export default ShopPage;
