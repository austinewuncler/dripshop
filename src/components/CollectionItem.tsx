import React from 'react';

type CollectionItemProps = { name: string; price: number; imageUrl: string };

const CollectionItem = ({ name, price, imageUrl }: CollectionItemProps) => (
  <article className="flex flex-col items-center collection-item">
    <div
      className="w-full bg-center bg-cover image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="flex justify-between w-full footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </article>
);

export default CollectionItem;
