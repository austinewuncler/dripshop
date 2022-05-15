/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { DirectoryType } from './directory.types';

interface DirectoryState {
  items: DirectoryType[];
}

const initialState: DirectoryState = {
  items: [
    {
      title: 'hats',
      imageUrl: new URL(
        '../../assets/images/hats.png',
        import.meta.url
      ).toString(),
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: new URL(
        '../../assets/images/jackets.png',
        import.meta.url
      ).toString(),
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: new URL(
        '../../assets/images/sneakers.png',
        import.meta.url
      ).toString(),
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl: new URL(
        '../../assets/images/womens.png',
        import.meta.url
      ).toString(),
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: new URL(
        '../../assets/images/men.png',
        import.meta.url
      ).toString(),
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const directorySlice = createSlice({
  name: 'directory',
  initialState,
  reducers: {},
});

export const directoryReducer = directorySlice.reducer;
export const selectDirectoryItems = (state: RootState) => state.directory.items;
