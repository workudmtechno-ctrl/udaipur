export interface Profile {
  id: string;
  name: string;
  age: number;
  image: string;
  location?: string;
  category?: string;
  height?: string;
  languages?: string[];
  serviceType?: string;
  rating?: number;
  reviewsCount?: number;
  availableNow?: boolean;
  bio?: string;
}

export interface Review {
  author: string;
  role: string;
  text: string;
  rating: number;
}
