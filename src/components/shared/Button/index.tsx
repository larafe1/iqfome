import React from 'react';

import { ButtonProps } from '@/types';

import * as S from './styles';

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <S.Wrapper {...rest}>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
}
