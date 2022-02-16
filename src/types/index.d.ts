import { ReactNode } from 'react';

import { TouchableOpacityProps, TextInputProps } from 'react-native';

import { Control } from 'react-hook-form';

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

export type AuthProviderProps = {
  children: ReactNode;
};

export type AuthResponse = {
  token: string;
  user: User;
};

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export interface InputProps extends TextInputProps {
  hasError: boolean;
}

export type AutoCapitalizeOptions =
  | 'none'
  | 'sentences'
  | 'words'
  | 'characters';

export interface InputFormProps extends TextInputProps {
  control: Control;
  name: string;
  isPasswordField?: boolean;
  autoCapitalize?: AutoCapitalizeOptions;
  error: string;
}
