/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from '../features/cart/cart.slice';
import { directoryReducer } from '../features/directory/directory.slice';
import { userReducer } from '../features/user/user.slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
  },
});

// TODO: Find a solution for persistence

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
