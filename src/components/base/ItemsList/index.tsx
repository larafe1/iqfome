import React from 'react';

import { FlatList } from 'react-native';

import { ItemCard } from '@/components/base/ItemCard';
import { ItemsListProps } from '@/types';

export function ItemsList({ data, isARestaurant }: ItemsListProps) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => (isARestaurant ? item.id : item.name)}
      renderItem={({ item }) => (
        <ItemCard
          type={isARestaurant ? 'restaurants' : 'dishes'}
          title={item.name}
          firstSubtitle={isARestaurant ? item.rating : item.description}
          secondSubtitle={isARestaurant && item.delivery_time}
          imageUrl={item.image_url}
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
