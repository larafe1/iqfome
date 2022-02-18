import { FontAwesome } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  height: 110px;

  flex-direction: row;
  align-items: center;

  border-radius: 5px;

  margin-bottom: 8px;

  background-color: ${({ theme }) => theme.colors.shapeDark};
`;

export const Image = styled.Image`
  width: 20%;
  height: 80%;

  margin-left: 8px;

  border-radius: 5px;
`;

export const DishInfoWrapper = styled.View`
  height: 100%;

  justify-content: space-evenly;

  margin-left: 14px;
`;

export const DishName = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;

export const DishDescription = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.titleLight};
`;

export const DishPriceWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DishPriceIcon = styled(FontAwesome)`
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.success};
`;

export const DishPrice = styled.Text`
  margin-left: 8px;

  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;
