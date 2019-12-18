import styled from 'styled-components/native';

import {colors, metrics} from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.headerColor};
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.View`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  padding: ${metrics.basePadding}px;
  margin: ${metrics.baseMargin}px ${metrics.baseMargin}px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 150;
  height: 150;
  border-radius: 50px;
`;

export const Input = styled.TextInput`
  padding: ${metrics.basePadding / 2}px;
  width: 300;
  background-color: ${colors.white};
  font-size: 16;
  font-weight: bold;
  border-radius: ${metrics.baseRadius}px;
  height: 40;
  border-color: ${colors.regular};
  border-width: 1;
  margin: ${metrics.baseMargin / 2}px ${metrics.baseMargin}px;
  color: ${colors.black};
`;

export const Button = styled.TouchableOpacity`
  width: 300;
  height: 42;
  background: ${colors.black};
  margin-top: ${metrics.baseMargin / 2}px;
  border-radius: ${metrics.baseRadius}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 16;
  color: ${colors.white};
  font-weight: bold;
`;

export const SignUp = styled.TouchableHighlight`
  padding: ${metrics.basePadding / 2}px;
  margin-top: ${metrics.baseMargin}px;
`;

export const SignUpText = styled.Text`
  color: ${colors.regular};
  font-weight: bold;
  font-size: 16;
  text-align: center;
`;
