import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  margin-top: 64px;
`;

export const GoBackButton = styled.TouchableOpacity`
  margin-left: 16px;
`;

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(22)}px;

  color: ${({ theme }) => theme.colors.titleLight};
`;

export const TitleWrapper = styled.View`
  width: 100%;

  justify-content: center;
  align-items: center;

  position: absolute;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
`;

export const FormWrapper = styled.View`
  padding: 0 24px;

  margin-top: 64px;
`;

export const InputWrapper = styled.View`
  margin-bottom: 48px;
`;

export const InputLabel = styled.Text`
  margin-bottom: 8px;

  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;
