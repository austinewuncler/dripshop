import './scss/main.scss';

import { onAuthStateChanged } from 'firebase/auth';
import { DocumentData, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import { auth } from './firebase/auth';
import saveUserProfile from './firebase/database';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

const App = () => {
  const [currentUser, setCurrentUser] = useState<
    { id: string } | DocumentData | null
  >(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = await saveUserProfile(user);
        onSnapshot(userRef, (snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col gap-24">
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
};

export default App;
