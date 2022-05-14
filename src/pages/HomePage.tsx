import React from 'react';

const HomePage = () => (
  <main className="flex flex-col items-center px-5 py-20">
    <div className="flex flex-wrap justify-between w-full">
      <div className="flex items-center justify-center flex-auto grid-item h-60">
        <div className="flex flex-col items-center justify-center content">
          <h1 className="font-bold title mb-1.5 uppercase">Hats</h1>
          <h2 className="font-thin uppercase subtitle">Shop Now</h2>
        </div>
      </div>
      <div className="flex items-center justify-center flex-auto grid-item h-60">
        <div className="flex flex-col items-center justify-center content">
          <h1 className="font-bold title mb-1.5 uppercase">Jackets</h1>
          <h2 className="font-thin uppercase subtitle">Shop Now</h2>
        </div>
      </div>
      <div className="flex items-center justify-center flex-auto grid-item h-60">
        <div className="flex flex-col items-center justify-center content">
          <h1 className="font-bold title mb-1.5 uppercase">Shoes</h1>
          <h2 className="font-thin uppercase subtitle">Shop Now</h2>
        </div>
      </div>
      <div className="flex items-center justify-center flex-auto grid-item h-60">
        <div className="flex flex-col items-center justify-center content">
          <h1 className="font-bold title mb-1.5 uppercase">Women</h1>
          <h2 className="font-thin uppercase subtitle">Shop Now</h2>
        </div>
      </div>
      <div className="flex items-center justify-center flex-auto grid-item h-60">
        <div className="flex flex-col items-center justify-center content">
          <h1 className="font-bold title mb-1.5 uppercase">Men</h1>
          <h2 className="font-thin uppercase subtitle">Shop Now</h2>
        </div>
      </div>
    </div>
  </main>
);

export default HomePage;
