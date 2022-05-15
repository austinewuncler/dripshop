export type ShopItemType = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type CategoryType = {
  id: number;
  title: string;
  routeName: string;
  items: ShopItemType[];
};
