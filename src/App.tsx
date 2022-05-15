import './scss/main.scss';

import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from './app/hooks';
import Header from './components/Header';
import { currentUserChanged } from './features/user/user.slice';
import { auth } from './firebase/auth';
import saveUserProfile from './firebase/database';
import AuthPage from './pages/AuthPage';
import CategoryPage from './pages/CategoryPage';
import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

const App = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = await saveUserProfile(user);
        onSnapshot(userRef, (snapshot) => {
          dispatch(currentUserChanged({ id: snapshot.id, ...snapshot.data() }));
        });
      }
      dispatch(currentUserChanged(null));
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-24">
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="shop" element={<Outlet />}>
          <Route index element={<ShopPage />} />
          <Route path=":categoryName" element={<CategoryPage />} />
        </Route>
        <Route
          path="auth"
          element={currentUser ? <Navigate to="/" /> : <AuthPage />}
        />
        <Route path="checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
};

export default App;
