import React from 'react';

import { InputProps } from '@/types';

import * as S from './styles';

export function Input({ ...rest }: InputProps) {
  return <S.InputField {...rest} />;
}
