import React, { createContext, useState, useContext, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosResponse } from 'axios';

import config from '@/config';
import { api } from '@/services';
import {
  AuthContextProps,
  ProviderProps,
  User,
  SignInPayload,
  SignUpPayload,
  SignInAuthResponse,
  SignUpAuthResponse
} from '@/types';

const AuthContext = createContext({} as AuthContextProps);

function AuthProvider({ children }: ProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({} as User);

  const signIn = async (payload: SignInPayload) => {
    try {
      setIsLoading(true);
      const { data }: AxiosResponse<SignInAuthResponse> = await api.post(
        '/sign-in',
        payload
      );
      const { token, user } = data;
      setUser(user);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      await AsyncStorage.setItem(config.userStorageKey, JSON.stringify(user));
      await AsyncStorage.setItem(config.userTokenStorageKey, token);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (payload: SignUpPayload) => {
    try {
      setIsLoading(true);
      const { data: createdUserData }: AxiosResponse<SignUpAuthResponse> =
        await api.post('/sign-up', payload);
      await signIn({
        email: createdUserData.email,
        password: payload.password
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setUser({} as User);
    await AsyncStorage.removeItem(config.userStorageKey);
    await AsyncStorage.removeItem(config.userTokenStorageKey);
  };

  const loadStorageData = async () => {
    const token = await AsyncStorage.getItem(config.userTokenStorageKey);
    const rawUserData = await AsyncStorage.getItem(config.userStorageKey);

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    if (rawUserData) {
      const parsedUserData: User = JSON.parse(rawUserData);
      setUser(parsedUserData);
    }
  };

  useEffect(() => {
    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoading, user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
