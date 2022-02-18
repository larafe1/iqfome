import React, { createContext, useState, useContext } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosResponse } from 'axios';

import config from '@/config';
import { api } from '@/services';
import {
  RestaurantsContextProps,
  ProviderProps,
  RestaurantEssentials,
  Restaurant,
  Dish
} from '@/types';

const RestaurantsContext = createContext({} as RestaurantsContextProps);

function RestaurantsProvider({ children }: ProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([] as RestaurantEssentials[]);
  const [restaurant, setRestaurant] = useState({} as Restaurant);
  const [dishes, setDishes] = useState([] as Dish[]);

  const getRestaurants = async () => {
    try {
      setIsLoading(true);
      const { data }: AxiosResponse<RestaurantEssentials[]> = await api.get(
        '/restaurants'
      );
      setRestaurants(data);
      await AsyncStorage.setItem(
        config.restaurantsStorageKey,
        JSON.stringify(data)
      );
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getRestaurantById = async (id: string) => {
    try {
      setIsLoading(true);
      const { data }: AxiosResponse<Restaurant> = await api.get(
        `/restaurants/${id}`
      );
      setRestaurant(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getDishes = async () => {
    try {
      setIsLoading(true);
      const { data }: AxiosResponse<Dish[]> = await api.get('/dishes');
      setDishes(data);
      await AsyncStorage.setItem(config.dishesStorageKey, JSON.stringify(data));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RestaurantsContext.Provider
      value={{
        isLoading,
        restaurants,
        restaurant,
        dishes,
        getRestaurants,
        getRestaurantById,
        getDishes
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
}

function useRestaurants() {
  const context = useContext(RestaurantsContext);

  return context;
}

export { RestaurantsProvider, useRestaurants };
