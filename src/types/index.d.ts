import { ReactNode } from 'react';

import {
  TouchableOpacityProps,
  TextInputProps,
  FlatListProps
} from 'react-native';

import { Control } from 'react-hook-form';
import { DefaultTheme } from 'styled-components';

export type FormData = {
  email: string;
  password: string;
};

export type SignInPayload = FormData;

export type User = {
  id: string;
  name: string;
};

export type AuthContextProps = {
  isLoading: boolean;
  user: User;
  signIn: (payload: SignInPayload) => Promise<void>;
  signOut: () => Promise<void>;
};

export type ProviderProps = {
  children: ReactNode;
};

export type AuthResponse = {
  token: string;
  user: User;
};

export type Dish = {
  description: string;
  image_url: string;
  name: string;
  price: number;
  restaurant_id: string;
};

export type RestaurantEssentials = {
  id: string;
  delivery_time: string;
  image_url: string;
  name: string;
  rating: number;
};

export interface Restaurant extends RestaurantEssentials {
  address: string;
  description: string;
  location: string;
  phone: string;
  starting_price: number;
  dishes: Dish[];
}

export type RestaurantsContextProps = {
  isLoading: boolean;
  restaurants: RestaurantEssentials[];
  restaurant: Restaurant;
  dishes: Dish[];
  getRestaurants: () => Promise<void>;
  getRestaurantById: (id: string) => Promise<void>;
  getDishes: () => Promise<void>;
};

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export interface InputProps extends TextInputProps {
  width: string;
  paddingYX: [string, string];
  outlined?: boolean;
  rounded?: boolean;
  hasError?: boolean;
}

export type Sections = 'restaurants' | 'dishes';

export type SearchResults = RestaurantEssentials[] | Dish[];

export type SectionTitleProps = {
  isActive: boolean;
};

type ThemeColors = DefaultTheme['colors'];

export type UnderlineProps = {
  width: string;
  height: string;
  marginTop: string;
  color: keyof ThemeColors;
};

type AutoCapitalizeOptions = 'none' | 'sentences' | 'words' | 'characters';

export interface InputFormProps extends TextInputProps {
  control: Control;
  name: string;
  isPasswordField?: boolean;
  autoCapitalize?: AutoCapitalizeOptions;
  error: string;
}

export type ItemCardProps = {
  type: Sections;
  title: string;
  firstSubtitle: string | number;
  secondSubtitle?: string | number;
  imageUrl: string;
};

export interface ItemsListProps extends FlatListProps {
  data: any[];
  isARestaurant?: boolean;
}
