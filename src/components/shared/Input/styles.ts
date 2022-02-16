import { TextInput } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { InputProps } from '@/types';

export const InputField = styled(TextInput)<InputProps>`
  width: 100%;

  margin-bottom: 16px;

  padding: 12px 16px;

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.titleLight};
  background-color: ${({ theme }) => theme.colors.shape};

  border: ${({ theme, hasError }) =>
    hasError
      ? `1px solid ${theme.colors.attention}`
      : `1px solid ${theme.colors.shapeDark}`};
  border-radius: 5px;
`;
