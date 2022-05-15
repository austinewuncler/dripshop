/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { Item } from '../../Item';

interface CartState {
  visible: boolean;
  items: Item[];
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: { visible: false, items: [] } as CartState,
  reducers: {
    toggled: (state) => {
      state.visible = !state.visible;
    },
    cardItemAdded: (state, { payload }: PayloadAction<Item>) => {
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
    cartItemCleared: (state, { payload }: PayloadAction<Item>) => {
      state.items = state.items.filter((item) => item.id !== payload.id);
    },
    cartItemRemoved: (state, { payload }: PayloadAction<Item>) => {
      const existingCartItem = state.items.find(
        (item) => item.id === payload.id
      );
      if (existingCartItem?.quantity === 1)
        state.items = state.items.filter((item) => item.id !== payload.id);
      else
        state.items = state.items.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { toggled, cardItemAdded, cartItemCleared, cartItemRemoved } =
  cartSlice.actions;
export const selectVisible = (state: RootState) => state.cart.visible;
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartItemsCount = (state: RootState) =>
  state.cart.items.reduce(
    (previous, current) => previous + current.quantity,
    0
  );
