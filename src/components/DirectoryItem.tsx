import React from 'react';

type DirectoryItemProps = { imageUrl: URL; size?: string; title: string };

const DirectoryItem = ({ imageUrl, size, title }: DirectoryItemProps) => (
  <article
    className={`flex items-center justify-center flex-auto overflow-hidden directory-item h-60 hover:cursor-pointer ${size}`}
  >
    <div
      className="w-full h-full bg-center bg-cover background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="absolute flex flex-col items-center justify-center h-24 px-6 py-0 gap-1.5 bg-white content opacity-70">
      <h1 className="font-bold uppercase title">{title}</h1>
      <h2 className="font-thin uppercase subtitle">Shop Now</h2>
    </div>
  </article>
);

DirectoryItem.defaultProps = { size: '' };

export default DirectoryItem;
