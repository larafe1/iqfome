import { TextInput } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

import { InputProps } from '@/types';

export const InputField = styled(TextInput)<InputProps>`
  width: ${({ width }) => width};

  padding: ${({ paddingYX }) => `${paddingYX[0]} ${paddingYX[1]}`};

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.titleLight};
  background-color: ${({ theme }) => theme.colors.shapeDark};

  ${({ outlined, hasError }) =>
    outlined
      ? css`
          border: ${({ theme }) =>
            hasError
              ? `1px solid ${theme.colors.attention}`
              : `1px solid ${theme.colors.border}`};
        `
      : css`
          border: none;
        `};

  border-radius: ${({ rounded }) => (rounded ? '5px' : '0')};
`;
