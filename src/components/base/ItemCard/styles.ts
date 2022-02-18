import { Ionicons, Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 90%;
  height: 80px;

  flex-direction: row;
  align-items: center;

  margin: 8px 24px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 3px;

  background-color: ${({ theme }) => theme.colors.shapeDark};
`;

export const ImageWrapper = styled.View`
  width: 20%;
  height: 80%;

  justify-content: center;
`;

export const Image = styled.Image`
  width: 80%;
  height: 90%;

  margin-left: 12px;

  border-radius: 50px;
`;

export const ContentWrapper = styled.View`
  width: 75%;

  margin-left: 14px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;

export const AdditionalInformationWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 8px;
`;

export const AdditionalInformationSection = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const IonicIcon = styled(Ionicons)`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.attention};
`;

export const SectionTitle = styled.Text`
  margin: 0 8px;

  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.titleLight};
`;

export const FeatherIcon = styled(Feather)`
  margin-left: 16px;

  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.titleLight};
`;
