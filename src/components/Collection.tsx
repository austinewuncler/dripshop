import React from 'react';

import { Item } from '../Item';
import CollectionItem from './CollectionItem';

type CollectionProps = { title: string; items: Item[] };

const Collection = ({ title, items }: CollectionProps) => (
  <section className="flex flex-col collection">
    <h1 className="uppercase title">{title}</h1>
    <div className="flex justify-between">
      {items.slice(0, 4).map(({ id, name, price, imageUrl }) => (
        <CollectionItem
          key={id}
          name={name}
          price={price}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  </section>
);

export default Collection;
