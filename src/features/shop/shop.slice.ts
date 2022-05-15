/* eslint-disable import/no-cycle */
import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import SHOP_DATA from './shop.data';
import { CategoryType } from './shop.types';

const shopAdapter = createEntityAdapter<CategoryType>({
  selectId: (category) => category.title.toLowerCase(),
});

const initialState = shopAdapter.addMany(
  shopAdapter.getInitialState(),
  SHOP_DATA
);

const shopSlice = createSlice({ name: 'shop', initialState, reducers: {} });

export const shopReducer = shopSlice.reducer;
export const { selectAll: selectAllCategories, selectEntities } =
  shopAdapter.getSelectors((state: RootState) => state.shop);

export const selectCategoryByName = (categoryName: string) =>
  createSelector([selectEntities], (categories) => categories[categoryName]);
