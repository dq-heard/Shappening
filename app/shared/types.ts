// Shared types
interface ImageAsset {
  asset: {
    _ref: string;
  };
}

interface BaseProduct {
  _id: string;
  name: string;
  price: number;
  quantity?: number;
}

// Product-specific types
interface ProductSlug {
  current: string;
}

interface ProductImages {
  _type: string;
  _key: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface Product extends BaseProduct {
  slug: ProductSlug;
  images: ProductImages[];
  details: string;
  category: string;
  new?: boolean | null;
  best_seller?: boolean | null;
}

export interface GiftCard {
  _id: string;
  _type: "giftCard";
  title: string;
  amount: number;
  image: ImageAsset;
  message?: string;
}

export interface CartItem {
  _id: string;
  _type: "product" | "giftCard";
  name: string;
  price: number;
  quantity: number;
  images?: ImageAsset[] | ImageAsset | string;
}
