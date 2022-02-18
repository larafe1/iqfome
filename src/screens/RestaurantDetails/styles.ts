import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const Header = styled.View`
  width: 100%;
  height: 20%;
`;

export const BackgroundWrapper = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const GoBackButton = styled.TouchableOpacity`
  width: 11%;

  margin-left: 16px;
`;

export const GoBackIcon = styled(Ionicons)`
  font-size: ${RFValue(22)}px;

  padding: 8px;

  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.shapeDark};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Body = styled.View`
  width: 100%;
  height: 50%;
`;

export const TopSectionWrapper = styled.View`
  width: 100%;
  height: 33%;

  flex-direction: row;
  justify-content: space-between;

  padding: 24px 16px;
`;

export const Image = styled.Image`
  width: 27%;
  height: 100%;

  border-radius: 50px;
`;

export const AdditionalInfoWrapper = styled.View`
  width: 35%;
  height: 100%;

  justify-content: center;
  align-items: flex-end;
`;

export const RatingWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const RatingIcon = styled(Ionicons)`
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.attention};
`;

export const Rating = styled.Text`
  margin-left: 8px;

  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;

export const StartingPriceWrapper = styled.View`
  margin-top: 16px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StartingPriceIcon = styled(FontAwesome)`
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.success};
`;

export const StartingPrice = styled.Text`
  margin-left: 8px;

  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;

export const DeliveryTimeWrapper = styled.View`
  margin-top: 16px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DeliveryTimeIcon = styled(Feather)`
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.titleLight};
`;

export const DeliveryTime = styled.Text`
  margin-left: 8px;

  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;

export const DetailsWrapper = styled.View`
  margin: 0 16px;
`;

export const Name = styled.Text`
  margin-top: 18px;

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;

export const RestaurantInfo = styled.Text`
  margin-top: 16px;

  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.titleLight};
`;

export const MenuWrapper = styled.View`
  width: 100%;
  height: 70%;

  margin-top: 32px;

  padding: 0 16px;
`;
