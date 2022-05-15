/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { ShopItemType } from '../shop/shop.types';
import { CartItemType } from './cart.types';

interface CartState {
  visible: boolean;
  items: CartItemType[];
}

const initialState: CartState = { visible: false, items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggled: (state) => {
      state.visible = !state.visible;
    },
    cartItemAdded: (state, { payload }: PayloadAction<ShopItemType>) => {
      const existingCartItem = state.items.find(
        (item) => item.id === payload.id
      );
      if (existingCartItem)
        state.items = state.items.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      else state.items.push({ ...payload, quantity: 1 });
    },
    cartItemCleared: (state, { payload }: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== payload);
    },
    cartItemRemoved: (state, { payload }: PayloadAction<number>) => {
      const existingCartItem = state.items.find((item) => item.id === payload);
      if (existingCartItem?.quantity === 1)
        state.items = state.items.filter((item) => item.id !== payload);
      else
        state.items = state.items.map((item) =>
          item.id === payload ? { ...item, quantity: item.quantity - 1 } : item
        );
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { toggled, cartItemAdded, cartItemCleared, cartItemRemoved } =
  cartSlice.actions;
export const selectVisible = (state: RootState) => state.cart.visible;
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartItemsCount = (state: RootState) =>
  state.cart.items.reduce(
    (previous, current) => previous + current.quantity,
    0
  );
