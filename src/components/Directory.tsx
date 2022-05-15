import React from 'react';

import { useAppSelector } from '../app/hooks';
import { selectDirectoryItems } from '../features/directory/directory.slice';
import DirectoryItem from './DirectoryItem';

const Directory = () => {
  const directoryItems = useAppSelector(selectDirectoryItems);
  return (
    <section className="flex flex-wrap justify-between w-full gap-4">
      {directoryItems.map(({ id, imageUrl, title, size }) => (
        <DirectoryItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </section>
  );
};

export default Directory;
