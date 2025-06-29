export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    color: string;
    emotion: string;
    value: number;
  }[];
}

export interface QuizResult {
  dominantColor: string;
  emotion: string;
  foodSuggestions: FoodSuggestion[];
  drinkSuggestions: DrinkSuggestion[];
  styleSuggestions: StyleSuggestion[];
  description: string;
}

export interface FoodSuggestion {
  name: string;
  description: string;
  recipe: string[];
  ingredients: string[];
  nearbyRestaurants: RestaurantInfo[];
  image: string;
}

export interface DrinkSuggestion {
  name: string;
  description: string;
  recipe: string[];
  ingredients: string[];
  nearbyCafes: CafeInfo[];
  image: string;
}

export interface StyleSuggestion {
  name: string;
  description: string;
  items: string[];
  nearbyStores: StoreInfo[];
  image: string;
}

export interface RestaurantInfo {
  name: string;
  address: string;
  rating: number;
  priceRange: string;
  distance: string;
}

export interface CafeInfo {
  name: string;
  address: string;
  rating: number;
  priceRange: string;
  distance: string;
}

export interface StoreInfo {
  name: string;
  address: string;
  rating: number;
  priceRange: string;
  distance: string;
}

export interface FoodPost {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  authorAvatar: string;
  ingredients: string[];
  recipe: string[];
  likes: number;
  comments: Comment[];
  tags: string[];
  createdAt: string;
}

export interface Comment {
  id: number;
  author: string;
  authorAvatar: string;
  content: string;
  likes: number;
  replies: Reply[];
  createdAt: string;
}

export interface Reply {
  id: number;
  author: string;
  authorAvatar: string;
  content: string;
  likes: number;
  createdAt: string;
}

export interface TravelLocation {
  id: number;
  name: string;
  address: string;
  type: 'restaurant' | 'cafe' | 'street_food' | 'dessert';
  rating: number;
  image: string;
  description: string;
  coordinates: [number, number];
  priceRange: string;
  specialties: string[];
  reviews: Review[];
  openHours: string;
  phone: string;
  features: string[];
}

export interface Review {
  id: number;
  author: string;
  authorAvatar: string;
  rating: number;
  content: string;
  images: string[];
  likes: number;
  createdAt: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  favoriteColors: string[];
  joinedAt: string;
}