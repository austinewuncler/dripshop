import React from 'react';

type CollectionItemProps = { name: string; price: number; imageUrl: URL };

const CollectionItem = ({ name, price, imageUrl }: CollectionItemProps) => (
  <article className="flex flex-col items-center h-80 collection-item">
    <div
      className="w-full mb-1 bg-center bg-cover image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="flex justify-between w-full footer">
      <span className="mb-4 name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </article>
);

export default CollectionItem;
