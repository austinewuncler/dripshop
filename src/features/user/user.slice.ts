/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

interface UserState {
  currentUser: any;
}

const userSlice = createSlice({
  name: 'user',
  initialState: { currentUser: null } as UserState,
  reducers: {
    currentUserChanged: (state, { payload }: PayloadAction<any>) => {
      state.currentUser = payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { currentUserChanged } = userSlice.actions;
export const selectCurrentUser = (state: RootState) => state.user.currentUser;
