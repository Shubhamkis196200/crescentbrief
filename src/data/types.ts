export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: Category;
  type: 'news' | 'analysis' | 'opinion';
  author: Author;
  date: string;
  readTime: number;
  image: string;
  imageCaption: string;
  excerpt: string;
  content: string;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
}

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export type Category = 'markets' | 'economy' | 'startups' | 'banking' | 'real-estate' | 'crypto' | 'leadership';

export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
  color: string;
}

export interface MarketIndex {
  name: string;
  value: string;
  change: string;
  changePercent: string;
  up: boolean;
}
