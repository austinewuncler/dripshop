import React from 'react';
import { useNavigate } from 'react-router-dom';

import { DirectoryType } from '../features/directory/directory.types';

type DirectoryItemProps = { directory: DirectoryType };

const DirectoryItem = ({
  directory: { imageUrl, title, size, linkUrl },
}: DirectoryItemProps) => {
  const navigate = useNavigate();

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
      className={`flex items-center justify-center flex-auto overflow-hidden directory-item h-60 hover:cursor-pointer ${size}`}
      onClick={() => navigate(`/${linkUrl}`)}
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
    </div>
  );
};

export default DirectoryItem;
