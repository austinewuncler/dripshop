/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import DIRECTORIES from './directory.data';
import { DirectoryType } from './directory.types';

interface DirectoryState {
  items: DirectoryType[];
}

const initialState: DirectoryState = {
  items: DIRECTORIES,
};

const directorySlice = createSlice({
  name: 'directory',
  initialState,
  reducers: {},
});

export const directoryReducer = directorySlice.reducer;
export const selectDirectoryItems = (state: RootState) => state.directory.items;
