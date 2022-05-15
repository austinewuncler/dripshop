/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface CartState {
  visible: boolean;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: { visible: false } as CartState,
  reducers: {
    toggleVisible: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { toggleVisible } = cartSlice.actions;
