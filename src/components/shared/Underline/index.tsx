import React from 'react';

import { UnderlineProps } from '@/types';

import * as S from './styles';

export function Underline({ width, height, marginTop, color }: UnderlineProps) {
  return (
    <S.Underline
      width={width}
      height={height}
      marginTop={marginTop}
      color={color}
    />
  );
}
