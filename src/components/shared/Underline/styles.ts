import { View } from 'react-native';

import styled from 'styled-components/native';

import { UnderlineProps } from '@/types';

export const Underline = styled(View)<UnderlineProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  margin-top: ${({ marginTop }) => marginTop};

  background-color: ${({ theme, color }) => theme.colors[color]};
`;
