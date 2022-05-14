import './scss/main.scss';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  </>
);

export default App;
