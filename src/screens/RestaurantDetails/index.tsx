import React from 'react';

import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { Loading, RestaurantDishCard } from '@/components';
import { useRestaurants } from '@/hooks';
import { Icons } from '@/utils';

import * as S from './styles';

export function RestaurantDetails() {
  const { isLoading, restaurant } = useRestaurants();

  const handleGoBack = () => {
    goBack();
  };

  const { goBack } = useNavigation();

  return (
    <>
      <StatusBar style="light" />
      {isLoading ? (
        <Loading />
      ) : (
        <S.Wrapper>
          <S.Header>
            <S.BackgroundWrapper
              source={{ uri: restaurant.background_url }}
              resizeMode="cover"
            >
              <S.GoBackButton onPress={handleGoBack}>
                <S.GoBackIcon name={Icons.BACK} />
              </S.GoBackButton>
            </S.BackgroundWrapper>
          </S.Header>

          <S.Body>
            <S.TopSectionWrapper>
              <S.Image source={{ uri: restaurant.logo_url }} />
              <S.AdditionalInfoWrapper>
                <S.RatingWrapper>
                  <S.RatingIcon name={Icons.STAR} />
                  <S.Rating>{restaurant.rating}</S.Rating>
                </S.RatingWrapper>
                <S.StartingPriceWrapper>
                  <S.StartingPriceIcon name={Icons.MONEY} />
                  <S.StartingPrice>
                    R$ {restaurant.starting_price}
                  </S.StartingPrice>
                </S.StartingPriceWrapper>
                <S.DeliveryTimeWrapper>
                  <S.DeliveryTimeIcon name={Icons.CLOCK} />
                  <S.DeliveryTime>{restaurant.delivery_time}</S.DeliveryTime>
                </S.DeliveryTimeWrapper>
              </S.AdditionalInfoWrapper>
            </S.TopSectionWrapper>

            <S.DetailsWrapper>
              <S.Name>{restaurant.name}</S.Name>
              <S.RestaurantInfo>{restaurant.address}</S.RestaurantInfo>
              <S.RestaurantInfo>{restaurant.location}</S.RestaurantInfo>
              <S.RestaurantInfo>Telefone: {restaurant.phone}</S.RestaurantInfo>
            </S.DetailsWrapper>

            <S.MenuWrapper>
              <FlatList
                data={restaurant.dishes}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                  <RestaurantDishCard
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    imageUrl={item.image_url}
                  />
                )}
                showsVerticalScrollIndicator={false}
              />
            </S.MenuWrapper>
          </S.Body>
        </S.Wrapper>
      )}
    </>
  );
}
