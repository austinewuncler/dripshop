import './scss/main.scss';

import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAppDispatch } from './app/hooks';
import Header from './components/Header';
import { setCurrentUser } from './features/user/user.slice';
import { auth } from './firebase/auth';
import saveUserProfile from './firebase/database';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = await saveUserProfile(user);
        onSnapshot(userRef, (snapshot) => {
          dispatch(setCurrentUser({ id: snapshot.id, ...snapshot.data() }));
        });
      }
      dispatch(setCurrentUser(null));
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-24">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
};

export default App;
