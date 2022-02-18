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

  border: ${({ outlined, theme }) =>
    outlined ? `1px solid ${theme.colors.border}` : 'none'};

  ${({ leftCornerRounded }) =>
    leftCornerRounded
      ? css`
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        `
      : css`
          border-radius: 0;
        `}

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 5px;
    `}
`;
