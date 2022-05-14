import React from 'react';

type DirectoryItemProps = { imageUrl: string; size?: string; title: string };

const DirectoryItem = ({ imageUrl, size, title }: DirectoryItemProps) => (
  <article
    className={`flex items-center justify-center flex-auto overflow-hidden bg-center bg-cover directory-item h-60 ${size}`}
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
  >
    <div className="flex flex-col items-center justify-center content">
      <h1 className="font-bold title mb-1.5 uppercase">{title}</h1>
      <h2 className="font-thin uppercase subtitle">Shop Now</h2>
    </div>
  </article>
);

DirectoryItem.defaultProps = { size: '' };

export default DirectoryItem;
