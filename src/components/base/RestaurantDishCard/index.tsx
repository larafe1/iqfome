import React from 'react';

import { RestaurantDishCardProps } from '@/types';
import { Icons } from '@/utils';

import * as S from './styles';

export function RestaurantDishCard({
  description,
  imageUrl,
  name,
  price
}: RestaurantDishCardProps) {
  return (
    <S.Wrapper>
      <S.Image source={{ uri: imageUrl }} />
      <S.DishInfoWrapper>
        <S.DishName>{name}</S.DishName>
        <S.DishDescription>{description.slice(0, 38)}...</S.DishDescription>
        <S.DishPriceWrapper>
          <S.DishPriceIcon name={Icons.MONEY} />
          <S.DishPrice>R$ {price}</S.DishPrice>
        </S.DishPriceWrapper>
      </S.DishInfoWrapper>
    </S.Wrapper>
  );
}
