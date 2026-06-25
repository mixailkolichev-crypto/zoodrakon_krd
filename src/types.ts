export type TabType = 'overview' | 'catalog' | 'news' | 'photos' | 'reviews' | 'features';

export interface Product {
  id: string;
  title: string;
  category: 'reptiles' | 'aquatics' | 'terrariums' | 'equipment' | 'services';
  price: number;
  oldPrice?: number;
  description: string;
  specs?: string[];
  imageUrl: string;
  badge?: string;
  inStock: boolean;
  copyNotes?: string;
}

export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  source: 'Яндекс Карты';
  avatar: string;
  comment: string;
  highlight: string;
  tag: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  imageUrl: string;
}

export interface PhotoItem {
  id: string;
  url: string;
  title: string;
  category: 'animals' | 'terrariums' | 'hotel' | 'store';
  likes: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface StoreContacts {
  name: string;
  address: string;
  addressNote: string;
  phone: string;
  rating: number;
  ratingCount: number;
  reviewsCount: number;
  workingHours: string;
}
