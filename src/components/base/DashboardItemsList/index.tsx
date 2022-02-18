import React from 'react';

import { FlatList } from 'react-native';

import {
  useNavigation,
  NavigationProp,
  ParamListBase
} from '@react-navigation/native';

import { DashboardItemCard } from '@/components/base/DashboardItemCard';
import { useRestaurants } from '@/hooks';
import { DashboardItemsListProps } from '@/types';

export function DashboardItemsList({
  data,
  isARestaurant
}: DashboardItemsListProps) {
  const { getRestaurantById } = useRestaurants();

  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  const handleNavigateToRestaurantDetails = async (id: string) => {
    await getRestaurantById(id);
    navigate('RestaurantDetails', { id });
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => (isARestaurant ? item.id : item.name)}
      renderItem={({ item }) => (
        <DashboardItemCard
          type={isARestaurant ? 'restaurants' : 'dishes'}
          title={item.name}
          firstSubtitle={
            isARestaurant ? item.rating : item.description.slice(0, 55) + '...'
          }
          secondSubtitle={isARestaurant && item.delivery_time}
          imageUrl={isARestaurant ? item.logo_url : item.image_url}
          onPress={() =>
            handleNavigateToRestaurantDetails(
              isARestaurant ? item.id : item.restaurant_id
            )
          }
        />
      )}
      extraData={isARestaurant}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 350
      }}
    />
  );
}
