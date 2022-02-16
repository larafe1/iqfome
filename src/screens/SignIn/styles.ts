import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: 55%;
`;

export const BackgroundWrapper = styled.ImageBackground`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Greetings = styled.Text`
  margin-top: 64px;

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`;

export const TitleWrapper = styled.View`
  width: 100%;

  align-items: center;

  margin-bottom: 64px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(42)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
`;

export const Underline = styled.View`
  width: 35%;
  height: 3px;

  margin-top: 20px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Subtitle = styled.Text`
  margin-top: 20px;

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`;

export const SignInTitle = styled.Text`
  margin-bottom: 20px;

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`;

export const Footer = styled.View`
  width: 100%;
  height: ${RFPercentage(45)}px;

  justify-content: center;

  margin-top: 16px;
  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const InputWrapper = styled.View`
  margin-bottom: 12px;
`;

export const InputLabel = styled.Text`
  margin-bottom: 8px;

  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;

export const SignUpButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const SignUpText = styled.Text`
  text-align: center;

  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.titleLight};
`;
