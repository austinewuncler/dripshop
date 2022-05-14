import './scss/main.scss';

import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import { auth } from './firebase/auth';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SignInPage from './pages/SignInPage';

const App = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, [currentUser]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </>
  );
};

export default App;
