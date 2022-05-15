/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { CategoryType } from './shop.types';

interface ShopState {
  categories: CategoryType[];
}

const initialState: ShopState = {
  categories: [
    {
      id: 1,
      title: 'Hats',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: new URL(
            '../../assets/images/shop-img/hats/brown-brim.png',
            import.meta.url
          ).toString(),
          price: 25,
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: new URL(
            '../../assets/images/shop-img/hats/blue-beanie.png',
            import.meta.url
          ).toString(),
          price: 18,
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: new URL(
            '../../assets/images/shop-img/hats/brown-cowboy.png',
            import.meta.url
          ).toString(),
          price: 35,
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: new URL(
            '../../assets/images/shop-img/hats/grey-brim.png',
            import.meta.url
          ).toString(),
          price: 25,
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: new URL(
            '../../assets/images/shop-img/hats/green-beanie.png',
            import.meta.url
          ).toString(),
          price: 18,
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: new URL(
            '../../assets/images/shop-img/hats/palm-tree-cap.png',
            import.meta.url
          ).toString(),
          price: 14,
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: new URL(
            '../../assets/images/shop-img/hats/red-beanie.png',
            import.meta.url
          ).toString(),
          price: 18,
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: new URL(
            '../../assets/images/shop-img/hats/wolf-cap.png',
            import.meta.url
          ).toString(),
          price: 14,
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: new URL(
            '../../assets/images/shop-img/hats/blue-snapback.png',
            import.meta.url
          ).toString(),
          price: 16,
        },
      ],
    },
    {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 10,
          name: 'Adidas NMD',
          imageUrl: new URL(
            '../../assets/images/shop-img/sneakers/adidas-nmd.png',
            import.meta.url
          ).toString(),
          price: 220,
        },
        {
          id: 11,
          name: 'Adidas Yeezy',
          imageUrl: new URL(
            '../../assets/images/shop-img/sneakers/yeezy.png',
            import.meta.url
          ).toString(),
          price: 280,
        },
        {
          id: 12,
          name: 'Black Converse',
          imageUrl: new URL(
            '../../assets/images/shop-img/sneakers/black-converse.png',
            import.meta.url
          ).toString(),
          price: 110,
        },
        {
          id: 13,
          name: 'Nike White AirForce',
          imageUrl: new URL(
            '../../assets/images/shop-img/sneakers/white-nike-high-tops.png',
            import.meta.url
          ).toString(),
          price: 160,
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imageUrl: new URL(
            '../../assets/images/shop-img/sneakers/nikes-red.png',
            import.meta.url
          ).toString(),
          price: 160,
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: new URL(
            '../../assets/images/shop-img/sneakers/nike-brown.png',
            import.meta.url
          ).toString(),
          price: 160,
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: new URL(
            '../../assets/images/shop-img/sneakers/nike-funky.png',
            import.meta.url
          ).toString(),
          price: 190,
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: new URL(
            '../../assets/images/shop-img/sneakers/timberlands.png',
            import.meta.url
          ).toString(),
          price: 200,
        },
      ],
    },
    {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 18,
          name: 'Black Jean Shearling',
          imageUrl: new URL(
            '../../assets/images/shop-img/jackets/black-shearling.png',
            import.meta.url
          ).toString(),
          price: 125,
        },
        {
          id: 19,
          name: 'Blue Jean Jacket',
          imageUrl: new URL(
            '../../assets/images/shop-img/jackets/blue-jean-jacket.png',
            import.meta.url
          ).toString(),
          price: 90,
        },
        {
          id: 20,
          name: 'Grey Jean Jacket',
          imageUrl: new URL(
            '../../assets/images/shop-img/jackets/grey-jean-jacket.png',
            import.meta.url
          ).toString(),
          price: 90,
        },
        {
          id: 21,
          name: 'Brown Shearling',
          imageUrl: new URL(
            '../../assets/images/shop-img/jackets/brown-shearling.png',
            import.meta.url
          ).toString(),
          price: 165,
        },
        {
          id: 22,
          name: 'Tan Trench',
          imageUrl: new URL(
            '../../assets/images/shop-img/jackets/brown-trench.png',
            import.meta.url
          ).toString(),
          price: 185,
        },
      ],
    },
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 23,
          name: 'Blue Tanktop',
          imageUrl: new URL(
            '../../assets/images/shop-img/womens/blue-tank.png',
            import.meta.url
          ).toString(),
          price: 25,
        },
        {
          id: 24,
          name: 'Floral Blouse',
          imageUrl: new URL(
            '../../assets/images/shop-img/womens/floral-blouse.png',
            import.meta.url
          ).toString(),
          price: 20,
        },
        {
          id: 25,
          name: 'Floral Dress',
          imageUrl: new URL(
            '../../assets/images/shop-img/womens/floral-skirt.png',
            import.meta.url
          ).toString(),
          price: 80,
        },
        {
          id: 26,
          name: 'Red Dots Dress',
          imageUrl: new URL(
            '../../assets/images/shop-img/womens/red-polka-dot-dress.png',
            import.meta.url
          ).toString(),
          price: 80,
        },
        {
          id: 27,
          name: 'Striped Sweater',
          imageUrl: new URL(
            '../../assets/images/shop-img/womens/striped-sweater.png',
            import.meta.url
          ).toString(),
          price: 45,
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: new URL(
            '../../assets/images/shop-img/womens/yellow-track-suit.png',
            import.meta.url
          ).toString(),
          price: 135,
        },
        {
          id: 29,
          name: 'White Blouse',
          imageUrl: new URL(
            '../../assets/images/shop-img/womens/white-vest.png',
            import.meta.url
          ).toString(),
          price: 20,
        },
      ],
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 30,
          name: 'Camo Down Vest',
          imageUrl: new URL(
            '../../assets/images/shop-img/mens/camo-vest.png',
            import.meta.url
          ).toString(),
          price: 325,
        },
        {
          id: 31,
          name: 'Floral T-shirt',
          imageUrl: new URL(
            '../../assets/images/shop-img/mens/floral-shirt.png',
            import.meta.url
          ).toString(),
          price: 20,
        },
        {
          id: 32,
          name: 'Black & White Longsleeve',
          imageUrl: new URL(
            '../../assets/images/shop-img/mens/long-sleeve.png',
            import.meta.url
          ).toString(),
          price: 25,
        },
        {
          id: 33,
          name: 'Pink T-shirt',
          imageUrl: new URL(
            '../../assets/images/shop-img/mens/pink-shirt.png',
            import.meta.url
          ).toString(),
          price: 25,
        },
        {
          id: 34,
          name: 'Jean Long Sleeve',
          imageUrl: new URL(
            '../../assets/images/shop-img/mens/roll-up-jean-shirt.png',
            import.meta.url
          ).toString(),
          price: 40,
        },
        {
          id: 35,
          name: 'Burgundy T-shirt',
          imageUrl: new URL(
            '../../assets/images/shop-img/mens/polka-dot-shirt.png',
            import.meta.url
          ).toString(),
          price: 25,
        },
      ],
    },
  ],
};

const shopSlice = createSlice({ name: 'shop', initialState, reducers: {} });

export const shopReducer = shopSlice.reducer;
export const selectCategories = (state: RootState) => state.shop.categories;
