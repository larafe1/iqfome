import React from 'react';

import { Controller } from 'react-hook-form';

import { Input } from '@/components/shared';
import { InputFormProps } from '@/types';

import * as S from './styles';

export function InputForm({
  control,
  name,
  isPasswordField,
  autoCapitalize,
  error,
  ...rest
}: InputFormProps) {
  return (
    <S.Wrapper>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Input
            width="100%"
            paddingYX={['12px', '16px']}
            value={value}
            onChangeText={onChange}
            secureTextEntry={isPasswordField}
            autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
            hasError={!!error}
            outlined
            rounded
            {...rest}
          />
        )}
      />
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Wrapper>
  );
}
