import { ReactNode } from 'react';

import {
  TouchableOpacityProps,
  TextInputProps,
  FlatListProps
} from 'react-native';

import { Control } from 'react-hook-form';
import { DefaultTheme } from 'styled-components';

export type SignInFormData = {
  email: string;
  password: string;
};

export interface SignUpFormData extends SignInFormData {
  name: string;
  confirmPassword: string;
}

export type SignInPayload = SignInFormData;

export type SignUpPayload = Omit<SignUpFormData, 'confirmPassword'>;

export type User = {
  id: string;
  name: string;
};

export type AuthContextProps = {
  isLoading: boolean;
  user: User;
  signIn: (payload: SignInPayload) => Promise<void>;
  signUp: (payload: SignUpPayload) => Promise<void>;
  signOut: () => Promise<void>;
};

export type ProviderProps = {
  children: ReactNode;
};

export type SignInAuthResponse = {
  token: string;
  user: User;
};

export type SignUpAuthResponse = {
  id: string;
  name: string;
  email: string;
  created_at: string;
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
  background_url: string;
  delivery_time: string;
  logo_url: string;
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
  leftCornerRounded?: boolean;
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

export type InputFormWrapperProps = {
  hasError: boolean;
};

export interface InputFormProps extends TextInputProps {
  control: Control;
  name: string;
  isPasswordField?: boolean;
  autoCapitalize?: AutoCapitalizeOptions;
  error: string;
}

export type DashboardItemCardProps = {
  type: Sections;
  title: string;
  firstSubtitle: string | number;
  secondSubtitle?: string | number;
  imageUrl: string;
  onPress: () => void;
};

export interface DashboardItemsListProps extends FlatListProps {
  data: any[];
  isARestaurant?: boolean;
}

export type RestaurantDishCardProps = {
  description: string;
  imageUrl: string;
  name: string;
  price: number;
};
