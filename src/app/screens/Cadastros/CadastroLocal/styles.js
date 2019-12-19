import styled from 'styled-components/native';

import {colors, metrics} from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.headerColor};
  align-items: stretch;
  justify-content: center;
  padding: ${metrics.basePadding + 10}px;
`;

export const Menu = styled.ScrollView`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  padding-left: ${metrics.basePadding / 2}px;
  padding-right: ${metrics.basePadding / 2}px;
  margin-top: ${metrics.baseMargin}px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.regular,
})`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  padding: 0 ${metrics.basePadding}px;
  height: 40px;
  font-size: 16px;
  color: ${colors.darker};
  border-color: ${colors.regular};
  border-width: 1;
  margin: ${metrics.baseMargin / 2}px ${metrics.baseMargin}px;
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.black};
  border-radius: ${metrics.baseRadius}px;
  height: 40px;
  width: 330;
  align-items: center;
  justify-content: center;
  margin-top: ${metrics.baseMargin * 2}px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 16;
  text-align: center;
`;

export const Opcoes = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const Titulo = styled.Text`
  font-size: 28;
  color: ${colors.white};
  font-weight: bold;
  text-align: center;
`;

export const Error = styled.Text`
  color: ${colors.danger};
  margin-top: ${metrics.baseMargin + 10}px;
  margin-bottom: ${metrics.baseMargin + 10}px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const Success = styled.Text`
  color: ${colors.success};
  margin-top: ${metrics.baseMargin + 10}px;
  margin-bottom: ${metrics.baseMargin + 10}px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: colors.white,
})``;
