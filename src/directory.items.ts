const DIRECTORY_ITEMS = [
  {
    title: 'hats',
    imageUrl: new URL('./assets/images/hats.png', import.meta.url),
    id: 1,
    linkUrl: 'shop/hats',
  },
  {
    title: 'jackets',
    imageUrl: new URL('./assets/images/jackets.png', import.meta.url),
    id: 2,
    linkUrl: 'shop/jackets',
  },
  {
    title: 'sneakers',
    imageUrl: new URL('./assets/images/sneakers.png', import.meta.url),
    id: 3,
    linkUrl: 'shop/sneakers',
  },
  {
    title: 'womens',
    imageUrl: new URL('./assets/images/womens.png', import.meta.url),
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens',
  },
  {
    title: 'mens',
    imageUrl: new URL('./assets/images/men.png', import.meta.url),
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens',
  },
];

export default DIRECTORY_ITEMS;
