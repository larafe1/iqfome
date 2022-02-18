import { View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { InputFormWrapperProps } from '@/types';

export const Wrapper = styled(View)<InputFormWrapperProps>`
  flex-direction: row;
  align-items: center;

  border: ${({ hasError, theme }) =>
    hasError
      ? `1px solid ${theme.colors.error}`
      : `1px solid ${theme.colors.border}`};
  border-radius: 5px;
`;

export const VisibilityButton = styled.TouchableWithoutFeedback``;

export const Icon = styled(Ionicons)`
  padding: ${RFValue(11)}px;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.titleLight};
  background-color: ${({ theme }) => theme.colors.shapeDark};
`;

export const ErrorText = styled.Text`
  margin: 0 5px;
  margin-top: 8px;

  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.error};
`;
