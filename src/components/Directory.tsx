import React from 'react';

import directoryItems from '../directory.items';
import DirectoryItem from './DirectoryItem';

const Directory = () => (
  <section className="flex flex-wrap justify-between w-full gap-4">
    {directoryItems.map(({ id, imageUrl, title, size }) => (
      <DirectoryItem key={id} title={title} imageUrl={imageUrl} size={size} />
    ))}
  </section>
);

export default Directory;
