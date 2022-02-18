import { Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { SectionTitleProps } from '@/types';

export const Loading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const Header = styled.View`
  width: 100%;
  height: 20%;

  margin-bottom: 24px;
`;

export const UserWrapper = styled.View`
  width: 100%;

  margin-top: 60px;
  padding: 0 16px;

  flex-direction: row;
  justify-content: space-between;
`;

export const Greetings = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;

export const SignOutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const SignOutIcon = styled(Ionicons)`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
`;

export const SignOutText = styled.Text`
  margin-left: 4px;

  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
`;

export const QuestionTitle = styled.Text`
  margin: 14px 16px;

  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.titleLight};
`;

export const SearchWrapper = styled.View`
  margin: 20px 16px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SearchButton = styled.TouchableOpacity``;

export const SearchIcon = styled(Ionicons)`
  font-size: ${RFValue(15)}px;

  padding: ${RFValue(13)}px ${RFValue(16)}px;

  color: ${({ theme }) => theme.colors.titleLight};
  background-color: ${({ theme }) => theme.colors.shapeDark};
`;

export const Body = styled.View`
  width: 100%;

  margin-top: 64px;
`;

export const BodyTitleWrapper = styled.View`
  width: 100%;

  padding: 0 24px;

  flex-direction: row;
`;

export const SectionButton = styled.TouchableOpacity``;

export const RestaurantsTitleWrapper = styled.View``;

export const DishesTitleWrapper = styled.View`
  margin-left: 64px;
`;

export const SectionTitle = styled(Text)<SectionTitleProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.border};
`;

export const BodyContentWrapper = styled.View`
  width: 100%;

  justify-content: center;
  align-items: center;

  margin-top: 24px;
`;
