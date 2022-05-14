import React from 'react';

import Collection from '../components/Collection';
import SHOP_DATA from '../shop.data';

const ShopPage = () => (
  <main>
    {SHOP_DATA.map(({ id, title, items }) => (
      <Collection key={id} title={title} items={items} />
    ))}
  </main>
);

export default ShopPage;
