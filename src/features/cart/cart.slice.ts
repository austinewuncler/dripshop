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
      state.items.push(payload);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { toggleVisible, addCartItem } = cartSlice.actions;
