/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  currentUser: any;
}

const userSlice = createSlice({
  name: 'user',
  initialState: { currentUser: null } as UserState,
  reducers: {
    setCurrentUser: (state, { payload }: PayloadAction<any>) => {
      state.currentUser = payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setCurrentUser } = userSlice.actions;
