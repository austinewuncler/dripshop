/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Item } from '../../Item';

interface CartState {
  visible: boolean;
  items: Item[];
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: { visible: false, items: [] } as CartState,
  reducers: {
    toggleVisible: (state) => {
      state.visible = !state.visible;
    },
    addCartItem: (state, { payload }: PayloadAction<Item>) => {
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
  },
});

export const cartReducer = cartSlice.reducer;
export const { toggleVisible, addCartItem } = cartSlice.actions;