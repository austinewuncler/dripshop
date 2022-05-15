import React from 'react';

import { Item } from '../Item';
import CollectionItem from './CollectionItem';

type CollectionProps = { title: string; items: Item[] };

const Collection = ({ title, items }: CollectionProps) => (
  <section className="flex flex-col gap-6 collection">
    <h1 className="uppercase title">{title}</h1>
    <div className="flex justify-between">
      {items.slice(0, 4).map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </section>
);

export default Collection;
