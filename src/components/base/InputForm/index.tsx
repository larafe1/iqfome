import React, { useState } from 'react';

import { Controller } from 'react-hook-form';

import { Input } from '@/components/shared';
import { InputFormProps } from '@/types';
import { Icons } from '@/utils';

import * as S from './styles';

export function InputForm({
  control,
  name,
  isPasswordField,
  autoCapitalize,
  error,
  ...rest
}: InputFormProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <S.Wrapper hasError={!!error}>
            <Input
              width={isPasswordField ? '86%' : '100%'}
              paddingYX={['12px', '16px']}
              value={value}
              onChangeText={onChange}
              secureTextEntry={isPasswordField && !isPasswordVisible}
              autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
              leftCornerRounded
              {...rest}
            />
            {isPasswordField && (
              <S.VisibilityButton onPress={handlePasswordVisibility}>
                <S.Icon name={isPasswordVisible ? Icons.EYE : Icons.EYE_OFF} />
              </S.VisibilityButton>
            )}
          </S.Wrapper>
        )}
      />
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </>
  );
}
